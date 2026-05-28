// ========================================
// StudyVault - dashboard.js
// index.html logic
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initResetProgressButton();
    renderGlobalProgress();
    renderLevelCards();
    renderCurrentlyStudying();
    renderDailyStudyQueue();
    renderDueSection();
    renderRecentUnits();
});

// --- GLOBAL PROGRESS ---
function renderGlobalProgress() {
    const container = document.getElementById('global-progress');
    if (!container) return;

    const progress = getGlobalProgress();
    container.innerHTML = renderProgressBar(progress.reviewed, progress.total);
}

// --- RESET PROGRESS ---
function initResetProgressButton() {
    const button = document.getElementById('resetProgressBtn');
    if (!button) return;

    button.addEventListener('click', function() {
        const confirmed = window.confirm(
            'Reset all study progress? This will remove reviewed units, confidence ratings, notes, and recent history.'
        );
        if (!confirmed) return;

        const secondConfirm = window.confirm('This cannot be undone. Continue?');
        if (!secondConfirm) return;

        const keysToRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key) continue;

            if (
                key.startsWith('reviewed_') ||
                key.startsWith('note_') ||
                key === 'recent_units'
            ) {
                keysToRemove.push(key);
            }
        }

        keysToRemove.forEach(function(key) {
            localStorage.removeItem(key);
        });

        window.location.reload();
    });
}

// --- LEVEL CARDS ---
function renderLevelCards() {
    const container = document.getElementById('level-cards-grid');
    if (!container) return;

    let html = '';

    academicData.levels.forEach(function(level) {
        const progress = getLevelProgress(level);
        const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;

        const isActive = level.id === '100L';
        const activeClass = isActive ? 'active' : 'inactive';

        html += '<a href="level.html?lid=' + level.id + '" class="level-card ' + activeClass + '">' +
            '<div class="level-card-header">' +
            '<div class="level-card-badge">' + level.label + '</div>' +
            '<div class="level-card-pct">' + pct + '%</div>' +
            '</div>' +
            '<div class="level-card-body">' +
            '<div class="level-card-stats">' +
            '<div class="level-card-stat">' +
            '<span class="stat-value">' + progress.total + '</span>' +
            '<span class="stat-label">Total Units</span>' +
            '</div>' +
            '<div class="level-card-stat">' +
            '<span class="stat-value">' + progress.reviewed + '</span>' +
            '<span class="stat-label">Reviewed</span>' +
            '</div>' +
            '</div>' +
            '<div class="level-card-progress">' +
            '<div class="progress-wrap">' +
            '<div class="progress-bar ' + (pct >= 80 ? 'green' : pct >= 40 ? 'amber' : 'grey') + '" style="width:' + pct + '%"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>';
    });

    container.innerHTML = html;
}

// --- CURRENTLY STUDYING ---
function renderCurrentlyStudying() {
    const container = document.getElementById('currently-studying');
    if (!container) return;

    const level = getLevelById('100L');
    if (!level) return;

    const semester = level.semesters.find(function(s) { return s.id === '100L_sem2'; });
    if (!semester) return;

    const progress = getSemesterProgress(semester);
    const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;

    container.innerHTML = '<div class="currently-studying-card">' +
        '<div class="currently-studying-badge"><i data-lucide="book-open" class="icon-xs"></i> Currently Studying</div>' +
        '<h3>' + level.label + ' · ' + semester.label + '</h3>' +
        '<p class="text-muted mb-2">' + semester.courses.length + ' courses · ' + progress.total + ' units</p>' +
        '<div class="progress-wrap">' +
        '<div class="progress-bar ' + (pct >= 80 ? 'green' : pct >= 40 ? 'amber' : 'grey') + '" style="width:' + pct + '%"></div>' +
        '</div>' +
        '<p class="progress-label">' + progress.reviewed + ' / ' + progress.total + ' units reviewed</p>' +
        '<a href="semester.html?sid=100L_sem2" class="btn btn-primary mt-2">View Courses <i data-lucide="arrow-right" class="icon-sm"></i></a>' +
        '</div>';

    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- DAILY STUDY QUEUE ---
function getCurrentSemesterUnitContexts() {
    const contexts = [];
    const level = getLevelById('100L');
    const semester = level ? level.semesters.find(function(s) { return s.id === '100L_sem2'; }) : null;
    let order = 0;

    if (!semester) {
        academicData.levels.forEach(function(lv) {
            lv.semesters.forEach(function(sem) {
                sem.courses.forEach(function(course) {
                    course.modules.forEach(function(module) {
                        module.units.forEach(function(unit) {
                            order += 1;
                            contexts.push({
                                id: unit.id,
                                title: unit.title,
                                courseCode: course.code,
                                moduleTitle: module.title,
                                order: order
                            });
                        });
                    });
                });
            });
        });
        return contexts;
    }

    semester.courses.forEach(function(course) {
        course.modules.forEach(function(module) {
            module.units.forEach(function(unit) {
                order += 1;
                contexts.push({
                    id: unit.id,
                    title: unit.title,
                    courseCode: course.code,
                    moduleTitle: module.title,
                    order: order
                });
            });
        });
    });

    return contexts;
}

function getConfidenceRank(confidence) {
    if (confidence === 'hard') return 0;
    if (confidence === 'medium') return 1;
    if (confidence === 'easy') return 2;
    return 3;
}

function getDaysSinceReview(lastReviewed) {
    if (!lastReviewed) return Number.POSITIVE_INFINITY;
    const timestamp = new Date(lastReviewed).getTime();
    if (Number.isNaN(timestamp)) return Number.POSITIVE_INFINITY;
    return Math.floor((Date.now() - timestamp) / 86400000);
}

function getDailyStudyQueue(limit) {
    const maxItems = typeof limit === 'number' ? limit : 10;
    const thresholds = { hard: 1, medium: 3, easy: 7, null: 7 };
    const contexts = getCurrentSemesterUnitContexts();
    const due = [];
    const weak = [];
    const fresh = [];

    contexts.forEach(function(ctx) {
        const data = getReviewData(ctx.id);

        if (!data || !data.reviewed) {
            fresh.push({
                id: ctx.id,
                title: ctx.title,
                courseCode: ctx.courseCode,
                moduleTitle: ctx.moduleTitle,
                queueType: 'new',
                order: ctx.order
            });
            return;
        }

        const confidence = data.confidence || null;
        const threshold = thresholds[confidence] || thresholds.null;
        const daysSince = getDaysSinceReview(data.lastReviewed);

        if (daysSince >= threshold) {
            due.push({
                id: ctx.id,
                title: ctx.title,
                courseCode: ctx.courseCode,
                moduleTitle: ctx.moduleTitle,
                queueType: 'due',
                confidence: confidence,
                daysSince: daysSince
            });
            return;
        }

        if (confidence === 'hard' || confidence === 'medium') {
            weak.push({
                id: ctx.id,
                title: ctx.title,
                courseCode: ctx.courseCode,
                moduleTitle: ctx.moduleTitle,
                queueType: 'weak',
                confidence: confidence,
                daysUntilDue: threshold - daysSince
            });
        }
    });

    due.sort(function(a, b) {
        const rankDiff = getConfidenceRank(a.confidence) - getConfidenceRank(b.confidence);
        if (rankDiff !== 0) return rankDiff;
        return b.daysSince - a.daysSince;
    });

    weak.sort(function(a, b) {
        const rankDiff = getConfidenceRank(a.confidence) - getConfidenceRank(b.confidence);
        if (rankDiff !== 0) return rankDiff;
        return a.daysUntilDue - b.daysUntilDue;
    });

    fresh.sort(function(a, b) {
        return a.order - b.order;
    });

    return due.concat(weak, fresh).slice(0, maxItems);
}

function renderDailyStudyQueue() {
    const container = document.getElementById('dailyQueue');
    if (!container) return;

    const queue = getDailyStudyQueue(10);

    if (queue.length === 0) {
        container.innerHTML = '<p class="queue-empty">Queue is empty. Start reviewing units to build your daily plan.</p>';
        return;
    }

    let html = '';

    queue.forEach(function(item) {
        let tag = 'New';
        let meta = 'Not reviewed yet';

        if (item.queueType === 'due') {
            tag = 'Due now';
            if (Number.isFinite(item.daysSince)) {
                meta = (item.confidence || 'no rating') + ' confidence - ' + item.daysSince + 'd since review';
            } else {
                meta = (item.confidence || 'no rating') + ' confidence - review date unavailable';
            }
        } else if (item.queueType === 'weak') {
            tag = 'Weak area';
            meta = (item.confidence || 'medium') + ' confidence - due in ' + item.daysUntilDue + 'd';
        }

        html += '<a href="unit.html?uid=' + item.id + '" class="queue-item queue-' + item.queueType + '">' +
            '<div class="queue-main">' +
            '<span class="queue-course">' + item.courseCode + '</span>' +
            '<span class="queue-title">' + item.title + '</span>' +
            '</div>' +
            '<span class="queue-tag">' + tag + '</span>' +
            '<span class="queue-meta">' + item.moduleTitle + ' - ' + meta + '</span>' +
            '</a>';
    });

    container.innerHTML = html;
}

// --- NEEDS REVISITING ---
function getDueUnits() {
    const now = Date.now();
    const dueUnits = [];
    const thresholds = { hard: 1, medium: 3, easy: 7, null: 7 };

    academicData.levels.forEach(function(level) {
        level.semesters.forEach(function(semester) {
            semester.courses.forEach(function(course) {
                course.modules.forEach(function(module) {
                    module.units.forEach(function(unit) {
                        const data = getReviewData(unit.id);
                        if (!data || !data.reviewed) return;

                        const reviewedAt = data.lastReviewed ? new Date(data.lastReviewed).getTime() : 0;
                        const safeReviewedAt = Number.isNaN(reviewedAt) ? 0 : reviewedAt;
                        const daysSince = Math.floor((now - safeReviewedAt) / 86400000);
                        const threshold = thresholds[data.confidence] || thresholds.null;

                        if (daysSince >= threshold) {
                            dueUnits.push({
                                id: unit.id,
                                title: unit.title,
                                courseCode: course.code,
                                confidence: data.confidence,
                                daysSince: daysSince
                            });
                        }
                    });
                });
            });
        });
    });

    return dueUnits.sort(function(a, b) {
        return b.daysSince - a.daysSince;
    });
}

function renderDueSection() {
    const container = document.getElementById('dueSection');
    if (!container) return;

    const dueUnits = getDueUnits();

    if (dueUnits.length === 0) {
        container.innerHTML = '<p class="due-empty">Nothing due today - you are caught up.</p>';
        return;
    }

    let html = '';
    dueUnits.slice(0, 8).forEach(function(unit) {
        const confidenceClass = unit.confidence || 'none';
        html += '<a href="unit.html?uid=' + unit.id + '" class="due-item due-' + confidenceClass + '">' +
            '<span class="due-course">' + unit.courseCode + '</span>' +
            '<span class="due-title">' + unit.title + '</span>' +
            '<span class="due-meta">' + unit.daysSince + 'd ago</span>' +
            '</a>';
    });

    container.innerHTML = html;
}

// --- RECENT UNITS ---
function renderRecentUnits() {
    const container = document.getElementById('recent-units-list');
    if (!container) return;

    const recentIds = getRecentUnits();

    if (recentIds.length === 0) {
        container.innerHTML = '<div class="empty-state">' +
            '<p class="text-muted">No recent units yet. Start exploring your courses!</p>' +
            '<a href="level.html?lid=100L" class="btn btn-primary mt-2">Browse 100 Level <i data-lucide="arrow-right" class="icon-sm"></i></a>' +
            '</div>';

        if (window.lucide) {
            lucide.createIcons();
        }
        return;
    }

    let html = '';

    recentIds.forEach(function(uid) {
        const context = getUnitById(uid);
        if (!context) return;

        const isRev = isReviewed(uid);
        const iconName = isRev ? 'check-circle' : 'circle';

        html += '<a href="unit.html?uid=' + uid + '" class="recent-unit-item">' +
            '<div class="recent-unit-icon"><i data-lucide="' + iconName + '" class="icon-md"></i></div>' +
            '<div class="recent-unit-content">' +
            '<div class="recent-unit-title">' + context.unit.title + '</div>' +
            '<div class="recent-unit-meta">' + context.course.code + ' > ' + context.module.title + '</div>' +
            '</div>' +
            '<div class="recent-unit-arrow"><i data-lucide="arrow-right" class="icon-sm"></i></div>' +
            '</a>';
    });

    container.innerHTML = html;

    if (window.lucide) {
        lucide.createIcons();
    }
}

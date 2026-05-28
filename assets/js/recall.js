// ========================================
// StudyVault - recall.js
// recall.html session logic
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const courseId = getParam('cid');
    const rawIdx = parseInt(getParam('idx'), 10);
    const idx = Number.isFinite(rawIdx) ? rawIdx : 0;

    if (!courseId) {
        window.location.href = 'index.html';
        return;
    }

    const units = getAllUnitsForCourse(courseId);
    if (units.length === 0) {
        window.location.href = 'course.html?cid=' + courseId;
        return;
    }

    const safeIdx = Math.min(Math.max(idx, 0), units.length - 1);
    if (safeIdx !== idx) {
        window.location.replace('recall.html?cid=' + courseId + '&idx=' + safeIdx);
        return;
    }

    initSession(courseId, safeIdx, units);
});

function getAllUnitsForCourse(cid) {
    const context = getCourseById(cid);
    if (!context || !context.course) return [];

    const units = [];
    context.course.modules.forEach(function(module) {
        module.units.forEach(function(unit) {
            units.push(unit);
        });
    });

    return units;
}

function initSession(courseId, idx, units) {
    const unit = units[idx];
    const total = units.length;

    const unitTitle = document.getElementById('unitTitle');
    const summaryPanel = document.getElementById('summaryPanel');
    const sessionProgress = document.getElementById('sessionProgress');
    const sessionCourseId = document.getElementById('sessionCourseId');
    const sessionBar = document.getElementById('sessionBar');
    const exitBtn = document.getElementById('exitBtn');
    const recallInput = document.getElementById('recallInput');
    const showSummaryBtn = document.getElementById('showSummaryBtn');
    const confPanel = document.getElementById('confPanel');
    const navPanel = document.getElementById('navPanel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const confButtons = confPanel ? Array.from(confPanel.querySelectorAll('.conf-btn')) : [];

    if (!unitTitle || !summaryPanel || !sessionProgress || !sessionCourseId || !sessionBar || !exitBtn ||
        !recallInput || !showSummaryBtn || !confPanel || !navPanel || !prevBtn || !nextBtn) {
        return;
    }

    addRecentUnit(unit.id);

    unitTitle.textContent = unit.title;
    summaryPanel.innerHTML = renderSummaryBlock(unit.summary);
    sessionProgress.textContent = (idx + 1) + ' / ' + total;
    sessionCourseId.textContent = courseId;
    sessionBar.style.width = ((idx + 1) / total) * 100 + '%';
    exitBtn.href = 'course.html?cid=' + courseId;
    document.title = 'Recall: ' + unit.title;

    recallInput.focus();

    showSummaryBtn.addEventListener('click', function() {
        summaryPanel.classList.remove('hidden');
        confPanel.classList.remove('hidden');
        showSummaryBtn.classList.add('hidden');
        summaryPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    confButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            saveReview(unit.id, btn.dataset.conf);

            confButtons.forEach(function(button) {
                button.disabled = true;
                button.classList.remove('conf-selected');
            });

            btn.classList.add('conf-selected');
            navPanel.classList.remove('hidden');
        });
    });

    if (idx === 0) {
        prevBtn.disabled = true;
    }

    if (idx >= total - 1) {
        nextBtn.textContent = 'Finish Session';
    }

    prevBtn.addEventListener('click', function() {
        window.location.href = 'recall.html?cid=' + courseId + '&idx=' + (idx - 1);
    });

    nextBtn.addEventListener('click', function() {
        if (idx >= total - 1) {
            window.location.href = 'course.html?cid=' + courseId;
            return;
        }
        window.location.href = 'recall.html?cid=' + courseId + '&idx=' + (idx + 1);
    });
}

function renderSummaryBlock(summary) {
    if (summary && summary.trim()) {
        return '<h3>Summary</h3><div class="recall-summary-body">' + summary + '</div>';
    }
    return '<h3>Summary</h3><p class="text-muted">No summary yet for this unit.</p>';
}

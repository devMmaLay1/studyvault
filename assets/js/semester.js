// ══════════════════════════════════════
// StudyVault — semester.js
// semester.html logic
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const sid = getParam('sid');
    
    if (!sid) {
        window.location.href = 'index.html';
        return;
    }
    
    const context = getSemesterById(sid);
    
    if (!context) {
        window.location.href = 'index.html';
        return;
    }
    
    renderBreadcrumbNav(context);
    renderSemesterHeader(context);
    renderCourseCards(context.semester);
});

// ─── BREADCRUMB ───
function renderBreadcrumbNav(context) {
    const container = document.getElementById('breadcrumb');
    if (!container) return;
    
    const items = [
        { label: 'Home', url: 'index.html' },
        { label: context.level.label, url: 'level.html?lid=' + context.level.id },
        { label: context.semester.label, url: null }
    ];
    
    container.innerHTML = renderBreadcrumb(items);
}

// ─── SEMESTER HEADER ───
function renderSemesterHeader(context) {
    const container = document.getElementById('semester-header');
    if (!container) return;
    
    const progress = getSemesterProgress(context.semester);
    const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;
    
    container.innerHTML = '<div class="page-header">' +
        '<div class="page-header-top">' +
        '<h1>' + context.level.label + ' · ' + context.semester.label + '</h1>' +
        '<div class="page-header-badge">' + pct + '%</div>' +
        '</div>' +
        '<p class="page-header-subtitle">' + context.semester.courses.length + ' courses · ' + progress.total + ' total units</p>' +
        '<div class="mt-3">' + renderProgressBar(progress.reviewed, progress.total) + '</div>' +
        '</div>';
}

// ─── COURSE CARDS ───
function renderCourseCards(semester) {
    const container = document.getElementById('course-cards');
    if (!container) return;
    
    if (semester.courses.length === 0) {
        container.innerHTML = '<div class="empty-state">' +
            '<p class="text-muted">No courses available for this semester yet.</p>' +
            '<a href="index.html" class="btn btn-primary mt-2">← Back to Dashboard</a>' +
            '</div>';
        return;
    }
    
    let html = '';
    
    semester.courses.forEach(function(course) {
        const progress = getCourseProgress(course);
        const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;
        const moduleCount = course.modules.length;

        // TMA score badge
        let tmaBadge = '';
        if (course.tmaScore) {
            const tma = course.tmaScore;
            const tmaPct = Math.round((tma.score / tma.total) * 100);
            const tmaClass = tmaPct === 100 ? 'tma-perfect' : tmaPct >= 80 ? 'tma-good' : 'tma-low';
            tmaBadge = '<span class="tma-badge ' + tmaClass + '">' +
                '<i data-lucide="award" class="icon-xs"></i> TMA ' + tma.score + '/' + tma.total +
                '</span>';
        }

        html += '<a href="course.html?cid=' + course.id + '" class="course-card">' +
            '<div class="course-card-header">' +
            '<div class="course-code-badge">' + course.code + '</div>' +
            '<div class="course-card-pct">' + pct + '%</div>' +
            '</div>' +
            '<h3 class="course-card-title">' + course.title + '</h3>' +
            '<div class="course-card-stats">' +
            '<span class="stat-badge">' + moduleCount + ' modules</span>' +
            '<span class="stat-badge">' + progress.total + ' units</span>' +
            (tmaBadge ? tmaBadge : '') +
            '</div>' +
            '<div class="mt-2">' +
            '<div class="progress-wrap">' +
            '<div class="progress-bar ' + (pct >= 80 ? 'green' : pct >= 40 ? 'amber' : 'grey') + '" style="width:' + pct + '%"></div>' +
            '</div>' +
            '<p class="progress-label">' + progress.reviewed + ' / ' + progress.total + ' reviewed</p>' +
            '</div>' +
            '</a>';
    });
    
    container.innerHTML = html;
}

// ══════════════════════════════════════
// StudyVault — level.js
// level.html logic
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const lid = getParam('lid');
    
    if (!lid) {
        window.location.href = 'index.html';
        return;
    }
    
    const level = getLevelById(lid);
    
    if (!level) {
        window.location.href = 'index.html';
        return;
    }
    
    renderBreadcrumbNav(level);
    renderLevelHeader(level);
    renderSemesterCards(level);
});

// ─── BREADCRUMB ───
function renderBreadcrumbNav(level) {
    const container = document.getElementById('breadcrumb');
    if (!container) return;
    
    const items = [
        { label: 'Home', url: 'index.html' },
        { label: level.label, url: null }
    ];
    
    container.innerHTML = renderBreadcrumb(items);
}

// ─── LEVEL HEADER ───
function renderLevelHeader(level) {
    const container = document.getElementById('level-header');
    if (!container) return;
    
    const progress = getLevelProgress(level);
    const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;
    
    container.innerHTML = '<div class="page-header">' +
        '<div class="page-header-top">' +
        '<h1>' + level.label + '</h1>' +
        '<div class="page-header-badge">' + pct + '%</div>' +
        '</div>' +
        '<p class="page-header-subtitle">' + level.semesters.length + ' semesters · ' + progress.total + ' total units</p>' +
        '<div class="mt-3">' + renderProgressBar(progress.reviewed, progress.total) + '</div>' +
        '</div>';
}

// ─── SEMESTER CARDS ───
function renderSemesterCards(level) {
    const container = document.getElementById('semester-cards');
    if (!container) return;
    
    let html = '';
    
    level.semesters.forEach(function(semester) {
        const progress = getSemesterProgress(semester);
        const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;
        
        // Count courses
        const courseCount = semester.courses.length;
        
        // Only 2nd semester has content
        const hasContent = courseCount > 0;
        const cardClass = hasContent ? 'semester-card' : 'semester-card empty';
        
        html += '<a href="' + (hasContent ? 'semester.html?sid=' + semester.id : '#') + '" class="' + cardClass + '">' +
            '<div class="semester-card-header">' +
            '<div class="semester-card-icon">' + (semester.label.includes('1st') ? '📘' : '📗') + '</div>' +
            '<div class="semester-card-badge">' + pct + '%</div>' +
            '</div>' +
            '<h3>' + semester.label + '</h3>' +
            '<div class="semester-card-stats">' +
            '<div class="semester-card-stat">' +
            '<span class="stat-value">' + courseCount + '</span>' +
            '<span class="stat-label">Courses</span>' +
            '</div>' +
            '<div class="semester-card-stat">' +
            '<span class="stat-value">' + progress.total + '</span>' +
            '<span class="stat-label">Units</span>' +
            '</div>' +
            '</div>' +
            '<div class="mt-2">' +
            '<div class="progress-wrap">' +
            '<div class="progress-bar ' + (pct >= 80 ? 'green' : pct >= 40 ? 'amber' : 'grey') + '" style="width:' + pct + '%"></div>' +
            '</div>' +
            '<p class="progress-label">' + progress.reviewed + ' / ' + progress.total + ' reviewed</p>' +
            '</div>' +
            (hasContent ? '<div class="semester-card-arrow">View Courses →</div>' : '<div class="semester-card-empty-label">No courses yet</div>') +
            '</a>';
    });
    
    container.innerHTML = html;
}

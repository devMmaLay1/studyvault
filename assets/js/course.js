// ══════════════════════════════════════
// StudyVault — course.js
// course.html logic
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const cid = getParam('cid');
    
    if (!cid) {
        window.location.href = 'index.html';
        return;
    }
    
    const context = getCourseById(cid);
    
    if (!context) {
        window.location.href = 'index.html';
        return;
    }
    
    renderBreadcrumbNav(context);
    renderCourseHeader(context);
    renderModuleList(context.course);
});

// ─── BREADCRUMB ───
function renderBreadcrumbNav(context) {
    const container = document.getElementById('breadcrumb');
    if (!container) return;
    
    const items = [
        { label: 'Home', url: 'index.html' },
        { label: context.level.label, url: 'level.html?lid=' + context.level.id },
        { label: context.semester.label, url: 'semester.html?sid=' + context.semester.id },
        { label: context.course.code, url: null }
    ];
    
    container.innerHTML = renderBreadcrumb(items);
}

// ─── COURSE HEADER ───
function renderCourseHeader(context) {
    const container = document.getElementById('course-header');
    if (!container) return;
    
    const progress = getCourseProgress(context.course);
    const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;

    // TMA score
    let tmaHtml = '';
    if (context.course.tmaScore) {
        const tma = context.course.tmaScore;
        const tmaPct = Math.round((tma.score / tma.total) * 100);
        const tmaClass = tmaPct === 100 ? 'tma-perfect' : tmaPct >= 80 ? 'tma-good' : 'tma-low';
        tmaHtml = '<span class="tma-badge tma-badge-large ' + tmaClass + '">' +
            '<i data-lucide="award" class="icon-sm"></i> TMA Score: ' + tma.score + ' / ' + tma.total +
            '</span>';
    }
    
    container.innerHTML = '<div class="page-header">' +
        '<div class="page-header-top">' +
        '<div class="course-code-badge large">' + context.course.code + '</div>' +
        '<div class="page-header-badge">' + pct + '%</div>' +
        '</div>' +
        '<h1>' + context.course.title + '</h1>' +
        (tmaHtml ? '<div class="mt-1 mb-2">' + tmaHtml + '</div>' : '') +
        '<p class="page-header-subtitle">' + context.course.modules.length + ' modules · ' + progress.total + ' total units</p>' +
        '<div class="mt-3">' + renderProgressBar(progress.reviewed, progress.total) + '</div>' +
        '<div class="course-header-actions">' +
        '<a id="recallSessionBtn" class="rapid-recall-btn" href="recall.html?cid=' + context.course.id + '&idx=0">Rapid Recall Session</a>' +
        '</div>' +
        '</div>';

    if (window.lucide) lucide.createIcons();
}

// ─── MODULE LIST ───
function renderModuleList(course) {
    const container = document.getElementById('module-list');
    if (!container) return;
    
    if (course.modules.length === 0) {
        container.innerHTML = '<div class="empty-state">' +
            '<p class="text-muted">No modules available for this course yet.</p>' +
            '</div>';
        return;
    }
    
    let html = '<div class="module-list-container">';
    
    course.modules.forEach(function(module, index) {
        const progress = getModuleProgress(module);
        const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;
        
        // Calculate summary status for this module
        let unitsWithSummary = 0;
        let totalUnits = module.units.length;
        module.units.forEach(function(unit) {
            if (unit.summary && unit.summary.trim().length > 0) {
                unitsWithSummary++;
            }
        });
        
        let summaryBadge = '';
        if (unitsWithSummary === totalUnits && totalUnits > 0) {
            // All units have summaries
            summaryBadge = '<span class="stat-badge summary-complete"><i data-lucide="check-circle" class="icon-xs"></i> Complete</span>';
        } else if (unitsWithSummary === 0) {
            // No units have summaries
            summaryBadge = '<span class="stat-badge summary-missing"><i data-lucide="x-circle" class="icon-xs"></i> No summaries</span>';
        } else {
            // Some units have summaries
            summaryBadge = '<span class="stat-badge summary-partial"><i data-lucide="alert-circle" class="icon-xs"></i> ' + unitsWithSummary + '/' + totalUnits + ' summaries</span>';
        }
        
        html += '<a href="module.html?mid=' + module.id + '" class="module-row">' +
            '<div class="module-row-number">' + (index + 1) + '</div>' +
            '<div class="module-row-content">' +
            '<h3 class="module-row-title">' + module.title + '</h3>' +
            '<div class="module-row-meta">' +
            '<span class="stat-badge">' + module.units.length + ' units</span>' +
            summaryBadge +
            '<span class="module-row-progress-text">' + progress.reviewed + ' / ' + progress.total + ' reviewed</span>' +
            '</div>' +
            '</div>' +
            '<div class="module-row-progress">' +
            '<div class="progress-wrap small">' +
            '<div class="progress-bar ' + (pct >= 80 ? 'green' : pct >= 40 ? 'amber' : 'grey') + '" style="width:' + pct + '%"></div>' +
            '</div>' +
            '</div>' +
            '<div class="module-row-arrow">→</div>' +
            '</a>';
    });
    
    html += '</div>';
    
    container.innerHTML = html;
}


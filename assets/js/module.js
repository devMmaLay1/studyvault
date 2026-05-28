// ══════════════════════════════════════
// StudyVault — module.js
// module.html logic
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const mid = getParam('mid');
    
    if (!mid) {
        window.location.href = 'index.html';
        return;
    }
    
    const context = getModuleById(mid);
    
    if (!context) {
        window.location.href = 'index.html';
        return;
    }
    
    renderBreadcrumbNav(context);
    renderModuleHeader(context);
    renderUnitList(context);
});

// ─── BREADCRUMB ───
function renderBreadcrumbNav(context) {
    const container = document.getElementById('breadcrumb');
    if (!container) return;
    
    const items = [
        { label: 'Home', url: 'index.html' },
        { label: context.level.label, url: 'level.html?lid=' + context.level.id },
        { label: context.semester.label, url: 'semester.html?sid=' + context.semester.id },
        { label: context.course.code, url: 'course.html?cid=' + context.course.id },
        { label: context.module.title, url: null }
    ];
    
    container.innerHTML = renderBreadcrumb(items);
}

// ─── MODULE HEADER ───
function renderModuleHeader(context) {
    const container = document.getElementById('module-header');
    if (!container) return;
    
    const progress = getModuleProgress(context.module);
    const pct = progress.total ? Math.round((progress.reviewed / progress.total) * 100) : 0;
    
    container.innerHTML = '<div class="page-header">' +
        '<div class="page-header-top">' +
        '<h1>' + context.module.title + '</h1>' +
        '<div class="page-header-badge">' + pct + '%</div>' +
        '</div>' +
        '<p class="page-header-subtitle">' + context.course.code + ' · ' + context.module.units.length + ' units</p>' +
        '<div class="mt-3">' + renderProgressBar(progress.reviewed, progress.total) + '</div>' +
        '</div>';
}

// ─── UNIT LIST ───
function renderUnitList(context) {
    const container = document.getElementById('unit-list');
    if (!container) return;
    
    if (context.module.units.length === 0) {
        container.innerHTML = '<div class="empty-state">' +
            '<p class="text-muted">No units available for this module yet.</p>' +
            '</div>';
        return;
    }
    
    // Calculate module-level summary status
    let unitsWithSummary = 0;
    let totalUnits = context.module.units.length;
    context.module.units.forEach(function(unit) {
        if (unit.summary && unit.summary.trim().length > 0) {
            unitsWithSummary++;
        }
    });
    
    let html = '<div class="unit-list-container">';
    
    context.module.units.forEach(function(unit, index) {
        const reviewData = getReviewData(unit.id);
        const reviewed = !!(reviewData && reviewData.reviewed === true);
        const hasNote = getNote(unit.id).length > 0;
        const reviewedLabel = reviewed
            ? '<span class="unit-time-ago"><i data-lucide="clock-3" class="icon-xs"></i> ' + timeAgo(reviewData.lastReviewed) + '</span>'
            : '';
        
        // Check summary status
        const hasSummary = unit.summary && unit.summary.trim().length > 0;
        let summaryBadge = '';
        if (hasSummary) {
            summaryBadge = '<span class="unit-badge summary-complete"><i data-lucide="file-check" class="icon-xs"></i> Summary</span>';
        } else {
            summaryBadge = '<span class="unit-badge summary-missing"><i data-lucide="file-x" class="icon-xs"></i> No summary</span>';
        }
        
        html += '<a href="unit.html?uid=' + unit.id + '" class="unit-row ' + (reviewed ? 'reviewed' : '') + '">' +
            '<div class="unit-row-number">' + (index + 1) + '</div>' +
            '<div class="unit-row-content">' +
            '<h3 class="unit-row-title">' + unit.title + '</h3>' +
            '<div class="unit-row-meta">' +
            summaryBadge +
            (reviewed ? '<span class="unit-badge reviewed"><i data-lucide="check-circle" class="icon-xs"></i> Reviewed</span>' : '<span class="unit-badge not-reviewed"><i data-lucide="circle" class="icon-xs"></i> Not reviewed</span>') +
            (hasNote ? '<span class="unit-badge has-note"><i data-lucide="file-text" class="icon-xs"></i> Has notes</span>' : '') +
            reviewedLabel +
            '</div>' +
            '</div>' +
            '<div class="unit-row-arrow"><i data-lucide="arrow-right" class="icon-sm"></i></div>' +
            '</a>';
    });
    
    html += '</div>';
    
    container.innerHTML = html;
    
    // Initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

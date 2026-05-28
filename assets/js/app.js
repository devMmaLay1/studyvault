// ══════════════════════════════════════
// StudyVault — app.js
// Shared utilities loaded on every page.
// Depends on: data.js (must be loaded first)
// ══════════════════════════════════════

// ─── URL PARAMS ───
function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// ─── DATA LOOKUP HELPERS ───

/** Find a level by id (e.g. "100L") */
function getLevelById(lid) {
    return academicData.levels.find(l => l.id === lid) || null;
}

/** Find a semester by id (e.g. "100L_sem2") — also returns parent level */
function getSemesterById(sid) {
    for (const level of academicData.levels) {
        for (const sem of level.semesters) {
            if (sem.id === sid) {
                return { semester: sem, level: level };
            }
        }
    }
    return null;
}

/** Find a course by id (e.g. "MTH101") — also returns parent semester and level */
function getCourseById(cid) {
    for (const level of academicData.levels) {
        for (const sem of level.semesters) {
            for (const course of sem.courses) {
                if (course.id === cid) {
                    return { course: course, semester: sem, level: level };
                }
            }
        }
    }
    return null;
}

/** Find a module by id (e.g. "MTH101_m1") — also returns parent course, semester, level */
function getModuleById(mid) {
    for (const level of academicData.levels) {
        for (const sem of level.semesters) {
            for (const course of sem.courses) {
                for (const mod of course.modules) {
                    if (mod.id === mid) {
                        return { module: mod, course: course, semester: sem, level: level };
                    }
                }
            }
        }
    }
    return null;
}

/** Find a unit by id (e.g. "MTH101_m1_u1") — returns full context */
function getUnitById(uid) {
    for (const level of academicData.levels) {
        for (const sem of level.semesters) {
            for (const course of sem.courses) {
                for (const mod of course.modules) {
                    for (const unit of mod.units) {
                        if (unit.id === uid) {
                            return {
                                unit: unit,
                                module: mod,
                                course: course,
                                semester: sem,
                                level: level
                            };
                        }
                    }
                }
            }
        }
    }
    return null;
}


// ─── PROGRESS HELPERS ───

/** Get structured review data for a unit (supports old boolean data too) */
function getReviewData(unitId) {
    const key = "reviewed_" + unitId;
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    if (raw === "true") {
        return {
            reviewed: true,
            lastReviewed: null,
            confidence: null,
            reviewCount: 1
        };
    }

    try {
        const parsed = JSON.parse(raw);

        if (parsed === true || parsed === "true") {
            return {
                reviewed: true,
                lastReviewed: null,
                confidence: null,
                reviewCount: 1
            };
        }

        if (!parsed || typeof parsed !== "object") return null;

        const normalized = {
            reviewed: parsed.reviewed !== false,
            lastReviewed: parsed.lastReviewed || null,
            confidence: parsed.confidence ?? null,
            reviewCount: Number.isFinite(parsed.reviewCount) ? parsed.reviewCount : 1
        };

        return normalized.reviewed ? normalized : null;
    } catch {
        return null;
    }
}

function saveReview(unitId, confidence = null) {
    const existing = getReviewData(unitId);
    const reviewData = {
        reviewed: true,
        lastReviewed: new Date().toISOString(),
        confidence: confidence === null ? (existing ? (existing.confidence ?? null) : null) : confidence,
        reviewCount: existing ? ((Number(existing.reviewCount) || 0) + 1) : 1
    };

    localStorage.setItem("reviewed_" + unitId, JSON.stringify(reviewData));
    return reviewData;
}

function timeAgo(isoString) {
    if (!isoString) return "Reviewed";

    const timestamp = new Date(isoString).getTime();
    if (Number.isNaN(timestamp)) return "Reviewed";

    const diffMs = Date.now() - timestamp;
    if (diffMs <= 0) return "Today";

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return diffDays + " days ago";
    if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return weeks + " week" + (weeks > 1 ? "s" : "") + " ago";
    }
    return "Over a month ago";
}

function isReviewed(uid) {
    const data = getReviewData(uid);
    return !!(data && data.reviewed === true);
}

/** Mark/unmark a unit as reviewed */
function markReviewed(uid, val) {
    if (val) {
        saveReview(uid);
    } else {
        localStorage.removeItem("reviewed_" + uid);
    }
}

/** Count reviewed units in a module */
function getModuleProgress(mod) {
    let total = mod.units.length;
    let reviewed = 0;
    for (const unit of mod.units) {
        if (isReviewed(unit.id)) reviewed++;
    }
    return { reviewed, total };
}

/** Count reviewed units in a course */
function getCourseProgress(course) {
    let total = 0;
    let reviewed = 0;
    for (const mod of course.modules) {
        for (const unit of mod.units) {
            total++;
            if (isReviewed(unit.id)) reviewed++;
        }
    }
    return { reviewed, total };
}

/** Count reviewed units in a semester */
function getSemesterProgress(sem) {
    let total = 0;
    let reviewed = 0;
    for (const course of sem.courses) {
        const prog = getCourseProgress(course);
        total += prog.total;
        reviewed += prog.reviewed;
    }
    return { reviewed, total };
}

/** Count reviewed units in a level */
function getLevelProgress(level) {
    let total = 0;
    let reviewed = 0;
    for (const sem of level.semesters) {
        const prog = getSemesterProgress(sem);
        total += prog.total;
        reviewed += prog.reviewed;
    }
    return { reviewed, total };
}

/** Count all reviewed units globally */
function getGlobalProgress() {
    let total = 0;
    let reviewed = 0;
    for (const level of academicData.levels) {
        const prog = getLevelProgress(level);
        total += prog.total;
        reviewed += prog.reviewed;
    }
    return { reviewed, total };
}


// ─── QUIZ SCORES ───

/** Save MCQ score for a unit */
function saveQuizScore(uid, correct, total) {
    const data = {
        correct: correct,
        total: total,
        pct: Math.round((correct / total) * 100),
        date: new Date().toISOString()
    };
    localStorage.setItem('quiz_' + uid, JSON.stringify(data));
    return data;
}

/** Get saved quiz score for a unit */
function getQuizScore(uid) {
    const raw = localStorage.getItem('quiz_' + uid);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
}

/** Get saved note for a unit */
function getNote(uid) {
    return localStorage.getItem("note_" + uid) || "";
}

/** Save a note for a unit */
function saveNote(uid, text) {
    if (text && text.trim()) {
        localStorage.setItem("note_" + uid, text);
    } else {
        localStorage.removeItem("note_" + uid);
    }
}


// ─── THEME ───

/** Load theme from localStorage and apply it */
function loadTheme() {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
}

/** Toggle between light and dark theme */
function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
}


// ─── SEARCH ───

/** Search all units by title (case-insensitive). Returns array of context objects. */
function searchAll(query) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const results = [];

    for (const level of academicData.levels) {
        for (const sem of level.semesters) {
            for (const course of sem.courses) {
                for (const mod of course.modules) {
                    for (const unit of mod.units) {
                        if (
                            unit.title.toLowerCase().includes(q) ||
                            course.code.toLowerCase().includes(q) ||
                            course.title.toLowerCase().includes(q) ||
                            mod.title.toLowerCase().includes(q)
                        ) {
                            results.push({
                                unit: unit,
                                module: mod,
                                course: course,
                                semester: sem,
                                level: level
                            });
                        }
                    }
                }
            }
        }
    }

    return results;
}


// ─── RECENT UNITS ───

/** Add a unit ID to the recent_units list (keeps last 5) */
function addRecentUnit(uid) {
    let recent = JSON.parse(localStorage.getItem("recent_units") || "[]");
    // Remove if already exists (move to front)
    recent = recent.filter(id => id !== uid);
    recent.unshift(uid);
    // Keep only last 5
    if (recent.length > 5) recent = recent.slice(0, 5);
    localStorage.setItem("recent_units", JSON.stringify(recent));
}

/** Get the recent unit IDs */
function getRecentUnits() {
    return JSON.parse(localStorage.getItem("recent_units") || "[]");
}


// ─── SHARED COMPONENT RENDERERS ───

/** Render a stat badge (small pill showing "19 units" etc.) */
function renderStatBadge(label, value) {
    return '<span class="stat-badge">' + value + ' ' + label + '</span>';
}

/** Render a progress bar */
function renderProgressBar(reviewed, total) {
    const pct = total ? Math.round((reviewed / total) * 100) : 0;
    const color = pct >= 80 ? 'green' : pct >= 40 ? 'amber' : 'grey';
    return '<div class="progress-wrap">' +
        '<div class="progress-bar ' + color + '" style="width:' + pct + '%"></div>' +
        '</div>' +
        '<p class="progress-label">' + reviewed + ' / ' + total + ' units reviewed</p>';
}

/** Render breadcrumb from array of {label, url} objects. Last item has no link. */
function renderBreadcrumb(items) {
    let html = '<nav class="breadcrumb">';
    items.forEach(function (item, i) {
        if (i > 0) html += ' <span class="breadcrumb-sep">›</span> ';
        if (i < items.length - 1 && item.url) {
            html += '<a href="' + item.url + '" class="breadcrumb-link">' + item.label + '</a>';
        } else {
            html += '<span class="breadcrumb-current">' + item.label + '</span>';
        }
    });
    html += '</nav>';
    return html;
}

/** Render the navbar component */
function renderNavbar() {
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const themeIcon = theme === 'dark' ? 'sun' : 'moon';
    
    return '<nav class="navbar">' +
        '<div class="navbar-inner">' +
        '<a href="index.html" class="navbar-logo">Study<span>Vault</span></a>' +
        '<div class="navbar-actions">' +
        '<button class="navbar-btn" onclick="openSearch()" title="Search (press /)">' +
        '<i data-lucide="search" class="icon-md"></i>' +
        '</button>' +
        '<button class="navbar-btn" id="theme-toggle-btn" onclick="toggleTheme()" title="Toggle theme">' +
        '<i data-lucide="' + themeIcon + '" class="icon-md"></i>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '</nav>';
}

/** Open search overlay */
function openSearch() {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        const input = document.getElementById('search-input');
        if (input) input.focus();
    }
}

/** Close search overlay */
function closeSearch() {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        const input = document.getElementById('search-input');
        if (input) input.value = '';
        const results = document.getElementById('search-results');
        if (results) results.innerHTML = '';
    }
}

/** Handle search input */
function handleSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    if (!query || query.trim().length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const results = searchAll(query);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-no-results">No results found for "' + query + '"</div>';
        return;
    }
    
    let html = '<div class="search-results-count">' + results.length + ' result' + (results.length !== 1 ? 's' : '') + ' found</div>';
    
    results.forEach(function(result) {
        const reviewed = isReviewed(result.unit.id);
        html += '<a href="unit.html?uid=' + result.unit.id + '" class="search-result-item" onclick="closeSearch()">' +
            '<div class="search-result-content">' +
            '<div class="search-result-title">' + 
            (reviewed ? '<span class="search-result-badge"><i data-lucide="check" class="icon-xs"></i></span>' : '') +
            result.unit.title + 
            '</div>' +
            '<div class="search-result-meta">' + result.course.code + ' › ' + result.module.title + '</div>' +
            '</div>' +
            '<div class="search-result-arrow"><i data-lucide="arrow-right" class="icon-sm"></i></div>' +
            '</a>';
    });
    
    resultsContainer.innerHTML = html;
    
    // Re-initialize Lucide icons for the new content
    if (window.lucide) {
        lucide.createIcons();
    }
}


// ─── INIT ───
function registerOfflineSupport() {
    if (!("serviceWorker" in navigator)) return;
    if (!window.isSecureContext && window.location.hostname !== "localhost") return;

    window.addEventListener("load", function () {
        navigator.serviceWorker.register("sw.js").catch(function (error) {
            console.warn("Offline support could not be enabled:", error);
        });
    });
}

registerOfflineSupport();

// Load theme on every page
loadTheme();

// Inject navbar on every page
document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar');
    if (navbarContainer) {
        navbarContainer.innerHTML = renderNavbar();
        // Initialize Lucide icons in navbar
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    
    // Update theme toggle icon based on current theme
    updateThemeIcon();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press "/" to open search (but not in input/textarea)
        if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
            e.preventDefault();
            openSearch();
        }
        // Press "Escape" to close search
        if (e.key === 'Escape') {
            closeSearch();
        }
        // Press "Ctrl+K" or "Cmd+K" to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });
});

/** Update theme toggle icon */
function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme');
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        const iconName = theme === 'dark' ? 'sun' : 'moon';
        themeBtn.innerHTML = '<i data-lucide="' + iconName + '" class="icon-md"></i>';
        // Re-initialize Lucide icons
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

// ══════════════════════════════════════
// StudyVault — Animation Utilities
// ══════════════════════════════════════

/**
 * Animate progress bars from 0% to their target value
 */
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-progress') || bar.style.width;
    
    // Store the target width if not already stored
    if (!bar.getAttribute('data-progress')) {
      bar.setAttribute('data-progress', targetWidth);
    }
    
    // Start from 0
    bar.style.width = '0%';
    
    // Animate to target after a brief delay
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 100);
  });
}

/**
 * Add pulse animation to newly reviewed badges
 */
function pulseReviewedBadge(badgeElement) {
  if (!badgeElement) return;
  
  badgeElement.classList.add('just-reviewed');
  
  // Remove the class after animation completes
  setTimeout(() => {
    badgeElement.classList.remove('just-reviewed');
  }, 1500);
}

/**
 * Initialize animations when DOM is ready
 */
function initAnimations() {
  // Animate progress bars on page load
  animateProgressBars();
  
  // Re-animate progress bars when they come into view (for long pages)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          const bar = entry.target.querySelector('.progress-bar');
          if (bar) {
            const targetWidth = bar.getAttribute('data-progress');
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 100);
          }
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.progress-wrap').forEach(wrap => {
      observer.observe(wrap);
    });
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

// Export for use in other scripts
window.StudyVaultAnimations = {
  animateProgressBars,
  pulseReviewedBadge,
  initAnimations
};

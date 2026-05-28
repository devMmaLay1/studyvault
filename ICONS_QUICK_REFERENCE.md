# Icons Quick Reference Card 🚀

## Basic Usage

```html
<!-- Simple icon -->
<i data-lucide="home"></i>

<!-- With size -->
<i data-lucide="star" class="icon-lg"></i>

<!-- With color -->
<i data-lucide="check" class="icon-success"></i>

<!-- Combined -->
<i data-lucide="heart" class="icon-xl icon-accent"></i>
```

## Sizes
```
icon-xs  → 14px
icon-sm  → 16px
icon-md  → 20px (default)
icon-lg  → 24px
icon-xl  → 32px
```

## Colors
```
icon-primary    → Main text
icon-secondary  → Secondary text
icon-muted      → Muted text
icon-accent     → Blue accent
icon-success    → Green
icon-warning    → Amber
```

## Animations
```html
<i data-lucide="loader" class="icon-spin"></i>      <!-- Spinning -->
<i data-lucide="bell" class="icon-pulse"></i>       <!-- Pulsing -->
<i data-lucide="arrow-up" class="icon-hover-lift"></i>   <!-- Lift on hover -->
<i data-lucide="settings" class="icon-hover-rotate"></i> <!-- Rotate on hover -->
```

## In Buttons
```html
<!-- Icon before text -->
<button class="btn btn-primary">
  <i data-lucide="save" class="icon-sm"></i>
  Save
</button>

<!-- Icon after text -->
<button class="btn btn-secondary">
  Next
  <i data-lucide="arrow-right" class="icon-sm"></i>
</button>
```

## Common Icons

### Navigation
`home` `arrow-left` `arrow-right` `chevron-right` `menu` `x`

### Education  
`book-open` `graduation-cap` `file-text` `clipboard` `pencil` `notebook`

### Status
`check` `check-circle` `x-circle` `alert-circle` `info` `help-circle`

### Actions
`plus` `minus` `trash` `save` `download` `upload` `edit` `copy`

### UI
`search` `filter` `settings` `user` `bell` `star` `heart` `eye`

### Progress
`trending-up` `bar-chart-2` `activity` `zap` `target` `clock`

## JavaScript

```javascript
// Initialize icons after dynamic content
lucide.createIcons();

// Get icon HTML
const icon = window.StudyVaultIcons.lucide('home', 'icon-md', 24);

// Use preset
const check = window.StudyVaultIcons.presets.checkmark();
```

## Examples

### Status Badge
```html
<span class="unit-badge reviewed">
  <i data-lucide="check-circle" class="icon-xs icon-success"></i>
  Reviewed
</span>
```

### Search Input
```html
<div class="search-header">
  <i data-lucide="search" class="icon-md icon-muted"></i>
  <input type="text" placeholder="Search...">
</div>
```

### Card Header
```html
<div class="card">
  <i data-lucide="book-open" class="icon-lg icon-accent"></i>
  <h3>Course Title</h3>
</div>
```

### Loading State
```html
<button class="btn btn-primary" disabled>
  <i data-lucide="loader" class="icon-sm icon-spin"></i>
  Loading...
</button>
```

## Resources
- Demo: `icons-demo.html`
- Gallery: https://lucide.dev/icons/
- Full Guide: `ICONS_USAGE_GUIDE.md`

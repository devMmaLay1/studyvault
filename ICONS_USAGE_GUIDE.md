# Icon System Usage Guide 🎨

## Overview
StudyVault now includes both **Heroicons** and **Lucide Icons** for a comprehensive icon library.

## Libraries Included
- **Lucide Icons** - Modern, clean icon set via CDN
- **Heroicons** - Tailwind's icon set (embedded in icons.js)

## How to Use Icons

### Method 1: Lucide Icons (Recommended)
Use the `data-lucide` attribute directly in HTML:

```html
<!-- Basic usage -->
<i data-lucide="home"></i>
<i data-lucide="book-open"></i>
<i data-lucide="check-circle"></i>

<!-- With size classes -->
<i data-lucide="search" class="icon-md"></i>
<i data-lucide="user" class="icon-lg"></i>

<!-- With color classes -->
<i data-lucide="heart" class="icon-accent"></i>
<i data-lucide="check" class="icon-success"></i>
```

### Method 2: JavaScript Helper Functions

```javascript
// Using the icon utility
const icon = window.StudyVaultIcons.lucide('home', 'icon-md icon-accent', 24);
document.getElementById('myElement').innerHTML = icon;

// Using presets
const checkIcon = window.StudyVaultIcons.presets.checkmark();
const bookIcon = window.StudyVaultIcons.presets.book();
```

### Method 3: Heroicons (for specific designs)

```javascript
// Get a Heroicon
const homeIcon = window.StudyVaultIcons.heroicon('home', 'icon-lg');
document.getElementById('nav').innerHTML = homeIcon;
```

## Available Icon Sizes

```css
.icon-xs  /* 14px */
.icon-sm  /* 16px */
.icon-md  /* 20px */
.icon-lg  /* 24px */
.icon-xl  /* 32px */
```

## Available Icon Colors

```css
.icon-primary    /* Main text color */
.icon-secondary  /* Secondary text color */
.icon-muted      /* Muted text color */
.icon-accent     /* Accent color (blue) */
.icon-success    /* Green */
.icon-warning    /* Amber */
```

## Icon Animations

```html
<!-- Spinning icon (for loading states) -->
<i data-lucide="loader" class="icon-spin"></i>

<!-- Pulsing icon -->
<i data-lucide="bell" class="icon-pulse"></i>

<!-- Hover effects -->
<i data-lucide="arrow-up" class="icon-hover-lift"></i>
<i data-lucide="settings" class="icon-hover-rotate"></i>
```

## Common Use Cases

### Navigation Arrows
```html
<a href="#" class="btn">
  <i data-lucide="arrow-left" class="icon-sm"></i>
  Back
</a>

<a href="#" class="btn">
  Next
  <i data-lucide="arrow-right" class="icon-sm"></i>
</a>
```

### Status Indicators
```html
<!-- Reviewed -->
<span class="unit-badge reviewed">
  <i data-lucide="check-circle" class="icon-xs icon-success"></i>
  Reviewed
</span>

<!-- Not reviewed -->
<span class="unit-badge not-reviewed">
  <i data-lucide="circle" class="icon-xs icon-muted"></i>
  Not reviewed
</span>
```

### Search Bar
```html
<div class="search-header">
  <i data-lucide="search" class="icon-md icon-muted"></i>
  <input type="text" placeholder="Search...">
</div>
```

### Theme Toggle
```html
<button id="theme-toggle" class="navbar-btn">
  <i data-lucide="moon" class="icon-md"></i>
</button>
```

### Cards with Icons
```html
<div class="card">
  <i data-lucide="book-open" class="icon-lg icon-accent"></i>
  <h3>Course Title</h3>
  <p>Course description...</p>
</div>
```

## Popular Lucide Icons

### Navigation
- `home`, `arrow-left`, `arrow-right`, `chevron-right`, `chevron-down`
- `menu`, `x`, `more-horizontal`, `more-vertical`

### Education
- `book-open`, `book`, `graduation-cap`, `file-text`, `clipboard`
- `pencil`, `edit`, `notebook`

### Status & Actions
- `check`, `check-circle`, `x-circle`, `alert-circle`, `info`
- `plus`, `minus`, `trash`, `save`, `download`, `upload`

### UI Elements
- `search`, `filter`, `settings`, `user`, `users`
- `calendar`, `clock`, `bell`, `star`, `heart`

### Progress & Stats
- `trending-up`, `trending-down`, `bar-chart`, `pie-chart`
- `activity`, `zap`, `target`

## Initialization

Icons are automatically initialized on page load. If you add icons dynamically:

```javascript
// After adding new icons to the DOM
window.StudyVaultIcons.init();
// or
lucide.createIcons();
```

## Example: Enhanced Button

```html
<button class="btn btn-primary">
  <i data-lucide="save" class="icon-sm"></i>
  Save Changes
</button>
```

## Example: Icon Grid

```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
  <div style="text-align: center;">
    <i data-lucide="home" class="icon-xl icon-accent"></i>
    <p>Home</p>
  </div>
  <div style="text-align: center;">
    <i data-lucide="book-open" class="icon-xl icon-accent"></i>
    <p>Book</p>
  </div>
  <div style="text-align: center;">
    <i data-lucide="check-circle" class="icon-xl icon-success"></i>
    <p>Check</p>
  </div>
  <div style="text-align: center;">
    <i data-lucide="star" class="icon-xl icon-warning"></i>
    <p>Star</p>
  </div>
</div>
```

## Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Icons are loaded via CDN (requires internet connection)
- Fallback: Emoji icons if CDN fails

## Resources
- [Lucide Icons Gallery](https://lucide.dev/icons/)
- [Heroicons Gallery](https://heroicons.com/)

## Tips
1. Use Lucide for most cases (larger library, better maintained)
2. Use Heroicons for specific Tailwind-style designs
3. Always add descriptive aria-labels for accessibility
4. Keep icon sizes consistent within the same context
5. Use color classes to match your design system

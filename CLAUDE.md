# CLAUDE.md - AI Assistant Guide for NTUT Cybersecurity Website

## Project Overview

This is a **static educational website** for National Taipei University of Technology (NTUT) focused on cybersecurity awareness and public Wi-Fi security education. The site is aligned with Taiwan government security standards (資安 2.0) and international frameworks (ISO/IEC 27001, NIST CSF, MITRE ATT&CK).

**Project Type:** Single-page informational website (transitioning to multi-page)
**Primary Language:** Traditional Chinese (繁體中文) with English technical terms
**Target Audience:** NTUT students, faculty, and general public users of campus Wi-Fi
**Current Status:** Active development - main landing page complete, additional pages referenced but not yet implemented

## Technology Stack

### Core Technologies
- **HTML5:** Semantic markup, accessibility-focused
- **CSS3:** Modern features including flexbox, grid, backdrop-filter, transforms
- **JavaScript (ES6+):** Vanilla JS, no frameworks

### External Dependencies (CDN-based)
```
Bootstrap 4.3.1
├── CSS Framework for responsive layout
├── jQuery 3.3.1 (slim) - required for Bootstrap components
└── Popper.js 1.14.7 - required for Bootstrap tooltips/popovers

Font Awesome - Icon library (kit: 68f8681dba)
Google Fonts - Noto Sans TC (Chinese), Open Sans (English)
```

### Development Tools
- **Local Server:** VS Code Live Server extension (configured on port 5502)
- **Version Control:** Git
- **Editor:** VS Code (settings in `.vscode/settings.json`)

### Build Process
**None** - This is a pure static site with no build step, bundling, or transpilation. Files are served directly.

## Directory Structure

```
/home/user/NTUT_web/
├── .git/                    # Git version control
├── .vscode/                 # VS Code workspace settings
│   └── settings.json        # Live Server config (port 5502)
├── css/
│   └── style.css           # Main stylesheet (760 lines)
├── js/
│   └── script.js           # Main JavaScript (37 lines)
├── pictures/                # Image assets (536KB total)
│   ├── ntut.jpeg           # University logo
│   ├── freewifi.jpg        # Hero section background
│   ├── bank.png            # Security icons
│   ├── fake.png
│   ├── https.png
│   ├── vpn.png
│   ├── wifi.png
│   └── [others]
├── index.html              # Main landing page (392 lines)
└── CLAUDE.md               # This file
```

### Expected Future Files (Referenced but Not Created)
- `all.html` - All guidelines page
- `faq.html` - Frequently Asked Questions
- `contact.html` - Contact page

## Key Files and Their Purposes

### /home/user/NTUT_web/index.html
**Primary entry point** - Main landing page with the following sections:
- **Line 1-20:** HTML5 doctype, meta tags, external dependencies
- **Line 21-65:** Navigation header with logo and menu
- **Line 66-115:** Hero section with call-to-action
- **Line 116-175:** Compliance section (資安 2.0, ISO 27001, NIST CSF, MITRE ATT&CK)
- **Line 176-235:** Security guidelines grid (4 cards)
- **Line 236-295:** News/updates section (2 featured articles)
- **Line 296-350:** Email security tips section
- **Line 351-392:** Footer with feedback form and links

### /home/user/NTUT_web/css/style.css
**Main stylesheet** organized by sections:
- **Lines 1-50:** Global resets and base styles
- **Lines 51-150:** Header and navigation
- **Lines 151-300:** Hero section with gradient background
- **Lines 301-400:** Compliance cards component
- **Lines 401-550:** Guidelines grid system
- **Lines 551-650:** News cards component
- **Lines 651-760:** Footer and responsive utilities

**Color Palette:**
- Primary Blue: `#5c6cff`
- Accent Blue: `#36a3ff`
- Dark Background: `#2a2f3c`
- Light Background: `#f4f6fb`
- Text Dark: `#333`
- Text Light: `#666`

### /home/user/NTUT_web/js/script.js
**Interactive functionality:**
- DOMContentLoaded initialization
- Smooth scrolling for anchor links with header offset calculation
- Feedback button modal trigger
- Guard clauses for null safety

## Architecture and Design Patterns

### HTML Architecture
- **Semantic HTML5:** Proper use of `<header>`, `<nav>`, `<section>`, `<footer>`
- **Component-based sections:** Each major section has unique ID for navigation
- **Accessibility-first:** ARIA labels, alt text, semantic headings (h1-h6 hierarchy)
- **Mobile-first responsive:** Bootstrap grid system with custom enhancements

### CSS Architecture
**Component-based approach:**
```css
/* Pattern: .component-name { ... } */
.hero-panel { ... }
.compliance-card { ... }
.guideline-card { ... }
.news-card { ... }
.feedback-card { ... }
```

**Naming Convention:** kebab-case for all classes
**Responsive Breakpoints:**
- Mobile: < 576px
- Tablet: 768px
- Desktop: 992px

**Modern CSS Features in Use:**
- Flexbox for layouts
- CSS Grid for card grids
- `backdrop-filter` for glassmorphism effects
- CSS transforms for hover animations
- CSS transitions for smooth interactions

### JavaScript Architecture
**Module Pattern:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // All initialization code here
});
```

**Event Delegation:** Used for dynamic elements
**Data Attributes:** `data-scroll-target`, `data-feedback-button` for behavior binding
**ES6+ Features:** Arrow functions, const/let, template literals, destructuring

## Code Conventions and Standards

### HTML Conventions
1. **Indentation:** Use tabs (existing convention)
2. **Language:** Traditional Chinese for user-facing content
3. **Attributes order:**
   - `id` or `class` first
   - `data-*` attributes
   - `src`, `href`, `type`
   - `aria-*` attributes last
4. **Accessibility:** Always include `alt` text, ARIA labels where needed
5. **External links:** Use `rel="noopener"` for security

### CSS Conventions
1. **Naming:** kebab-case for all classes (`.hero-section`, `.compliance-card`)
2. **Organization:** Group by component/section with comment headers
3. **Specificity:** Avoid deep nesting, prefer single classes
4. **Units:**
   - Use `rem` for font sizes
   - Use `px` for borders and small fixed values
   - Use `%` or `vh/vw` for responsive layouts
5. **Colors:** Use hex values, define palette consistently
6. **No CSS preprocessors:** Pure CSS only

### JavaScript Conventions
1. **Naming:** camelCase for variables and functions
2. **Declaration:** Use `const` by default, `let` when reassignment needed, never `var`
3. **Functions:** Prefer arrow functions for callbacks
4. **Null checks:** Use guard clauses at function start
5. **Event listeners:** Add within DOMContentLoaded wrapper
6. **Comments:** Use for complex logic only, prefer self-documenting code

### Accessibility Standards
1. **Semantic HTML:** Use proper elements (`<button>`, `<nav>`, `<article>`)
2. **ARIA labels:** Add to icons and interactive elements without text
3. **Keyboard navigation:** Ensure all interactive elements are keyboard accessible
4. **Alt text:** Descriptive alt text for all images
5. **Color contrast:** Maintain WCAG AA standards minimum
6. **Focus indicators:** Never remove outline without replacement

## Development Workflows

### Local Development Setup
```bash
# 1. Clone repository (if not already done)
git clone <repository-url>
cd NTUT_web

# 2. Open in VS Code
code .

# 3. Start Live Server (port 5502 configured)
# Use VS Code Live Server extension or:
# Install: npm install -g live-server
# Run: live-server --port=5502

# 4. Open browser to http://localhost:5502
```

### Making Changes

**For HTML changes:**
1. Edit `index.html` directly
2. Save and browser auto-reloads (Live Server)
3. Test responsive behavior at different breakpoints
4. Validate accessibility with browser DevTools

**For CSS changes:**
1. Edit `css/style.css`
2. Follow existing component structure
3. Add new styles at end of relevant section
4. Test on all breakpoints (mobile, tablet, desktop)
5. Verify hover/focus states

**For JavaScript changes:**
1. Edit `js/script.js`
2. Keep functions small and focused
3. Test interactive elements thoroughly
4. Check console for errors
5. Verify on mobile devices

### Git Workflow

**Current Branch:** Always work on Claude feature branches
- Pattern: `claude/claude-md-<session-id>`
- Example: `claude/claude-md-miu264ykjdsvwl5u-015rvuwgsuPMvaP2mV1FwKu9`

**Commit Message Style:**
- Use clear, descriptive messages
- Can be bilingual (Chinese/English)
- Examples:
  - "Refine hero layout and compliance links"
  - "更新圖片檔案和專案配置"
  - "Add FAQ page with accordion component"

**Standard Workflow:**
```bash
# 1. Make changes
# 2. Check status
git status

# 3. Stage changes
git add <files>

# 4. Commit with descriptive message
git commit -m "Brief description of changes"

# 5. Push to feature branch
git push -u origin <branch-name>
```

## Common Tasks for AI Assistants

### Adding a New Page
1. Create new HTML file (e.g., `faq.html`)
2. Copy structure from `index.html` (header, footer)
3. Update navigation active state
4. Add page-specific styles to `css/style.css` under new section
5. Add page-specific JS to `js/script.js` if needed
6. Update navigation links in all HTML files

### Adding a New Section to Index
1. Choose insertion point in `index.html`
2. Create semantic `<section id="unique-id">`
3. Add component styles to `css/style.css`
4. Follow existing card/grid patterns for consistency
5. Update navigation menu if section should be linked
6. Test responsive behavior

### Modifying Styles
1. Locate component in `css/style.css`
2. Modify existing rules or add new ones
3. Maintain consistent spacing units (rem/px)
4. Test on all breakpoints
5. Verify hover/focus states still work

### Adding Images
1. Add image to `pictures/` directory
2. Use descriptive filename (lowercase, hyphens)
3. Optimize image size before adding (target < 200KB)
4. Add to HTML with proper `alt` text
5. Reference as `pictures/filename.ext`

### Updating Content
1. Locate section in `index.html`
2. Modify text while preserving HTML structure
3. Keep Chinese/English language balance
4. Verify text length doesn't break layout
5. Update headings in navigation if changed

## Important Notes for AI Assistants

### Language Guidelines
- **UI Text:** Traditional Chinese (繁體中文)
- **Technical Terms:** Often kept in English or use both
- **Code Comments:** English preferred for international collaboration
- **Commit Messages:** Either Chinese or English, both acceptable

### Do Not Modify
- Bootstrap CDN links (keep version 4.3.1)
- jQuery/Popper versions (required by Bootstrap)
- Font Awesome kit ID
- VS Code settings unless specifically requested

### Before Making Changes
1. **Always read the file first** - Never propose changes to unread code
2. **Check related files** - Changes to HTML may require CSS/JS updates
3. **Maintain consistency** - Follow existing patterns and conventions
4. **Test responsive** - Verify on mobile, tablet, desktop
5. **Validate accessibility** - Ensure WCAG compliance

### Accessibility Checklist
- [ ] Semantic HTML elements used
- [ ] Alt text on all images
- [ ] ARIA labels on icon-only buttons
- [ ] Proper heading hierarchy (no skipped levels)
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] External links have `rel="noopener"`

### Security Considerations
1. **External Links:** Always use `rel="noopener"` for security
2. **CDN Resources:** Use HTTPS for all external resources
3. **Form Validation:** Add client-side validation before server submission
4. **XSS Prevention:** Sanitize any user input if forms become functional
5. **Content Security:** Keep educational content accurate and up-to-date

### Performance Guidelines
1. **Images:** Optimize to < 200KB each, use appropriate formats
2. **CSS:** Keep specificity low, avoid deep nesting
3. **JavaScript:** Minimize DOM manipulation, use event delegation
4. **External Resources:** Already minified CDN versions used
5. **Lazy Loading:** Consider for images below fold

## Project Context and Educational Mission

### Purpose
This website serves as an educational resource for NTUT students and faculty to understand:
- Public Wi-Fi security risks
- Safe browsing practices on campus networks
- Cybersecurity compliance frameworks
- Phishing and social engineering awareness

### Compliance Frameworks Referenced
1. **資安 2.0 (Taiwan Government Cybersecurity Standard)**
2. **ISO/IEC 27001** - Information Security Management
3. **NIST CSF** - Cybersecurity Framework
4. **MITRE ATT&CK** - Threat intelligence framework

### Key Educational Topics Covered
- Free Wi-Fi security risks
- HTTPS importance
- VPN usage for protection
- Mobile device security
- Phishing email recognition
- Banking security best practices

## Troubleshooting Common Issues

### Issue: Live Server Not Working
**Solution:**
- Check VS Code Live Server extension is installed
- Verify port 5502 is not in use: `lsof -i :5502`
- Check `.vscode/settings.json` configuration
- Try alternative: `python3 -m http.server 5502`

### Issue: Images Not Loading
**Solution:**
- Verify image path: `pictures/filename.ext`
- Check file exists: `ls pictures/`
- Verify case-sensitive filename match
- Clear browser cache

### Issue: Bootstrap Components Not Working
**Solution:**
- Verify jQuery is loaded before Bootstrap JS
- Check Popper.js is loaded before Bootstrap JS
- Open browser console for JavaScript errors
- Ensure proper data attributes on elements

### Issue: Responsive Layout Broken
**Solution:**
- Verify viewport meta tag in `<head>`
- Check Bootstrap grid classes usage
- Test at exact breakpoints (576px, 768px, 992px)
- Inspect element to see which styles apply

## Future Enhancements to Consider

### Immediate Priorities
1. Create `faq.html` - Frequently Asked Questions page
2. Create `contact.html` - Contact information page
3. Create `all.html` - Comprehensive guidelines listing
4. Implement functional feedback form submission

### Medium-Term Improvements
1. Add linting tools (ESLint, Stylelint)
2. Add code formatter (Prettier)
3. Create README.md documentation
4. Add favicon and PWA manifest
5. Implement dark mode toggle

### Long-Term Enhancements
1. Consider build process for optimization (optional)
2. Add multilingual support (English version)
3. Implement search functionality
4. Add analytics for usage tracking
5. Create admin panel for content updates
6. Add automated testing

## Quick Reference Commands

```bash
# View current git status
git status

# View recent commits
git log --oneline -5

# Find text in files
grep -r "search term" .

# List all images
ls -lh pictures/

# Count lines of code
wc -l index.html css/style.css js/script.js

# Check file sizes
du -sh pictures/*

# Start simple HTTP server
python3 -m http.server 5502
```

## Resources and Documentation

### Bootstrap 4.3.1 Documentation
- Grid System: https://getbootstrap.com/docs/4.3/layout/grid/
- Components: https://getbootstrap.com/docs/4.3/components/
- Utilities: https://getbootstrap.com/docs/4.3/utilities/

### Accessibility Resources
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- ARIA Practices: https://www.w3.org/WAI/ARIA/apg/

### Cybersecurity Frameworks
- NIST CSF: https://www.nist.gov/cyberframework
- MITRE ATT&CK: https://attack.mitre.org/
- ISO 27001: https://www.iso.org/isoiec-27001-information-security.html

---

**Last Updated:** 2025-12-06
**Repository:** livejiaquan/NTUT_web
**Maintainer:** AI Assistant (Claude)

**Note for AI Assistants:** This document should be updated whenever significant architectural changes, new conventions, or major features are added to the project. Keep it current and comprehensive to serve future AI assistants effectively.

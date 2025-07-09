# Responsive Implementation & Testing

## Overview
This document outlines the comprehensive responsive implementation for the Coconut Beach Website, including breakpoint definitions, responsive utilities, and testing strategies.

## Theme Breakpoints
The project uses standardized breakpoints defined in `src/styles/theme.ts`:

```typescript
breakpoints: {
  xs: '575px',  // Mobile devices
  sm: '767px',  // Small tablets
  md: '991px',  // Medium tablets/small desktops
  lg: '1199px', // Large desktops
}
```

## Responsive Utilities

### 1. Media Query Helpers (`src/styles/responsive.ts`)
- `mediaQuery.xs()` - Max-width 575px
- `mediaQuery.sm()` - Max-width 767px  
- `mediaQuery.md()` - Max-width 991px
- `mediaQuery.lg()` - Max-width 1199px

### 2. Responsive Font Sizes
Pre-defined responsive font scaling for consistent typography across breakpoints:
- `responsiveFontSizes.h1` - Scales from 3rem to 1.25rem
- `responsiveFontSizes.h2` - Scales from 2.25rem to 1.125rem
- `responsiveFontSizes.h3` - Scales from 1.875rem to 1rem

### 3. Responsive Spacing
Consistent spacing patterns for different screen sizes:
- `responsiveSpacing.container` - Container padding
- `responsiveSpacing.section` - Section padding
- `responsiveSpacing.component` - Component padding

## Component Responsive Implementation

### Header Component
- **Mobile (≤767px)**: Hamburger menu, centered logo, hidden contact info
- **Tablet (768px-991px)**: Horizontal layout with adjusted spacing
- **Desktop (≥992px)**: Full navigation with contact info

### HeroSlider Component
- **Mobile (≤575px)**: 40vh height, smaller controls
- **Tablet (576px-991px)**: 60vh height, medium controls
- **Desktop (≥992px)**: 100vh height, full-size controls

### Navbar Component
- **Mobile**: Slide-out drawer navigation
- **Desktop**: Horizontal navigation with hover effects

## Storybook Testing Setup

### 1. Viewport Configuration
Custom viewport presets matching theme breakpoints:
- `xs`: 575px width
- `sm`: 767px width
- `md`: 991px width
- `lg`: 1199px width

### 2. Component Stories
Each component includes breakpoint-specific stories:
- `Default` - Responsive
- `Mobile` - 575px viewport
- `Tablet` - 767px viewport
- `Desktop` - 991px viewport
- `LargeDesktop` - 1199px viewport

### 3. Regression Testing
Dedicated breakpoint stories for visual regression testing:
- `Breakpoint_575px`
- `Breakpoint_767px`
- `Breakpoint_991px`
- `Breakpoint_1199px`

## Testing Commands

### Manual Testing
```bash
# Start Storybook for visual testing
npm run storybook

# Run responsive test suite
npm run test:responsive

# Run all UI tests
npm run test:ui
```

### Automated Testing
```bash
# Run Storybook tests
npm run test:storybook

# Run component tests
npm test
```

## Browser Testing Guidelines

### Chrome DevTools Testing
1. Open Chrome DevTools (F12)
2. Click device toggle (Ctrl/Cmd + Shift + M)
3. Test at exact breakpoints:
   - 575px width
   - 767px width  
   - 991px width
   - 1199px width

### Device Simulation
Test on common device presets:
- iPhone 12 Pro (390x844)
- iPad (768x1024)
- iPad Pro (1024x1366)
- Desktop (1920x1080)

## Responsive Checklist

### Layout
- [ ] Components adapt to container width
- [ ] No horizontal scrolling at any breakpoint
- [ ] Proper spacing maintained across sizes
- [ ] Text remains readable at all sizes

### Navigation
- [ ] Mobile menu functions correctly
- [ ] Desktop navigation scales properly
- [ ] Touch targets are 44px minimum

### Typography
- [ ] Font sizes scale appropriately
- [ ] Line heights maintain readability
- [ ] Text doesn't overflow containers

### Images & Media
- [ ] Images scale with container
- [ ] Media queries load appropriate sizes
- [ ] Aspect ratios maintained

### Performance
- [ ] CSS media queries optimize for mobile-first
- [ ] Images use appropriate breakpoints
- [ ] JavaScript handles resize events

## File Structure

```
src/
├── styles/
│   ├── theme.ts                 # Breakpoint definitions
│   ├── responsive.ts            # Responsive utilities
│   └── globalStyles.ts          # Global responsive styles
├── components/
│   ├── Header.tsx               # Responsive header
│   ├── Header.stories.tsx       # Breakpoint testing
│   ├── Header.test.tsx          # Component tests
│   └── ...
.storybook/
├── preview.tsx                  # Storybook configuration
└── main.ts                      # Addons & settings
scripts/
└── responsive-test.js           # Automated testing
```

## Best Practices

### 1. Mobile-First Approach
- Start with mobile styles
- Use `min-width` for larger screens
- Progressive enhancement

### 2. Consistent Breakpoints
- Use theme breakpoints consistently
- Avoid custom breakpoints unless necessary
- Document any exceptions

### 3. Testing Strategy
- Test at exact breakpoints
- Test between breakpoints
- Use real devices when possible
- Automate regression testing

### 4. Performance Optimization
- Minimize CSS bundle size
- Use efficient media queries
- Lazy load non-critical styles

## Common Issues & Solutions

### Issue: Layout breaks between breakpoints
**Solution**: Test at intermediate sizes (e.g., 600px, 850px)

### Issue: Text too small on mobile
**Solution**: Use responsive font utilities with minimum sizes

### Issue: Touch targets too small
**Solution**: Ensure minimum 44px touch targets on mobile

### Issue: Horizontal scrolling
**Solution**: Use `overflow-x: hidden` and flexible layouts

## Maintenance

### Adding New Breakpoints
1. Update `src/styles/theme.ts`
2. Add responsive utilities
3. Update Storybook viewports
4. Add test cases

### Updating Components
1. Use existing responsive utilities
2. Add Storybook stories for new breakpoints
3. Update tests
4. Document changes

This responsive implementation ensures consistent, accessible, and maintainable responsive design across the entire application.

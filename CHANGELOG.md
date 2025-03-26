# Changelog

## v0.5.1 - 26-03-2025

### Fix
- removed BreakpointerIndicator export

## v0.5.0 - 25-03-2025

### Feat
- classNames for internal `<BreakpointIndicator/>` elements
- Integrated `<BreakpointIndicator/>` directly into provider, removing the  need for manual invokation
- updated parser to accomodate string(ex: "200px") and numerical values

### Changes
- removed internal `_render` property returned from useBreakpointer

## v0.4.0 - 24-03-2025

### Added
- `mode` prop on provider for conditional rendering on prod and dev builds

## v0.2.0 - 24-03-2025

### Added
- Breakpoints parser - '200px' to 200
- alignments & border

## v0.1.0 - 24-03-2025

### Added
- Breakpoint indicator component
- styles & icons

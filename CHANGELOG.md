# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and, most of the time (but not always, exceptions being: [1.1.0] so far), this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
## 1.2.0 - 2018-06-06
### Changed
- Whole buttons design, based on Fluent Design examples on the web
- `.cta` class no longer assigned to the anchor tag; use with buttons too

### Added
- On `:hover` translates nested `.mi` in x-asis

## [Unreleased]
## 1.1.3 - 2018-05-21
### Fixed
- scss micon variable usage for hamburger icon

## 1.1.2 - 2018-05-11
### Added
- Code standards: _.editorconfig_ file as per Bootstrap

### Changed
- Indentation to 2 spaces (from 4) as per Bootstrap (@mdo) code guideliness

### Removed
- Unused gulp dev dependencies: rename, csso and add-src

## 1.1.1 - 2018-04-29
### Added
- missing perfect-scrollbar js

### Changed
- $micon scss variables instead of hardcoding navbar toggle icons

## 1.1.0 - 2018-04-27
### Added
- `.cta` class for anchors
- Color for toggler in `.navbar-dark` and `.navbar-light`
- Spacing for navbar dropdown in `lg` and `xl` breakpoints

### Changed
- Char counter, password, number inputs and modals .js to use ES6, `const` and `let` mostly
- jQuery, PopperJS and Bootstrap dependencies are no longer part of the package
- No `px` left in the whole package, using `rem` instead
- Moves all scss `$vars` to `_variables.scss`

### Fixed
- Char counter width to not break at 7 characters (like: _999/999_)
- Toggler icon for basic navbars
- Basic tab `.active` transparent background
- Trigger `keyup` on number input arrow clicks

### Removed
- Autocomplete input
- Indeterminate checkbox styles
- Horizontal trail navbar
- Depth utilities
- Most of the `.card` styles (docs use spacing utilities instead)
- Spacing from `.list-title` helper class
- `:focus` and `:hover` colors from navbar
- Left margin from `ul` and `ol`
- `border-radius` from `.dropdown-menu`

## 1.0.2 - 2018-04-11
### Added
- Fluent modals: moves all the positioning and sizing styles to the `.fluent-modal` CSS class namespace; .
- `@import` Bootstrap functions, variables and mixins when building fluent-kit.min.css

### Changed
- Fluent modals: moves all the design styles out of .modal namespace

## 1.0.1 - 2018-03-25
### Added
- .gitignore
- Specific nav item size for small devices

### Changed
- Input border color (to darker)

### Fixed
- Mask; used rgba() instead of neutral palette solid colors

### Removed
- Redundant icons - legacy and aliases

## 1.0.0 - 2018-03-12

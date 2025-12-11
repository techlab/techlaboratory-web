---
title: jQuery SmartTab v4
description: The flexible jQuery tab control plugin
---

# jQuery SmartTab v4

The flexible jQuery tab control plugin. jQuery Smart Tab is a jQuery plugin for easy implementation of tab interface with features like theme support, transition effects, URL navigation, and auto progress.

## Demo

::: tip Coming Soon
Interactive demos will be added here.
:::

## Installation

### NPM

```bash
npm install jquery-smarttab
```

### CDN - jsDelivr

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/css/smart_tab_all.min.css" rel="stylesheet" type="text/css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/js/jquery.smartTab.min.js" type="text/javascript"></script>
```

## Features

- Easy to implement and minimal HTML required
- Supports all modern browsers
- Responsive CSS design
- Bootstrap compatible
- Cool themes included and can be easily customized
- Easy color customization using CSS variables
- Built-in transition animations (none|fade|slideHorizontal|slideVertical|slideSwing|css)
- CSS Animations support (Supports Animate.css)
- Accessible controls
- External controls support
- Easy ajax content integration
- Keyboard navigation
- Auto content height adjustment
- Built-in loader
- Built-in events
- UMD (Universal Module Definition) support
- Compatible with all jQuery versions (jQuery 1.11.1+, jQuery 3.6+, and jQuery Slim)
- URL navigation and tab selection
- Auto Progress (automatic navigation of tabs)

## Documentation

### Requirements

- [jQuery](http://jquery.com/)

### Include jQuery SmartTab CSS

```html
<link href="../dist/css/smart_tab_all.min.css" rel="stylesheet" type="text/css">
```

### The HTML Markup

```html
<div id="smarttab">
  <ul class="nav">
    <li>
      <a class="nav-link" href="#tab-1">Tab 1</a>
    </li>
    <li>
      <a class="nav-link" href="#tab-2">Tab 2</a>
    </li>
    <li>
      <a class="nav-link" href="#tab-3">Tab 3</a>
    </li>
    <li>
      <a class="nav-link" href="#tab-4">Tab 4</a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="tab-1" class="tab-pane" role="tabpanel">
      Tab content
    </div>
    <div id="tab-2" class="tab-pane" role="tabpanel">
      Tab content
    </div>
    <div id="tab-3" class="tab-pane" role="tabpanel">
      Tab content
    </div>
    <div id="tab-4" class="tab-pane" role="tabpanel">
      Tab content
    </div>
  </div>
</div>
```

### Include jQuery

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Include jQuery SmartTab JavaScript

```html
<script type="text/javascript" src="../dist/js/jquery.smartTab.min.js"></script>
```

### Initialize the jQuery SmartTab

```javascript
$(function() {
  // SmartTab initialize
  $('#smarttab').smartTab();
});
```

### CSS Files Selection

You can see many CSS files at `dist/css/` folder. All the CSS files are standalone. The only difference is the theme.

- `../dist/css/smart_tab_all.css` - contains all themes
- `../dist/css/smart_tab.css` - contains only the default theme
- `../dist/css/smart_tab_(theme name).css` - theme-specific files

All these files have corresponding min files that are compressed for size reduction. Ex. `../dist/css/smart_tab_all.min.css`

## Advanced Options

### Optional Parameters

```javascript
$('#smarttab').smartTab({
  selected: 0, // Initial selected tab, 0 = first tab
  theme: 'default', // theme for the tab
  orientation: 'horizontal', // horizontal/vertical
  justified: true, // Nav menu justification
  autoAdjustHeight: true, // Automatically adjust content height
  backButtonSupport: true, // Enable the back button support
  enableUrlHash: true, // Enable selection of the tab based on url hash
  transition: {
    animation: 'none', // none|fade|slideHorizontal|slideVertical|slideSwing|css
    speed: '400',
    easing: '',
    prefixCss: '',
    fwdShowCss: '',
    fwdHideCss: '',
    bckShowCss: '',
    bckHideCss: ''
  },
  autoProgress: {
    enabled: false, // Enable/Disable auto progress
    interval: 3500, // Auto progress interval
    stopOnFocus: true, // Stop auto progress on focus
    pauseOnHover: true // Pause auto progress on hover
  }
});
```

## Public Functions

### goToTab

Navigate to a specific tab

```javascript
// Go to tab
$('#smarttab').smartTab("goToTab", 2);
```

### next

Navigate to next tab

```javascript
$('#smarttab').smartTab("next");
```

### prev

Navigate to previous tab

```javascript
$('#smarttab').smartTab("prev");
```

### reset

Reset the tab to initial state

```javascript
$('#smarttab').smartTab("reset");
```

### loader

Show/hide the built-in loader

```javascript
// Show loader
$('#smarttab').smartTab("loader", "show");

// Hide loader
$('#smarttab').smartTab("loader", "hide");
```

## Parameters

### selected
**(integer)** Initial selected tab, 0 = first tab. Default: `0`

### theme
**(string)** Theme for the tab. Default: `'default'`

### orientation
**(string)** Tab orientation. Default: `'horizontal'`

### justified
**(boolean)** Nav menu justification. Default: `true`

### autoAdjustHeight
**(boolean)** Automatically adjust content height. Default: `true`

### backButtonSupport
**(boolean)** Enable the back button support. Default: `true`

### enableUrlHash
**(boolean)** Enable selection based on url hash. Default: `true`

### transition
**(object)** Transition animation settings

### autoProgress
**(object)** Auto progress settings for automatic tab navigation

## Events

### showTab

Triggers when a tab is shown

```javascript
$("#smarttab").on("showTab", function(e, anchorObject, tabIndex) {
  console.log("Tab " + tabIndex + " shown");
});
```

### leaveTab

Triggers before leaving a tab

```javascript
$("#smarttab").on("leaveTab", function(e, anchorObject, currentTabIndex, nextTabIndex) {
  return confirm("Do you want to leave tab " + currentTabIndex + "?");
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smarttab/blob/master/LICENSE).

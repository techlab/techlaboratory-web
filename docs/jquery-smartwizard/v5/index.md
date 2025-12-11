---
title: jQuery SmartWizard v5
description: The awesome step wizard plugin for jQuery
---

# jQuery SmartWizard v5

::: warning Archived Version
This is an archived version. The latest version is [v6](/jquery-smartwizard/v6/).
:::

The awesome step wizard plugin for jQuery. jQuery Smart Wizard is an accessible step wizard plugin for jQuery. Provides a neat and stylish interface for your forms, checkout screen, registration steps, etc.

## Demo

::: tip Coming Soon
Interactive demos will be added here. For now, check out the [v6 demos](/jquery-smartwizard/v6/#demo).
:::

## Installation

### NPM

```bash
npm install smartwizard@5
```

### CDN - jsDelivr

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

## Documentation

### Requirements

- [jQuery](http://jquery.com/) (supports jQuery 1.11.1+, jQuery 2+, jQuery 3.5+)

### Include jQuery SmartWizard CSS

```html
<link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />
```

### The HTML Markup

```html
<div id="smartwizard">
  <ul class="nav">
    <li>
      <a class="nav-link" href="#step-1">Step 1</a>
    </li>
    <li>
      <a class="nav-link" href="#step-2">Step 2</a>
    </li>
    <li>
      <a class="nav-link" href="#step-3">Step 3</a>
    </li>
    <li>
      <a class="nav-link" href="#step-4">Step 4</a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="step-1" class="tab-pane" role="tabpanel">
      Step content
    </div>
    <div id="step-2" class="tab-pane" role="tabpanel">
      Step content
    </div>
    <div id="step-3" class="tab-pane" role="tabpanel">
      Step content
    </div>
    <div id="step-4" class="tab-pane" role="tabpanel">
      Step content
    </div>
  </div>
</div>
```

### Include jQuery

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Include jQuery SmartWizard JavaScript

```html
<script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### Initialize the jQuery SmartWizard

```javascript
$(document).ready(function(){
  // SmartWizard initialize
  $('#smartwizard').smartWizard();
});
```

### CSS Files Selection

You can see many CSS files at `dist/css/` folder. All the CSS files are standalone. The only difference is the theme.

- `../dist/css/smart_wizard_all.css` - contains all themes
- `../dist/css/smart_wizard.css` - contains only the default theme
- `../dist/css/smart_wizard_(theme name).css` - theme-specific files

All these files have corresponding min files that are compressed for size reduction. Ex. `../dist/css/smart_wizard_all.min.css`

## Features

- Easy to implement and minimal HTML required
- Supports all modern browsers
- Responsive CSS design
- Bootstrap compatible
- Cool themes included
- Built-in transition animations
- Form validation support
- RTL support
- Accessible controls
- External controls support
- Easy ajax content integration
- Keyboard navigation
- Auto content height adjustment
- Customizable toolbar
- Built-in progressbar
- Built-in events

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE).

---
title: jQuery SmartWizard v4
description: The awesome jQuery step wizard plugin with Bootstrap support
---

# jQuery SmartWizard v4

::: danger Deprecated
This version is deprecated. Please upgrade to [v6](/jquery-smartwizard/v6/).
:::

Smart Wizard is a flexible and heavily customizable jQuery step wizard plugin with Bootstrap support.

## Demo

::: tip Coming Soon
Interactive demos will be added here. For now, check out the [v6 demos](/jquery-smartwizard/v6/#demo).
:::

## Installation

### Download

[Download from GitHub](https://github.com/techlab/jquery-smartwizard/archive/v4.zip)

## Documentation

### Requirements

1. [Bootstrap 3+](http://getbootstrap.com/getting-started/#download)
2. [jQuery](http://jquery.com/) (supports jQuery 1.9+, jQuery 2+, jQuery 3+)

### Include Smart Wizard JavaScript & CSS files

```html
<link href="../dist/css/smart_wizard.css" rel="stylesheet" type="text/css" />
<script src="../dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

For themed version:

```html
<link href="../dist/css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
```

### Initialize Smart Wizard

```javascript
$(document).ready(function(){
  $('#smartwizard').smartWizard();
});
```

### The HTML Markup

```html
<div id="smartwizard">
  <ul>
    <li><a href="#step-1">Step Title<br /><small>Step description</small></a></li>
    <li><a href="#step-2">Step Title<br /><small>Step description</small></a></li>
    <li><a href="#step-3">Step Title<br /><small>Step description</small></a></li>
    <li><a href="#step-4">Step Title<br /><small>Step description</small></a></li>
  </ul>

  <div>
    <div id="step-1">Step Content</div>
    <div id="step-2">Step Content</div>
    <div id="step-3">Step Content</div>
    <div id="step-4">Step Content</div>
  </div>
</div>
```

## Configuration

### Example: Smart Wizard Initialize with all option parameters

```javascript
$('#smartwizard').smartWizard({
  selected: 0, // Initial selected step, 0 = first step
  keyNavigation: true, // Enable/Disable keyboard navigation
  autoAdjustHeight: true, // Automatically adjust content height
  cycleSteps: false, // Allows to cycle the navigation of steps
  backButtonSupport: true, // Enable the back button support
  useURLhash: true, // Enable selection of the step based on url hash
  lang: {
    next: 'Next',
    previous: 'Previous'
  },
  toolbarSettings: {
    toolbarPosition: 'bottom', // none, top, bottom, both
    toolbarButtonPosition: 'right', // left, right
    showNextButton: true,
    showPreviousButton: true,
    toolbarExtraButtons: [
      $('<button></button>').text('Finish')
        .addClass('btn btn-info')
        .on('click', function(){
          alert('Finish button click');
        }),
      $('<button></button>').text('Cancel')
        .addClass('btn btn-danger')
        .on('click', function(){
          alert('Cancel button click');
        })
    ]
  },
  anchorSettings: {
    anchorClickable: true,
    enableAllAnchors: false,
    markDoneStep: true,
    enableAnchorOnDoneStep: true
  },
  contentURL: null, // Enables Ajax content loading
  disabledSteps: [],
  errorSteps: [],
  theme: 'dots',
  transitionEffect: 'fade', // none/slide/fade
  transitionSpeed: '400'
});
```

## Events

### Event Initialize

```javascript
// Initialize Smart Wizard
$('#smartwizard').smartWizard();

// Initialize the leaveStep event
$("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
  return confirm("Do you want to leave the step " + stepNumber + "?");
});

// Initialize the showStep event
$("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
  alert("You are on step " + stepNumber + " now");
});

// Initialize the beginReset event
$("#smartwizard").on("beginReset", function(e) {
  return confirm("Do you want to reset the wizard?");
});

// Initialize the endReset event
$("#smartwizard").on("endReset", function(e) {
  alert("endReset called");
});

// Initialize the themeChanged event
$("#smartwizard").on("themeChanged", function(e, theme) {
  alert("Theme changed. New theme name: " + theme);
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE).

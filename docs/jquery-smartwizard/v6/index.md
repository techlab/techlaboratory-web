---
title: jQuery SmartWizard v6
description: The awesome step wizard plugin for jQuery
head:
  - - meta
    - name: description
      content: The awesome step wizard plugin for jQuery
  - - meta
    - name: keywords
      content: wizard, step, jQuery, jQuery plugin, jQuery wizard, jQuery step wizard
---

# jQuery SmartWizard <Badge type="tip" text="v6" />

The awesome step wizard plugin for jQuery. 

##

**jQuery Smart Wizard** is an accessible step wizard plugin for jQuery. Provides a neat and stylish interface for your forms, checkout screen, registration steps, etc. Easy implementation, Bootstrap compatibility, customizable toolbars, themes, events and Ajax support are few of the features.

<div style="display: flex; gap: 10px; flex-wrap: wrap;">

[![Build Status](https://travis-ci.org/techlab/jquery-smartwizard.svg?branch=master)](https://travis-ci.org/techlab/jquery-smartwizard)  

[![npm version](https://badge.fury.io/js/smartwizard.svg)](https://www.npmjs.com/package/smartwizard) 

[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/smartwizard/badge?style=rounded)](https://www.jsdelivr.com/package/npm/smartwizard) 

[![Npm Downloads](https://badgen.net/npm/dm/smartwizard?icon=npm)](https://www.npmjs.com/package/smartwizard) 

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/jquery-smartwizard/master/LICENSE) 

[![GitHub Repo](https://badgen.net/badge/icon/jquery-smartwizard?icon=github&label=&color=0da4d3)](https://github.com/techlab/jquery-smartwizard) 

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-techlab-blue.svg?logo=github)](https://github.com/sponsors/techlab) 

</div>


## Demo

::: tip Interactive Demos Available
Visit our **[Interactive Demo Page](/jquery-smartwizard/v6/demo)** to explore multiple live examples:

- 🎯 **Basic Demo** - Simple 4-step wizard
- ✅ **Form Validation** - Wizard with validation
- 🔄 **Ajax Content** - Dynamic content loading
- 🌐 **RTL Support** - Right-to-left languages
- 🎨 **Themes** - Multiple visual themes

[View All Demos →](/jquery-smartwizard/v6/demo)
:::

## Screenshots

![jQuery SmartWizard Demo](/images/screenshots/jquery-smartwizard-demo.png)


## Installation

### Using package managers 

**NPM**

```bash
npm install smartwizard
```

**Yarn**

```bash
yarn add smartwizard
```

### CDN

**jsDelivr**

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

**UNPKG**

```html
<!-- CSS -->
<link href="https://unpkg.com/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://unpkg.com/smartwizard@6/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

## Downloads

[Download jQuery Smart Wizard](https://github.com/techlab/jquery-smartwizard/archive/master.zip)


## Usage

**Common JS**

```javascript
var $ = require("jquery");
require("smartwizard/dist/css/smart_wizard_all.css");
const smartWizard = require("smartwizard");

$(function() {
  $('#smartwizard').smartWizard();
});
```

**ES6**

```javascript
import $ from "jquery";
import "smartwizard/dist/css/smart_wizard_all.css";
import smartWizard from 'smartwizard';

$(function() {
  $('#smartwizard').smartWizard();
});
```


## Features

- Easy to implement and minimal HTML required
- Supports all modern browsers
- Responsive CSS design
- Bootstrap compatible
- Cool themes included and can be easily customized
- Easy color customization using CSS variables
- Built-in transition animations (none|fade|slideHorizontal|slideVertical|slideSwing|css)
- Transition animations can be added easily by extending
- CSS Animations support for transition animations (supports Animate.css)
- Form validation support
- RTL(Right-to-left language) support
- Accessible controls
- External controls support
- Easy ajax content integration
- Keyboard navigation
- Auto content height adjustment
- Customizable toolbar and option to provide extra HTML
- Built-in progressbar
- Built-in loader
- Built-in events
- UMD (Universal Module Definition) support
- Compatible with all jQuery versions (jQuery 1.11.1+, jQuery 3.6+, and jQuery Slim)

## Documentation

### Requirements

- [jQuery](https://jquery.com/)

### Include CSS

```html
<link href="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />
```

### The HTML Markup

```html
<!-- SmartWizard html -->
<div id="smartwizard">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="#step-1">
        <div class="num">1</div>
        Step Title
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#step-2">
        <span class="num">2</span>
        Step Title
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#step-3">
        <span class="num">3</span>
        Step Title
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#step-4">
        <span class="num">4</span>
        Step Title
      </a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
      Step content
    </div>
    <div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
      Step content
    </div>
    <div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
      Step content
    </div>
    <div id="step-4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
      Step content
    </div>
  </div>

  <!-- Include optional progressbar HTML -->
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
```

### Include JavaScript
_Note:- jQuery should be included before the jQuery SmartWizard JavaScript file._

```html
<script src="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### Initialize the jQuery SmartWizard

```javascript
$(function() {
  // SmartWizard initialize
  $('#smartwizard').smartWizard();
});
```

### CSS Files Selection

You can see many CSS files at `dist/css/` folder and may be confused about which one to use. The answer is you can use any of them, all the CSS files are standalone. Only difference in these files is the theme. The file `../dist/css/smart_wizard_all.css` contains all the themes, while the `../dist/css/smart_wizard.css` only contains the default theme. Also other files are theme-specific files named with the respective theme names, like `../dist/css/smart_wizard_(theme name).css`.

All these files have corresponding min files that are compressed for size reduction, those files are recommended unless you don't want to customize the CSS yourself. Ex. `../dist/css/smart_wizard_all.min.css`

## Advanced Options

### Optional Parameters

```javascript
$('#smartwizard').smartWizard({
  selected: 0, // Initial selected step, 0 = first step
  theme: 'default', // theme for the wizard, related css need to include for other than default theme
  justified: true, // Nav menu justification. true/false
  autoAdjustHeight: true, // Automatically adjust content height
  backButtonSupport: true, // Enable the back button support
  enableUrlHash: true, // Enable selection of the step based on url hash
  transition: {
    animation: 'none', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css
    speed: '400', // Animation speed. Not used if animation is 'css'
    easing: '', // Animation easing. Not supported without a jQuery easing plugin
    prefixCss: '', // Only used if animation is 'css'. Animation CSS prefix
    fwdShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on forward direction
    fwdHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on forward direction
    bckShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on backward direction
    bckHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on backward direction
  },
  toolbar: {
    position: 'bottom', // none|top|bottom|both
    showNextButton: true, // show/hide a Next button
    showPreviousButton: true, // show/hide a Previous button
    extraHtml: '' // Extra html to show on toolbar
  },
  anchor: {
    enableNavigation: true, // Enable/Disable anchor navigation
    enableNavigationAlways: false, // Activates all anchors clickable always
    enableDoneState: true, // Add done state on visited steps
    markPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
    unDoneOnBackNavigation: false, // While navigate back, done state will be cleared
    enableDoneStateNavigation: true // Enable/Disable the done state navigation
  },
  keyboard: {
    keyNavigation: true, // Enable/Disable keyboard navigation
    keyLeft: [37], // Left key code
    keyRight: [39] // Right key code
  },
  lang: {
    next: 'Next',
    previous: 'Previous'
  },
  disabledSteps: [], // Array Steps disabled
  errorSteps: [], // Array Steps error
  warningSteps: [], // Array Steps warning
  hiddenSteps: [], // Hidden steps
  getContent: null // Callback function for content loading
});
```

### Ajax Content Implementation

External ajax based contents are supported using `getContent` callback function which is called before showing each step. The `getContent` callback function will receive 5 parameters:

- **stepIndex** - (integer) zero based index number of the steps
- **stepDirection** - (string) step direction (forward/backward)
- **stepPosition** - (string) step position (first/last/middle)
- **selStep** - (object) jQuery object of the anchor element to show
- **callback** - (function) the callback function which accepts HTML content as string

[See live example](https://techlaboratory.net/projects/demo/jquery-smart-wizard/v6/ajax)

## Public Functions

jQuery SmartWizard has public methods that help to handle the Wizard from external controls.

### next

Navigates to next step

```javascript
$('#smartwizard').smartWizard("next");
```

### prev

Navigates to previous step

```javascript
$('#smartwizard').smartWizard("prev");
```

### reset

Reset the wizard to initial state

```javascript
$('#smartwizard').smartWizard("reset");
```

### goToStep

Allow you to go to a certain step. The function accepts 2 parameters:

- **stepIndex** - (integer) zero based index number of the steps to which to go
- **force** - (boolean) it will forcefully navigate to the step without checking if it is a visited step or not

```javascript
// Go to step without force
$('#smartwizard').smartWizard("goToStep", 3);

// Go to step with force
$('#smartwizard').smartWizard("goToStep", 3, true);
```

### setOptions

Allow you to set the options dynamically.

```javascript
// Change theme
var options = {
  theme: 'arrows'
};
$('#smartwizard').smartWizard("setOptions", options);

// Change animation
var options = {
  transition: {
    animation: 'slideHorizontal'
  },
};
$('#smartwizard').smartWizard("setOptions", options);
```

### getOptions

Gets the jQuery SmartWizard options

```javascript
let options = $('#smartwizard').smartWizard("getOptions");
console.log(options);
```

### getStepInfo

Gets the jQuery SmartWizard step info. Ex: `{ currentStep: 1, totalSteps: 4 }`

```javascript
let stepInfo = $('#smartwizard').smartWizard("getStepInfo");
console.log(stepInfo);
```

### setState

Set the state of a step. Parameters are array of step index and name of state (default/active/done/disable/hidden/error/warning).

```javascript
// Disable step
$('#smartwizard').smartWizard("setState", [1,3], "disable");
```

### unsetState

Unset the state of a step. Parameters are array of step index and name of state (default/active/done/disable/hidden/error/warning).

```javascript
// Enable step
$('#smartwizard').smartWizard("unsetState", [1,3], "disable");
```

### loader

Allow you to show/hide the built-in loader animation.

```javascript
// Show the loader
$('#smartwizard').smartWizard("loader", "show");

// Hide the loader
$('#smartwizard').smartWizard("loader", "hide");
```

### fixHeight

Adjust the content height of the current step.

```javascript
$('#smartwizard').smartWizard("fixHeight");
```

## Parameters

### selected

**(integer)** Initial selected step, 0 = first step. Default: `0`

### theme

**(string)** Theme for the wizard. Default: `'default'`

### justified

**(boolean)** Nav menu justification. Default: `true`

### autoAdjustHeight

**(boolean)** Automatically adjust content height. Default: `true`

### backButtonSupport

**(boolean)** Enable the back button support. Default: `true`

### enableUrlHash

**(boolean)** Enable selection of the step based on url hash. Default: `true`

### transition

**(object)** Settings for transition animation with the following options:

- **animation** - (string) Effect on navigation
- **speed** - (string) Animation speed
- **easing** - (string) Animation easing
- **prefixCss** - (string) Animation CSS prefix
- **fwdShowCss** - (string) Step show Animation CSS on forward
- **fwdHideCss** - (string) Step hide Animation CSS on forward
- **bckShowCss** - (string) Step show Animation CSS on backward
- **bckHideCss** - (string) Step hide Animation CSS on backward

### toolbar

**(object)** Settings for the toolbar with the following options:

- **position** - (string) none|top|bottom|both
- **showNextButton** - (boolean) show/hide a Next button
- **showPreviousButton** - (boolean) show/hide a Previous button
- **extraHtml** - (string) Extra html to show on toolbar

Example:

```javascript
function onFinish(){
  alert('Finish Clicked');
}

function onCancel(){
  $('#smartwizard').smartWizard("reset");
}

$('#smartwizard').smartWizard({
  toolbar: {
    showNextButton: true,
    showPreviousButton: true,
    position: 'both',
    extraHtml: `<button class="btn btn-success" onclick="onFinish()">Finish</button>
                <button class="btn btn-secondary" onclick="onCancel()">Cancel</button>`
  }
});
```

### anchor

**(object)** Settings for the anchor with the following options:

- **enableNavigation** - (boolean) Enable/Disable anchor navigation
- **enableNavigationAlways** - (boolean) Activates all anchors clickable all times
- **enableDoneState** - (boolean) Add done state on navigation
- **markPreviousStepsAsDone** - (boolean) When a step selected by url hash, all previous steps are marked done
- **unDoneOnBackNavigation** - (boolean) While navigate back done step after active step will be cleared
- **enableDoneStateNavigation** - (boolean) Enable/Disable the done steps navigation

### keyboard

**(object)** Settings for the keyboard with the following options:

- **keyNavigation** - (boolean) Enable/Disable keyboard navigation
- **keyLeft** - (array) Left key code
- **keyRight** - (array) Right key code

### lang

**(object)** Language settings with the following options:

- **next** - (string) Next button label
- **previous** - (string) Previous button label

### disabledSteps

**(array)** Steps disabled. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  disabledSteps: [0,1]
});
```

### errorSteps

**(array)** Step with errors. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  errorSteps: [1]
});
```

### warningSteps

**(array)** Step with warnings. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  warningSteps: [1]
});
```

### hiddenSteps

**(array)** Hidden steps. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  hiddenSteps: [2,3]
});
```

### getContent

**(function)** Callback function to provide step content. Default value is `null`.

```javascript
function provideContent(idx, stepDirection, stepPosition, selStep, callback) {
  callback();
}

$('#smartwizard').smartWizard({
  getContent: provideContent
});
```

## Events

### initialized

The `initialized` event triggers when the jQuery Smart Wizard is initialized.

```javascript
$("#smartwizard").on("initialized", function(e) {
  console.log("initialized");
});
```

### loaded

The `loaded` event triggers when the jQuery Smart Wizard is fully loaded.

```javascript
$("#smartwizard").on("loaded", function(e) {
  console.log("loaded");
});
```

### leaveStep

The `leaveStep` event triggers just before leaving from a step. You can cancel the event by returning `false`, so the navigation is also cancelled and the wizard will retain the current state.

The event will receive the following parameters:

- **anchorObject** - (object) jQuery object of the anchor element
- **currentStepIndex** - (integer) Index of the current step
- **nextStepIndex** - (integer) Index of the next step
- **stepDirection** - (string) Step direction

```javascript
$("#smartwizard").on("leaveStep", function(e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) {
  return confirm("Do you want to leave the step " + currentStepIndex + "?");
});
```

### showStep

The `showStep` event triggers when a step is shown.

The event will receive the following parameters:

- **anchorObject** - (object) jQuery object of the anchor element
- **stepIndex** - (integer) Index of the step
- **stepDirection** - (string) Step direction
- **stepPosition** - (string) Step position

```javascript
$("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection, stepPosition) {
  alert("You are on step " + stepIndex + " now");
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE). You are free to use on both personal and commercial environment as long as the copyright header is left intact.
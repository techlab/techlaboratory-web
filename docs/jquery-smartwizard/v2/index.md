---
title: jQuery SmartWizard v2
description: Smart and flexible jQuery step wizard plugin
---

# jQuery SmartWizard v2

::: danger Deprecated
This version is deprecated. Please upgrade to [v6](/jquery-smartwizard/v6/).
:::

Smart Wizard is a flexible jQuery plugin for wizard-like interface.

## Demo

::: tip Coming Soon
Interactive demos will be added here. For now, check out the [v6 demos](/jquery-smartwizard/v6/#demo).
:::

## Downloads

[Download jQuery Smart Wizard v2.0.1](https://github.com/techlab/jquery-smartwizard/archive/v2.0.1.zip)

## Features

- Easy to implement, minimal HTML required
- Ajax contents loading option
- Cool animation effects on step navigation (none/fade/slide/slideleft)
- Keyboard navigation option
- Horizontal and vertical style step anchors
- Easy step input validation option
- Option to highlight error steps
- In-built message box
- Easy navigation with step anchors and navigation buttons
- Can have multiple wizards on same page
- Option to enable all steps on first load

## Getting Started

### Basic Initialization

```javascript
$('#wizard').smartWizard();
```

### With Options

```javascript
$('#wizard').smartWizard({
  // Properties
  selected: 0, // Selected Step, 0 = first step
  keyNavigation: true, // Enable/Disable key navigation
  enableAllSteps: false, // Enable/Disable all steps on first load
  transitionEffect: 'fade', // Effect on navigation: none/fade/slide/slideleft
  contentURL: null, // Specifying content url enables ajax content loading
  contentCache: true, // Cache step contents
  cycleSteps: false, // Cycle step navigation
  enableFinishButton: false, // Makes finish button enabled always
  errorSteps: [], // Array of step numbers to highlight as error steps
  labelNext: 'Next', // Label for Next button
  labelPrevious: 'Previous', // Label for Previous button
  labelFinish: 'Finish', // Label for Finish button
  
  // Events
  onLeaveStep: null, // Triggers when leaving a step
  onShowStep: null, // Triggers when showing a step
  onFinish: null // Triggers when Finish button is clicked
});
```

## Installation

### Step 1: Include Files

```html
<head>
  <script type="text/javascript" src="jquery-1.4.2.min.js"></script>
  <link href="smart_wizard.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="jquery.smartWizard-2.0.min.js"></script>
</head>
```

### Step 2: The JavaScript

```html
<head>
  <script type="text/javascript">
    $(document).ready(function() {
      // Initialize Smart Wizard
      $('#wizard').smartWizard();
    });
  </script>
</head>
```

### Step 3: The HTML

```html
<body>
  <div id="wizard" class="swMain">
    <ul>
      <li><a href="#step-1">
        <label class="stepNumber">1</label>
        <span class="stepDesc">
          Step 1<br />
          <small>Step 1 description</small>
        </span>
      </a></li>
      <li><a href="#step-2">
        <label class="stepNumber">2</label>
        <span class="stepDesc">
          Step 2<br />
          <small>Step 2 description</small>
        </span>
      </a></li>
      <li><a href="#step-3">
        <label class="stepNumber">3</label>
        <span class="stepDesc">
          Step 3<br />
          <small>Step 3 description</small>
        </span>
      </a></li>
      <li><a href="#step-4">
        <label class="stepNumber">4</label>
        <span class="stepDesc">
          Step 4<br />
          <small>Step 4 description</small>
        </span>
      </a></li>
    </ul>

    <div id="step-1">
      <h2 class="StepTitle">Step 1 Content</h2>
      <!-- step content -->
    </div>
    <div id="step-2">
      <h2 class="StepTitle">Step 2 Content</h2>
      <!-- step content -->
    </div>
    <div id="step-3">
      <h2 class="StepTitle">Step 3 Title</h2>
      <!-- step content -->
    </div>
    <div id="step-4">
      <h2 class="StepTitle">Step 4 Title</h2>
      <!-- step content -->
    </div>
  </div>
</body>
```

## Load Ajax Content

### Basic Ajax Loading

```javascript
$(document).ready(function() {
  // Initialize Smart Wizard with ajax content load
  $('#wizard').smartWizard({
    contentURL: 'services/ajaxcontents.php'
  });
});
```

The PHP service will receive `$step_number = $_REQUEST["step_number"];`

### Ajax with Cache Disabled

```javascript
$(document).ready(function() {
  // Initialize Smart Wizard with ajax content load and cache disabled
  $('#wizard').smartWizard({
    contentURL: 'services/ajaxcontents.php',
    contentCache: false
  });
});
```

## Input Validation

Smart Wizard v2 provides easy step input validation options and the ability to highlight error steps.

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE).

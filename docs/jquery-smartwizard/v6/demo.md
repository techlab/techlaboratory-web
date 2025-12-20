---
title: jQuery SmartWizard v6 - Demos
description: Interactive demos of jQuery SmartWizard v6
layout: page
aside: false
---

<ClientOnly>
<div class="demo-page-container" style="max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem;">

<div style="margin-bottom: 2rem;">
  <a href="/jquery-smartwizard/v6/" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--vp-c-brand-1); text-decoration: none; font-weight: 600;">
    ← Back to Documentation
  </a>
</div>

# jQuery SmartWizard <Badge type="tip" text="v6" /> - Interactive Demos

<div class="demo-nav" style="margin: 2rem 0; padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 8px; border: 1px solid var(--vp-c-divider);">
  <div style="margin-bottom: 0.75rem; font-weight: 600; color: var(--vp-c-text-1);">Select a Demo:</div>
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
    <button onclick="showDemo('basic')" id="btn-basic" class="demo-btn active" style="padding: 0.5rem 1rem; background: var(--vp-c-brand-1); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s;">
      Basic
    </button>
    <button onclick="showDemo('validation')" id="btn-validation" class="demo-btn" style="padding: 0.5rem 1rem; background: var(--vp-c-bg-mute); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s;">
      Form Validation
    </button>
    <button onclick="showDemo('ajax')" id="btn-ajax" class="demo-btn" style="padding: 0.5rem 1rem; background: var(--vp-c-bg-mute); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s;">
      Ajax Content
    </button>
    <button onclick="showDemo('rtl')" id="btn-rtl" class="demo-btn" style="padding: 0.5rem 1rem; background: var(--vp-c-bg-mute); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s;">
      RTL Support
    </button>
    <button onclick="showDemo('themes')" id="btn-themes" class="demo-btn" style="padding: 0.5rem 1rem; background: var(--vp-c-bg-mute); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s;">
      Themes
    </button>
  </div>
</div>

<!-- Basic Demo -->
<div id="demo-basic" class="demo-container">
  <h2>Basic Demo</h2>
  <p>A simple wizard with 4 steps demonstrating the basic functionality of SmartWizard.</p>
  
  <div id="smartwizard-basic" style="margin: 2rem 0;">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#step-1">
          <div class="num">1</div>
          Customer Details
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#step-2">
          <span class="num">2</span>
          Products Details
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#step-3">
          <span class="num">3</span>
          Shipping Details
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#step-4">
          <span class="num">4</span>
          Confirm Order
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
        <h3>Customer Details</h3>
        <p>Please enter your customer information below:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Full Name *</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="John Doe" required>
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email Address *</label>
            <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="john@example.com" required>
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Phone Number</label>
            <input type="tel" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="+1 (555) 123-4567">
          </div>
        </div>
      </div>
      <div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
        <h3>Products Details</h3>
        <p>Select the products you wish to order:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;">
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px;">
              <div>
                <div style="font-weight: 600;">Product A - $29.99</div>
                <div style="font-size: 0.875rem; color: #666;">Premium quality product with excellent features</div>
              </div>
            </label>
          </div>
          <div style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;">
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px;">
              <div>
                <div style="font-weight: 600;">Product B - $49.99</div>
                <div style="font-size: 0.875rem; color: #666;">Advanced features for professional use</div>
              </div>
            </label>
          </div>
          <div style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;">
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px;">
              <div>
                <div style="font-weight: 600;">Product C - $19.99</div>
                <div style="font-size: 0.875rem; color: #666;">Budget-friendly option with great value</div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
        <h3>Shipping Details</h3>
        <p>Enter your shipping address:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Street Address *</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="123 Main St" required>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">City *</label>
              <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="New York" required>
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ZIP Code *</label>
              <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="10001" required>
            </div>
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Country *</label>
            <select style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" required>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
      <div id="step-4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
        <h3>✅ Confirm Order</h3>
        <p>Please review your order details before confirming:</p>
        <div style="max-width: 500px; padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
          <h4 style="margin-top: 0; color: #5ea8de;">Order Summary</h4>
          <p style="margin: 0.5rem 0;"><strong>Customer:</strong> Review your details in step 1</p>
          <p style="margin: 0.5rem 0;"><strong>Products:</strong> Review your selection in step 2</p>
          <p style="margin: 0.5rem 0;"><strong>Shipping:</strong> Review your address in step 3</p>
          <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 2px solid #e5e7eb;">
            <p style="font-size: 1.125rem; font-weight: 700; margin: 0;">Ready to complete your order?</p>
            <p style="margin: 0.5rem 0; color: #666;">Click the "Finish" button below to place your order.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>

<!-- Form Validation Demo -->
<div id="demo-validation" class="demo-container" style="display: none;">
  <h2>Form Validation Demo</h2>
  <p>This demo shows how to integrate form validation with SmartWizard. Try clicking "Next" without filling the required fields.</p>
  
  <div id="smartwizard-validation" style="margin: 2rem 0;">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#val-step-1">
          <div class="num">1</div>
          Account Info
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#val-step-2">
          <span class="num">2</span>
          Profile
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#val-step-3">
          <span class="num">3</span>
          Complete
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="val-step-1" class="tab-pane" role="tabpanel">
        <h3>Account Information</h3>
        <form id="form-step-1">
          <div style="max-width: 500px;">
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Username * <span style="color: red; font-size: 0.875rem;" id="username-error"></span></label>
              <input type="text" id="username" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="Enter username" required>
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email * <span style="color: red; font-size: 0.875rem;" id="email-error"></span></label>
              <input type="email" id="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="your@email.com" required>
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Password * <span style="color: red; font-size: 0.875rem;" id="password-error"></span></label>
              <input type="password" id="password" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="Enter password" required>
            </div>
          </div>
        </form>
      </div>
      <div id="val-step-2" class="tab-pane" role="tabpanel">
        <h3>Profile Information</h3>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">First Name</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="John">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Last Name</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="Doe">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Bio</label>
            <textarea style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; min-height: 100px;" placeholder="Tell us about yourself"></textarea>
          </div>
        </div>
      </div>
      <div id="val-step-3" class="tab-pane" role="tabpanel">
        <h3>🎉 Registration Complete!</h3>
        <p>Your account has been created successfully.</p>
        <div style="max-width: 500px; padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border: 1px solid #86efac;">
          <p style="margin: 0; color: #166534; font-weight: 600;">✓ Account created successfully!</p>
        </div>
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</div>

<!-- Ajax Content Demo -->
<div id="demo-ajax" class="demo-container" style="display: none;">
  <h2>Ajax Content Demo</h2>
  <p>This demo simulates loading content dynamically via Ajax. Content is loaded when you navigate to each step.</p>
  
  <div id="smartwizard-ajax" style="margin: 2rem 0;">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#ajax-step-1">
          <div class="num">1</div>
          Step 1
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ajax-step-2">
          <span class="num">2</span>
          Step 2
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ajax-step-3">
          <span class="num">3</span>
          Step 3
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="ajax-step-1" class="tab-pane" role="tabpanel">
        <div class="ajax-content">
          <div style="text-align: center; padding: 2rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 1rem; color: #666;">Loading content...</p>
          </div>
        </div>
      </div>
      <div id="ajax-step-2" class="tab-pane" role="tabpanel">
        <div class="ajax-content">
          <div style="text-align: center; padding: 2rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 1rem; color: #666;">Loading content...</p>
          </div>
        </div>
      </div>
      <div id="ajax-step-3" class="tab-pane" role="tabpanel">
        <div class="ajax-content">
          <div style="text-align: center; padding: 2rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 1rem; color: #666;">Loading content...</p>
          </div>
        </div>
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</div>

<!-- RTL Demo -->
<div id="demo-rtl" class="demo-container" style="display: none;">
  <h2>RTL (Right-to-Left) Demo</h2>
  <p>This demo shows SmartWizard with RTL support for languages like Arabic, Hebrew, etc.</p>
  
  <div id="smartwizard-rtl" style="margin: 2rem 0; direction: rtl;">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#rtl-step-1">
          <div class="num">1</div>
          الخطوة الأولى
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#rtl-step-2">
          <span class="num">2</span>
          الخطوة الثانية
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#rtl-step-3">
          <span class="num">3</span>
          الخطوة الثالثة
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="rtl-step-1" class="tab-pane" role="tabpanel">
        <h3>معلومات شخصية</h3>
        <p>الرجاء إدخال معلوماتك الشخصية أدناه:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">الاسم الكامل *</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;" placeholder="أدخل اسمك">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">البريد الإلكتروني *</label>
            <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;" placeholder="email@example.com">
          </div>
        </div>
      </div>
      <div id="rtl-step-2" class="tab-pane" role="tabpanel">
        <h3>العنوان</h3>
        <p>أدخل عنوانك:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">الشارع</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">المدينة</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;">
          </div>
        </div>
      </div>
      <div id="rtl-step-3" class="tab-pane" role="tabpanel">
        <h3>✅ اكتمل!</h3>
        <p>تم إكمال النموذج بنجاح.</p>
        <div style="max-width: 500px; padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border: 1px solid #86efac;">
          <p style="margin: 0; color: #166534; font-weight: 600;">✓ تم بنجاح!</p>
        </div>
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</div>

<!-- Themes Demo -->
<div id="demo-themes" class="demo-container" style="display: none;">
  <h2>Themes Demo</h2>
  <p>SmartWizard comes with multiple built-in themes. Select a theme to see it in action:</p>
  
  <div style="margin: 1.5rem 0; padding: 1rem; background: var(--vp-c-bg-soft); border-radius: 6px;">
    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Select Theme:</label>
    <select id="theme-selector" onchange="changeTheme(this.value)" style="padding: 0.5rem 1rem; border: 1px solid var(--vp-c-divider); border-radius: 4px; background: var(--vp-c-bg);">
      <option value="default">Default</option>
      <option value="arrows">Arrows</option>
      <option value="dots">Dots</option>
      <option value="progress">Progress</option>
    </select>
  </div>
  
  <div id="smartwizard-themes" style="margin: 2rem 0;">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#theme-step-1">
          <div class="num">1</div>
          First
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#theme-step-2">
          <span class="num">2</span>
          Second
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#theme-step-3">
          <span class="num">3</span>
          Third
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#theme-step-4">
          <span class="num">4</span>
          Fourth
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="theme-step-1" class="tab-pane" role="tabpanel">
        <h3>Step 1</h3>
        <p>This is the first step. Notice the theme styling on the navigation.</p>
      </div>
      <div id="theme-step-2" class="tab-pane" role="tabpanel">
        <h3>Step 2</h3>
        <p>This is the second step. The theme affects how the steps are displayed.</p>
      </div>
      <div id="theme-step-3" class="tab-pane" role="tabpanel">
        <h3>Step 3</h3>
        <p>This is the third step. Try changing the theme using the dropdown above.</p>
      </div>
      <div id="theme-step-4" class="tab-pane" role="tabpanel">
        <h3>Step 4</h3>
        <p>This is the final step. Each theme provides a unique visual style.</p>
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</div>

<style>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.demo-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.demo-btn.active {
  background: var(--vp-c-brand-1) !important;
  color: white !important;
  border-color: var(--vp-c-brand-1) !important;
}
</style>

<script>
if (typeof window !== 'undefined') {
  // Load CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css';
  document.head.appendChild(cssLink);
  
  // Load jQuery
  const jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  jqueryScript.onload = function() {
    // Load SmartWizard after jQuery is loaded
    const swScript = document.createElement('script');
    swScript.src = 'https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js';
    swScript.onload = function() {
      initializeDemos();
    };
    document.head.appendChild(swScript);
  };
  document.head.appendChild(jqueryScript);

  // Demo navigation
  window.showDemo = function(demoType) {
    // Hide all demos
    document.querySelectorAll('.demo-container').forEach(el => {
      el.style.display = 'none';
    });
    
    // Show selected demo
    document.getElementById('demo-' + demoType).style.display = 'block';
    
    // Update button states
    document.querySelectorAll('.demo-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.style.background = 'var(--vp-c-bg-mute)';
      btn.style.color = 'var(--vp-c-text-1)';
      btn.style.border = '1px solid var(--vp-c-divider)';
    });
    
    const activeBtn = document.getElementById('btn-' + demoType);
    activeBtn.classList.add('active');
    activeBtn.style.background = 'var(--vp-c-brand-1)';
    activeBtn.style.color = 'white';
    activeBtn.style.border = 'none';
  }

  // Theme changer
  window.changeTheme = function(theme) {
    if (window.themesWizard) {
      $('#smartwizard-themes').smartWizard('theme', theme);
    }
  }
}

function initializeDemos() {
  // Basic Demo
  $('#smartwizard-basic').smartWizard({
    selected: 0,
    theme: 'default',
    transition: {
      animation: 'slideHorizontal',
      speed: 400
    },
    toolbar: {
      position: 'bottom',
      showNextButton: true,
      showPreviousButton: true
    }
  });

  // Validation Demo
  $('#smartwizard-validation').smartWizard({
    selected: 0,
    theme: 'default',
    transition: {
      animation: 'fade'
    },
    toolbar: {
      position: 'bottom'
    }
  });

  // Add validation
  $('#smartwizard-validation').on('leaveStep', function(e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) {
    if (stepDirection === 'forward' && currentStepIndex === 0) {
      let isValid = true;
      const username = $('#username').val();
      const email = $('#email').val();
      const password = $('#password').val();

      $('#username-error').text('');
      $('#email-error').text('');
      $('#password-error').text('');

      if (!username) {
        $('#username-error').text('Required');
        isValid = false;
      }
      if (!email) {
        $('#email-error').text('Required');
        isValid = false;
      }
      if (!password) {
        $('#password-error').text('Required');
        isValid = false;
      }

      return isValid;
    }
    return true;
  });

  // Ajax Demo
  $('#smartwizard-ajax').smartWizard({
    selected: 0,
    theme: 'default',
    transition: {
      animation: 'slideHorizontal'
    },
    toolbar: {
      position: 'bottom'
    }
  });

  // Simulate Ajax loading
  $('#smartwizard-ajax').on('showStep', function(e, anchorObject, stepIndex, stepDirection) {
    const stepId = $(anchorObject).attr('href');
    const content = $(stepId).find('.ajax-content');
    
    setTimeout(function() {
      content.html(`
        <h3>Step ${stepIndex + 1} Content</h3>
        <p>This content was loaded dynamically via Ajax simulation.</p>
        <div style="padding: 1rem; background: #f0f9ff; border-radius: 6px; border: 1px solid #bae6fd;">
          <p style="margin: 0; color: #0369a1;">✓ Content loaded successfully at ${new Date().toLocaleTimeString()}</p>
        </div>
      `);
    }, 800);
  });

  // RTL Demo
  $('#smartwizard-rtl').smartWizard({
    selected: 0,
    theme: 'default',
    transition: {
      animation: 'slideHorizontal'
    },
    toolbar: {
      position: 'bottom'
    }
  });

  // Themes Demo
  window.themesWizard = $('#smartwizard-themes').smartWizard({
    selected: 0,
    theme: 'default',
    transition: {
      animation: 'slideHorizontal'
    },
    toolbar: {
      position: 'bottom'
    }
  });
}
</script>

</div> <!-- Close demo-page-container -->
</ClientOnly>

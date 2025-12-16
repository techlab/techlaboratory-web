import{_ as p,C as g,c as m,o as q,j as t,a2 as c,a as n,G as v}from"./chunks/framework.CP-ncyW7.js";if(typeof window<"u"){const r=document.createElement("link");r.rel="stylesheet",r.href="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css",document.head.appendChild(r);const e=document.createElement("script");e.src="https://code.jquery.com/jquery-3.6.0.min.js",e.onload=function(){const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js",o.onload=function(){b()},document.head.appendChild(o)},document.head.appendChild(e),window.showDemo=function(o){document.querySelectorAll(".demo-container").forEach(l=>{l.style.display="none"}),document.getElementById("demo-"+o).style.display="block",document.querySelectorAll(".demo-btn").forEach(l=>{l.classList.remove("active"),l.style.background="var(--vp-c-bg-mute)",l.style.color="var(--vp-c-text-1)",l.style.border="1px solid var(--vp-c-divider)"});const i=document.getElementById("btn-"+o);i.classList.add("active"),i.style.background="var(--vp-c-brand-1)",i.style.color="white",i.style.border="none"},window.changeTheme=function(o){window.themesWizard&&$("#smartwizard-themes").smartWizard("theme",o)}}function b(){$("#smartwizard-basic").smartWizard({selected:0,theme:"default",transition:{animation:"slideHorizontal",speed:400},toolbar:{position:"bottom",showNextButton:!0,showPreviousButton:!0}}),$("#smartwizard-validation").smartWizard({selected:0,theme:"default",transition:{animation:"fade"},toolbar:{position:"bottom"}}),$("#smartwizard-validation").on("leaveStep",function(r,e,o,i,l){if(l==="forward"&&o===0){let a=!0;const d=$("#username").val(),s=$("#email").val(),u=$("#password").val();return $("#username-error").text(""),$("#email-error").text(""),$("#password-error").text(""),d||($("#username-error").text("Required"),a=!1),s||($("#email-error").text("Required"),a=!1),u||($("#password-error").text("Required"),a=!1),a}return!0}),$("#smartwizard-ajax").smartWizard({selected:0,theme:"default",transition:{animation:"slideHorizontal"},toolbar:{position:"bottom"}}),$("#smartwizard-ajax").on("showStep",function(r,e,o,i){const l=$(e).attr("href"),a=$(l).find(".ajax-content");setTimeout(function(){a.html(`
        <h3>Step ${o+1} Content</h3>
        <p>This content was loaded dynamically via Ajax simulation.</p>
        <div style="padding: 1rem; background: #f0f9ff; border-radius: 6px; border: 1px solid #bae6fd;">
          <p style="margin: 0; color: #0369a1;">✓ Content loaded successfully at ${new Date().toLocaleTimeString()}</p>
        </div>
      `)},800)}),$("#smartwizard-rtl").smartWizard({selected:0,theme:"default",transition:{animation:"slideHorizontal"},toolbar:{position:"bottom"}}),window.themesWizard=$("#smartwizard-themes").smartWizard({selected:0,theme:"default",transition:{animation:"slideHorizontal"},toolbar:{position:"bottom"}})}const k=JSON.parse('{"title":"jQuery SmartWizard v6 - Demos","description":"Interactive demos of jQuery SmartWizard v6","frontmatter":{"title":"jQuery SmartWizard v6 - Demos","description":"Interactive demos of jQuery SmartWizard v6","layout":"home","aside":false},"headers":[],"relativePath":"jquery-smartwizard/v6/demo.md","filePath":"jquery-smartwizard/v6/demo.md"}'),h={name:"jquery-smartwizard/v6/demo.md"},y={class:"demo-page-container",style:{"max-width":"1200px",margin:"0 auto",padding:"2rem 1.5rem"}},x={id:"jquery-smartwizard-interactive-demos",tabindex:"-1"};function f(r,e,o,i,l,a){const d=g("Badge");return q(),m("div",null,[t("div",y,[e[3]||(e[3]=t("div",{style:{"margin-bottom":"2rem"}},[t("a",{href:"/jquery-smartwizard/v6/",style:{display:"inline-flex","align-items":"center",gap:"0.5rem",color:"var(--vp-c-brand-1)","text-decoration":"none","font-weight":"600"}}," ← Back to Documentation ")],-1)),t("h1",x,[e[0]||(e[0]=n("jQuery SmartWizard ",-1)),v(d,{type:"tip",text:"v6"}),e[1]||(e[1]=n(" - Interactive Demos ",-1)),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#jquery-smartwizard-interactive-demos","aria-label":'Permalink to "jQuery SmartWizard <Badge type="tip" text="v6" /> - Interactive Demos"'},"​",-1))]),e[4]||(e[4]=t("div",{class:"demo-nav",style:{margin:"2rem 0",padding:"1rem",background:"var(--vp-c-bg-soft)","border-radius":"8px",border:"1px solid var(--vp-c-divider)"}},[t("div",{style:{"margin-bottom":"0.75rem","font-weight":"600",color:"var(--vp-c-text-1)"}},"Select a Demo:"),t("div",{style:{display:"flex",gap:"0.75rem","flex-wrap":"wrap"}},[t("button",{onclick:"showDemo('basic')",id:"btn-basic",class:"demo-btn active",style:{padding:"0.5rem 1rem",background:"var(--vp-c-brand-1)",color:"white",border:"none","border-radius":"6px",cursor:"pointer","font-weight":"600",transition:"all 0.2s"}}," Basic "),t("button",{onclick:"showDemo('validation')",id:"btn-validation",class:"demo-btn",style:{padding:"0.5rem 1rem",background:"var(--vp-c-bg-mute)",color:"var(--vp-c-text-1)",border:"1px solid var(--vp-c-divider)","border-radius":"6px",cursor:"pointer","font-weight":"600",transition:"all 0.2s"}}," Form Validation "),t("button",{onclick:"showDemo('ajax')",id:"btn-ajax",class:"demo-btn",style:{padding:"0.5rem 1rem",background:"var(--vp-c-bg-mute)",color:"var(--vp-c-text-1)",border:"1px solid var(--vp-c-divider)","border-radius":"6px",cursor:"pointer","font-weight":"600",transition:"all 0.2s"}}," Ajax Content "),t("button",{onclick:"showDemo('rtl')",id:"btn-rtl",class:"demo-btn",style:{padding:"0.5rem 1rem",background:"var(--vp-c-bg-mute)",color:"var(--vp-c-text-1)",border:"1px solid var(--vp-c-divider)","border-radius":"6px",cursor:"pointer","font-weight":"600",transition:"all 0.2s"}}," RTL Support "),t("button",{onclick:"showDemo('themes')",id:"btn-themes",class:"demo-btn",style:{padding:"0.5rem 1rem",background:"var(--vp-c-bg-mute)",color:"var(--vp-c-text-1)",border:"1px solid var(--vp-c-divider)","border-radius":"6px",cursor:"pointer","font-weight":"600",transition:"all 0.2s"}}," Themes ")])],-1)),e[5]||(e[5]=c(`<div id="demo-basic" class="demo-container"><h2>Basic Demo</h2><p>A simple wizard with 4 steps demonstrating the basic functionality of SmartWizard.</p><div id="smartwizard-basic" style="margin:2rem 0;"><ul class="nav"><li class="nav-item"><a class="nav-link" href="#step-1"><div class="num">1</div> Customer Details </a></li><li class="nav-item"><a class="nav-link" href="#step-2"><span class="num">2</span> Products Details </a></li><li class="nav-item"><a class="nav-link" href="#step-3"><span class="num">3</span> Shipping Details </a></li><li class="nav-item"><a class="nav-link" href="#step-4"><span class="num">4</span> Confirm Order </a></li></ul><pre><code>&lt;div class=&quot;tab-content&quot;&gt;
  &lt;div id=&quot;step-1&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;step-1&quot;&gt;
    &lt;h3&gt;Customer Details&lt;/h3&gt;
    &lt;p&gt;Please enter your customer information below:&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px;&quot;&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Full Name *&lt;/label&gt;
        &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;John Doe&quot; required&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Email Address *&lt;/label&gt;
        &lt;input type=&quot;email&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;john@example.com&quot; required&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Phone Number&lt;/label&gt;
        &lt;input type=&quot;tel&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;+1 (555) 123-4567&quot;&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;step-2&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;step-2&quot;&gt;
    &lt;h3&gt;Products Details&lt;/h3&gt;
    &lt;p&gt;Select the products you wish to order:&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px;&quot;&gt;
      &lt;div style=&quot;margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;&quot;&gt;
        &lt;label style=&quot;display: flex; align-items: center; gap: 0.75rem; cursor: pointer;&quot;&gt;
          &lt;input type=&quot;checkbox&quot; style=&quot;width: 18px; height: 18px;&quot;&gt;
          &lt;div&gt;
            &lt;div style=&quot;font-weight: 600;&quot;&gt;Product A - $29.99&lt;/div&gt;
            &lt;div style=&quot;font-size: 0.875rem; color: #666;&quot;&gt;Premium quality product with excellent features&lt;/div&gt;
          &lt;/div&gt;
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;&quot;&gt;
        &lt;label style=&quot;display: flex; align-items: center; gap: 0.75rem; cursor: pointer;&quot;&gt;
          &lt;input type=&quot;checkbox&quot; style=&quot;width: 18px; height: 18px;&quot;&gt;
          &lt;div&gt;
            &lt;div style=&quot;font-weight: 600;&quot;&gt;Product B - $49.99&lt;/div&gt;
            &lt;div style=&quot;font-size: 0.875rem; color: #666;&quot;&gt;Advanced features for professional use&lt;/div&gt;
          &lt;/div&gt;
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;&quot;&gt;
        &lt;label style=&quot;display: flex; align-items: center; gap: 0.75rem; cursor: pointer;&quot;&gt;
          &lt;input type=&quot;checkbox&quot; style=&quot;width: 18px; height: 18px;&quot;&gt;
          &lt;div&gt;
            &lt;div style=&quot;font-weight: 600;&quot;&gt;Product C - $19.99&lt;/div&gt;
            &lt;div style=&quot;font-size: 0.875rem; color: #666;&quot;&gt;Budget-friendly option with great value&lt;/div&gt;
          &lt;/div&gt;
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;step-3&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;step-3&quot;&gt;
    &lt;h3&gt;Shipping Details&lt;/h3&gt;
    &lt;p&gt;Enter your shipping address:&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px;&quot;&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Street Address *&lt;/label&gt;
        &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;123 Main St&quot; required&gt;
      &lt;/div&gt;
      &lt;div style=&quot;display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;&quot;&gt;
        &lt;div&gt;
          &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;City *&lt;/label&gt;
          &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;New York&quot; required&gt;
        &lt;/div&gt;
        &lt;div&gt;
          &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;ZIP Code *&lt;/label&gt;
          &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;10001&quot; required&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Country *&lt;/label&gt;
        &lt;select style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; required&gt;
          &lt;option&gt;United States&lt;/option&gt;
          &lt;option&gt;Canada&lt;/option&gt;
          &lt;option&gt;United Kingdom&lt;/option&gt;
          &lt;option&gt;Other&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;step-4&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;step-4&quot;&gt;
    &lt;h3&gt;✅ Confirm Order&lt;/h3&gt;
    &lt;p&gt;Please review your order details before confirming:&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px; padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;&quot;&gt;
      &lt;h4 style=&quot;margin-top: 0; color: #5ea8de;&quot;&gt;Order Summary&lt;/h4&gt;
      &lt;p style=&quot;margin: 0.5rem 0;&quot;&gt;&lt;strong&gt;Customer:&lt;/strong&gt; Review your details in step 1&lt;/p&gt;
      &lt;p style=&quot;margin: 0.5rem 0;&quot;&gt;&lt;strong&gt;Products:&lt;/strong&gt; Review your selection in step 2&lt;/p&gt;
      &lt;p style=&quot;margin: 0.5rem 0;&quot;&gt;&lt;strong&gt;Shipping:&lt;/strong&gt; Review your address in step 3&lt;/p&gt;
      &lt;div style=&quot;margin-top: 1.5rem; padding-top: 1rem; border-top: 2px solid #e5e7eb;&quot;&gt;
        &lt;p style=&quot;font-size: 1.125rem; font-weight: 700; margin: 0;&quot;&gt;Ready to complete your order?&lt;/p&gt;
        &lt;p style=&quot;margin: 0.5rem 0; color: #666;&quot;&gt;Click the &quot;Finish&quot; button below to place your order.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;progress&quot;&gt;
  &lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 0%&quot; aria-valuenow=&quot;0&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre></div></div><div id="demo-validation" class="demo-container" style="display:none;"><h2>Form Validation Demo</h2><p>This demo shows how to integrate form validation with SmartWizard. Try clicking &quot;Next&quot; without filling the required fields.</p><div id="smartwizard-validation" style="margin:2rem 0;"><ul class="nav"><li class="nav-item"><a class="nav-link" href="#val-step-1"><div class="num">1</div> Account Info </a></li><li class="nav-item"><a class="nav-link" href="#val-step-2"><span class="num">2</span> Profile </a></li><li class="nav-item"><a class="nav-link" href="#val-step-3"><span class="num">3</span> Complete </a></li></ul><pre><code>&lt;div class=&quot;tab-content&quot;&gt;
  &lt;div id=&quot;val-step-1&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;h3&gt;Account Information&lt;/h3&gt;
    &lt;form id=&quot;form-step-1&quot;&gt;
      &lt;div style=&quot;max-width: 500px;&quot;&gt;
        &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
          &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Username * &lt;span style=&quot;color: red; font-size: 0.875rem;&quot; id=&quot;username-error&quot;&gt;&lt;/span&gt;&lt;/label&gt;
          &lt;input type=&quot;text&quot; id=&quot;username&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;Enter username&quot; required&gt;
        &lt;/div&gt;
        &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
          &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Email * &lt;span style=&quot;color: red; font-size: 0.875rem;&quot; id=&quot;email-error&quot;&gt;&lt;/span&gt;&lt;/label&gt;
          &lt;input type=&quot;email&quot; id=&quot;email&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;your@email.com&quot; required&gt;
        &lt;/div&gt;
        &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
          &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Password * &lt;span style=&quot;color: red; font-size: 0.875rem;&quot; id=&quot;password-error&quot;&gt;&lt;/span&gt;&lt;/label&gt;
          &lt;input type=&quot;password&quot; id=&quot;password&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;Enter password&quot; required&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  &lt;div id=&quot;val-step-2&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;h3&gt;Profile Information&lt;/h3&gt;
    &lt;div style=&quot;max-width: 500px;&quot;&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;First Name&lt;/label&gt;
        &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;John&quot;&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Last Name&lt;/label&gt;
        &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;&quot; placeholder=&quot;Doe&quot;&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;Bio&lt;/label&gt;
        &lt;textarea style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; min-height: 100px;&quot; placeholder=&quot;Tell us about yourself&quot;&gt;&lt;/textarea&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;val-step-3&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;h3&gt;🎉 Registration Complete!&lt;/h3&gt;
    &lt;p&gt;Your account has been created successfully.&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px; padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border: 1px solid #86efac;&quot;&gt;
      &lt;p style=&quot;margin: 0; color: #166534; font-weight: 600;&quot;&gt;✓ Account created successfully!&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;progress&quot;&gt;
  &lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 0%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre></div></div><div id="demo-ajax" class="demo-container" style="display:none;"><h2>Ajax Content Demo</h2><p>This demo simulates loading content dynamically via Ajax. Content is loaded when you navigate to each step.</p><div id="smartwizard-ajax" style="margin:2rem 0;"><ul class="nav"><li class="nav-item"><a class="nav-link" href="#ajax-step-1"><div class="num">1</div> Step 1 </a></li><li class="nav-item"><a class="nav-link" href="#ajax-step-2"><span class="num">2</span> Step 2 </a></li><li class="nav-item"><a class="nav-link" href="#ajax-step-3"><span class="num">3</span> Step 3 </a></li></ul><pre><code>&lt;div class=&quot;tab-content&quot;&gt;
  &lt;div id=&quot;ajax-step-1&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;div class=&quot;ajax-content&quot;&gt;
      &lt;div style=&quot;text-align: center; padding: 2rem;&quot;&gt;
        &lt;div style=&quot;display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;&quot;&gt;&lt;/div&gt;
        &lt;p style=&quot;margin-top: 1rem; color: #666;&quot;&gt;Loading content...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;ajax-step-2&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;div class=&quot;ajax-content&quot;&gt;
      &lt;div style=&quot;text-align: center; padding: 2rem;&quot;&gt;
        &lt;div style=&quot;display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;&quot;&gt;&lt;/div&gt;
        &lt;p style=&quot;margin-top: 1rem; color: #666;&quot;&gt;Loading content...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;ajax-step-3&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;div class=&quot;ajax-content&quot;&gt;
      &lt;div style=&quot;text-align: center; padding: 2rem;&quot;&gt;
        &lt;div style=&quot;display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;&quot;&gt;&lt;/div&gt;
        &lt;p style=&quot;margin-top: 1rem; color: #666;&quot;&gt;Loading content...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;progress&quot;&gt;
  &lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 0%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre></div></div><div id="demo-rtl" class="demo-container" style="display:none;"><h2>RTL (Right-to-Left) Demo</h2><p>This demo shows SmartWizard with RTL support for languages like Arabic, Hebrew, etc.</p><div id="smartwizard-rtl" style="margin:2rem 0;direction:rtl;"><ul class="nav"><li class="nav-item"><a class="nav-link" href="#rtl-step-1"><div class="num">1</div> الخطوة الأولى </a></li><li class="nav-item"><a class="nav-link" href="#rtl-step-2"><span class="num">2</span> الخطوة الثانية </a></li><li class="nav-item"><a class="nav-link" href="#rtl-step-3"><span class="num">3</span> الخطوة الثالثة </a></li></ul><pre><code>&lt;div class=&quot;tab-content&quot;&gt;
  &lt;div id=&quot;rtl-step-1&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;h3&gt;معلومات شخصية&lt;/h3&gt;
    &lt;p&gt;الرجاء إدخال معلوماتك الشخصية أدناه:&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px;&quot;&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;الاسم الكامل *&lt;/label&gt;
        &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;&quot; placeholder=&quot;أدخل اسمك&quot;&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;البريد الإلكتروني *&lt;/label&gt;
        &lt;input type=&quot;email&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;&quot; placeholder=&quot;email@example.com&quot;&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;rtl-step-2&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;h3&gt;العنوان&lt;/h3&gt;
    &lt;p&gt;أدخل عنوانك:&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px;&quot;&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;الشارع&lt;/label&gt;
        &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;&quot;&gt;
      &lt;/div&gt;
      &lt;div style=&quot;margin-bottom: 1rem;&quot;&gt;
        &lt;label style=&quot;display: block; margin-bottom: 0.5rem; font-weight: 600;&quot;&gt;المدينة&lt;/label&gt;
        &lt;input type=&quot;text&quot; style=&quot;width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;&quot;&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id=&quot;rtl-step-3&quot; class=&quot;tab-pane&quot; role=&quot;tabpanel&quot;&gt;
    &lt;h3&gt;✅ اكتمل!&lt;/h3&gt;
    &lt;p&gt;تم إكمال النموذج بنجاح.&lt;/p&gt;
    &lt;div style=&quot;max-width: 500px; padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border: 1px solid #86efac;&quot;&gt;
      &lt;p style=&quot;margin: 0; color: #166534; font-weight: 600;&quot;&gt;✓ تم بنجاح!&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;progress&quot;&gt;
  &lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 0%&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre></div></div>`,4)),e[6]||(e[6]=t("div",{id:"demo-themes",class:"demo-container",style:{display:"none"}},[t("h2",null,"Themes Demo"),t("p",null,"SmartWizard comes with multiple built-in themes. Select a theme to see it in action:"),t("div",{style:{margin:"1.5rem 0",padding:"1rem",background:"var(--vp-c-bg-soft)","border-radius":"6px"}},[t("label",{style:{display:"block","margin-bottom":"0.5rem","font-weight":"600"}},"Select Theme:"),t("select",{id:"theme-selector",onchange:"changeTheme(this.value)",style:{padding:"0.5rem 1rem",border:"1px solid var(--vp-c-divider)","border-radius":"4px",background:"var(--vp-c-bg)"}},[t("option",{value:"default"},"Default"),t("option",{value:"arrows"},"Arrows"),t("option",{value:"dots"},"Dots"),t("option",{value:"progress"},"Progress")])]),t("div",{id:"smartwizard-themes",style:{margin:"2rem 0"}},[t("ul",{class:"nav"},[t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#theme-step-1"},[t("div",{class:"num"},"1"),n(" First ")])]),t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#theme-step-2"},[t("span",{class:"num"},"2"),n(" Second ")])]),t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#theme-step-3"},[t("span",{class:"num"},"3"),n(" Third ")])]),t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#theme-step-4"},[t("span",{class:"num"},"4"),n(" Fourth ")])])]),t("pre",null,[t("code",null,`<div class="tab-content">
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
`)])])],-1))])])}const z=p(h,[["render",f]]);export{k as __pageData,z as default};

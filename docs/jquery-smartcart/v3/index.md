---
title: jQuery SmartCart v3
description: jQuery Shopping Cart plugin with PayPal payment support
---

# jQuery SmartCart v3

jQuery Shopping Cart plugin with PayPal payment support. jQuery Smart Cart is an interactive and user-friendly jQuery Shopping Cart plugin with PayPal payment support. Has built-in support for form submit, Ajax submit and PayPal submit of the cart items.

## Demo

::: tip Coming Soon
Interactive demos will be added here.
:::

## Installation

### NPM

```bash
npm install jquery-smartcart
```

### CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/jquery-smartcart/dist/css/smart_cart.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/jquery-smartcart/dist/js/jquery.smartCart.min.js"></script>
```

## Downloads

[Download from GitHub](https://github.com/techlab/jquery-smartcart/archive/master.zip)

## Features

- In-built PayPal, Ajax and form submit methods
- Bootstrap support
- Compatible with latest jQuery versions
- Public methods for external function call
- Enhanced event support
- Clean and compact design
- Theme support
- Customizable toolbars
- Customization options

## Documentation

### Requirements

1. [Bootstrap 3+](http://getbootstrap.com/getting-started/#download)
2. [jQuery](http://jquery.com/) (supports jQuery 1.9+, jQuery 2+, jQuery 3+)

### Include jQuery SmartCart CSS

```html
<link href="../dist/css/smart_cart.min.css" rel="stylesheet" type="text/css">
```

### Include jQuery

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Include jQuery SmartCart JavaScript

```html
<script type="text/javascript" src="../dist/js/jquery.smartCart.min.js"></script>
```

### Initialize the jQuery SmartCart

```javascript
$(document).ready(function() {
  $('#smartcart').smartCart();
});
```

### The HTML Markup

The HTML has two parts: **product list** and **cart list**.

#### Product List

The product list can be any design you prefer. Smart Cart will not manage it, but there are some settings needed so that Smart Cart can identify the "Add To Cart" buttons and the values of the product.

**Things to note:**
- Add to cart button is identified by the class name `sc-add-to-cart`
- Product container is identified by the class name `sc-product-item`
- The product container must have basic values like `product_name`, `product_price`, etc.
- Product values are identified by searching for elements with attribute `name` or `data-name`
- All element values with attribute `name` or `data-name` will be added to the product object

**Example:**

```html
<div class="row">
  <!-- BEGIN PRODUCTS -->
  <div class="col-md-4 col-sm-6">
    <!-- PRODUCT CONTAINER 1 -->
    <div class="sc-product-item">
      <!-- PRODUCT IMAGE -->
      <img data-name="product_image" src="http://placehold.it/250x150/2aabd2/ffffff?text=Product+1" alt="...">
      
      <!-- PRODUCT NAME -->
      <h4 data-name="product_name">Product 1</h4>
      
      <!-- PRODUCT DESCRIPTION -->
      <p data-name="product_desc">Product details</p>
      
      <!-- PRODUCT PRICE -->
      <input name="product_price" value="2990.50" type="hidden" />
      
      <!-- PRODUCT ID -->
      <input name="product_id" value="12" type="hidden" />
      
      <!-- ADD TO CART BUTTON -->
      <button class="sc-add-to-cart btn btn-success">Add to cart</button>
    </div>
  </div>

  <div class="col-md-4 col-sm-6">
    <!-- PRODUCT CONTAINER 2 -->
    <div class="sc-product-item">
      <img data-name="product_image" src="http://placehold.it/250x150/2aabd2/ffffff?text=Product+2" alt="...">
      <h4 data-name="product_name">Product 2</h4>
      <p data-name="product_desc">Product details</p>
      <input name="product_price" value="320.75" type="hidden" />
      <input name="product_id" value="14" type="hidden" />
      <button class="sc-add-to-cart btn btn-success">Add to cart</button>
    </div>
  </div>
  <!-- END PRODUCTS -->
</div>
```

#### Cart HTML

The cart HTML is simple - a `div` element wrapped with a `form` element which can be used to submit the cart values:

```html
<form action="results.php" method="POST">
  <!-- SmartCart element -->
  <div id="smartcart"></div>
</form>
```

## PayPal Implementation

### HTML for the Cart

```html
<!-- Paypal Submit URL: https://www.paypal.com/cgi-bin/webscr -->
<!-- Paypal Sandbox Submit URL: https://www.sandbox.paypal.com/cgi-bin/webscr -->

<!-- Paypal Cart submit form -->
<form action="https://www.paypal.com/cgi-bin/webscr" method="POST">
  <!-- SmartCart element -->
  <div id="smartcart"></div>
  
  <!-- Paypal required info, Please update based on your details -->
  <input name="business" value="YOUR-PAYPAL-EMAIL-HERE" type="hidden">
  <input name="currency_code" value="USD" type="hidden">
  <input name="return" value="http://www.yourdomain.com/yoursuccessurl" type="hidden">
  <input name="cancel_return" value="http://www.yourdomain.com/yourcancelurl" type="hidden">
  <input name="cmd" value="_cart" type="hidden">
  <input name="upload" value="1" type="hidden">
</form>
```

### Invoke SmartCart with PayPal Option

```javascript
$('#smartcart').smartCart({
  submitSettings: {
    submitType: 'paypal' // form, paypal, ajax
  },
  toolbarSettings: {
    checkoutButtonStyle: 'paypal' // default, paypal, image
  }
});
```

## Parameters

### productContainerSelector
**(string)** CSS selector for product container. Default: `'.sc-product-item'`

### productElementSelector
**(string)** CSS selector for product elements. Default: `'*'`

### addCartSelector
**(string)** CSS selector for add to cart button. Default: `'.sc-add-to-cart'`

### productParams
**(object)** Product parameter mapping:
```javascript
{
  productPrice: 'product_price',
  productQuantity: 'product_quantity',
  productName: 'product_name',
  productId: 'product_id',
}
```

### lang
**(object)** Language variables:
```javascript
{
  cartTitle: "Shopping Cart",
  checkout: 'Checkout',
  clear: 'Clear',
  subtotal: 'Subtotal:',
  cartRemove: '×',
  cartEmpty: 'Cart is Empty!<br />Choose your products'
}
```

### submitSettings
**(object)** Submit configuration:
```javascript
{
  submitType: 'form', // form, paypal, ajax
  ajaxURL: '', // Ajax submit URL
  ajaxSettings: {} // Ajax extra settings
}
```

### currencySettings
**(object)** Currency formatter settings:
```javascript
{
  locales: 'en-US',
  currencyOptions: {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol'
  }
}
```

### toolbarSettings
**(object)** Toolbar configuration:
```javascript
{
  showToolbar: true,
  showCheckoutButton: true,
  showClearButton: true,
  showCartSummary: true,
  checkoutButtonStyle: 'default', // default, paypal, image
  checkoutButtonImage: '',
  toolbarExtraButtons: [] // Extra buttons array
}
```

## Events

### cartEmpty
Triggers when the cart is empty

### itemAdded
Triggers when an item is added to cart

### itemRemoved
Triggers when an item is removed from cart

### quantityUpdated
Triggers when item quantity is updated

### checkoutClicked
Triggers when checkout button is clicked

### Example: Event Initialize

```javascript
// Initialize the cartEmpty event
$("#smartcart").on("cartEmpty", function(e) {
  alert("Cart is empty");
});

// Initialize Smart Cart
$('#smartcart').smartCart();
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartcart/blob/master/LICENSE). You are free to use on both personal and commercial environments as long as the copyright header is left intact.

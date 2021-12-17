# Form

A form is a group of related input controls that allows users to provide data or configure options.

## `vwui-form-group`
The Base element of our forms is the `vwui-form-group`, it wraps the from element to allow easy placement in the layout and to facilitate the correct use of the form elements, it should always contain a `<label>` element for accessibility.

### Code

```html
<div class="vwui-form-group vwui-form-group-input" data-required="true"
data-is-valid="true">
    <label for="fname">This is a label<span class="required-icon">*</span> </label>
   ...
    <span class="support-message">Fields marked with an asterisk are required.</span>
</div>
```

## Input Field
Allows a user to enter data, edit data and search, as part of the form it should always appear inside a `vwui-form-group`.

<div class="vwui-form-group vwui-form-group-input vwui-u-inset-3x" data-required="false"
data-is-valid="">
<label for="fname">This is a label<span class="required-icon">*</span> </label>
<input type="text" id="fname" placeholder="write Something" name="fname">
<span class="feedback-message">Fields marked with an asterisk are required.</span>
</div>

#### Code

```html
<div class="vwui-form-group vwui-form-group-input" data-required="false"
data-is-valid="">
<label for="fname">This is a label<span class="required-icon">*</span> </label>
<input type="text" id="fname" placeholder="write Something" name="fname">
<span class="feedback-message">Fields marked with an asterisk are required.</span>
</div>
```

#### Invalid input

<div class="vwui-form-group vwui-form-group-input vwui-u-inset-3x" data-required="true"
data-is-valid="false">
<label for="fname">This is a label<span class="required-icon">*</span> </label>
<input type="text" id="fname" placeholder="write Something" name="fname">
<span class="feedback-message">Fields marked with an asterisk are required.</span>
</div>

## Checkbox
Permits user to make one or more selections from a list, as part of the form it should always appear inside a `vwui-form-group`.

<div class="vwui-form-group vwui-form-group-input vwui-form-group-input--checkbox" data-required="false"
data-is-valid="">
  <input type="checkbox" id="check" name="checkbox"
         >
  <label for="check">Checkbox</label>
</div>

```html
<div class="vwui-form-group vwui-form-group-input vwui-form-group-input--checkbox" data-required="false"
data-is-valid="">
  <input type="checkbox" id="check" name="checkbox"
         >
  <label for="check">Checkbox</label>
</div>
```
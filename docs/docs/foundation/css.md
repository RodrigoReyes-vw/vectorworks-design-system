# The CSS

The `css` architecture for **blue steel** is combination of different methodologies found around the web, but the main source of inspiration ~~is~~ will be [CubeCSS](https://cube.fyi/), we are using exceptions in the same way. Utilities are also part of our architecture, and are used to do one very specific thing that may have to be done a lot.

## Exceptions
An exception is a deviation from the rules outlined in the component, is a change on the default look and feel of a component, to apply them we rely on `data-attributes` these are a clearer way of communicating the state or deviation  of a component. In the following example the **atribute** `data-kind` indicates the type of button we are declaring.

```html
<a class="vwui-button" data-kind="ghost"> 
        I am a ghost 👻
</a>
```
`data-attributes` are easier to manipulate on `js` and make for an clearer reading of the code.


## Utilities
Utilities must do one job and do it well. Most of the time these will have alter one property and must always have an `!important` so they can't be override.

```css
.vwui-u-background-primary-2 {
  background-color: $vwui-color-background-primary-2 !important;
}
```
In the example above the class `.vwui-u-background-primary-2` just applies a black background, it's just doing one thing but is doing it well.


## CSS Custom Properties
 In an attempt of making the code easier to maintain, the use of *custom properties* has been implemented, these are compatible with all our target browsers, here's an example of how they are being used:

```css
.vwui-button {
 ...
  background-color: var(--button-background-color);
  color: var(--button-font-color);
  border-color: var(--button-border-color);
  ...
}
```
 
In this example on lines 3-5 we are using `custom properties` to alter the properties, that way when we add an exception to the element we just need to update the  `custom properties`

```css
.vwui-button[data-kind="ghost"] {
    ...
  --button-background-color: transparent;
  --button-border-color: #{$vwui-color-primary-1};
  --button-font-color: #{$vwui-color-primary-1};
  ...
```

The will also be declared as custom properties so they can be used without compilers.





::: info
All of the classes on **blue steel** use the prefix `vwui` this is to facilitate the identification when they are deployed and mixed with other stylesheets.
:::

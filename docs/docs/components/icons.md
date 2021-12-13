<script setup>
    import IconToken from '../../components/documentation/IconToken.vue'
</script>
## Icons

### Inline Icons
All icons should be inlined in the document, they should be made up of valid SVG markup, the way to inline them will depend on the tech stack of the product, on the most basic example we'll just add the `svg` inside the the `html` of the page.

```html
       <svg
       class="vwui-icon"
        data-size="small"
             
        viewBox="0 0 50 50"
        style="enable-background: new 0 0 50 50"
      >
        <path
          d="M25 2.3C12.5 2.3 2.3 12.5 2.3 25S12.5 47.7 25 47.7 47.7 37.5 47.7 25 37.5 2.3 25 2.3zm0 43C13.8 45.3 4.7 36.2 4.7 25S13.8 4.7 25 4.7 45.3 13.8 45.3 25 36.2 45.3 25 45.3zm-6.1-28.8h-4.3c-.3 0-.3.1-.3.4L22.7 37c.1.1.3.4.6.4H27c.3 0 .3-.1.3-.4L19 16.6c.2 0 0-.1-.1-.1zm16.5 0h-4.3c-.1 0-.3.1-.3.1l-3.3 8.1c-.1.1-.1.6 0 .7l2 4.8c.1.3.4.3.6 0l5.5-13.3c0-.3 0-.4-.2-.4z"
        />
      </svg>
```


In the case of php we can include the icon using `include`:

```php
<?php include("/icons/vwui-icon-logo.svg"); ?>
```

### Icon Color

Icons in the system have no strokes and are built with just fill, this fill color should be the color of the text next to the icon. The `css` will take care of this so no need to add any properties or attributes to the icons.

## Icon Sizes


<table class="token-pallette">
    <tbody>
    <IconToken token-name="icon-size-small" token-value="24px"/>
     <IconToken token-name="icon-size-medium" token-value="36px"/>
     <IconToken token-name="icon-size-large" token-value="85px"/>
     <IconToken token-name="icon-size-x-large" token-value="100px"/>
    </tbody>
</table>


### Accessibility
 icons should be accessible at all times using the aria attribute for


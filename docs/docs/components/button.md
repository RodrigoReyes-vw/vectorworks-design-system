---
title: Buttons
lang: en-US
---


<script setup>
import VwuiButton from '../../components/blueSteel/VwuiButton.vue'
</script>

# Button
Communicates an action that will occur when the user interacts 
<!-- the button lives here
<vwui-button label="I am a button"/> -->

## How to use

Currently we have no constrains on the use of these buttons, so  they can be used on any situation based on what the design team considers best.

### Ghost button

This button has a transparent background and just an outline in it's default state.

<a class="vwui-button" 
data-kind="ghost"> 
I am a ghost 👻
</a>

### Solid Button

This button has a solid background and no outline.

<a class="vwui-button" 
data-kind="solid"> 
I am a solid button 🟫
</a>

## Inverted versions

The inverted versions of the buttons are meant to be used on any dark, image or color background. 

<div class="vwui-u-background-primary-1 vwui-u-inset-2x">
<a class="vwui-button" data-kind="ghost" data-inverted="true" >
I'm a ghost 👻
</a>

</div>


this is a solid button on a  dark background does this reloads



<div class="vwui-u-background-busy vwui-u-inset-2x">
<a class="vwui-button" data-inverted="true"  data-kind="solid">
I am a solid button 🟩
</a>

</div>


::: danger stop
When writing `html` for **buttons** we should always use the right semantic  tag, `<a>` for buttons that will take us to another page o `anchor links` and `<button>` for buttons that will trigger an action, like submitting a form or the opening of a modal.
:::
<script setup>
import ColorToken from '../../components/ColorToken.vue'
import FontToken from '../../components/FontToken.vue'
import SpacingToken from '../../components/SpacingToken.vue'
import OpacityToken from '../../components/OpacityToken.vue'
import AnimationToken from '../../components/AnimationToken.vue'
</script>
# Tokens

## Table Of contents

[[toc]]


## Colors
### Pallette
<table class="token-pallette">
    <tbody>        
            <ColorToken token-value="#000000" token-name="color-black"/>
            <ColorToken token-value="#FFFFFF" token-name="color-white"/>
            <ColorToken token-value="#00bcb4" token-name="color-teal"/>
            <ColorToken token-value="#FF8200" token-name="color-orange"/>
            <ColorToken token-value="#DC3545" token-name="color-red"/>
            <ColorToken token-value="#05CE7C" token-name="color-green"/> 
            <ColorToken token-value="#3B8DDE" token-name="color-blue"/>
            <ColorToken token-value="#EE44BC" token-name="color-magenta"/>
            <ColorToken token-value="#FDCD43" token-name="color-yellow"/>
            <ColorToken token-value="#F2F2F3" token-name="color-neutral-20"/>
            <ColorToken token-value="#CBCDCD" token-name="color-neutral-35"/>
            <ColorToken token-value="#A4A7A8" token-name="color-neutral-50"/>
            <ColorToken token-value="#7D8182" token-name="color-neutral-65"/>
            <ColorToken token-value="#575A5B" token-name="color-neutral-80"/>
            <ColorToken token-value="#323434" token-name="color-neutral-95"/>       
    </tbody>
</table>

### Feedback
<table class="token-pallette">
    <tbody>    
        <ColorToken token-value="#05CE7C" token-name="color-feedback-success"/>
        <ColorToken token-value="#DC3545" token-name="color-feedback-error"/>
        <ColorToken token-value="#3B8DDE" token-name="color-feedback-info"/>
    </tbody>
</table>

### Background
<table class="token-pallette">
    <tbody>    
        <ColorToken token-value="#FFFFFF" token-name="color-background-light"/>
        <ColorToken token-value="#F2F2F3" token-name="color-background-dark"/>
        <ColorToken token-value="#000000" token-name="color-background-medium"/>
    </tbody>
</table>

### Text Color
<table class="token-pallette">
    <tbody>    
        <ColorToken token-value="#000000" token-name="color-text-primary"/>
        <ColorToken token-value="#FFFFFF" token-name="color-text-primary-on-dark"/>
        <ColorToken token-value="#575A5B" token-name="color-text-secondary"/>
        <ColorToken token-value="#CBCDCD" token-name="color-text-secondary-on-dark"/>
        <ColorToken token-value="#FFFFFF" token-name="color-text-primary-on-accent-1"/>
    </tbody>
</table>

### Heading Color
<table class="token-pallette">
    <tbody>
        <ColorToken token-value="#000000" token-name="color-heading-on-light"/>
        <ColorToken token-value="#ffffff" token-name="color-heading-on-dark"/>
    </tbody>
</table>

### Buttons
#### Primary Button
<table class="token-pallette">
    <tbody>
        <ColorToken token-value="#000000" token-name="button-color-border-primary"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-text-primary"/>
        <ColorToken token-value="#000000" token-name="button-color-background-primary"/>
        <ColorToken token-value="#00bcb4" token-name="button-color-border-primary-hover"/>
        <ColorToken token-value="#00bcb4" token-name="button-color-background-primary-hover"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-text-primary-hover"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-border-primary-on-dark"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-text-primary-on-dark"/>
        <ColorToken token-value="#000000" token-name="button-color-background-primary-on-dark"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-border-primary-hover-on-dark"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-background-primary-hover-on-dark"/>
        <ColorToken token-value="#000000" token-name="button-color-text-primary-hover-on-dark"/>
    </tbody>
</table>

#### Secondary Button
<table class="token-pallette">
    <tbody>
        <ColorToken token-value="#000000" token-name="button-color-border-secondary"/>
        <ColorToken token-value="#000000" token-name="button-color-text-secondary"/>
        <ColorToken token-value="#000000" token-name="button-color-border-secondary-hover"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-background-secondary"/>
        <ColorToken token-value="#000000" token-name="button-color-background-secondary-hover"/>
        <ColorToken token-value="#FFFFFF" token-name="button-color-text-secondary-hover"/>
    </tbody>
</table>

## Font
### Font Family
<table class="token-pallette">
    <tbody>
        <FontToken token-value="DIN" token-name="font-family-din"/>
    </tbody>
</table>

### Font Sizes
<table class="token-pallette">
    <tbody>
        <FontToken token-value="10px" token-name="font-size-62" />
        <FontToken token-value="13px" token-name="font-size-81" />
        <FontToken token-value="14px" token-name="font-size-87" />        
        <FontToken token-value="16px" token-name="font-size-100" />
        <FontToken token-value="18px" token-name="font-size-112" />
        <FontToken token-value="20px" token-name="font-size-125" />
        <FontToken token-value="24px" token-name="font-size-150" />
        <FontToken token-value="28px" token-name="font-size-175" />
        <FontToken token-value="36px" token-name="font-size-225" />
        <FontToken token-value="48px" token-name="font-size-300" />
        <FontToken token-value="52px" token-name="font-size-325" />
        <FontToken token-value="72px" token-name="font-size-450" />
        <FontToken token-value="92px" token-name="font-size-575" />
    </tbody>
</table>

### Font weight
<table class="token-pallette">
    <tbody>
        <FontToken token-value="300" token-type="weight" token-name="font-weight-light" />
        <FontToken token-value="400" token-type="weight" token-name="font-weight-regular" />
        <FontToken token-value="500" token-type="weight" token-name="font-weight-medium" />
    </tbody>
</table>

### Font width
<table class="token-pallette">
    <tbody>
     <FontToken token-value="regular" token-type="width" token-name="font-width-regular" />
     <FontToken token-value="condensed" token-type="width" token-name="font-width-condensed" />
    </tbody>
</table>

### Letter Spacing
<table class="token-pallette">
    <tbody>
         <FontToken token-value="0em" token-type="charSpace" token-name="font-char-space-0" />
         <FontToken token-value="0.025em" token-type="charSpace" token-name="font-char-space-1x" />
         <FontToken token-value="0.05em" token-type="charSpace" token-name="font-char-space-2x" />
         <FontToken token-value="0.075em" token-type="charSpace" token-name="font-char-space-3x" />
         <FontToken token-value="0.1em" token-type="charSpace" token-name="font-char-space-extended" />
    </tbody>
</table>

### Line Height
<table class="token-pallette">
    <tbody>
        <FontToken token-value="1" token-type="lineHeight" token-name="font-line-height-normal" />
        <FontToken token-value="1.125" token-type="lineHeight" token-name="font-line-height-1x" />
        <FontToken token-value="1.25" token-type="lineHeight" token-name="font-line-height-2x" />
        <FontToken token-value="1.5" token-type="lineHeight" token-name="font-line-height-4x" />
        <FontToken token-value="1.75" token-type="lineHeight" token-name="font-line-height-6x" />
        <FontToken token-value="3" token-type="lineHeight" token-name="font-line-height-16x" />
        <FontToken token-value="3.5" token-type="lineHeight" token-name="font-line-height-20x" />
    </tbody>
</table>


## Spacing
<table class="token-pallette">
    <tbody>
        <SpacingToken token-value="2px" token-name="space-quarter-x"/>
        <SpacingToken token-value="4px" token-name="space-half-x"/>
        <SpacingToken token-value="8px" token-name="space-one-x"/>
        <SpacingToken token-value="12px" token-name="space-one-and-a-half-x"/>
        <SpacingToken token-value="16px" token-name="space-two-x"/>
        <SpacingToken token-value="24px" token-name="space-three-x"/>
        <SpacingToken token-value="32px" token-name="space-four-x"/>
        <SpacingToken token-value="40px" token-name="space-five-x"/>
        <SpacingToken token-value="48px" token-name="space-six-x"/>
        <SpacingToken token-value="64px" token-name="space-eight-x"/>
        <SpacingToken token-value="96px" token-name="space-twelve-x"/>
        <SpacingToken token-value="128px" token-name="space-sixteenth-x"/>
    </tbody>
</table>

## Opacity
<table class="token-pallette">
    <tbody>
        <OpacityToken token-value="0.75" token-name="opacity-75"/>
        <OpacityToken token-value="0.9" token-name="opacity-90"/>
    </tbody>
</table>

 ## Animation

### Easing
<table class="token-pallette">
    <tbody>
        <AnimationToken token-value="cubic-bezier(0.25, 0.1, 0.25, 1)" token-name="animation-easing-smooth"/>
        <AnimationToken token-value="cubic-bezier(0.04, 0.91, 0.58, 1);" token-name="animation-easing-ease-out"/>
        <AnimationToken token-value=" cubic-bezier(0.12, 1.11, 0.41, 1.1)" token-name="animation-easing-bounce-small"/>
        <AnimationToken token-value="cubic-bezier(0.36, 1.8, 0.28, 1.12)" token-name="animation-easing-bounce-large"/>
    </tbody>
</table>


### Duration
<table class="token-pallette">
    <tbody>
        <AnimationToken token-type="duration" token-value="0" token-name="animation-duration-instant"/>
        <AnimationToken token-type="duration" token-value="0.15s" token-name="animation-duration-fast"/>
        <AnimationToken token-type="duration" token-value="0.30s" token-name="animation-duration-normal"/>
        <AnimationToken token-type="duration" token-value="0.60s" token-name="animation-duration-slow"/>
      </tbody>
</table>
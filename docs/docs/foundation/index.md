---
title: Foundations
lang: en-US
description: Vectorworks Design System
---
# Foundations 

## Browser Support
We support the last 2 versions of a browser, but we are dropping IE11

### Safari:

- Current Version: 14

Suport: 14 and 13

### Chrome and Edge:

- Current Chrome version is 86 but since they release a new version every other month we can just focus on the last 2 major versions, as for Edge since it's based on chromium there should be no changes with chrome, currently Edge is on v83

### Firefox:

 Same case as Chrome too many versions, supporting the latest two should be ok, let's just not use any of the extra features that Firefox supports  (subgrid, gap) until there's wide support for it, or let's use them just as progressive enhancement 

To validate compatibility we can load our Google analytics on [caniuse](https://caniuse.com/)  and verify, the following image is an example of this, it shows that 98.57% of our users support *custom properties* 


## Breakpoints

Our breakpoints for **.net** are based on Bootstrap's 4.0, since the site is still using that framework, but they also seem mostly apropiate for future properties, they are as follow: 

```css
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

```

```css
//BOOTSTRAP 5 no change from 4, 
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```

We are taking a ***mobile first*** approach to our styling, so the default first breakpoint should fit the width of an iPhone 11  pro (375px)

```css
$s-breakpoint--xs: 576px !default;
$s-breakpoint--sm: 768px !default;
$s-breakpoint--md: 992px !default;
$s-breakpoint--lg: 1200px !default;
// do we really need XL?
$s-breakpoint--xl: 1440px !default;
```


---

---

## Images

We should have the image that best fits the device where it's being displayed, for that we are gonna use the  `sizes`  attribute, this will allow the browser to chose the best image for the device and screen size.

the suggested widths for images that take the whole width are:

- ~~3840px~~
- 2880px
- 1440px
- 1150px
- 750px
- ~~375px~~

![Image Sizes syntax](https://res.cloudinary.com/vectorworks/image/upload/v1604066078/design-system/C517RYNWgAEqwy5.jpg)


Using `sizes` and `srcset` we don't need to use 2x images, the browser will pick the right image based on the device and the information we use to describe the image.



### File Formats

As of Oct 12, 2020 our prefered image format ir **webP** this due to having a smaller file size than the rest, the issue is the lack of combatibility with older versions of MacOs and iOs, but we can still use it by providing an alternate version of the image, so please always provide an this version. It can be a JPEG or a PNG depending on the need for an alpha channel or the file.

### Image Optimization

For optimization we recommend [Sqoosh](https://squoosh.app/), it's free and web based so it's very accesible, if you have any other tool that can povide images on the required formats feel free to use it.

### File Naming

File names should be lower case and  words separated with hyphens, **don't ever use spaces or uppercase letters** on file names.  Once a file has been optimized, please add the suffix `opti` to the file name, 

::: info
A quick note on cloudinary, thanks to this plataform our assets will be auto optimized and delivered in the best format available depending on the browser, but we still have to try to make the files small as possible.
:::

```bash
file-name-opti.webp
```
---
layout: docs
title: Introduction
description: A microframework based on CSS Grid Layout specs to build various types of grids thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes to organize your content.
redirect_from:
  - /docs/
  - /docs/site.current_version/
  - /docs/site.current_version/introduction/
  - /docs/introduction/
---

# Before you start

## What is CSS Grid Layout

[CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is a CSS layout method designed for the two-dimensional layout of items on a webpage. This method offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

## Status of the specs and browser support

Chrome, Firefox and Safari shipped grid support in March 2017. IE10, 11 and Edge 15 and lower support an older, prefixed spec. In October 2017 Edge will update to the new specification to match other implementations. See [Can I Use](http://caniuse.com/#feat=css-grid) to see supported browsers.

## Differences with Flexbox

The main difference is that Flexbox is for one-dimensional layouts while Grid is for two-dimensional layouts.

# Quick start

If you want quickly start to build awesome grids? Download a {{ site-title }} release. If you want to use a package manager or source files, please go to <a href="{{ site.baseurl }}/docs/download/">Download page</a>.

## Import in your Code
Copy and paste the stylesheet `<link>` into `<head>` to load Beegrid CSS.

{% highlight html %}
<link rel="stylesheet" href="/path/to/your/css/bee-grid.min.css" />
{% endhighlight %}

## CDN

Alternatively to download you can include BeeGrid in your projects using our CDN repository.

{% highlight html %}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@beetle/bee-grid@1.0.0/dist/css/bee-grid.min.css" />
{% endhighlight %}

## Base setup

Be sure to have your pages set up with the latest HTML standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Beegrid CSS -->
    <link rel="stylesheet" href="/path/to/your/css/bee-grid.min.css" />

    <title>Beegrid</title>
  </head>
  <body>
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements.

# Responsive meta tag
To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head>.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

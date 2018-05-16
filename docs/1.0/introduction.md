---
layout: docs
title: Introduction
description: Beegrid is a mini CSS microframework to build various types of grids thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes to organize your content easily.
redirect_from:
  - /docs/
  - /docs/1.0/
  - /docs/1.0/introduction/
  - /docs/introduction/
---

# Quick start

If you want quickly start to build awesome grids? Download a {{ site-title }} release. If you want to use a package manager or source files, please go to <a href="{{ site.base_url }}/docs/download/">Download page</a>.

## Import in your Code
Copy and paste the stylesheet `<link>` into `<head>` to load Beegrid CSS.

{% highlight html %}
<link rel="stylesheet" href="/path/to/your/css/bee-grid.min.css" />
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
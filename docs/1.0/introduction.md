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

If you want quickly start to build awesome grids? Use Beegrid CDN hosted at [Cloudflare](https://www.cloudflare.com). If you want to use a package manager or source files, please go to Download page.

## Import from CDN
Copy and paste the stylesheet `<link>` into `<head>` to load Beegrid CSS.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
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
    <link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">

    <title>Beegrid</title>
  </head>
  <body>
  </body>
</html>
{% endhighlight %}

That's all you need for overall page requirements.
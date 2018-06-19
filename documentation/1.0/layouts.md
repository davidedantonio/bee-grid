---
layout: docs
title: Layouts
description: Beegrid have a set of predefined layouts. With a minimum set of classes and few components you can laying out an entire website.
redirect_from:
  - /docs/
  - /docs/1.0/
  - /docs/1.0/layouts/
  - /docs/layouts/
---

# Compoents Overview

- **Layout Container**: in which Header, Nav, Content and Footer can be nested, and can be placed.

- **Header**: The top layout with default style, in which any element can be nested.

- **Nav**: A simple sidebar with default style, in which any element can be nested.

- **Main**: The content layout with default style, in which any element can be nested, such as a grid container.

- **Footer**: The bottom layout with default style, in which any element can be nested.

# Examples

<div class="docs-example">
  <div class="layout-1" style="max-height: 400px;">
    <header>Header</header>
    <main>Main</main>
  </div>
</div>

{% highlight html %}
<div class="layout-1">
  <header>Header</header>
  <main>Main</main>
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="layout-2" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
  </div>
</div>

{% highlight html %}
<div class="layout-2">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="layout-3" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
  </div>
</div>

{% highlight html %}
<div class="layout-3">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="layout-4" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <footer>Footer</footer>
  </div>
</div>

{% highlight html %}
<div class="layout-4">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <footer>Footer</footer>
</div>
{% endhighlight %}


<div class="docs-example">
  <div class="layout-5" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <footer>Footer</footer>
  </div>
</div>

{% highlight html %}
<div class="layout-5">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <footer>Footer</footer>
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="layout-6" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <footer>Footer</footer>
  </div>
</div>

{% highlight html %}
<div class="layout-6">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <footer>Footer</footer>
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="layout-7" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <aside>Aside</aside>
    <footer>Footer</footer>
  </div>
</div>

{% highlight html %}
<div class="layout-7">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>
{% endhighlight %}


<div class="docs-example">
  <div class="layout-8" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <aside>Aside</aside>
  </div>
</div>

{% highlight html %}
<div class="layout-8">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <aside>Aside</aside>
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="layout-9" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <aside>Aside</aside>
  </div>
</div>

{% highlight html %}
<div class="layout-9">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <aside>Aside</aside>
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="layout-10" style="max-height: 400px;">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main</main>
    <aside>Aside</aside>
    <footer>Footer</footer>
  </div>
</div>

{% highlight html %}
<div class="layout-10">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</div>
{% endhighlight %}

# Mobile behavior

BeeGrid include a JavaScript plugin called **Navbar**. This plugin allow you to decide if you want a fully CSS Layout or a JavaScript variant.
This plugin is usable **only** with the layouts with a nav component. If you include a button, or any HTML element, having class `.--toggler-menu` the plugin automatically change the layout default behavior and hide `nav` on small devices. This of course, not before you have included the plugin in your web page before closing the `<body>` tag.

{% highlight html %}
<body>
  <div class="layout-2">
    <header>
      <a href="#" class="--toggler-menu">
        Toggle menu
      </a>
    </header>
    <nav>Nav</nav>
    <main>Main</main>
  </div>

  <script type="text/javascript" src="dist/js/navbar.min.js"></script>
</body>
{% endhighlight %}

If you run this script you'll not see the button on large screens, but only from smaller and below. Just like this web site.
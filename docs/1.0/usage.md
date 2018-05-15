---
layout: docs
title: Usage
description: Use Beegrid options and classe to laying out your application, including responsive media query and many predefined layouts.
redirect_from:
  - /docs/
  - /docs/1.0/
  - /docs/1.0/usage/
  - /docs/usage/
---

# Containers

Containers are the basic layout element in Beegrid. You can choose between two types of container.

<div class="docs-example">
  <div class="grid-container grid-container-example">
  </div>
</div>
{% highlight html %}
<div class="grid-contaner">
  <!-- Your grid items here -->
</div>
{% endhighlight %}

<div class="docs-example">
  <div class="grid-container-fluid grid-container-example">
  </div>
</div>
{% highlight html %}
<div class="grid-contaner-fluid">
  <!-- Your grid items here -->
</div>
{% endhighlight %}

# How grid works

Beeui grid use a main container, as described before, and its child component represent the columns of the grid system.

<div class="docs-example">
  <div class="grid-container-fluid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>
</div>
{% highlight html %}
<div class="grid-contaner-fluid">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
</div>
{% endhighlight %}

The above example define a grid with twelve equal with columns with a predefined responsive behavior. Each column has a padding (called gap) for controlling the space between them. Here's how it work:

- The container provide to define grid items behavior and the width of grid system.
- The rows are defined for breakpoints. For example, if you want your grid, on a medium-sized screen, must have three columns you can define `.cols-md-3` class.
- The `.grid-item` class define **only** a padding of `1rem`.
- To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: extra small, small, medium, large, and extra large.

## Grid breakpoints

See how aspects of the {{ site.title }} grid system work across multiple devices.

<table>
  <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Extra small<br>
        <small>&ge;0px</small>
      </th>
      <th class="text-center">
        Small<br>
        <small>&ge;480px</small>
      </th>
      <th class="text-center">
        Medium<br>
        <small>&ge;960px</small>
      </th>
      <th class="text-center">
        Large<br>
        <small>&ge;1280px</small>
      </th>
      <th class="text-center">
        Extra large<br>
        <small>&ge;1440px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Max container width</th>
      <td>none</td>
      <td>640px</td>
      <td>1024</td>
      <td>1280px</td>
      <td>1440px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td><code>.cols-*</code></td>
      <td><code>.cols-sm-*</code></td>
      <td><code>.cols-md-*</code></td>
      <td><code>.cols-lg-*</code></td>
      <td><code>.cols-xl-*</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Grid gap</th>
      <td><code>12px</code></td>
      <td><code>16px</code></td>
      <td><code>20px</code></td>
      <td><code>24px</code></td>
      <td><code>28px</code></td>
    </tr>
  </tbody>
</table>

# Layout grid

You can specify columns number class on the container. For example if you want a grid with six columns for each brekpoint you can specify the class `.col-{i}`, where `i` is a number between 1 and 12.

<div class="docs-example">
  <div class="grid-container-fluid cols-6">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>
</div>
{% highlight html %}
<div class="grid-contaner-fluid cols-6">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
</div>
{% endhighlight %}

As you can see, you don't need to specify a *"row"* container and a specific class on each column item. The container define the number of **columns** on each container row.

# Colspan

You can specify, on a column item, how many grid columns the item span. Here come an example:

<div class="docs-example">
  <div class="grid-container-fluid cols-6">
    <div class="grid-item colspan-3">1 to 3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item colspan-2">9 to 10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
    <div class="grid-item">13</div>
    <div class="grid-item">14</div>
    <div class="grid-item">15</div>
    <div class="grid-item colspan-3">16 to 18</div>
  </div>
</div>
{% highlight html %}
<div class="grid-container-fluid cols-6">
  <div class="grid-item colspan-3">1 to 3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item colspan-2">9 to 10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
  <div class="grid-item">13</div>
  <div class="grid-item">14</div>
  <div class="grid-item">15</div>
  <div class="grid-item colspan-3">16 to 18</div>
</div>
{% endhighlight %}

# Responsive classes

Beeui includes five tiers predefined classes for building complex responsive grids. You can define the behavior of your grids on extra small, small, medium, large and extra large devices as you see fit.

## Specify all breakpoints

If you want that your grid have a different behavior for each device size, you can specify the number of columns on the container usign the `col-{bp}-{i}` classes, where `bp` is represent the breakpoint and `i` the number of columns.

<div class="docs-example">
  <div class="grid-container-fluid cols-1 cols-sm-2 cols-md-3 cols-lg-6 cols-xl-12">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>
</div>

{% highlight html %}
<div class="grid-container-fluid cols-1 cols-sm-2 cols-md-3 cols-lg-6 cols-xl-12">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
</div>
{% endhighlight %}

In this example we decide to have a different behaviour for each screen size. For the extra large screen we decide to have a twelve columns system, on large six, on medium three on small 2 and, finally on extra small devices a stacked columns grid.

# Rows and columns

You can define the number of rows and columns that a grid item must occupy at certain device size. For example, if we take a look at previous example, we can decide that the grid item `1` can occupy two columns and two rows on medium screen size.

<div class="docs-example">
  <div class="grid-container-fluid cols-1 cols-sm-2 cols-md-3 cols-lg-6 cols-xl-12">
    <div class="grid-item row-md-start-1-end-2 col-lg-start-1-end-2">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>
</div>

{% highlight html %}
<div class="grid-container-fluid cols-1 cols-sm-2 cols-md-3 cols-lg-6 cols-xl-12">
  <div class="grid-item row-md-start-1-end-2 col-lg-start-1-end-2">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
</div>
{% endhighlight %}

# Alignments

You can use alignment utility classes to align your grid item.

## Horizontal

You can specify an horizontal alignment with `.justify-self-*` classes on an grid item.

<div class="docs-example">
  <div class="grid-container-fluid cols-3 mb-1">
    <div class="grid-item justify-self-start">.justify-self-start</div>
    <div class="grid-item justify-self-center">.justify-self-center</div>
    <div class="grid-item justify-self-end">.justify-self-end</div>
  </div>
  <div class="grid-container-fluid cols-2 mb-1">
    <div class="grid-item justify-self-center">.justify-self-center</div>
    <div class="grid-item justify-self-center">.justify-self-center</div>
  </div>
  <div class="grid-container-fluid cols-3 mb-1">
    <div class="grid-item justify-self-start">.justify-self-start</div>
    <div class="grid-item justify-self-stretch">.justify-self-stretch</div>
    <div class="grid-item justify-self-end">.justify-self-end</div>
  </div>
</div>

{% highlight html %}
<div class="grid-container-fluid cols-3">
  <div class="grid-item justify-self-start">.justify-self-start</div>
  <div class="grid-item justify-self-center">.justify-self-center</div>
  <div class="grid-item justify-self-end">.justify-self-end</div>
</div>
<div class="grid-container-fluid cols-2">
  <div class="grid-item justify-self-center">.justify-self-center</div>
  <div class="grid-item justify-self-center">.justify-self-center</div>
</div>
<div class="grid-container-fluid cols-3">
  <div class="grid-item justify-self-start">.justify-self-start</div>
  <div class="grid-item justify-self-stretch">.justify-self-stretch</div>
  <div class="grid-item justify-self-end">.justify-self-end</div>
</div>
{% endhighlight %}

## Vertical

As you can align horizontally, you can align an item vertically with `.align-self-*` classes. As in the following example.

<div class="docs-example">
  <div class="grid-container-fluid cols-3 mb-1 container container-tall">
    <div class="grid-item align-self-start">.align-self-start</div>
    <div class="grid-item align-self-end">.align-self-end</div>
    <div class="grid-item align-self-center">.align-self-end</div>
  </div>
</div>

{% highlight html %}
<div class="grid-container-fluid cols-3">
  <div class="grid-item align-self-start">.align-self-start</div>
  <div class="grid-item align-self-end">.align-self-end</div>
  <div class="grid-item align-self-center">.align-self-end</div>
</div>
{% endhighlight %}

# Nesting

To nest your content you can specify a `.grid-container`, with a specific numbers of cols and, in a specific grid item, you can declare another `.grid-container`.

<div class="docs-example">
  <div class="grid-container-fluid cols-1 mb-1 container container-tall">
    <div class="grid-item no-padding transparent align-self-center">
      <div class="grid-container-fluid cols-2">
        <div class="grid-item">One of Two</div>
        <div class="grid-item">Two of Two</div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="grid-container-fluid cols-1">
  <div class="grid-item no-padding align-self-center">
    <div class="grid-container-fluid cols-2">
      <div class="grid-item">One of Two</div>
      <div class="grid-item">Two of Two</div>
    </div>
  </div>
</div>
{% endhighlight %}
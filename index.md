---
layout: home
---
<div class="master-head docs-background-teal">
  <div class="grid-container cols-sm-1 cols-xs-1 cols-md-1 cols-lg-1 cols-xl-1">
    <div class="grid-item">
      <div class="home-image flex justify-content-center align-items-center mt-2 mb-2">
        <img src="{{ site.baseurl }}/assets/images/index_image.png" />
      </div>
      <h1 class="color-white">BeeGrid</h1>
      <p> {{ site.description }}</p>

      <div class="grid cols-sm-1 cols-xs-1 cols-md-1 cols-lg-1 cols-xl-1">
        <div class="grid-item flex justify-content-center align-items-center">
            <a href="{{ site.baseurl }}/documentation/{{ site.docs_version }}/introduction/" class="button button-outline-teal button-lg">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="grid-container-fluid master-widget cols-sm-1 cols-xs-1 cols-md-3 cols-lg-3 cols-xl-3">
  <div class="grid-item">
    <h2 class="color-teal">Installation</h2>
    <p>Install Beegrid's source files via <a href="https://www.npmjs.com" target="_blank">npm</a>. We take care of injecting the CSS needed.</p>
    {% highlight sh %}
    npm install @beetle/bee-grid
    {% endhighlight %}

    {% highlight sh %}
    npm install @beetle/bee-grid -v{{ site.current_version }}
    {% endhighlight %}
    <p>Or use <a href="https://yarnpkg.com/lang/en/" target="_blank">yarn</a>.</p>
    {% highlight sh %}
    yarn add @beetle/bee-grid
    {% endhighlight %}
  </div>
  <div class="grid-item">
    <h2 class="color-teal">Usage</h2>
    <p>Download latest precompiled CSS stable build and include it in your project.</p>
      {% highlight html %}
      <link rel="stylesheet" href="./your/local/path/bee-grid.min.css" />
      {% endhighlight %}
      <p>or use CDN</p>
      {% highlight html %}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@beetle/bee-grid@{{ site.current_version }}/dist/css/bee-grid.min.css" />
      {% endhighlight %}
  </div>
  <div class="grid-item">
    <h2 class="color-teal">Source Code</h2>
    <p>Clone Beegrid repository from Github and start building awesome grid for your websites.</p>
    <pre>
      {% highlight sh %}
      git clone {{ site.repo }}
      {% endhighlight %}
    </pre>
    <p>Quickly prototype your grids with our Sass variables and mixins.</p>
  </div>
</div>

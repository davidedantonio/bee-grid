---
layout: docs
title: Download
description: Download BeeGrid to get compiled CSS source code, or include it via npm or include its classes via CDN.
redirect_from:
  - /docs/
  - /docs/1.0/
  - /docs/1.0/download
  - /docs/download
---

# NPM

To install and save in your package.json dependencies, run:

{% highlight sh %}
 npm install @beetle/bee-grid
{% endhighlight %}

# Yarn

As well as npm to install and save in your package.json dependencies, run:

{% highlight sh %}
 yarn add @beetle/bee-grid
{% endhighlight %}

# Compiled CSS

Download ready-to-use compiled code {{ site.title }} v{{ site.current_version }} to easily drop into your project, which includes compiled and minified CSS bundles.

This package doesn't include source files and documentation. Once downloaded, unzip the compressed folder and you’ll see something like this:

{% highlight plaintext %}
bee-grid/
└── css/
    ├── bee-grid.css
    ├── bee-grid.css.map
    ├── bee-grid.min.css
    └── bee-grid.min.css.map
{% endhighlight %}

<a href="{{ site.download.dist }}" class="button button-teal mb-2">Download</a>

# Source files

Download and compile all {{ site.title }} source code. This option require some additional tools:

- NPM (Node Package Manager).
- Sass compiler.

The `package.json` included in the source folder include some methods for working with the framework, including compiling code, running documentation and more.

To use the build system and run documentation locally, you'll need to follow these instruction and should be ready:

- [Download and install Node.js](https://nodejs.org/download/), which we use to manage all our dependencies.
- [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Bundler](https://bundler.io/), and finally run `bundle install`. This install all ruby dependencies.

After doing this, with a terminal, go to the {{ site.title }} directory and run the following command:

{% highlight sh %}
 npm install
{% endhighlight %}

This command install al the required dependencies for run some command, such as:

| Task | Description |
| ----- | --- |
| `npm run css` | `npm run css` compile, lints and minify all [Sass](https://sass-lang.com/) files and put the compiled CSS files in `/dist/css` folder. This also run [Autoprefixer][https://github.com/postcss/autoprefixer] command that parse CSS and add vendor prefixes to rule. |
| `npm run docs-serve` | Run the documentation locally at `http://localhost:9001`. |

<a href="{{ site.download.source }}" class="button button-teal">Download source</a>

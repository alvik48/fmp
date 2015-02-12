FMP (Fast Markup)
=================

## About project

Preconfigured **node.js + gulp** environment to automate routine markup tasks.

## Key features

* **HTML & server**:
  * Ability to reuse blocks (eg, *header*, *footer*) using *ejs* template engine and include functions.
  * Automatic page reload on source files changes.
* **CSS**:
  * *Stylus* preprocessor.
  * *Autoprefixer* postprocessor.
  * *CSS* minifier.
  * *Source maps* generation.
* **Images**:
  * Automatic sprites generation.
  * Automatic inline images generation (in *base64*).
  * Automatic images optimization.
* **Javascript**:
  * Automatic *js* files requiring and concatinating.
  * Minification of resulted *js* file.
  * *Source maps* generation.

## How to install and create new project

First, install module globally:

```bash
npm install -g fmp
```

Then you can use application generator like this:

```bash
mkdir <your_project_folder>
cd <your_project_folder>
fmp new ./ --<CSS pre-processor> --<JS library>
```

where:
* **<CSS pre-processor>** can be one of: css / scss / less / stylus.
* **<JS library>** can be one of: vanilla / jquery / angular / backbone.

After few minutes all files will be copied in your project folder. To start preview server, just type

```bash
gulp
```

in project folder.

## How to use

**Documentation is in progress...**

> Developed by [alvik48](http://alvik48.github.io/).
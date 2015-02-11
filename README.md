FMP (Fast Markup)
=================

## About project

Preconfigured **node.js + gulp** environment to automate routine markup tasks.

## Key features

 - **HTML & server**:
  - Ability to reuse blocks (eg, *header*, *footer*) using *ejs* template engine and include functions.
  - Automatic page reload on source files changes.
 - **CSS**:
  - *Stylus* preprocessor.
  - *Autoprefixer* postprocessor.
  - *CSS* minifier.
  - *Source maps* generation.
 - **Images**:
  - Automatic sprites generation.
  - Automatic inline images generation (in *base64*).
  - Automatic images optimization.
 - **Javascript**:
  - Automatic *js* files requiring and concatinating.
  - Minification of resulted *js* file.
  - *Source maps* generation.

## Using

**Documentation is in progress...**

**Warning!** For the moment (in versions *1.1.\**) you can only start your project with *stylus* css pre-processor and *backbone*
js library.

First, install module globally:

```bash
npm install -g fmp
```

Then you can use application generator like this:

```bash
mkdir <your_project_folder>
cd <your_project_folder>
fmp new ./ --stylus --backbone
```

After few minutes all files will be copied in your project folder and preview server will be automatically started.

> Developed by [alvik48](http://alvik48.github.io/).
FMP (Fast Markup)
================

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

* **CSS pre-processor** can be one of: **css** / **scss** / **less** / **stylus**.
* **JS library** can be one of: **vanilla** / **jquery** / **angular** / **backbone**.

After few minutes all files will be copied in your project folder. To start preview server, just type

```bash
gulp
```

in project folder.

## How to use

After successfull installation and running preview server you can start writing your code. Your project folder will include following directories and files:

* **.tmp**
* **bower_components**
* **fonts**
* **images**
* **js**
* **node_modules**
* **partials**
* **pictures**
* **styles**
* bower.json
* favicon.png
* gulpfile.js
* index.html
* package.json
* test-page.html

After server start all your application source files will be compiled and placed to **.tmp** folder. There are some configuration options that you can pass to module in your **gulpfile.js**, by deafult will be used next options:

```js
require('fmp')({
    port: 3000,
    css: "css",
    autoprefixr: ["last 2 versions", "Explorer > 8"]
});
```

You can change preview server port, css pre-processor and autoprefixr plugin options.

### Preview server

After all changes in your HTML files, your styles, scripts etc, preview server will automatically reload page in browser and you will see the changes. Uses [browser-sync](https://www.npmjs.com/package/browser-sync) module.

### HTML

Your HTML pages must be placed in the root of your project folder (like **index.html** and **test-page.html**). They can include partial HTML files from **partials** folder. To iclude partial file, write

```html
@@include('partials/my-partial.html')
```

Your partial file can include other partials. Also, you can use **@@var_name** syntax to use variables in your partials and then set there values like this:

**partials/part.html**

```html
<div class="@@block">@@content</div>
```

**index.html**

```html
@@include('partials/part.html', {
    "block": "yellow",
    "content": "I am yellow content"
})
```

Uses [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) module. Visit module page to see other module features.

### Styles

Your styles source files must be placed to **styles** folder. You must have one master file **app**.&lt;ext&gt;, where &lt;ext&gt; is your file extension (css / scss / less / styl). All other files must be included to your master file.

After saving your changes your master file will be automatically compiled to app.css file via one of this modules (depends on your pre-processor choice):

* [gulp-cssimport](https://www.npmjs.com/package/gulp-cssimport) for **.css** files;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) for **.scss** files;
* [gulp-less](https://www.npmjs.com/package/gulp-less) for **.less** files;
* [gulp-stylus](https://www.npmjs.com/package/gulp-stylus) for **.styl** files.

Visit modules pages to see their other features.

While compiling also will be included vendor prefixes via [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) module. By default module will use next configuration array:

```js
["last 2 versions", "Explorer > 8"]
```

You can change it by passing additional option in your **gulpfile.js**, for example:

```js
require('fmp')({
    css: 'css',
    autoprefixr: ["last 4 versions", "Explorer > 9"]
});
```

### JS

Your js files must be placed in **js** folder and have one master file **app.js**. All other files must be included into your master file by following syntax:

```js
//= require relative_path_to_your_file.js
```

If you want to include all files from some folder, you can do this like that:

```js
//= require_tree your_path
```

Uses [gulp-include](https://www.npmjs.com/package/gulp-include) module. Visit module page to see other module features.

### CSS sprites

If you want to use sprite file in your project, you can do this by placing sprite source images (in *.png format) to **images/sprite** folder. After that run server (if preview server is running, all things will be done automatically) and wait few seconds while sprite is compliling. After that in your **images** folder will appear **elements.png** file (this is your sprite).

Also, sprite stylesheet **sprite**.&lt;ext&gt; will automatically appear in **styles/includes** folder. You must to include this file to your master stylesheet. If you are using **.css** format, in this file will be placed classes for your sprite images:

```css
.icon-<image_name> {
    ...
}
```

If you are using some css pre-processor, you must generate sprite classes using generated mixin or use generated mixins. See documentation in [gulp.spritesmith](https://www.npmjs.com/package/gulp.spritesmith) module page.

----------

## Happy coding!

If you have some ideas of module improvements, you can contact me and suggest your ideas.

> Developed by [alvik48](http://alvik48.github.io/).
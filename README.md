# grunt-ractive

> Compiles Ractive component files.

If you're not yet familiar with Ractive component files, [start here](https://github.com/ractivejs/component-spec).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ractive --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ractive');
```

## The "ractive" task

### Overview
In your project's Gruntfile, add a section named `ractive` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ractive: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.type
Type: `String`
Defaulting to `amd`

The type of module the component should compile to.
It's either one of `amd`, `cjs` or `es6`

### Usage Examples

Gruntfile.js:

```js
grunt.initConfig({
  ractive: {
    options: {},
    production: {
      files: {
        'js/components/': 'html/components/*.html',
      }
    }
  }
})
```

# MOJ Elements

Common stylesheets and supporting JavaScript for MOJ Digital Serivces which are not already available in [GOV.UK Elements](https://github.com/alphagov/govuk_elements).

## Build

```
npm install
```

## Running tests

JavaScript unit tests are run in Jasmine through PhantomJS.

```bash
npm test
```

## Suggested use

A possible way to use these files is to include into your project using [Bower](http://bower.io). Use either source files `src/` or compiled files `dist/`.

    bower install moj_elements --save

Then include the module you require into your page or build process.

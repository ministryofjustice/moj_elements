# MOJ Elements

Common stylesheets and JavaScript for MOJ Digital Serivces which are not already available in [GOV.UK Elements](https://github.com/alphagov/govuk_elements).

## Requirements

* jQuery (for JavaScript)
* [GOV.UK frontend toolkit](https://github.com/alphagov/govuk_frontend_toolkit) (for most Sass modules)
* [GOV.UK template](https://github.com/alphagov/govuk_template)

## Suggested use

A possible way to use these files is to include into your project using [Bower](http://bower.io). Use either source files `src/` or compiled files `build/`.

    bower install ministryofjustice/moj_elements --save

Then include the module you require into your manifest or build process.

> Note: JavaScript modules should also include `moj.js` before the module.

## Contributions

It is assumed that this will be used in conjunction with other GOV.UK & MOJ repos. Please DO NOT add modules to this repo if it already exists in GOV.UK Elements unless there is good reason - not personal preference.

Module files should be prefixed with `moj` to prevent clashes.

Make sure files are lint free and part of the build task.

# MOJ Elements

Common stylesheets and JavaScript for MOJ Digital Serivces which are not already available in [GOV.UK Elements](https://github.com/alphagov/govuk_elements).

## Build

```
npm install
```

## Running tests

Tests for this project use Jasmine for the JavaScript.

```bash
npm test
```

## Suggested use

A possible way to use these files is to include into your project using [Bower](http://bower.io). Use either source files `src/` or compiled files `dist/`.

    bower install moj_elements --save

Then include the module you require into your page or build process.

## Requirements

* jQuery

## JavaScript modules

### Timeout prompt

Displays an alert on the page after a certain amount of time. The user can extend the time fom the alert. If no action is taken, the user is redirected to an exit page.

#### Required files

    handlebars.js
    moj.TimeoutPrompt.js

#### Mark-up

Place the template in the DOM where you would like the alert to be displayed. Handlebars.js then appends `TimeoutPrompt-alert` to the `TimeoutPrompt` element to display it to the user.

```html
<div class="TimeoutPrompt">
  <script class="TimeoutPrompt-template" type="text/html">
    <div class="TimeoutPrompt-alert" role="alertdialog" aria-labelledby="timeoutTitle" aria-describedby="timeoutDesc" tabindex="0">
      <h2 id="timeoutTitle">Your session will will expire in {{ respondTime }} minutes</h2>
      <p id="timeoutDesc">Would you like to continue?</p>
      <button class="TimeoutPrompt-extend">Yes</button>
    </div>
  </script>
</div>
```

#### Template parameters

`respondTime` - duration in minutes in which the alert will be shown before redirecting.

#### Options

Options are applied using `data-*` attributes on the root element. Eg…

```html
<div class="TimeoutPrompt" data-timeout-minutes="5">
```

Setting         | Type    | Default    | Description
--------------- | ------- | ---------- | -------------------------------------
timeout-minutes | integer | 17         | minutes before the alert is displayed
respond-minutes | integer | 3          | minutes before redirect once the alert has displayed
exit-path       | string  | '/abandon' | path to be redirected to after respond-time

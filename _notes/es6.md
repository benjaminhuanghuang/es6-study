## multi-line strings
    ` `
## =>
    quoteService.generateRandomQuotes(2000, function(quote) {
       self.quote = quote;
    });

    // ES6 Style
    // Use same context, don't need self
    quoteService.generateRandomQuotes(2000, quote =>this.quote = quote);

## let 
    block visible

## const
    read-only

## class keyword
    app.QuoteService = Class({
    constructor: function QuoteService() {
      ...
    },
    getRandomQuote: function() {
     ...
    },
    generateRandomQuotes: function(delay, callback) {
      ...
    });

    //To ES6
    class QuoteService{
     constructor() {
      ...
    }

    getRandomQuote() {
      ...
    }

    generateRandomQuotes(delay, callback) {
      ...
  }

## Decorator:  @Inject , @Component, @NgModule
    - Need config babel:
        "transform-decorators-legacy"

    class AppComponent{ }

    app.AppComponent = Component({
        selector: 'my-app',
        template: '<h1>Random Quote</h1>\n      <random-quote></random-quote>'
    })(AppComponent);

    // To ES6 Style
    @Component({
        selector: 'my-app',
        template: `<h1>Random Quote</h1>
        <random-quote></random-quote>`
    })
    class AppComponent {}

## Module
    import {Component, Inject} from '@angular/core';
    export class QuoteService{

    }

## Load ES6 modules:
     <script src="node_modules/systemjs/dist/system.src.js"></script>
     <script src="systemjs.config.js"></script>
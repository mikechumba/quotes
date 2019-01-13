(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n  <router-outlet></router-outlet>\r\n  <app-quotes></app-quotes>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display\");\n.quote-form {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtaWNoYVxcRG9jdW1lbnRzXFxDb2RlXFxNb3JpbmdhXFxRdW90ZXMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRkFBWTtBQUVaO0VBQ0Usc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnN8UGxheWZhaXIrRGlzcGxheScpO1xyXG5cclxuLnF1b3RlLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quotes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _quote_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote-details.service */ "./src/app/quote-details.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_6__["QuotesComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_7__["QuoteDetailsComponent"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_8__["QuoteFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_quote_details_service__WEBPACK_IMPORTED_MODULE_9__["QuoteDetailsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quote-details.service.ts":
/*!******************************************!*\
  !*** ./src/app/quote-details.service.ts ***!
  \******************************************/
/*! exports provided: QuoteDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsService", function() { return QuoteDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuoteDetailsService = /** @class */ (function () {
    function QuoteDetailsService(name, author, quote, upVotes, downVotes, timePublished) {
        name = '',
            author = '',
            quote = '',
            upVotes = 0,
            downVotes = 0,
            timePublished = new Date();
    }
    QuoteDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String, String, Number, Number, Object])
    ], QuoteDetailsService);
    return QuoteDetailsService;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  quote-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
    }
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.scss */ "./src/app/quote-details/quote-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='form-group'>\r\n  \r\n  <form [formGroup]=\"quotesForm\" (ngSubmit)=\"publish()\">\r\n    <div class='input-group'>\r\n        <input type=\"text\" class='quote-details' placeholder=\"Enter Your Name\" id=\"username\" formControlName='name' required>\r\n        <input type=\"text\" class='quote-details' placeholder=\"Enter Author's Name\" id=\"author\" formControlName='author' required>\r\n    </div>\r\n    <div class='input-group'>\r\n        <input class='quote-input' type=\"text\" placeholder=\"Enter Quote\" id=\"actual-quote\" formControlName='quote' required>\r\n    </div>\r\n    <!-- Validation Errors-->\r\n    <div *ngIf=\"name.touched && name.errors\">\r\n      <div class=\"alert\" *ngIf=\"name.errors.required\">\r\n        You must enter your name.\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"author.errors\">\r\n      <div class=\"alert\" *ngIf=\"author.errors.pattern\">\r\n          Required! . Input 'Anonymous' if you don't know the author.\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"quote.errors\">\r\n      <div class=\"alert\" *ngIf=\"quote.errors.pattern\">\r\n          Required! . Input 'Anonymous' if you don't know the author.\r\n      </div>\r\n    </div>\r\n    <!-- Submit Form -->\r\n    <input class='submit-btn' type=\"button\" [disabled]=\"!quotesForm.valid\" value=\"Publish\">\r\n  </form> \r\n</div>"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group #username, .input-group #author {\n  width: 49.5%;\n  box-sizing: border-box;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  border: 2px solid #C2C1C2;\n  border-radius: 3px;\n  padding: 6px 10px; }\n\n.form-group {\n  width: 100%; }\n\n.input-group {\n  outline: none; }\n\n.input-group #username {\n    margin-right: 0.5%; }\n\n.input-group #author {\n    margin-left: 0.5%; }\n\n.input-group .quote-input {\n    width: 100%;\n    border: 2px solid #C2C1C2;\n    height: 60px;\n    background: transparent;\n    padding: 6px 10px;\n    border-radius: 3px; }\n\n.submit-btn {\n  background-color: #4EA699;\n  text-transform: uppercase;\n  border-radius: 3px;\n  border: none;\n  padding: 8px 15px;\n  font-weight: 700;\n  font-size: 13px;\n  color: #EFF1F3;\n  align-items: flex-start;\n  margin-top: 2%; }\n\n.submit-btn:hover {\n    background-color: #223843; }\n\n.submit-btn:active {\n    z-index: -2;\n    box-shadow: 1px 1px 2px 2px #C2C1C2; }\n\n.alert {\n  color: #FE938C;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9DOlxcVXNlcnNcXG1pY2hhXFxEb2N1bWVudHNcXENvZGVcXE1vcmluZ2FcXFF1b3Rlcy9zcmNcXGFwcFxccXVvdGUtZm9ybVxccXVvdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNsQjs7QUFHRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGNBQWEsRUF3QmQ7O0FBekJEO0lBU0ksbUJBMUJTLEVBMkJWOztBQVZIO0lBY0ksa0JBL0JTLEVBZ0NWOztBQWZIO0lBa0JJLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsYUFBWTtJQUNaLHdCQUF1QjtJQUN2QixrQkFBaUI7SUFDakIsbUJBQWtCLEVBQ25COztBQUdIO0VBQ0UsMEJBQXlCO0VBQ3pCLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsd0JBQXVCO0VBQ3ZCLGVBQWMsRUFVZjs7QUFwQkQ7SUFhTSwwQkFBeUIsRUFDNUI7O0FBZEg7SUFpQkksWUFBVztJQUNYLG9DQUFtQyxFQUNwQzs7QUFHSDtFQUNFLGVBQWM7RUFDZCxnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWZvcm0vcXVvdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYXJnaW46IDAuNSU7XHJcblxyXG4ldXNlci1kZXRhaWxzIHtcclxuICB3aWR0aDogNDkuNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQzJDMUMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIFxyXG4gIC8vIGlucHV0IHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAjdXNlcm5hbWUge1xyXG4gICAgQGV4dGVuZCAldXNlci1kZXRhaWxzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luO1xyXG4gIH1cclxuXHJcbiAgI2F1dGhvciB7XHJcbiAgICBAZXh0ZW5kICV1c2VyLWRldGFpbHM7XHJcbiAgICBtYXJnaW4tbGVmdDogJG1hcmdpbjtcclxuICB9XHJcblxyXG4gIC5xdW90ZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMkMxQzI7ICBcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQTY5OTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNFRkYxRjM7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzODQzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggI0MyQzFDMjtcclxuICB9XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgY29sb3I6ICNGRTkzOEM7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.quotesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            quote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(QuoteFormComponent.prototype, "name", {
        get: function () {
            return this.quotesForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuoteFormComponent.prototype, "author", {
        get: function () {
            return this.quotesForm.get('author');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuoteFormComponent.prototype, "quote", {
        get: function () {
            return this.quotesForm.get('quote');
        },
        enumerable: true,
        configurable: true
    });
    QuoteFormComponent.prototype.publish = function () {
        console.log(this.quotesForm.value);
    };
    QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.scss */ "./src/app/quote-form/quote-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='container'>\r\n  <button class='btn' (click)='showForm()'>+ Add Quote</button>\r\n  <app-quote-form></app-quote-form>\r\n  <div class='row'>\r\n    <li *ngFor=\"let quote of quotes\" class='card col'>\r\n      <div class='quote'>\r\n        <div class='details'>\r\n          <span class='to-left'>{{quote.name}}</span>\r\n          <span class='to-right'>{{quote.timePublished}}</span>\r\n        </div>\r\n        <!-- Quote goes here -->\r\n        <div class='main-quote'>\r\n          <p>\"{{quote.quote}}\"</p>\r\n        </div>\r\n        \r\n        <div class='details'>\r\n          <p id='author'>- {{quote.author}}</p>\r\n          <span id='upvotes' (click)='upVote()'>\r\n            <i class=\"material-icons\">thumb_up_alt</i>\r\n            {{quote.upVotes}}\r\n          </span>\r\n          <span id='downvotes' (click)='downVote()'>\r\n            <i class=\"material-icons\">thumb_down_alt</i>\r\n            {{quote.downVotes}}\r\n          </span>\r\n        </div>\r\n\r\n      </div>\r\n    </li>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.scss":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  display: inline;\n  text-decoration: none;\n  outline: none; }\n\n.card {\n  box-sizing: border-box;\n  margin: 6% 1% 0 1%;\n  height: 20%;\n  border: none;\n  box-shadow: 2px 2px 10px 5px rgba(216, 221, 239, 0.3); }\n\n.card:hover {\n    z-index: 1;\n    box-shadow: 2px 2px 10px 5px rgba(216, 221, 239, 0.5); }\n\n.card .quote {\n    height: 50vh;\n    overflow: hidden; }\n\n.card .quote .main-quote {\n      height: 50%; }\n\n.card .quote .main-quote p {\n        padding: 0 15px;\n        margin: 10% 0 5% 0;\n        font-family: \"Playfair Display\", serif;\n        color: #474747;\n        font-size: 100%; }\n\n.card .quote .details {\n      padding: 15px 15px;\n      width: 100%; }\n\n.card .quote .details span {\n        font-family: \"Open Sans\", sans-serif; }\n\n.card .quote .details span #author {\n          font-weight: 600;\n          font-size: 15px; }\n\n.card .quote .details span #upvotes {\n          color: #223843;\n          padding: 0 20px; }\n\n.card .quote .details p {\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 13px; }\n\n.btn {\n  border: 2px solid #223843;\n  background-color: transparent;\n  text-transform: uppercase;\n  border-radius: 40px;\n  font-weight: 700;\n  font-size: 13px;\n  color: #223843;\n  align-items: flex-start;\n  margin-top: 10%; }\n\n.btn:hover {\n    border: 2px solid #C2C1C2;\n    background-color: #C2C1C2; }\n\n.to-left {\n  float: left;\n  font-weight: 600;\n  font-size: 13px;\n  color: #B1B0B1; }\n\n.to-right {\n  float: right;\n  font-weight: normal;\n  font-size: 12px;\n  color: #B1B0B1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGVzL0M6XFxVc2Vyc1xcbWljaGFcXERvY3VtZW50c1xcQ29kZVxcTW9yaW5nYVxcUXVvdGVzL3NyY1xcYXBwXFxxdW90ZXNcXHF1b3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0RBQXlDLEVBcUQ1Qzs7QUExREQ7SUFPUSxXQUFVO0lBQ1Ysc0RBQXlDLEVBQzVDOztBQVRMO0lBWVEsYUFBWTtJQUNaLGlCQUFnQixFQTBDbkI7O0FBdkRMO01BaUJZLFlBQVcsRUFTZDs7QUExQlQ7UUFvQmdCLGdCQUFlO1FBQ2YsbUJBQWtCO1FBQ2xCLHVDQXBDc0I7UUFxQ3RCLGVBQWM7UUFDZCxnQkFBZSxFQUNsQjs7QUF6QmI7TUE2QlksbUJBQWtCO01BQ2xCLFlBQVcsRUF3QmQ7O0FBdERUO1FBZ0NnQixxQ0EvQ29CLEVBNkR2Qjs7QUE5Q2I7VUFvQ29CLGlCQUFnQjtVQUNoQixnQkFBZSxFQUNsQjs7QUF0Q2pCO1VBeUNvQixlQUFjO1VBQ2QsZ0JBQWUsRUFDbEI7O0FBM0NqQjtRQWlEZ0IscUNBaEVvQjtRQWlFcEIsZ0JBQWUsRUFDbEI7O0FBU2I7RUFDSSwwQkFBeUI7RUFDekIsOEJBQTZCO0VBQzdCLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLHdCQUF1QjtFQUN2QixnQkFBZSxFQU1sQjs7QUFmRDtJQVlRLDBCQUF5QjtJQUN6QiwwQkFBeUIsRUFDNUI7O0FBR0w7RUF6RkksWUEwRnFCO0VBekZyQixpQkF5RmdDO0VBeEZoQyxnQkF3RjJCO0VBdkYzQixlQUFjLEVBd0ZqQjs7QUFFRDtFQTdGSSxhQThGc0I7RUE3RnRCLG9CQUZ5QztFQUd6QyxnQkE0RjRCO0VBM0Y1QixlQUFjLEVBNEZqQiIsImZpbGUiOiJzcmMvYXBwL3F1b3Rlcy9xdW90ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkb3RoZXItZm9udDogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiRxdW90ZS1mb250OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG5AbWl4aW4gZGV0YWlscygkZmxvYXQsICRzaXplLCAkd2VpZ2h0OiBub3JtYWwpIHtcclxuICAgIGZsb2F0OiAkZmxvYXQ7XHJcbiAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICBjb2xvcjogI0IxQjBCMTtcclxufVxyXG5cclxubGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogNiUgMSUgMCAxJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDVweCByZ2JhKCNEOERERUYsIDAuMyk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCA1cHggcmdiYSgjRDhEREVGLCAwLjUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xdW90ZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1haW4tcXVvdGUge1xyXG5cclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAlIDAgNSUgMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcXVvdGUtZm9udDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkb3RoZXItZm9udDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAjYXV0aG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgI3Vwdm90ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIzODQzO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJG90aGVyLWZvbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIzODQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzIyMzg0MztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMkMxQzI7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkMxQzI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50by1sZWZ0IHtcclxuICAgIEBpbmNsdWRlIGRldGFpbHMobGVmdCwgMTNweCwgNjAwKTtcclxufVxyXG5cclxuLnRvLXJpZ2h0IHtcclxuICAgIEBpbmNsdWRlIGRldGFpbHMocmlnaHQsIDEycHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sample_quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-quotes */ "./src/app/quotes/sample-quotes.ts");



var QuotesComponent = /** @class */ (function () {
    function QuotesComponent() {
        this.quotes = _sample_quotes__WEBPACK_IMPORTED_MODULE_2__["QuoteSamples"];
    }
    QuotesComponent.prototype.ngOnInit = function () {
    };
    QuotesComponent.prototype.showForm = function () {
        $('.row').toggle();
        $('app-component-form').show();
    };
    QuotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.scss */ "./src/app/quotes/quotes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/quotes/sample-quotes.ts":
/*!*****************************************!*\
  !*** ./src/app/quotes/sample-quotes.ts ***!
  \*****************************************/
/*! exports provided: QuoteSamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSamples", function() { return QuoteSamples; });
var QuoteSamples = [
    {
        id: 1,
        quote: 'Insanity is doing the same thing, over and over again, but expecting different results.',
        name: 'Andrew Kein',
        author: 'Narcotics Anonymous',
        upVotes: 0,
        downVotes: 0,
        timePublished: '5 Hrs Ago',
    },
    {
        id: 1,
        quote: "Here's all you have to know about men and women: women are crazy, men are stupid. And the main reason women are crazy \n        is that men are stupid",
        name: 'John Doe',
        author: 'George Carlin',
        upVotes: 0,
        downVotes: 0,
        timePublished: '6 Hrs Ago',
    },
    {
        id: 1,
        quote: 'Women are crazy, men are stupid. And the main reason women are crazy is that men are stupid',
        name: 'John Doe',
        author: 'George Carlin',
        upVotes: 0,
        downVotes: 0,
        timePublished: '6 Hrs Ago',
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\micha\Documents\Code\Moringa\Quotes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
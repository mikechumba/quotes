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
    function QuoteDetailsService() {
    }
    QuoteDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\r\n<div class='form-group'>\r\n  <div class='input-group'>\r\n      <input type=\"text\" class='quote-details' placeholder=\"Enter Your Name\" id=\"username\" required>\r\n      <input type=\"text\" class='quote-details' placeholder=\"Enter Author's Name\" id=\"author\" required>\r\n  </div>\r\n  <div class='input-group'>\r\n      <input class='quote-input' type=\"text\" placeholder=\"Enter Quote\" id=\"actual-quote\" required>\r\n  </div>\r\n  <input class='submit-btn' (click)=\"onSubmit()\" type=\"button\" value=\"Publish\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group #username, .input-group #author {\n  width: 49.5%;\n  box-sizing: border-box;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  border: 2px solid #C2C1C2;\n  border-radius: 3px;\n  padding: 6px 10px; }\n\n.form-group {\n  width: 100%;\n  display: none; }\n\n.input-group {\n  outline: none; }\n\n.input-group #username {\n    margin-right: 0.5%; }\n\n.input-group #author {\n    margin-left: 0.5%; }\n\n.input-group .quote-input {\n    width: 100%;\n    border: 2px solid #C2C1C2;\n    height: 60px;\n    background: transparent;\n    padding: 6px 10px;\n    border-radius: 3px; }\n\n.submit-btn {\n  background-color: #4EA699;\n  text-transform: uppercase;\n  border-radius: 3px;\n  border: none;\n  padding: 8px 15px;\n  font-weight: 700;\n  font-size: 13px;\n  color: #EFF1F3;\n  align-items: flex-start;\n  margin-top: 2%; }\n\n.submit-btn:hover {\n    background-color: #223843; }\n\n.submit-btn:active {\n    z-index: -2;\n    box-shadow: 1px 1px 2px 2px #C2C1C2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9DOlxcVXNlcnNcXG1pY2hhXFxEb2N1bWVudHNcXENvZGVcXE1vcmluZ2FcXFF1b3Rlcy9zcmNcXGFwcFxccXVvdGUtZm9ybVxccXVvdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNsQjs7QUFHRDtFQUNFLFlBQVc7RUFDWCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhLEVBd0JkOztBQXpCRDtJQVNJLG1CQTNCUyxFQTRCVjs7QUFWSDtJQWNJLGtCQWhDUyxFQWlDVjs7QUFmSDtJQWtCSSxZQUFXO0lBQ1gsMEJBQXlCO0lBQ3pCLGFBQVk7SUFDWix3QkFBdUI7SUFDdkIsa0JBQWlCO0lBQ2pCLG1CQUFrQixFQUNuQjs7QUFHSDtFQUNFLDBCQUF5QjtFQUN6QiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLHdCQUF1QjtFQUN2QixlQUFjLEVBVWY7O0FBcEJEO0lBYU0sMEJBQXlCLEVBQzVCOztBQWRIO0lBaUJJLFlBQVc7SUFDWCxvQ0FBbUMsRUFDcEMiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1mb3JtL3F1b3RlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFyZ2luOiAwLjUlO1xyXG5cclxuJXVzZXItZGV0YWlscyB7XHJcbiAgd2lkdGg6IDQ5LjUlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0MyQzFDMjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIFxyXG4gIC8vIGlucHV0IHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAjdXNlcm5hbWUge1xyXG4gICAgQGV4dGVuZCAldXNlci1kZXRhaWxzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luO1xyXG4gIH1cclxuXHJcbiAgI2F1dGhvciB7XHJcbiAgICBAZXh0ZW5kICV1c2VyLWRldGFpbHM7XHJcbiAgICBtYXJnaW4tbGVmdDogJG1hcmdpbjtcclxuICB9XHJcblxyXG4gIC5xdW90ZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMkMxQzI7ICBcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQTY5OTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNFRkYxRjM7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzODQzO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggI0MyQzFDMjtcclxuICB9XHJcbn0iXX0= */"

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


var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
    }
    QuoteFormComponent.prototype.ngOnInit = function () {
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

module.exports = "\r\n<div class='container'>\r\n  <button class='btn' (click)='showForm()'>+ Add Quote</button>\r\n  <app-quote-form></app-quote-form>\r\n  <div class='row'>\r\n    <li *ngFor=\"let quote of quotes\" class='card col'>\r\n      <div class='quote'>\r\n        <div class='details'>\r\n          <span class='to-left'>{{quote.name}}</span>\r\n          <span class='to-right'>{{quote.timePublished}}</span>\r\n        </div>\r\n        <!-- Quote goes here -->\r\n        <div class='main-quote'>\r\n          <p>\"{{quote.quote}}\"</p>\r\n        </div>\r\n        \r\n        <div class='details'>\r\n          <p id='author'>- {{quote.author}}</p>\r\n          <span id='upvotes'>{{quote.upVotes}}</span>\r\n          <span id='downvotes'>{{quote.downVotes}}</span>\r\n        </div>\r\n\r\n      </div>\r\n    </li>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.scss":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  display: inline;\n  text-decoration: none;\n  outline: none; }\n\n.card {\n  box-sizing: border-box;\n  margin: 6% 1% 0 1%;\n  height: 20%;\n  border: none;\n  box-shadow: 2px 2px 10px 5px rgba(216, 221, 239, 0.3); }\n\n.card:hover {\n    z-index: 1;\n    box-shadow: 2px 2px 10px 5px rgba(216, 221, 239, 0.5); }\n\n.card .quote {\n    height: 50vh;\n    overflow: hidden; }\n\n.card .quote .main-quote {\n      height: 50%; }\n\n.card .quote .main-quote p {\n        padding: 0 15px;\n        margin: 10% 0 5% 0;\n        font-family: \"Playfair Display\", serif;\n        color: #474747;\n        font-size: 100%; }\n\n.card .quote .details {\n      padding: 15px 15px;\n      width: 100%; }\n\n.card .quote .details span {\n        font-family: \"Open Sans\", sans-serif; }\n\n.card .quote .details span #author {\n          font-weight: 600;\n          font-size: 15px; }\n\n.card .quote .details span #upvotes {\n          color: #223843;\n          padding: 0 10px; }\n\n.card .quote .details span #upvotes:before {\n            position: absolute;\n            font-family: 'Material Icons';\n            content: '\\thumb_up_alt';\n            color: #4EA699; }\n\n.card .quote .details p {\n        font-family: \"Open Sans\", sans-serif;\n        font-size: 13px; }\n\n.btn {\n  border: 2px solid #223843;\n  background-color: transparent;\n  text-transform: uppercase;\n  border-radius: 40px;\n  font-weight: 700;\n  font-size: 13px;\n  color: #223843;\n  align-items: flex-start;\n  margin-top: 10%; }\n\n.btn:hover {\n    border: 2px solid #C2C1C2;\n    background-color: #C2C1C2; }\n\n.to-left {\n  float: left;\n  font-weight: 600;\n  font-size: 13px;\n  color: #B1B0B1; }\n\n.to-right {\n  float: right;\n  font-weight: normal;\n  font-size: 12px;\n  color: #B1B0B1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGVzL0M6XFxVc2Vyc1xcbWljaGFcXERvY3VtZW50c1xcQ29kZVxcTW9yaW5nYVxcUXVvdGVzL3NyY1xcYXBwXFxxdW90ZXNcXHF1b3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0RBQXlDLEVBeUQ1Qzs7QUE5REQ7SUFPUSxXQUFVO0lBQ1Ysc0RBQXlDLEVBQzVDOztBQVRMO0lBWVEsYUFBWTtJQUNaLGlCQUFnQixFQThDbkI7O0FBM0RMO01BaUJZLFlBQVcsRUFTZDs7QUExQlQ7UUFvQmdCLGdCQUFlO1FBQ2YsbUJBQWtCO1FBQ2xCLHVDQXBDc0I7UUFxQ3RCLGVBQWM7UUFDZCxnQkFBZSxFQUNsQjs7QUF6QmI7TUE2QlksbUJBQWtCO01BQ2xCLFlBQVcsRUE0QmQ7O0FBMURUO1FBZ0NnQixxQ0EvQ29CLEVBaUV2Qjs7QUFsRGI7VUFvQ29CLGlCQUFnQjtVQUNoQixnQkFBZSxFQUNsQjs7QUF0Q2pCO1VBeUNvQixlQUFjO1VBQ2QsZ0JBQWUsRUFPbEI7O0FBakRqQjtZQTRDd0IsbUJBQWtCO1lBQ2xCLDhCQUE2QjtZQUM3Qix5QkFBd0I7WUFDeEIsZUFBYyxFQUNqQjs7QUFoRHJCO1FBcURnQixxQ0FwRW9CO1FBcUVwQixnQkFBZSxFQUNsQjs7QUFTYjtFQUNJLDBCQUF5QjtFQUN6Qiw4QkFBNkI7RUFDN0IsMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsd0JBQXVCO0VBQ3ZCLGdCQUFlLEVBTWxCOztBQWZEO0lBWVEsMEJBQXlCO0lBQ3pCLDBCQUF5QixFQUM1Qjs7QUFHTDtFQTdGSSxZQThGcUI7RUE3RnJCLGlCQTZGZ0M7RUE1RmhDLGdCQTRGMkI7RUEzRjNCLGVBQWMsRUE0RmpCOztBQUVEO0VBakdJLGFBa0dzQjtFQWpHdEIsb0JBRnlDO0VBR3pDLGdCQWdHNEI7RUEvRjVCLGVBQWMsRUFnR2pCIiwiZmlsZSI6InNyYy9hcHAvcXVvdGVzL3F1b3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRvdGhlci1mb250OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJHF1b3RlLWZvbnQ6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbkBtaXhpbiBkZXRhaWxzKCRmbG9hdCwgJHNpemUsICR3ZWlnaHQ6IG5vcm1hbCkge1xyXG4gICAgZmxvYXQ6ICRmbG9hdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgIGNvbG9yOiAjQjFCMEIxO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiA2JSAxJSAwIDElO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggNXB4IHJnYmEoI0Q4RERFRiwgMC4zKTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDVweCByZ2JhKCNEOERERUYsIDAuNSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnF1b3RlIHtcclxuICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBcclxuICAgICAgICAubWFpbi1xdW90ZSB7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCUgMCA1JSAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRxdW90ZS1mb250O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NzQ3NDc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRvdGhlci1mb250O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICNhdXRob3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAjdXB2b3RlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjM4NDM7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcdGh1bWJfdXBfYWx0JzsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0RUE2OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkb3RoZXItZm9udDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjM4NDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMjIzODQzO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0MyQzFDMjsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQzFDMjtcclxuICAgIH1cclxufVxyXG5cclxuLnRvLWxlZnQge1xyXG4gICAgQGluY2x1ZGUgZGV0YWlscyhsZWZ0LCAxM3B4LCA2MDApO1xyXG59XHJcblxyXG4udG8tcmlnaHQge1xyXG4gICAgQGluY2x1ZGUgZGV0YWlscyhyaWdodCwgMTJweCk7XHJcbn1cclxuIl19 */"

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
        $('.row').hide();
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
        quote: 'Here\'s all you have to know about men and women: women are crazy, men are stupid. And the main reason women are crazy is that men are stupid',
        name: 'John Doe',
        author: 'George Carlin',
        upVotes: 0,
        downVotes: 0,
        timePublished: '6 Hrs Ago',
    },
    {
        id: 1,
        quote: 'When people don\'t express themselves, they die one piece at a time.',
        name: 'Jane Doe',
        author: 'Laurie Halse Anderson',
        upVotes: 0,
        downVotes: 0,
        timePublished: '5 Hrs Ago',
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
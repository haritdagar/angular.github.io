(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div >\n <!-- <h1>\n    Welcome to {{ title }}!\n  </h1> \n  </div>\n  <app-ifelsecomp></app-ifelsecomp>\n  <h1>Switch Case</h1>\n  <app-switchdemo></app-switchdemo>\n  <h1>\n    Loops\n  </h1>\n  <app-loops></app-loops>\n  <app-stuform></app-stuform>\n<h1>Model Driven Form</h1>\n<app-empform></app-empform>\n<h1>model driven form group</h1>\n<app-frmgroup></app-frmgroup>\n-->\n\n\n<app-postsystem-practiceusingarray></app-postsystem-practiceusingarray>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emp/emp.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emp/emp.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  emp \n  </h1>\n\n  <p [ngClass]='c'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n    <button (click)=fun()>button</button>\n\n\n<h1>Ng Style</h1>\n\n    <p [ngStyle]=\"{'font-size':size,'color':color}\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n\n      <button (click)=fun2()>button</button>\n      <input type=\"text\" [(ngModel)]='size'>\n      {{size}}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/empform/empform.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/empform/empform.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=empform()>\n  <table>\n    <tr>\n      <td>Name</td>\n      <td><input type=\"text\" [formControl]='name'></td>\n    </tr>\n    <tr>\n        <td>age</td>\n        <td><input type=\"text\" [formControl]='age'></td>\n    </tr>\n    <tr>\n        <td>email</td>\n        <td><input type=\"text\" [formControl]='email'></td>\n    </tr>\n    <tr>\n        <td>address</td>\n        <td><input type=\"text\" [formControl]='address'></td>\n    </tr>\n    <tr>\n        <td></td>\n        <td><input type=\"submit\"></td>\n    </tr>\n  </table>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emplist/emplist.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emplist/emplist.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  emplist works!\n</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/frmgroup/frmgroup.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/frmgroup/frmgroup.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"service.myfrm\" (submit)=\"service.submitform()\">\n  <table>\n    <tr>\n      <td>Name</td>\n      <td><input type=\"text\" formControlName='name'></td>\n    </tr>\n    \n    <tr>\n      <td>age</td>\n      <td><input type=\"text\" formControlName='age'></td>\n    </tr>\n    <tr>\n      <td>email</td>\n      <td><input type=\"text\" formControlName='email'></td>\n    </tr>\n    <tr>\n      <td>Address</td>\n      <td><input type=\"text\" formControlName='address'></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><input type=\"submit\"></td>\n    </tr>\n  </table>\n  <table border=\"1\">\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n      <th>Email</th>\n      <th>Address</th>\n   </tr>\n   <tr *ngFor='let val of service.data'>\n     <td>{{val.name}}</td>\n     <td>{{val.age}}</td>\n     <td>{{val.email}}</td>\n     <td>{{val.address}}</td>\n   </tr>\n  </table>\n\n</form>\n\n{{service.name}}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ifelsecomp/ifelsecomp.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ifelsecomp/ifelsecomp.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Check Even Or Odd</h1>\n<input type=\"text\" [(ngModel)]='a'>\n<button (click)=\"evenodd()\">click</button>\n<div *ngIf='a%2==0; else e'>\n  <h1>Value us Even</h1>\n</div>\n<ng-template #e>\n  <h1>Value is odd</h1>\n</ng-template>\nX = <input type=\"text\" [(ngModel)]='x'><br>\nY = <input type=\"text\" [(ngModel)]='y'><br>\n<ng-content *ngIf='x>y; then i else es' ></ng-content>\n<ng-template #i>\n  <h2>X is greater</h2>\n</ng-template>\n<ng-template #es>\n  <h2>Y is greater</h2>\n</ng-template>\n\n\n\n<h1>check</h1>\n<ng-container *ngIf='x>y; then i1 else e1' ></ng-container>\n<ng-template #i1>\n  <h2>X is greater</h2>\n</ng-template>\n\n<ng-template #e1>\n  <ng-container *ngIf='x==y; then i2 else e2' >\n    \n  </ng-container>\n  <ng-template #i2>\n    <h2>Both Equal</h2>\n  </ng-template>\n  <ng-template #e2>\n    <h2>Y greater</h2>\n  </ng-template>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loops/loops.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loops/loops.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Your Array id {{data}} and length = {{data.length}}<br>\nName = {{studata.name}}<br>\nage = {{studata.age}}<br>\nemail = {{studata.email}}<br>\nADdress= {{studata.address}}<br>\n\n\n<ul *ngFor='let val of data; even as e; index as i;odd as o'>\n  <li>{{val}}-{{e}}={{i}}-{{o}}</li>\n</ul>\n\n<table border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n    <th>Email</th>\n  </tr>\n  <tr *ngFor='let data of studentrecord ; trackBy :trackbyfn'>\n    <td>{{data.name|mypipe:'ji':\"director\" }}</td>\n    <td>{{data.age|currency:'INR'}} - {{data.age|currency}}</td>\n    <td>{{data.address}}</td>\n  </tr>\n</table>\n<button (click)=\"addval()\">click</button>\n{{'vimal'|mypipe:'kumar':'teacher'}}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"mainform\" >\n        <ng-content *ngIf='i==0; then p else e'></ng-content>\n        <ng-template #p>\n<form [formGroup]=\"myform\" (submit)=\"post()\">\n    <table cellspacing = \"10\" cellpadding=\"10\">\n        <tr>\n            <td class=\"formtext\">Post Title</td>\n        </tr>\n        <tr>\n            <td><input class=\"input\" type=\"text\" formControlName='title'></td>\n        </tr>\n        <tr>\n            <td class=\"formtext\">Post Content</td>\n        </tr>\n        <tr>\n            <td><textarea class=\"input\" formControlName='content' style=\"min-height: 100px\"></textarea></td>\n        </tr>\n        <tr>\n            \n            <td><button type=\"button\" (click)=\"post()\" class=\"button\">Submit</button></td>\n        </tr>\n        <tr>\n            <td><button type=\"button\" (click)=\"edit()\" class=\"button\" >Edit Post</button></td>\n        </tr>\n    </table>\n</form>\n</ng-template>\n<ng-template #e>\n        <form [formGroup]=\"myedit\" (submit)=\"editpost()\">\n                <table cellspacing = \"10\" cellpadding=\"10\">\n                        <tr>\n                                <td class=\"formtext\">Post Number</td>\n                            </tr>\n                            <tr>\n                                <td><input class=\"input\" type=\"text\" formControlName='index'></td>\n                            </tr>\n                    <tr>\n                        <td class=\"formtext\">Post Content</td>\n                    </tr>\n                    <tr>\n                        <td><textarea class=\"input\" formControlName='content' style=\"min-height: 100px\"></textarea></td>\n                    </tr>\n                    <tr>\n                        \n                        <td><button type=\"button\" (click)=\"editpost()\" class=\"button\">Submit</button></td>\n                        \n                    </tr>\n                    <tr>\n                            <td><button type=\"button\" (click)=\"edit()\" class=\"button\" >Add New Post</button></td>\n                    </tr>\n                </table>\n            </form>\n</ng-template>\n    </div>\n<ng-container *ngFor='let val of array; index as i ' >\n    <div class=\"innerbox\">\n    <div class=\"title\">Post # {{i+1}} : {{val.title}}</div>\n    <div class=\"content\">{{val.content}}</div>        \n    </div>\n</ng-container>\n\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stuform/stuform.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stuform/stuform.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #forms='ngForm' (submit)='stuform(forms.value)'>\n    <table>\n      <tr>\n        <td>Name</td>\n        <td><input type=\"text\" name=\"first\" ngModel></td>\n      </tr>\n      <tr>\n          <td>Age</td>\n          <td><input type=\"text\" name=\"age\" ngModel></td>\n      </tr>\n      <tr>\n            <td>Email</td>\n            <td><input type=\"text\" name=\"email\" ngModel></td>\n      </tr>\n      <tr>\n          <td>address</td>\n          <td><input type=\"text\" name=\"address\" ngModel></td>\n      </tr>\n      <tr>\n          <td></td>\n          <td><input type=\"submit\"></td>\n        </tr>    \n    </table>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/switchdemo/switchdemo.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/switchdemo/switchdemo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)]='day'>\n<h4>Selected day = {{day}}</h4>\n<div [ngSwitch]='day'>\n  <ng-template ngSwitchCase='1'>\n    Sunday\n  </ng-template>\n  <ng-template ngSwitchCase='2'>\n    Monday\n  </ng-template>\n  <ng-template ngSwitchCase ='3'>\n    Tuesday\n  </ng-template>\n  <ng-template ngSwitchCase='4'>\n    Wednesday\n  </ng-template>\n  <ng-template ngSwitchCase='5'>\n    Thursday\n  </ng-template>\n  <ng-template ngSwitchCase='6'>\n    Friday\n  </ng-template>\n  <ng-template ngSwitchCase='7'>\n    Saturday\n  </ng-template>\n  <ng-template ngSwitchDefault>\n    Invalid Day\n  </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>test works!</p>\n"

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'myangular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _emp_emp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emp/emp.component */ "./src/app/emp/emp.component.ts");
/* harmony import */ var _emplist_emplist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emplist/emplist.component */ "./src/app/emplist/emplist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ifelsecomp_ifelsecomp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ifelsecomp/ifelsecomp.component */ "./src/app/ifelsecomp/ifelsecomp.component.ts");
/* harmony import */ var _switchdemo_switchdemo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./switchdemo/switchdemo.component */ "./src/app/switchdemo/switchdemo.component.ts");
/* harmony import */ var _loops_loops_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loops/loops.component */ "./src/app/loops/loops.component.ts");
/* harmony import */ var _mypipe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mypipe.pipe */ "./src/app/mypipe.pipe.ts");
/* harmony import */ var _stuform_stuform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stuform/stuform.component */ "./src/app/stuform/stuform.component.ts");
/* harmony import */ var _empform_empform_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./empform/empform.component */ "./src/app/empform/empform.component.ts");
/* harmony import */ var _frmgroup_frmgroup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./frmgroup/frmgroup.component */ "./src/app/frmgroup/frmgroup.component.ts");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _postsystem_practiceusingarray_postsystem_practiceusingarray_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./postsystem-practiceusingarray/postsystem-practiceusingarray.component */ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _emp_emp_component__WEBPACK_IMPORTED_MODULE_5__["EmpComponent"],
                _emplist_emplist_component__WEBPACK_IMPORTED_MODULE_6__["EmplistComponent"],
                _ifelsecomp_ifelsecomp_component__WEBPACK_IMPORTED_MODULE_8__["IfelsecompComponent"],
                _switchdemo_switchdemo_component__WEBPACK_IMPORTED_MODULE_9__["SwitchdemoComponent"],
                _loops_loops_component__WEBPACK_IMPORTED_MODULE_10__["LoopsComponent"],
                _mypipe_pipe__WEBPACK_IMPORTED_MODULE_11__["MypipePipe"],
                _stuform_stuform_component__WEBPACK_IMPORTED_MODULE_12__["StuformComponent"],
                _empform_empform_component__WEBPACK_IMPORTED_MODULE_13__["EmpformComponent"],
                _frmgroup_frmgroup_component__WEBPACK_IMPORTED_MODULE_14__["FrmgroupComponent"],
                _postsystem_practiceusingarray_postsystem_practiceusingarray_component__WEBPACK_IMPORTED_MODULE_16__["PostsystemPracticeusingarrayComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_17__["TestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_15__["MyserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/emp/emp.component.css":
/*!***************************************!*\
  !*** ./src/app/emp/emp.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cls1{\r\n    font-size:24px;\r\n    color: red; \r\n}\r\n.cls2{\r\n    font-size:32px;\r\n    color:violet; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wL2VtcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lbXAvZW1wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xzMXtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgY29sb3I6IHJlZDsgXHJcbn1cclxuLmNsczJ7XHJcbiAgICBmb250LXNpemU6MzJweDtcclxuICAgIGNvbG9yOnZpb2xldDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/emp/emp.component.ts":
/*!**************************************!*\
  !*** ./src/app/emp/emp.component.ts ***!
  \**************************************/
/*! exports provided: EmpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpComponent", function() { return EmpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmpComponent = /** @class */ (function () {
    function EmpComponent() {
        this.c = 'cls1';
        this.size = '16px';
        this.color = 'pink';
        this.a = 'value';
    }
    EmpComponent.prototype.ngOnInit = function () {
    };
    EmpComponent.prototype.fun = function () {
        this.c = this.c == 'cls1' ? 'cls2' : "cls1";
        console.log("Hello fron emp");
    };
    EmpComponent.prototype.fun2 = function () {
        this.size = '42px';
        this.color = 'green';
        console.log("Hello fron emp");
    };
    EmpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emp',
            template: __webpack_require__(/*! raw-loader!./emp.component.html */ "./node_modules/raw-loader/index.js!./src/app/emp/emp.component.html"),
            styles: [__webpack_require__(/*! ./emp.component.css */ "./src/app/emp/emp.component.css")]
        })
    ], EmpComponent);
    return EmpComponent;
}());



/***/ }),

/***/ "./src/app/empform/empform.component.css":
/*!***********************************************!*\
  !*** ./src/app/empform/empform.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGZvcm0vZW1wZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/empform/empform.component.ts":
/*!**********************************************!*\
  !*** ./src/app/empform/empform.component.ts ***!
  \**********************************************/
/*! exports provided: EmpformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpformComponent", function() { return EmpformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EmpformComponent = /** @class */ (function () {
    function EmpformComponent() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.age = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    EmpformComponent.prototype.ngOnInit = function () {
    };
    EmpformComponent.prototype.empform = function () {
        //console.log(this.name.value);
        console.log("name = " + this.name.value + " age = " + this.age.value + " Email = " + this.email.value + " address = " + this.address.value);
    };
    EmpformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empform',
            template: __webpack_require__(/*! raw-loader!./empform.component.html */ "./node_modules/raw-loader/index.js!./src/app/empform/empform.component.html"),
            styles: [__webpack_require__(/*! ./empform.component.css */ "./src/app/empform/empform.component.css")]
        })
    ], EmpformComponent);
    return EmpformComponent;
}());



/***/ }),

/***/ "./src/app/emplist/emplist.component.css":
/*!***********************************************!*\
  !*** ./src/app/emplist/emplist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxpc3QvZW1wbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/emplist/emplist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/emplist/emplist.component.ts ***!
  \**********************************************/
/*! exports provided: EmplistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmplistComponent", function() { return EmplistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmplistComponent = /** @class */ (function () {
    function EmplistComponent() {
    }
    EmplistComponent.prototype.ngOnInit = function () {
    };
    EmplistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emplist',
            template: __webpack_require__(/*! raw-loader!./emplist.component.html */ "./node_modules/raw-loader/index.js!./src/app/emplist/emplist.component.html"),
            styles: [__webpack_require__(/*! ./emplist.component.css */ "./src/app/emplist/emplist.component.css")]
        })
    ], EmplistComponent);
    return EmplistComponent;
}());



/***/ }),

/***/ "./src/app/frmgroup/frmgroup.component.css":
/*!*************************************************!*\
  !*** ./src/app/frmgroup/frmgroup.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZybWdyb3VwL2ZybWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/frmgroup/frmgroup.component.ts":
/*!************************************************!*\
  !*** ./src/app/frmgroup/frmgroup.component.ts ***!
  \************************************************/
/*! exports provided: FrmgroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrmgroupComponent", function() { return FrmgroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");




var FrmgroupComponent = /** @class */ (function () {
    function FrmgroupComponent(service) {
        this.service = service;
        this.myfrm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.data = [];
    }
    FrmgroupComponent.prototype.submitform = function () {
        console.log(this.myfrm.value);
        this.data.push(this.myfrm.value);
        console.log(this.data);
    };
    FrmgroupComponent.prototype.ngOnInit = function () {
    };
    FrmgroupComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
    ]; };
    FrmgroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frmgroup',
            template: __webpack_require__(/*! raw-loader!./frmgroup.component.html */ "./node_modules/raw-loader/index.js!./src/app/frmgroup/frmgroup.component.html"),
            styles: [__webpack_require__(/*! ./frmgroup.component.css */ "./src/app/frmgroup/frmgroup.component.css")]
        })
    ], FrmgroupComponent);
    return FrmgroupComponent;
}());



/***/ }),

/***/ "./src/app/ifelsecomp/ifelsecomp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ifelsecomp/ifelsecomp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lmZWxzZWNvbXAvaWZlbHNlY29tcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ifelsecomp/ifelsecomp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ifelsecomp/ifelsecomp.component.ts ***!
  \****************************************************/
/*! exports provided: IfelsecompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfelsecompComponent", function() { return IfelsecompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IfelsecompComponent = /** @class */ (function () {
    function IfelsecompComponent() {
        this.a = 0;
        this.x = 0;
        this.y = 0;
    }
    IfelsecompComponent.prototype.evenodd = function () {
        if (this.a % 2 == 0) {
            console.log("even");
        }
        else {
            console.log("Odd");
        }
    };
    IfelsecompComponent.prototype.ngOnInit = function () {
    };
    IfelsecompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ifelsecomp',
            template: __webpack_require__(/*! raw-loader!./ifelsecomp.component.html */ "./node_modules/raw-loader/index.js!./src/app/ifelsecomp/ifelsecomp.component.html"),
            styles: [__webpack_require__(/*! ./ifelsecomp.component.css */ "./src/app/ifelsecomp/ifelsecomp.component.css")]
        })
    ], IfelsecompComponent);
    return IfelsecompComponent;
}());



/***/ }),

/***/ "./src/app/loops/loops.component.css":
/*!*******************************************!*\
  !*** ./src/app/loops/loops.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvb3BzL2xvb3BzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/loops/loops.component.ts":
/*!******************************************!*\
  !*** ./src/app/loops/loops.component.ts ***!
  \******************************************/
/*! exports provided: LoopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopsComponent", function() { return LoopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoopsComponent = /** @class */ (function () {
    function LoopsComponent() {
        this.data = [5, 9, 34, 18, 6, 48, 97, 18];
        this.studata = {
            name: "hemendra",
            age: 23,
            email: "hss.agra@gmail.com",
            address: "agra"
        };
        this.studentrecord = [{ name: "kamla", age: "11", address: "delhi" },
            { name: "vimla", age: "22", address: "swizerland" },
            { name: "shimla", age: "33", address: "hongkong" },
            { name: "ramla", age: "44", address: "faridabaad" }];
        console.log(this.data);
        console.log(this.studata);
    }
    LoopsComponent.prototype.ngOnInit = function () {
    };
    LoopsComponent.prototype.addval = function () {
        this.studentrecord = [{ name: "kamla", age: "11", address: "delhi" },
            { name: "vimla", age: "22", address: "swizerland" },
            { name: "shimla", age: "33", address: "hongkong" },
            { name: "ramla", age: "44", address: "faridabaad" },
            { name: "pawan", age: "55", address: "nw" },
            { name: "pankaj", age: "66", address: "eng" }];
    };
    LoopsComponent.prototype.trackbyfn = function (index) {
        return index;
    };
    LoopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loops',
            template: __webpack_require__(/*! raw-loader!./loops.component.html */ "./node_modules/raw-loader/index.js!./src/app/loops/loops.component.html"),
            styles: [__webpack_require__(/*! ./loops.component.css */ "./src/app/loops/loops.component.css")]
        })
    ], LoopsComponent);
    return LoopsComponent;
}());



/***/ }),

/***/ "./src/app/mypipe.pipe.ts":
/*!********************************!*\
  !*** ./src/app/mypipe.pipe.ts ***!
  \********************************/
/*! exports provided: MypipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypipePipe", function() { return MypipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MypipePipe = /** @class */ (function () {
    function MypipePipe() {
    }
    MypipePipe.prototype.transform = function (value, args, args2) {
        if (args) {
            value = "Mr. " + value + " " + args;
        }
        else {
            value = "Mr. " + value;
        }
        if (args2) {
            value = value + " " + args2;
        }
        console.log(args);
        return value;
    };
    MypipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mypipe'
        })
    ], MypipePipe);
    return MypipePipe;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MyserviceService = /** @class */ (function () {
    function MyserviceService() {
        this.name = "pala";
        this.myfrm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.data = [];
    }
    MyserviceService.prototype.submitform = function () {
        console.log(this.myfrm.value);
        this.data.push(this.myfrm.value);
        console.log(this.data);
    };
    MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title{\r\n    border-bottom: 1px solid black;\r\n    padding: 1px;\r\n    \r\n    background:white;\r\n    padding: 15px;\r\n    min-height: 40px;\r\n    font-size: 38px;\r\n    font-style: bold;\r\n    \r\n}\r\n.content{    \r\n    background: white;    \r\n    padding: 15px;\r\n    font-size: 20px;\r\n    min-height: 100px;\r\n    \r\n}\r\n.input{\r\n    width: 400px;\r\n    height: 30px;\r\n    -webkit-transition: width 0.5s;\r\n    transition: width 0.5s;\r\n}\r\n.input:hover{\r\n    box-shadow: 0px 3px 20px 0px rgba(67,67,209,1);\r\n   width: 420px;\r\n    \r\n}\r\n.mainform{\r\n    margin-top: 200px;\r\n    margin: auto;\r\n    border: 1px solid black;\r\n    background: white;\r\n    width: 29%;\r\n    padding: 20px;\r\n    height: 440px;\r\nbox-shadow: -1px 0px 26px -6px rgba(0,0,0,0.75);\r\n}\r\n.button{\r\n    width: 407px;\r\n    height: 30px;\r\n    -webkit-transition: width 0.5s,height 0.5s;\r\n    transition: width 0.5s,height 0.5s;\r\n    border: none;\r\n    \r\n}\r\n.innerbox{    \r\n    margin: auto;\r\n    background:whitesmoke;\r\n    padding: none;\r\n    margin-top: 50px;\r\n    width: 50%;\r\nbox-shadow: -1px 0px 26px -6px rgba(0,0,0,0.75);\r\n-webkit-transition: width 0.5s;\r\ntransition: width 0.5s;\r\n}\r\n.formtext{\r\n    font-family: sans-serif;\r\n    font-size: 25px;\r\n    color:#5b5b5b;\r\n}\r\n.button:hover{\r\n    width: 420px;\r\n    height: 40px;\r\n    background-color: #abb4ac;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHN5c3RlbS1wcmFjdGljZXVzaW5nYXJyYXkvcG9zdHN5c3RlbS1wcmFjdGljZXVzaW5nYXJyYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTs7SUFFWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBc0I7SUFBdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw4Q0FBOEM7R0FDL0MsWUFBWTs7QUFFZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUdqQiwrQ0FBK0M7QUFDL0M7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osMENBQWtDO0lBQWxDLGtDQUFrQztJQUNsQyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFHZCwrQ0FBK0M7QUFDL0MsOEJBQXNCO0FBQXRCLHNCQUFzQjtBQUN0QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzeXN0ZW0tcHJhY3RpY2V1c2luZ2FycmF5L3Bvc3RzeXN0ZW0tcHJhY3RpY2V1c2luZ2FycmF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgXHJcbn1cclxuLmNvbnRlbnR7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7ICAgIFxyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgXHJcbn1cclxuLmlucHV0e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcclxufVxyXG4uaW5wdXQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDIwcHggMHB4IHJnYmEoNjcsNjcsMjA5LDEpO1xyXG4gICB3aWR0aDogNDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLm1haW5mb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI5JTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0MHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuYm94LXNoYWRvdzogLTFweCAwcHggMjZweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuLmJ1dHRvbntcclxuICAgIHdpZHRoOiA0MDdweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsaGVpZ2h0IDAuNXM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBcclxufVxyXG4uaW5uZXJib3h7ICAgIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAtMXB4IDBweCAyNnB4IC02cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuYm94LXNoYWRvdzogLTFweCAwcHggMjZweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbnRyYW5zaXRpb246IHdpZHRoIDAuNXM7XHJcbn1cclxuXHJcbi5mb3JtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IzViNWI1YjtcclxufVxyXG4uYnV0dG9uOmhvdmVye1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYjRhYztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PostsystemPracticeusingarrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsystemPracticeusingarrayComponent", function() { return PostsystemPracticeusingarrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PostsystemPracticeusingarrayComponent = /** @class */ (function () {
    function PostsystemPracticeusingarrayComponent() {
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.myedit = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            index: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.array = [];
        this.i = 0;
    }
    PostsystemPracticeusingarrayComponent.prototype.editpost = function () {
        this.array[this.myedit.value.index - 1].content = this.myedit.value.content;
    };
    PostsystemPracticeusingarrayComponent.prototype.post = function () {
        console.log(this.myform.value);
        this.array.push(this.myform.value);
        /* this.array[1] = this.myform.value;*/
        console.log("ARRAY" + this.array);
        // this.array[0].content="asshole";
        console.log(this.array[0].content);
    };
    PostsystemPracticeusingarrayComponent.prototype.edit = function () {
        if (this.i == 0) {
            this.i = 1;
        }
        else {
            this.i = 0;
        }
    };
    PostsystemPracticeusingarrayComponent.prototype.ngOnInit = function () {
    };
    PostsystemPracticeusingarrayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postsystem-practiceusingarray',
            template: __webpack_require__(/*! raw-loader!./postsystem-practiceusingarray.component.html */ "./node_modules/raw-loader/index.js!./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.html"),
            styles: [__webpack_require__(/*! ./postsystem-practiceusingarray.component.css */ "./src/app/postsystem-practiceusingarray/postsystem-practiceusingarray.component.css")]
        })
    ], PostsystemPracticeusingarrayComponent);
    return PostsystemPracticeusingarrayComponent;
}());



/***/ }),

/***/ "./src/app/stuform/stuform.component.css":
/*!***********************************************!*\
  !*** ./src/app/stuform/stuform.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWZvcm0vc3R1Zm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/stuform/stuform.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stuform/stuform.component.ts ***!
  \**********************************************/
/*! exports provided: StuformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StuformComponent", function() { return StuformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StuformComponent = /** @class */ (function () {
    function StuformComponent() {
    }
    StuformComponent.prototype.ngOnInit = function () {
    };
    StuformComponent.prototype.stuform = function (data) {
        console.log(data);
    };
    StuformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stuform',
            template: __webpack_require__(/*! raw-loader!./stuform.component.html */ "./node_modules/raw-loader/index.js!./src/app/stuform/stuform.component.html"),
            styles: [__webpack_require__(/*! ./stuform.component.css */ "./src/app/stuform/stuform.component.css")]
        })
    ], StuformComponent);
    return StuformComponent;
}());



/***/ }),

/***/ "./src/app/switchdemo/switchdemo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/switchdemo/switchdemo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaGRlbW8vc3dpdGNoZGVtby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/switchdemo/switchdemo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/switchdemo/switchdemo.component.ts ***!
  \****************************************************/
/*! exports provided: SwitchdemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchdemoComponent", function() { return SwitchdemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwitchdemoComponent = /** @class */ (function () {
    function SwitchdemoComponent() {
        this.day = 1;
    }
    SwitchdemoComponent.prototype.ngOnInit = function () {
    };
    SwitchdemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-switchdemo',
            template: __webpack_require__(/*! raw-loader!./switchdemo.component.html */ "./node_modules/raw-loader/index.js!./src/app/switchdemo/switchdemo.component.html"),
            styles: [__webpack_require__(/*! ./switchdemo.component.css */ "./src/app/switchdemo/switchdemo.component.css")]
        })
    ], SwitchdemoComponent);
    return SwitchdemoComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        })
    ], TestComponent);
    return TestComponent;
}());



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

module.exports = __webpack_require__(/*! C:\Users\Harit\Desktop\node\angularclasswork\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
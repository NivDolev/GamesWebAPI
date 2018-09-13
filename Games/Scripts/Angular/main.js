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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router.component.ts":
/*!*****************************************!*\
  !*** ./src/app/app-router.component.ts ***!
  \*****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _game_new_game_new_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-new/game-new.component */ "./src/app/game-new/game-new.component.ts");
/* harmony import */ var _game_edit_game_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-edit/game-edit.component */ "./src/app/game-edit/game-edit.component.ts");
/* harmony import */ var _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games-search/games-search.component */ "./src/app/games-search/games-search.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games-list/games-list.component */ "./src/app/games-list/games-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'search', component: _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_2__["GamesSearchComponent"] },
    { path: 'games/new', component: _game_new_game_new_component__WEBPACK_IMPORTED_MODULE_0__["GameNewComponent"] },
    { path: 'games/:id', component: _game_edit_game_edit_component__WEBPACK_IMPORTED_MODULE_1__["GameEditComponent"] },
    { path: 'games', component: _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_5__["GamesListComponent"] },
    { path: '', redirectTo: 'games', pathMatch: 'full' },
    { path: '**', redirectTo: 'games', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            providers: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-navigation></app-navigation>\n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_router_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-router.component */ "./src/app/app-router.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games-list/games-list.component */ "./src/app/games-list/games-list.component.ts");
/* harmony import */ var _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games-search/games-search.component */ "./src/app/games-search/games-search.component.ts");
/* harmony import */ var _game_edit_game_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-edit/game-edit.component */ "./src/app/game-edit/game-edit.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _game_new_game_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game-new/game-new.component */ "./src/app/game-new/game-new.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_5__["GamesListComponent"],
                _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_6__["GamesSearchComponent"],
                _game_edit_game_edit_component__WEBPACK_IMPORTED_MODULE_7__["GameEditComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _game_new_game_new_component__WEBPACK_IMPORTED_MODULE_10__["GameNewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_router_component__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-edit/game-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/game-edit/game-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-success {\r\n    margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/game-edit/game-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/game-edit/game-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-3\">\n  <h2>Game Details:</h2>\n  <div *ngIf=\"game\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"gameId\">Game Id:</label>\n        <input type=\"number\" class=\"form-control\" name=\"gameId\" #gameId [(ngModel)]=\"game.Id\" \n        id=\"inputId\" [value]=\"game.Id\" disabled>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"gameName\">Game Name:</label>\n        <input type=\"text\" class=\"form-control\" name=\"gameName\" #gameName [(ngModel)]=\"game.Game_Name\"\n        id=\"inputGameName\" [value]=\"game.Game_Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"playerOne\">Player One:</label>\n        <input type=\"text\" class=\"form-control\" name=\"playerOne\" #playerOne [(ngModel)]=\"game.Player_One\"\n        id=\"inputPlayerOne\" [value]=\"game.Player_One\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"playerTwo\">Player Two:</label>\n        <input type=\"text\" class=\"form-control\" name=\"playerTwo\" #playerTwo [(ngModel)]=\"game.Player_Two\"\n        id=\"inputPlayerTwo\" [value]=\"game.Player_Two\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"gameWinner\">Winner:</label>\n        <input type=\"text\" class=\"form-control\" name=\"gameWinner\" #gameWinner [(ngModel)]=\"game.Winner\"\n        id=\"winner\" [value]=\"game.Winner ? 'Player One' : 'Player Two'\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdateGame(game)\" [class.disabled]=\"game.Id == 0\">Update</button>\n        </div>\n        <div class=\"col\">\n          <button type=\"button\" class=\"btn btn-danger float-right\" (click)=\"onDeleteGame(game.Id)\">Delete</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div *ngIf=\"!game\">\n    <h2>Game Not Found</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/game-edit/game-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-edit/game-edit.component.ts ***!
  \**************************************************/
/*! exports provided: GameEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEditComponent", function() { return GameEditComponent; });
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameEditComponent = /** @class */ (function () {
    function GameEditComponent(gameService, route, router) {
        this.gameService = gameService;
        this.route = route;
        this.router = router;
    }
    GameEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.gameService.getGameById(id).subscribe(function (game) { return _this.game = game; });
    };
    GameEditComponent.prototype.onUpdateGame = function () {
        var _this = this;
        this.gameService.updateGame(this.game).subscribe(function (data) {
            console.log(data);
            _this.navigateBack();
        });
    };
    GameEditComponent.prototype.onDeleteGame = function () {
        var _this = this;
        this.gameService.deleteGame(this.game.Id).subscribe(function (data) {
            console.log(data);
            _this.navigateBack();
        });
    };
    GameEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['games']);
    };
    GameEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-edit',
            template: __webpack_require__(/*! ./game-edit.component.html */ "./src/app/game-edit/game-edit.component.html"),
            styles: [__webpack_require__(/*! ./game-edit.component.css */ "./src/app/game-edit/game-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_0__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GameEditComponent);
    return GameEditComponent;
}());



/***/ }),

/***/ "./src/app/game-new/game-new.component.css":
/*!*************************************************!*\
  !*** ./src/app/game-new/game-new.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game-new/game-new.component.html":
/*!**************************************************!*\
  !*** ./src/app/game-new/game-new.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-3\">\r\n  <div>\r\n    <h2>Game details:</h2>\r\n  </div>\r\n  <form #newGame=\"ngForm\" (ngSubmit)=\"onSubmit(newGame)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"Game_Name\">Game Name:</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"Game_Name\" id=\"gameName\" ngModel required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Player_One\">Player One:</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"Player_One\" id=\"playerOne\" ngModel required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Player_Two\">Player Two:</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"Player_Two\" id=\"playerTwo\" ngModel required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Winner\">Winner:</label>\r\n      <select class=\"custom-select\" name=\"Winner\" id=\"winner\" ngModel required>\r\n        <option value=\"\">Choose Player</option>\r\n        <option value=\"0\">Player One</option>\r\n        <option value=\"1\">Player Two</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-success\" [class.disabled]=\"newGame.invalid\">Creat Game</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/game-new/game-new.component.ts":
/*!************************************************!*\
  !*** ./src/app/game-new/game-new.component.ts ***!
  \************************************************/
/*! exports provided: GameNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameNewComponent", function() { return GameNewComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameNewComponent = /** @class */ (function () {
    function GameNewComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
    }
    GameNewComponent.prototype.ngOnInit = function () {
    };
    GameNewComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.gameService.addNewGame(form.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/games']);
        });
    };
    GameNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-game-new',
            template: __webpack_require__(/*! ./game-new.component.html */ "./src/app/game-new/game-new.component.html"),
            styles: [__webpack_require__(/*! ./game-new.component.css */ "./src/app/game-new/game-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], GameNewComponent);
    return GameNewComponent;
}());



/***/ }),

/***/ "./src/app/games-list/games-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/games-list/games-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n    background-color:lightblue;\r\n}"

/***/ }),

/***/ "./src/app/games-list/games-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/games-list/games-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col-1\">#</th>\n                <th scope=\"col-2\">Game Name</th>\n                <th scope=\"col-2\">Player One</th>\n                <th scope=\"col-2\">Player Two</th>\n                <th scope=\"col-2\">Winner</th>\n                <th scope=\"col-1\">\n                  <a routerLink=\"/games/new\" class=\"btn btn-success\">Create new Game</a>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let game of games\"\n              (click)=\"selectGame(game)\"\n              [class.selected]=\"selectedGame === game\">\n                <th scope=\"row\">{{game.Id}}</th>\n                <td>{{game.Game_Name}}</td>\n                <td>{{game.Player_One}}</td>\n                <td>{{game.Player_Two}}</td>\n                <td>{{game.Winner ? \"Player One\" : \"Player Two\"}}</td>\n                <td><a class=\"btn btn-primary\" [routerLink]=\"['/games', game.Id]\">Details</a></td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/games-list/games-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/games-list/games-list.component.ts ***!
  \****************************************************/
/*! exports provided: GamesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesListComponent", function() { return GamesListComponent; });
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesListComponent = /** @class */ (function () {
    function GamesListComponent(gameService) {
        this.gameService = gameService;
    }
    GamesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getAllGames().subscribe(function (games) {
            _this.games = games.sort();
            _this.onSort();
        });
    };
    GamesListComponent.prototype.selectGame = function (game) {
        this.selectedGame = game;
    };
    GamesListComponent.prototype.onSort = function () {
        this.games = this.games.sort(function (a, b) {
            if (a['Id'] < b['Id']) {
                return -1;
            }
            else if (b['Id'] < a['Id']) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], GamesListComponent.prototype, "selectedGame", void 0);
    GamesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games-list',
            template: __webpack_require__(/*! ./games-list.component.html */ "./src/app/games-list/games-list.component.html"),
            styles: [__webpack_require__(/*! ./games-list.component.css */ "./src/app/games-list/games-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_0__["GameService"]])
    ], GamesListComponent);
    return GamesListComponent;
}());



/***/ }),

/***/ "./src/app/games-search/games-search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/games-search/games-search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/games-search/games-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/games-search/games-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-2\">\n      <h2>Refinements:</h2>\n      <form #newGame=\"ngForm\" (ngSubmit)=\"onSubmit(newGame)\">\n        <div class=\"form-group\">\n          <label for=\"GameId\">Game Id:</label>\n          <input type=\"number\" class=\"form-control\" name=\"GameId\" id=\"gameId\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Game_Name\">Game Name:</label>\n          <input type=\"text\" class=\"form-control\" name=\"Game_Name\" id=\"gameName\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Player_One\">Player One:</label>\n          <input type=\"text\" class=\"form-control\" name=\"Player_One\" id=\"playerOne\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Player_Two\">Player Two:</label>\n          <input type=\"text\" class=\"form-control\" name=\"Player_Two\" id=\"playerTwo\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Winner\">Winner:</label>\n          <select class=\"custom-select\" name=\"Winner\" id=\"winner\" ngModel>\n            <option value=\"\">Choose Player</option>\n            <option value=\"1\">Player One</option>\n            <option value=\"0\">Player Two</option>\n          </select>\n        </div>\n        <div>\n          <button type=\"submit\" class=\"btn btn-success\">Search</button>\n          <button type=\"reset\" class=\"btn btn-primary float-right\" ng-click=\"reset()\" (click)=\"onClearResults()\">Clear</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-9\">\n      <h2>Search Results:</h2>\n      <table *ngIf=\"games && games.length > 0\" class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col-1\">#</th>\n            <th scope=\"col-2\">Game Name</th>\n            <th scope=\"col-2\">Player One</th>\n            <th scope=\"col-2\">Player Two</th>\n            <th scope=\"col-2\">Winner</th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let game of games\">\n            <th scope=\"row\">{{game.Id}}</th>\n            <td>{{game.Game_Name}}</td>\n            <td>{{game.Player_One}}</td>\n            <td>{{game.Player_Two}}</td>\n            <td>{{game.Winner ? \"Player One\" : \"Player Two\"}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <h3 *ngIf=\"(searched && !games) || (searched && games && games.length == 0)\">\n          Sorry, no games were found, try a different search terms</h3>\n          \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/games-search/games-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/games-search/games-search.component.ts ***!
  \********************************************************/
/*! exports provided: GamesSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesSearchComponent", function() { return GamesSearchComponent; });
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesSearchComponent = /** @class */ (function () {
    function GamesSearchComponent(gameService) {
        this.gameService = gameService;
        this.searched = false;
    }
    GamesSearchComponent.prototype.ngOnInit = function () {
    };
    GamesSearchComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        var params = form.value;
        this.gameService.getGamesBySearchParams(+params.GameId, params.Game_Name, params.Player_One, params.Player_Two, params.Winner)
            .subscribe(function (games) {
            _this.games = games;
            console.log(_this.games);
        });
        this.searched = true;
    };
    GamesSearchComponent.prototype.onClearResults = function () {
        this.games = [];
        this.searched = false;
    };
    GamesSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games-search',
            template: __webpack_require__(/*! ./games-search.component.html */ "./src/app/games-search/games-search.component.html"),
            styles: [__webpack_require__(/*! ./games-search.component.css */ "./src/app/games-search/games-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_0__["GameService"]])
    ], GamesSearchComponent);
    return GamesSearchComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    margin-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\">GDB</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"games\">Games List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"search\">Search</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var siteUrl = 'http://localhost:49866/api/games/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Data-Type': 'json'
    })
};
var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.getAllGames = function () {
        return this.http.get(siteUrl);
    };
    GameService.prototype.getGameById = function (id) {
        return this.http.get(siteUrl + id);
    };
    GameService.prototype.getGamesByPlayerName = function (name) {
        return this.http.get(siteUrl + name);
    };
    GameService.prototype.getGamesBySearchParams = function (id, gameName, playerOne, playerTwo, winner) {
        var searchParams = "id=" + id;
        if (playerOne != null && playerOne !== '') {
            searchParams += "&playerOne=" + playerOne;
        }
        if (playerTwo != null && playerTwo !== '') {
            searchParams += "&playerTwo=" + playerTwo;
        }
        if (gameName != null && gameName !== '') {
            searchParams += "&gameName=" + gameName;
        }
        if (winner != null && winner !== '') {
            searchParams += "&winner=" + +winner;
        }
        console.log(siteUrl + "seach?" + searchParams);
        return this.http.get(siteUrl + "seach?" + searchParams);
    };
    GameService.prototype.addNewGame = function (game) {
        return this.http.post(siteUrl, game, httpOptions);
    };
    GameService.prototype.updateGame = function (game) {
        var url = siteUrl + game.Id;
        console.log(url);
        return this.http.put(url, game);
    };
    GameService.prototype.deleteGame = function (id) {
        return this.http.delete(siteUrl + id, httpOptions);
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameService);
    return GameService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dolev\source\Angular\Gamesite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
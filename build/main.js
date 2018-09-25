webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_service_todo_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, todoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoServiceProvider = todoServiceProvider;
        this.selectedNota = navParams.get('nota');
    }
    DetailPage.prototype.save = function (event, notaPantalla) {
        var _this = this;
        if (parseInt(notaPantalla.notaId) >= 0) {
            console.log('service updateNotaTexto [' + notaPantalla.notaId + '] [' + notaPantalla.notaTexto + ']');
            this.todoServiceProvider.updateNotaTexto(notaPantalla.notaId, notaPantalla.notaTexto)
                .subscribe(function (serviceReturn) {
                _this.navCtrl.pop();
            }, function (error) {
                console.error('service updateNotaTexto error ->');
                console.error(error);
            });
        }
        else {
            console.log('service getUltimaNota');
            this.todoServiceProvider.getUltimaNota()
                .subscribe(function (notasArray) {
                var notaNumeroOrden = 0;
                if (notasArray[0]) {
                    notaNumeroOrden = parseInt(notasArray[0].numeroOrden.$numberLong);
                    notaNumeroOrden++;
                }
                console.log('service insertNota [' + notaNumeroOrden + '] [' + notaPantalla.notaTexto + ']');
                _this.todoServiceProvider.insertNota(notaNumeroOrden, notaPantalla.notaTexto)
                    .subscribe(function (serviceReturn) {
                    _this.navCtrl.pop();
                }, function (error) {
                    console.error('service insertNota error ->');
                    console.error(error);
                });
            }, function (error) {
                console.error('service getUltimaNota error ->');
                console.error(error);
            });
        }
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\pages\detail\detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedNota">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nota</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--p>notaId: {{selectedNota.notaId}}</p>\n  <p>notaOrden: {{selectedNota.notaOrden}}</p-->\n  <p>Nota:</p>\n  <ion-textarea rows="10" placeholder="Introducir texto..." [(ngModel)]="selectedNota.notaTexto"></ion-textarea>\n  <button style="text-transform: none;" ion-button block color="light" (click)="save($event, selectedNota)">\n    <ion-icon name="checkmark"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_todo_service_todo_service__["a" /* TodoServiceProvider */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todo_service_todo_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_nota__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, todoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoServiceProvider = todoServiceProvider;
    }
    /*
    ionViewDidLoad() { console.log('service ionViewDidLoad'); }
    ionViewWillEnter() { console.log('service ionViewWillEnter'); }
    ionViewDidEnter() { console.log('service ionViewDidEnter'); }
    ionViewWillLeave() { console.log('service ionViewWillLeave'); }
    ionViewDidLeave() { console.log('service ionViewDidLeave'); }
    ionViewWillUnload() { console.log('service ionViewWillUnload'); }
    ionViewCanEnter() { console.log('service ionViewCanEnter'); }
    ionViewCanLeave() { console.log('service ionViewCanLeave'); }
    */
    HomePage.prototype.getNotas = function () {
        var _this = this;
        this.arrayNotas = [];
        console.log('service getNotas');
        this.todoServiceProvider.getNotas()
            .subscribe(function (notasArray) {
            var i;
            for (i = 0; i < notasArray.length; i++) {
                var nota = notasArray[i];
                _this.arrayNotas.push(new __WEBPACK_IMPORTED_MODULE_4__model_nota__["a" /* Nota */](parseInt(nota.identificador.$numberLong), parseInt(nota.numeroOrden.$numberLong), nota.texto));
            }
        }, function (error) {
            console.error('service getNotas error ->');
            console.error(error);
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getNotas();
    };
    HomePage.prototype.reorderNotas = function (indexes) {
        var notaElement = this.arrayNotas[indexes.from];
        this.arrayNotas.splice(indexes.from, 1);
        this.arrayNotas.splice(indexes.to, 0, notaElement);
        var i;
        for (i = 0; i < this.arrayNotas.length; i++) {
            var notaItem = this.arrayNotas[i];
            console.log('service updateNotaNumeroOrden [' + notaItem.notaId + '] [' + i + ']');
            this.todoServiceProvider.updateNotaNumeroOrden(notaItem.notaId, i)
                .subscribe(function (serviceReturn) {
                // this.getNotas();
            }, function (error) {
                console.error('service updateNotaNumeroOrden error ->');
                console.error(error);
            });
        }
    };
    HomePage.prototype.delete = function (event, nota) {
        var _this = this;
        console.log('service deleteNota [' + nota.notaId + ']');
        this.todoServiceProvider.deleteNota(nota.notaId)
            .subscribe(function (serviceReturn) {
            _this.getNotas();
        }, function (error) {
            console.error('service deleteNota error ->');
            console.error(error);
        });
    };
    HomePage.prototype.edit = function (event, nota) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {
            nota: nota
        });
    };
    HomePage.prototype.insert = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {
            nota: new __WEBPACK_IMPORTED_MODULE_4__model_nota__["a" /* Nota */](null, null, '')
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list reorder="true" (ionItemReorder)="reorderNotas($event)">\n    <ion-item-sliding *ngFor="let notaItem of arrayNotas">\n      <ion-item (click)="edit($event, notaItem)">\n        <!--p>notaId: {{notaItem.notaId}}</p>\n        <p>notaOrden: {{notaItem.notaOrden}}</p-->\n        <div text-wrap>{{notaItem.notaTexto}}</div>\n      </ion-item>\n      <ion-item-options side="right">\n        <button style="text-transform: none;" ion-button color="light" (click)="edit($event, notaItem)">\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button style="text-transform: none;" ion-button color="light" (click)="delete($event, notaItem)">\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-fab right bottom>\n      <button ion-fab color="light" (click)="insert($event)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_todo_service_todo_service__["a" /* TodoServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Acerca de //TODO:\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-wrap>\n  <p>Especificaciones</p>\n  <ul>\n    <li>\n      Ionic\n      <ul>\n        <li>ionic (Ionic CLI) : 4.1.2</li>\n        <li>Ionic Framework : ionic-angular 3.9.2</li>\n        <li>@ionic/app-scripts : 3.2.0</li>\n      </ul>\n    </li>\n    <li>\n      Cordova\n      <ul>\n        <li>cordova (Cordova CLI) : 8.0.0</li>\n      </ul>\n    </li>\n    <li>\n      System\n      <ul>\n        <li>NodeJS : v8.11.3</li>\n        <li>npm : 5.6.0</li>\n      </ul>\n    </li>\n    <li>\n      MongoDB Atlas/Stitch\n      <ul>\n        <li>Version: 3.6.7</li>\n        <li>Region: N. Virginia (us-east-1)</li>\n        <li>Instance Size: M0</li>\n      </ul>\n    </li>\n  </ul>\n  <p>Aplicación desarrollada por Javier Subías Mínguez</p>\n</ion-content>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_todo_service_todo_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__providers_todo_service_todo_service__["a" /* TodoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Notas', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Acerca de...', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>//TODO:</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n  '/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\Ionic\TODOApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nota; });
var Nota = /** @class */ (function () {
    function Nota(_notaId, _notaOrden, _notaTexto) {
        this.notaId = _notaId;
        this.notaOrden = _notaOrden;
        this.notaTexto = _notaTexto;
    }
    return Nota;
}());

//# sourceMappingURL=nota.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoServiceProvider = /** @class */ (function () {
    function TodoServiceProvider(http) {
        this.http = http;
    }
    TodoServiceProvider.prototype.getNotas = function () {
        return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoapp-rufkc/service/TODOService/incoming_webhook/getNotas');
    };
    TodoServiceProvider.prototype.getUltimaNota = function () {
        return this.http.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoapp-rufkc/service/TODOService/incoming_webhook/getUltimaNota');
    };
    TodoServiceProvider.prototype.insertNota = function (notaNumeroOrden, notaTexto) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoapp-rufkc/service/TODOService/incoming_webhook/insertNota';
        url = url + '?notaNumeroOrden=' + notaNumeroOrden + '&notaTexto=' + notaTexto;
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.updateNotaNumeroOrden = function (notaId, notaNumeroOrden) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoapp-rufkc/service/TODOService/incoming_webhook/updateNotaNumeroOrden';
        url = url + '?notaId=' + notaId + '&notaNumeroOrden=' + notaNumeroOrden;
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.updateNotaTexto = function (notaId, notaTexto) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoapp-rufkc/service/TODOService/incoming_webhook/updateNotaTexto';
        url = url + '?notaId=' + notaId + '&notaTexto=' + notaTexto;
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.deleteNota = function (notaId) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoapp-rufkc/service/TODOService/incoming_webhook/deleteNota';
        url = url + '?notaId=' + notaId;
        return this.http.get(url);
    };
    TodoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoServiceProvider);
    return TodoServiceProvider;
}());

//# sourceMappingURL=todo-service.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
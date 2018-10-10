webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todo_service_todo_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_nota__ = __webpack_require__(278);
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
    HomePage.prototype.ionViewCanEnter = function () {
        this.usuarioAutorizado = window.localStorage.getItem('usuarioAutorizado');
        console.log('Usuario autorizado [' + this.usuarioAutorizado + ']');
        return (this.usuarioAutorizado != null && this.usuarioAutorizado != "undefined");
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getNotas();
    };
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
        console.log('service getNotas [' + this.usuarioAutorizado + ']');
        this.todoServiceProvider.getNotas(this.usuarioAutorizado)
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
    HomePage.prototype.reorderNotas = function (indexes) {
        var notaElement = this.arrayNotas[indexes.from];
        this.arrayNotas.splice(indexes.from, 1);
        this.arrayNotas.splice(indexes.to, 0, notaElement);
        var i;
        for (i = 0; i < this.arrayNotas.length; i++) {
            var notaItem = this.arrayNotas[i];
            console.log('service updateNotaNumeroOrden [' + notaItem.notaId + '] [' + i + '] [' + this.usuarioAutorizado + ']');
            this.todoServiceProvider.updateNotaNumeroOrden(notaItem.notaId, i, this.usuarioAutorizado)
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
        console.log('service deleteNota [' + nota.notaId + '] [' + this.usuarioAutorizado + ']');
        this.todoServiceProvider.deleteNota(nota.notaId, this.usuarioAutorizado)
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
            selector: 'page-home',template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list reorder="true" (ionItemReorder)="reorderNotas($event)">\n    <ion-item-sliding *ngFor="let notaItem of arrayNotas">\n      <ion-item (click)="edit($event, notaItem)">\n        <!--p>notaId: {{notaItem.notaId}}</p>\n        <p>notaOrden: {{notaItem.notaOrden}}</p-->\n        <div text-wrap>{{notaItem.notaTexto}}</div>\n      </ion-item>\n      <ion-item-options side="right">\n        <button style="text-transform: none;" ion-button color="light" (click)="edit($event, notaItem)">\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button style="text-transform: none;" ion-button color="light" (click)="delete($event, notaItem)">\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-fab right bottom>\n      <button ion-fab color="light" (click)="insert($event)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_todo_service_todo_service__["a" /* TodoServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_service_todo_service__ = __webpack_require__(46);
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
    function DetailPage(navCtrl, navParams, todoServiceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoServiceProvider = todoServiceProvider;
        this.toastCtrl = toastCtrl;
        this.selectedNota = navParams.get('nota');
    }
    DetailPage.prototype.mostrarMensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 2000,
            position: 'top',
            showCloseButton: false,
            dismissOnPageChange: true
        });
        toast.present();
    };
    DetailPage.prototype.ionViewCanEnter = function () {
        this.usuarioAutorizado = window.localStorage.getItem('usuarioAutorizado');
        console.log('Usuario autorizado [' + this.usuarioAutorizado + ']');
        return (this.usuarioAutorizado != null && this.usuarioAutorizado != "undefined");
    };
    DetailPage.prototype.save = function (event, notaPantalla) {
        var _this = this;
        if (notaPantalla.notaTexto && notaPantalla.notaTexto.trim().length > 0) {
            if (parseInt(notaPantalla.notaId) >= 0) {
                console.log('service updateNotaTexto [' + notaPantalla.notaId + '] [' + notaPantalla.notaTexto + '] [' + this.usuarioAutorizado + ']');
                this.todoServiceProvider.updateNotaTexto(notaPantalla.notaId, notaPantalla.notaTexto, this.usuarioAutorizado)
                    .subscribe(function (serviceReturn) {
                    _this.navCtrl.pop();
                }, function (error) {
                    console.error('service updateNotaTexto error ->');
                    console.error(error);
                });
            }
            else {
                console.log('service getUltimaNota [' + this.usuarioAutorizado + ']');
                this.todoServiceProvider.getUltimaNota(this.usuarioAutorizado)
                    .subscribe(function (notasArray) {
                    var notaNumeroOrden = 0;
                    if (notasArray[0]) {
                        notaNumeroOrden = parseInt(notasArray[0].numeroOrden.$numberLong);
                        notaNumeroOrden++;
                    }
                    console.log('service insertNota [' + notaNumeroOrden + '] [' + notaPantalla.notaTexto + '] [' + _this.usuarioAutorizado + ']');
                    _this.todoServiceProvider.insertNota(notaNumeroOrden, notaPantalla.notaTexto, _this.usuarioAutorizado)
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
        }
        else {
            var mensaje = 'Debe introducir un texto para la nota';
            this.mostrarMensaje(mensaje);
        }
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\detail\detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedNota">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nota</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--p>notaId: {{selectedNota.notaId}}</p>\n  <p>notaOrden: {{selectedNota.notaOrden}}</p-->\n  <p>Nota:</p>\n  <ion-textarea rows="10" placeholder="Introducir texto..." [(ngModel)]="selectedNota.notaTexto"></ion-textarea>\n  <button style="text-transform: none;" ion-button block color="light" (click)="save($event, selectedNota)">\n    Guardar\n  </button>\n</ion-content>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_todo_service_todo_service__["a" /* TodoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		279,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
    AboutPage.prototype.ionViewCanEnter = function () {
        this.usuarioAutorizado = window.localStorage.getItem('usuarioAutorizado');
        console.log('Usuario autorizado [' + this.usuarioAutorizado + ']');
        this.usuarioAutorizadoEmail = window.localStorage.getItem('usuarioAutorizadoEmail');
        console.log('Usuario autorizado email [' + this.usuarioAutorizadoEmail + ']');
        return (this.usuarioAutorizado != null && this.usuarioAutorizado != "undefined");
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Acerca de //TODO:\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-wrap>\n  <p>Usuario conectado</p>\n  <ul>\n    <li>{{usuarioAutorizadoEmail}}</li>\n  </ul>\n  <p>Especificaciones</p>\n  <ul>\n    <li>\n      Ionic\n      <ul>\n        <li>ionic (Ionic CLI) : 4.1.2</li>\n        <li>Ionic Framework : ionic-angular 3.9.2</li>\n        <li>@ionic/app-scripts : 3.2.0</li>\n      </ul>\n    </li>\n    <li>\n      Cordova\n      <ul>\n        <li>cordova (Cordova CLI) : 8.0.0</li>\n      </ul>\n    </li>\n    <li>\n      System\n      <ul>\n        <li>NodeJS : v8.11.3</li>\n        <li>npm : 5.6.0</li>\n      </ul>\n    </li>\n    <li>\n      MongoDB Atlas/Stitch\n      <ul>\n        <li>Version: 3.6.7</li>\n        <li>Region: N. Virginia (us-east-1)</li>\n        <li>Instance Size: M0</li>\n      </ul>\n    </li>\n  </ul>\n  <p>Aplicación desarrollada por Javier Subías Mínguez</p>\n</ion-content>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\about\about.html"*/,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todo_service_todo_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, todoServiceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoServiceProvider = todoServiceProvider;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.mostrarMensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 2000,
            position: 'top',
            showCloseButton: false,
            dismissOnPageChange: true
        });
        toast.present();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log('Eliminado usuario autorizado');
        window.localStorage.removeItem('usuarioAutorizadoEmail');
        window.localStorage.removeItem('usuarioAutorizado');
    };
    LoginPage.prototype.login = function (event) {
        var _this = this;
        if (this.email && this.password) {
            console.log('service getUsuario [' + this.email + '] [' + this.password + ']');
            this.todoServiceProvider.getUsuario(this.email, this.password)
                .subscribe(function (usuariosArray) {
                var mensaje;
                if (!usuariosArray || usuariosArray.length < 1) {
                    mensaje = 'No se ha encontrado ningún usuario con las credenciales proporcionadas';
                    console.warn('service getUsuario warn -> ' + mensaje);
                    _this.mostrarMensaje(mensaje);
                }
                else if (usuariosArray.length > 1) {
                    mensaje = 'Se ha encontrado más de un usuario con las credenciales proporcionadas';
                    console.warn('service getUsuario warn -> ' + mensaje);
                    _this.mostrarMensaje(mensaje);
                }
                else if (usuariosArray.length === 1) {
                    console.log('Guardado usuario autorizado [' + usuariosArray[0].email + '] [' + usuariosArray[0]._id.$oid + ']');
                    window.localStorage.setItem('usuarioAutorizadoEmail', usuariosArray[0].email);
                    window.localStorage.setItem('usuarioAutorizado', usuariosArray[0]._id.$oid);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }
                else {
                    mensaje = 'Error inesperado';
                    console.error('service getUsuario error -> ' + mensaje);
                    _this.mostrarMensaje(mensaje);
                }
            }, function (error) {
                console.error('service getUsuario error ->');
                console.error(error);
            });
        }
        else {
            var mensaje = 'Debe introducir un usuario y una contraseña';
            this.mostrarMensaje(mensaje);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Datos de usuario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset>\n    <ion-item>\n      <ion-input type="text" placeholder="Email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button style="text-transform: none;" ion-button block color="light" (click)="login($event)">\n    Entrar\n  </button>\n</ion-content>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_todo_service_todo_service__["a" /* TodoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_todo_service_todo_service__ = __webpack_require__(46);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
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
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__providers_todo_service_todo_service__["a" /* TodoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(201);
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
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Notas', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Acerca de...', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'Salir', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.usuarioAutorizado = window.localStorage.getItem('usuarioAutorizado');
            console.log('Usuario autorizado [' + _this.usuarioAutorizado + ']');
            if (_this.usuarioAutorizado === null || _this.usuarioAutorizado === "undefined") {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>//TODO:</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\_PELAYO\Software\Eclipse Neon\workspace\TODOApp\Ionic\TODOAppV2\src\app\app.html"*/
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

/***/ 278:
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

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
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
    TodoServiceProvider.prototype.getNotas = function (usuarioId) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoappv2-zxque/service/TODOService/incoming_webhook/getNotas';
        url = url + '?usuarioId=' + usuarioId.trim();
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.getUltimaNota = function (usuarioId) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoappv2-zxque/service/TODOService/incoming_webhook/getUltimaNota';
        url = url + '?usuarioId=' + usuarioId.trim();
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.insertNota = function (notaNumeroOrden, notaTexto, usuarioId) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoappv2-zxque/service/TODOService/incoming_webhook/insertNota';
        url = url + '?notaNumeroOrden=' + notaNumeroOrden + '&notaTexto=' + notaTexto.trim() + '&usuarioId=' + usuarioId.trim();
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.updateNotaNumeroOrden = function (notaId, notaNumeroOrden, usuarioId) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoappv2-zxque/service/TODOService/incoming_webhook/updateNotaNumeroOrden';
        url = url + '?notaId=' + notaId + '&notaNumeroOrden=' + notaNumeroOrden + '&usuarioId=' + usuarioId.trim();
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.updateNotaTexto = function (notaId, notaTexto, usuarioId) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoappv2-zxque/service/TODOService/incoming_webhook/updateNotaTexto';
        url = url + '?notaId=' + notaId + '&notaTexto=' + notaTexto.trim() + '&usuarioId=' + usuarioId.trim();
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.deleteNota = function (notaId, usuarioId) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoappv2-zxque/service/TODOService/incoming_webhook/deleteNota';
        url = url + '?notaId=' + notaId + '&usuarioId=' + usuarioId.trim();
        return this.http.get(url);
    };
    TodoServiceProvider.prototype.getUsuario = function (usuarioEmail, usuarioPassword) {
        var url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/todoappv2-zxque/service/TODOService/incoming_webhook/getUsuario';
        url = url + '?usuarioEmail=' + usuarioEmail.trim() + '&usuarioPassword=' + usuarioPassword.trim();
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

},[202]);
//# sourceMappingURL=main.js.map
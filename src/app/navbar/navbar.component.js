"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.onToggleSidebar = new core_1.EventEmitter();
    }
    NavbarComponent.prototype.toggleSidebar = function () {
        console.log("Child: Togglesidebar emit");
        this.onToggleSidebar.emit();
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.title = "National Stream Flow Statistics";
    };
    __decorate([
        core_1.Output()
    ], NavbarComponent.prototype, "onToggleSidebar", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['./navbar.css'],
            selector: 'wim-navbar',
            templateUrl: './navbar.html'
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map
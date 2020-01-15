"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by devmubeen on 12/9/17.
 */
var core_1 = require("@angular/core");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser') && this._cookieService.get("token")) {
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/welcome']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable()
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map
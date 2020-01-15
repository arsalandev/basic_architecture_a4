"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VerificationGuard = /** @class */ (function () {
    function VerificationGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    VerificationGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser') && this._cookieService.get("token")) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser.status == "0") {
                return true;
            }
        }
        // not logged in so redirect to login page
        this.router.navigate(['/user/dashboard']);
        return false;
    };
    VerificationGuard = __decorate([
        core_1.Injectable()
    ], VerificationGuard);
    return VerificationGuard;
}());
exports.VerificationGuard = VerificationGuard;
//# sourceMappingURL=verification.guard.js.map
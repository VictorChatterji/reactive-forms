"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var of_1 = require("rxjs/observable/of");
require("rxjs/add/operator/delay");
var data_model_1 = require("./data-model");
var HeroService = (function () {
    function HeroService() {
        this.delayMs = 500;
    }
    // Fake server get; assume nothing can go wrong
    HeroService.prototype.getHeroes = function () {
        return of_1.of(data_model_1.heroes).delay(this.delayMs); // simulate latency with delay
    };
    // Fake server update; assume nothing can go wrong
    HeroService.prototype.updateHero = function (hero) {
        var oldHero = data_model_1.heroes.find(function (h) { return h.id === hero.id; });
        var newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
        return of_1.of(newHero).delay(this.delayMs); // simulate latency with delay
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero-service.js.map
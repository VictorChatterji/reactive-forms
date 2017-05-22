"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var data_model_1 = require("./data-model");
var hero_service_1 = require("./hero-service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(fb, heroService) {
        this.fb = fb;
        this.heroService = heroService;
        this.nameChangeLog = [];
        this.states = data_model_1.states;
        this.createForm();
        this.logNameChange();
    }
    HeroDetailComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: '',
            secretLairs: this.fb.array([]),
            power: '',
            sidekick: ''
        });
    };
    HeroDetailComponent.prototype.ngOnChanges = function () {
        this.heroForm.reset({
            name: this.hero.name
        });
        this.setAddresses(this.hero.addresses);
    };
    Object.defineProperty(HeroDetailComponent.prototype, "secretLairs", {
        get: function () {
            return this.heroForm.get('secretLairs');
        },
        enumerable: true,
        configurable: true
    });
    ;
    HeroDetailComponent.prototype.setAddresses = function (addresses) {
        var _this = this;
        var addressFGs = addresses.map(function (address) { return _this.fb.group(address); });
        var addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    };
    HeroDetailComponent.prototype.addLair = function () {
        this.secretLairs.push(this.fb.group(new data_model_1.Address()));
    };
    HeroDetailComponent.prototype.onSubmit = function () {
        this.hero = this.prepareSaveHero();
        this.heroService.updateHero(this.hero).subscribe();
        this.ngOnChanges();
    };
    HeroDetailComponent.prototype.prepareSaveHero = function () {
        var formModel = this.heroForm.value;
        // deep copy of form model lairs
        var secretLairsDeepCopy = formModel.secretLairs.map(function (address) { return Object.assign({}, address); });
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        var saveHero = {
            id: this.hero.id,
            name: formModel.name,
            // addresses: formModel.secretLairs // <-- bad!
            addresses: secretLairsDeepCopy
        };
        return saveHero;
    };
    HeroDetailComponent.prototype.revert = function () { this.ngOnChanges(); };
    HeroDetailComponent.prototype.logNameChange = function () {
        var _this = this;
        var nameControl = this.heroForm.get('name');
        nameControl.valueChanges.forEach(function (value) { return _this.nameChangeLog.push(value); });
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", data_model_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        hero_service_1.HeroService])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map
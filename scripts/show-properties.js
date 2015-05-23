var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var FriendsService = (function () {
    function FriendsService() {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
    FriendsService.prototype.getNames = function () {
        return this.names;
    };
    return FriendsService;
})();
var DisplayComponent = (function () {
    function DisplayComponent(friends) {
        this.myName = "Alice";
        this.names = friends.getNames();
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            injectables: [FriendsService]
        }),
        angular2_1.View({
            directives: [angular2_1.For, angular2_1.If],
            template: "\n   <p>My name: {{ myName }}</p>\n   <p>Friends of Alice:</p>\n   <ul>\n     <li *for=\"#name of names\">{{name}}</li>\n   </ul>\n   <p *if=\"names.length > 3\">You have many friends :)</p>\n  "
        })
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);

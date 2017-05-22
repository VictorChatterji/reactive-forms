"use strict";
var Hero = (function () {
    function Hero() {
        this.id = 0;
        this.name = '';
    }
    return Hero;
}());
exports.Hero = Hero;
var Address = (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());
exports.Address = Address;
exports.heroes = [
    {
        id: 1,
        name: 'Whirlwind',
        addresses: [
            { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
            { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ]
    },
    {
        id: 2,
        name: 'Bombastic',
        addresses: [
            { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
        ]
    },
    {
        id: 3,
        name: 'Magneta',
        addresses: []
    },
];
exports.states = ['CA', 'MD', 'OH', 'VA'];
//# sourceMappingURL=data-model.js.map
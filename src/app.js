angular.module('app', ['app.controllers']);

angular.module('app.controllers', ['app.services'])
    .controller("PhoneController", PhoneController);
angular.module('app.services', [])
    .service('PhonesService', PhonesService);

function PhoneController(PhonesService) {
    this.phonesList = PhonesService.phones;
    this.add = function (model) {
        return PhonesService.add(model);
    }
}

function PhonesService() {
    this.phones = ["Samsung", "IPhone", "Nokia"];
    return this;
}

PhonesService.prototype.add = function (model) {
    if (this.phones.indexOf(model) < 0)
        this.phones.push(model)
}
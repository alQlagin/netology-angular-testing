angular.module('app', ['app.controllers'])

angular.module('app.controllers', ['app.services'])
    .controller("PhoneListController", PhoneListController)
angular.module('app.services', [])
    .service('PhonesService', PhonesService);


function PhoneListController(PhonesService) {
    this.phonesList = PhonesService.phones;
    this.add = function (model) {
        PhonesService.add(model);
    }
}

function PhonesService() {
    this.phones = ["Samsung", "IPhone", "Nokia"];
}

PhonesService.prototype.add = function (model) {
    if (this.phones.indexOf(model) < 0)
        this.phones.push(model)
}
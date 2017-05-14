angular.module('app', [])
    .controller("PhoneListController", PhoneListController);


function PhoneListController() {
    this.phones = ["Samsung", "IPhone", "Nokia"];
}
import template from './index.html';

class IndexController {
    constructor(alert, $state) {
        "ngInject";

        this.availableFrom = ['New Delhi', 'Minsk'];
        this.availableTo = ['Berlin', 'Barcelona', 'New York', 'California'];
        this.from = null;
        this.to = null;
        this._depart = null;
        this._return = null;
        this._returnPickerIsOpen = false;
        this._departPickerIsOpen = false;
        this._alert = alert;
        this._$state = $state;
    }

    get returnPickerIsOpen() {
        return this._returnPickerIsOpen
    }

    get departPickerIsOpen() {
        return this._departPickerIsOpen
    }

    set returnPickerIsOpen(v) {
        this._returnPickerIsOpen = v;
        v ? this.departPickerIsOpen = false : null;
    }

    set departPickerIsOpen(v) {
        this._departPickerIsOpen = v;
        v ? this.returnPickerIsOpen = false : null;
    }

    get depart() {
        return this._depart;
    }

    set depart(v) {
        this.departPickerIsOpen = false;
        this._depart = v;

    }

    get return() {
        return this._return;
    }

    set return(v) {
        this.returnPickerIsOpen = false;
        this._return = v;
    }

    onSubmit() {
        this.returnPickerIsOpen = false;
        this.departPickerIsOpen = false;

        if (!(this.from && this.to && this._return && this._depart)) {
            return this._alert({type: 'warning', title: 'Please fill all fields on form'});
        }

        this._$state.go('search', {from: this.from, to: this.to, depart: this._depart, return: this.return})
    }
}


export default {
    template: template,
    controller: IndexController
};
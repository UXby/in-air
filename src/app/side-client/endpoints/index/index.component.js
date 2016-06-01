import template from './index.html';

class ListController {
    constructor() {
        "ngInject";

        this.availableFrom = ['New Delhi', 'Minsk'];
        this.availableTo = ['Berlin', 'Barcelona', 'New York', 'California'];
        this.from = null;
        this.to = null;

        this.activate();
    }

    activate() {

    }
}

export default {
    template: template,
    controller: ListController
};
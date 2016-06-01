import template from './search.html';

class SearchController {
    constructor($stateParams) {
        "ngInject";
        this.from = $stateParams.from;
        this.to = $stateParams.to;
        this.depart = new Date($stateParams.depart);
        this.return = new Date($stateParams.return);
    }

}

export default {
    template: template,
    controller: SearchController
};
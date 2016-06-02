import template from './search.html';

class SearchController {
    constructor($stateParams, alert) {
        "ngInject";

        this._alert = alert;
        this.from = $stateParams.from;
        this.to = $stateParams.to;
        this.depart = new Date($stateParams.depart);
        this.return = new Date($stateParams.return);

        this.priceFilter = {
            min: 0,
            max: 2000,
            curMin: 100,
            curMax: 1900
        };

        this.testItems = [
            {
                id: 1,
                price: 250
            },
            {
                id: 2,
                price: 350
            },
            {
                id: 3,
                price: 450
            },
            {
                id: 4,
                price: 450
            },
            {
                id: 5,
                price: 550
            }
        ];
    }

    buy() {
        this._alert({
            title: 'Thank you!',
            text: `
                This is just a demo, small boilerplate for real app.
                Sourcecode available on github: @zaqqaz
            `
        });
    }

}

export default {
    template: template,
    controller: SearchController
};
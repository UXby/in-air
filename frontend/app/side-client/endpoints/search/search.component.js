import template from './search.html';

class SearchController {
    constructor($stateParams, $scope, alert, TicketManager, debounce) {
        "ngInject";

        this._alert = alert;
        this.from = $stateParams.from;
        this.to = $stateParams.to;
        this.depart = new Date($stateParams.depart);
        this.return = new Date($stateParams.return);
        this.items = [];
        this._TicketManager = TicketManager;

        this.priceFilter = {
            min: 0,
            max: 2000,
            curMin: 100,
            curMax: 1900
        };

        $scope.$watchCollection(() => this.priceFilter, debounce((_filter) => {
            TicketManager.query({
                    from: this.from,
                    to: this.to,
                    depart: this.depart,
                    return: this.return,
                    priceFrom: _filter.curMin,
                    priceTp: _filter.curMax
                })
                .then((tickets) => {
                    this.items = tickets;
                })
            ;
        }, 300, true));
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
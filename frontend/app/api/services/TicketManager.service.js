class TicketManager {
    constructor($log, api) {
        'ngInject';

        this.$log = $log;
        this.api = api;
    }

    query(queryParams = {}) {
        return this.api.photo.query(queryParams);
    }
}

export default TicketManager;
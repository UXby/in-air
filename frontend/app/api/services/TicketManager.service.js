class TicketManager {
    constructor(api) {
        'ngInject';

        this.api = api;
    };

    query(queryParams = {}) {
        return this.api.ticket.query(queryParams);
    };
}

export default TicketManager;
import Ticket from './models/Ticket';
import {API_URL} from './../constants';

function config(apiProvider) {
    'ngInject';

    apiProvider.setBaseRoute(API_URL);

    apiProvider.endpoint('ticket')
        .route('tickets/:id')
        .model(Ticket)
        .addHttpAction('GET', 'query', {isArray: true, headersForReading: ['x-total-count']})
    ;
}

export default config;
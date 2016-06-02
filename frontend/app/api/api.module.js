import config from './api.config';
import TicketManager from './services/TicketManager.service'

let api = angular
    .module('api', ['ng-rest-api'])
    .config(config)
    .service('TicketManager', TicketManager)
    ;

export default api = api.name;

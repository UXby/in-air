function routeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('index', {
            url: '/',
            template: '<index-endpoint class="index full-block"></index-endpoint>'
        })
        .state('search', {
            url: '/search',
            template: '<search-endpoint class="search full-block"></search-endpoint>'
        });
}

export default routeConfig;
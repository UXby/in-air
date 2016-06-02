function config($logProvider, $locationProvider,
                toastr, $httpProvider, CacheFactoryProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

    angular.extend(CacheFactoryProvider.defaults, {
        storageMode: 'localStorage',
        storeOnResolve: true
    });

    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    toastr.options.closeButton = true;
    toastr.options.positionClass = 'toast-bottom-right';

}

export default config;

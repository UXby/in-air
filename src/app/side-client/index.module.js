/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';
import runBlock from './index.run';

import sharedComponents from './../shared-components/shared-components.module';
import api from './../api/api.module';
import routeConfig from './index.route';

import indexEndpoint from './endpoints/index/index.component';
import searchEndpoint from './endpoints/search/search.component';

/////////////////////////////

angular.module('front', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'angular-cache',
        'angularFileUpload',
        'ngTagsInput',
        'ui-rangeSlider',
        sharedComponents,
        api
    ])
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('alert', swal)

    .component('indexEndpoint', indexEndpoint)
    .component('searchEndpoint', searchEndpoint)

    .config(routeConfig)
    .config(config)
    .run(runBlock)
;
// Directives
import clickOnce from './click-once/click-once.directive';
import restrictInput from './restrictInput/restrictInput.directive';
import Loader from './loader/loader.service';

let sharedComponents = angular.module('shared-components', [
        'ngProgress',
        'pascalprecht.translate'
    ])
    .constant('ru', ru)
    .service('AuthInterceptor', AuthInterceptor)
    .service('Loader', Loader)
    .directive('clickOnce', () => new clickOnce)
    .directive('restrictInput', () => new restrictInput)
    ;

export default sharedComponents.name;


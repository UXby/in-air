// Directives
import clickOnce from './click-once/click-once.directive';
import restrictInput from './restrictInput/restrictInput.directive';
import Loader from './loader/loader.service';
import RangeFilter from './rangeFilter/rangeFilter';

let sharedComponents = angular.module('shared-components', [
        'ngProgress',
        'pascalprecht.translate'
    ])
    .service('Loader', Loader)
    .directive('clickOnce', () => new clickOnce)
    .directive('restrictInput', () => new restrictInput)
    .filter('range', RangeFilter)
    ;

export default sharedComponents.name;


/**
 * Created by Administrator on 2015/7/5.
 */
'use strict';

MetronicApp.controller('UserMgrController', function($rootScope, $scope,$templateCache) {
    $scope.$on('$viewContentLoaded', function() {
//        $templateCache.removeAll();
        Metronic.initAjax(); // initialize core components
        userMgr.init();
//        console.log('user manager init....')
    });

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});

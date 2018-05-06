erpApp.controller('customerMasterCtrl', ['erpAppConfig', '$scope', 'commonFact', function(erpAppConfig, $scope, commonFact) {
    var actions = commonFact.defaultActions;

    $scope.context = erpAppConfig.modules.marketing.customerMaster;
    $scope.context.actions = actions;
    $scope.context.actions.makeOptionsFields(erpAppConfig.modules.marketing.partMaster.services.list, $scope.context.form.mapping.fields[0].options, 'partName');
    $scope.context.actions.list($scope.context);
}]);
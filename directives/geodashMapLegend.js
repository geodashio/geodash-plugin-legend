geodash.directives["geodashMapLegend"] = function(){
  return {
    controller: geodash.controllers.GeoDashControllerLegend,
    restrict: 'EA',
    replace: true,
    scope: {},
    templateUrl: 'map_legend.tpl.html',
    link: function ($scope, element, attrs, controllers)
    {

      $scope.map_config = $scope.$parent.map_config;
      $scope.map_config_flat = $scope.$parent.map_config_flat;
      $scope.assets = geodash.api.arrayToObject(extract("assets", $scope.map_config));

      setTimeout(function(){ geodash.ui.update(element); }, 0);
    }
  };
};


function ReadingListCtrl($scope, $http) {

    // Load currently reading data
    // Ensure $http is available, injected by angularjs
    $http.get('json/currently_reading.json').success(function(data) {
      $scope.currentlyReading = data;
    });

    // Already Reading JSON data
    $http.get('json/already_read.json').success(function(data) {
      $scope.alreadyRead = data;
    });

    // Future reads JSON data
    $http.get('json/future_reads.json').success(function(data) {
      $scope.futureReads = data;
    });
    
    // Set order by property for use when displaying data from .json file
    $scope.orderProp = 'name';
}
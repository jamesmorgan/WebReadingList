function PhoneListCtrl($scope) {
    $scope.phones = [
      {"name": "Nexus S", "snippet": "Fast just got faster with Nexus S."},
      {"name": "Motorola XOOM™ with Wi-Fi", "snippet": "The Next, Next Generation tablet."},
      {"name": "MOTOROLA XOOM™", "snippet": "The Next, Next Generation tablet."}
    ];
}

function ReadingListCtrl($scope) {
    $scope.currentlyReading = [
      {
          "name": "name D", 
          "author": "author 1",
          "amazonLink": "amazonLink 1",
          "isbn": "isbn 1",
          "imageUrl": "http://g-ecx.images-amazon.com/images/G/02/kindle/dp/2012/famStripe/FS-KC-125._V385941796_.gif"
      },
      {
          "name": "name B", 
          "author": "author 2",
          "amazonLink": "amazonLink 2",
          "isbn": "isbn 2",
          "imageUrl": "http://g-ecx.images-amazon.com/images/G/02/kindle/dp/2012/famStripe/FS-KC-125._V385941796_.gif"
     },
      {
          "name": "name A", 
          "author": "author 3",
          "amazonLink": "amazonLink 3",
          "isbn": "isbn 3",
          "imageUrl": "http://g-ecx.images-amazon.com/images/G/02/kindle/dp/2012/famStripe/FS-KC-125._V385941796_.gif"
      }
    ];
    
    $scope.orderProp = 'name';
}
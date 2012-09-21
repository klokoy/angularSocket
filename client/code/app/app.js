
ChatCtrl = function($scope) {

    $scope.messages = [];

    ss.event.on('newMessage', function(message) {
        $scope.$apply($scope.messages.push(message));
    });

    $scope.postMessage = function () {
        ss.rpc('demo.sendMessage', $scope.myMessage, function (a) {
            if(a) {
                console.log('message posted!');
            } else {
                console.log('something failed!');
            }
        });
        $scope.myMessage = '';
    };

    $scope.now = function() {
        return Date.now();
    }
}


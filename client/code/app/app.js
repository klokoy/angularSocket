//Controller for the app
ChatCtrl = function($scope) {

    //messages is a list of the messages broadcasted by the server
    $scope.messages = [];

    //listen for new messages from the server, push them into the messages list
    //in the $apply function. This is necessary to update the list in the view.
    ss.event.on('newMessage', function(message) {
        $scope.$apply($scope.messages.push({text: message, time: Date.now()}));
    });

    //When new messages are posted from the form send them to the server.
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
}


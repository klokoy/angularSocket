#[Angular](http://angularjs.org/) port of the [socketStream](http://www.socketstream.org/) chat example.

To test the app clone it, cd into the angularSocket directory and execute:

    npm install

This install the dependencies. To start the server do:

    node app.js

Then point your browser at http://localhost:3000/ .

The angular app has only one simple controller ChatCtrl.

´´´javascript
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
´´´





The interesting bit exists in the client/code/app/app.js file and the client/views/app.html files. There is no templating and no DOM manipulation. Everything is done with declarative html an angular. Styling is done with twitter bootstrap.





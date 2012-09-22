#[Angular](http://angularjs.org/) port of the [socketStream](http://www.socketstream.org/) chat example.

To test the app clone it, cd into the angularSocket directory and execute:

    npm install

This install the dependencies. To start the server do:

    node app.js

Then point your browser at http://localhost:3000/ .

Screenshot:

![angularSocket](/images/screenshot.png)

The client app.js file:

```javascript
//Controller for the app
ChatCtrl = function($scope) {

    //messages is a list of the messages broadcasted by the server
    $scope.messages = [];

    //listen for new messages from the server, push them into the messages list
    //in the $apply function. This is necessary to update the list in the view.
    ss.event.on('newMessage', function(message) {
        $scope.$apply($scope.messages.push(message));
    });

    //When new messages are posted from the form send them to the server.
    $scope.postMessage = function () {
        ss.rpc('demo.sendMessage', $scope.myMessage,function (a) {
            if(a) {
                console.log('message posted!');
            } else {
                console.log('something failed!');
            }
        });
        $scope.myMessage = '';
    };

    //helper function to get the current date and time.
    $scope.now = function() {
        return Date.now();
    }
}
```

The app.html
```html
<!DOCTYPE html>
<html lang="en" ng-app>
<head>
    <meta charset="utf-8"/>
    <SocketStream/>
    <title>Welcome</title>
</head>
<body>
<div class="container">
    <div class="row" style="padding-top: 80px;">
        <div class="span12">
            <div class="hero-unit">
                <div style="text-align: center;">
                    <a href="https://github.com/socketstream/socketstream">
                        <img src="/images/logo.png" alt="SocketStream Logo" width="160" height="160">
                    </a>
                    <a href="http://angularjs.org/">
                        <img src="/images/AngularJS-Shield-medium.png" width="160" height="160" alt="Angular Logo">
                    </a>
                </div>
                <div style="text-align: center;">
                    <h1>Welcome to your Angular realtime app!</h1>
                </div>
            </div>
        </div>
    </div>

    <div ng-controller="ChatCtrl" class="row">
        <div class="span1"></div>
        <div class="span10">
            <h3 class="legend">Quick Chat Demo</h3>
            <h5>Open this page in multiple tabs or browsers and type a message below</h5>


            <ul class="unstyled">
                <li ng-repeat="message in messages">
                    <span>{{message}}</span>
                    <span class="pull-right">{{now() | date:'medium'}}</span>
                </li>
            </ul>

            <form ng-submit="postMessage()">
                <input class="span10" type="text" ng-model="myMessage">
            </form>


        </div>
        <div class="span1"></div>
    </div>

</div>
</body>
</html>
```



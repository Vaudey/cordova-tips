angular.module("Controller", [])

    .controller('Controller', ['$scope', '$rootScope', '$state', '$location',
        function ($scope, $rootScope, $state, $location) {


            document.addEventListener("backbutton", onBackKeyDown, false);

            function onBackKeyDown() {
                // Handle the back button
                console.log($location.path());
                if ($location.path() == "/home" || $location.path() == "/") {
                    navigator.app.exitApp();
                }
                /*
                else {
                    history.go(-2);
                    navigator.app.backHistory(2);
                }
                */

            }

        }]);
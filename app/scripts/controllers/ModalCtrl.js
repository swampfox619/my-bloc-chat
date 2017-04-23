(function() {
    function ModalCtrl($scope, $cookies, $firebaseArray, Room) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
        
    $scope.add = function (){
        rooms.$add({
            $value: $scope.name
        });
    };
    
    $scope.createNewUser = function() {
        $cookies.blocChatCurrentUser = this.newUserName;
        console.log($cookies.blocChatCurrentUser);
        if(typeof this.newUserName !== "undefined"){
            $scope.userModalInstance.close();
            }
        };
    }
    
    angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope','$cookies', '$firebaseArray', 'Room', ModalCtrl]);
 })();

 (function() {
     function HomeCtrl($scope, $cookies, Room, Message) {
        $scope.rooms = Room.all;
        $scope.messages = null;
        $scope.currentRoom = null;
        this.currentUser = $cookies.blocChatCurrentUser;
         
        $scope.setRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
        
        $scope.sendNewMessages = function() {
                $scope.newMessage.roomID = $scope.currentRoom.$id;
                $scope.newMessage.username = $cookies.blocChatCurrentUser;
                $scope.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
                Message.send($scope.newMessage);
                console.log($scope.newMessage);
                $scope.newMessage.content = '';
        };  
    }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', '$cookies', 'Room', 'Message', HomeCtrl]);
 })();

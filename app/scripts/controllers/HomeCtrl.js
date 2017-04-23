 (function() {
     function HomeCtrl($scope, Room, Message) {
        $scope.rooms = Room.all;
        $scope.messages = null;
        $scope.currentRoom = null;
         
        $scope.setRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
         }

     angular
         .module('blocChat')
         .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
 })();

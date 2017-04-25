(function() {
  function Message($rootScope, $firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messageRef = ref.orderByChild('roomID');
    var messages = $firebaseArray(messageRef);
    
    Message.getByRoomId = function (roomId) {
        return $firebaseArray(messageRef.equalTo(roomId));
    }
    
    Message.send = function (sendMessage){
        messages.$add(sendMessage); 
    }
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$rootScope','$firebaseArray', Message]);
})();
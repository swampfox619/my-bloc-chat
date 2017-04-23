(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messageRef = ref.orderByChild('roomID');
    var messages = $firebaseArray(messageRef);
    
    Message.getByRoomId = function (roomId) {
        return $firebaseArray(messageRef.equalTo(roomId));
    }
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
(function() {
  function Room($rootScope, $firebaseArray, $uibModal, $log, $document, $cookies, Message) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

      
    $rootScope.open = function () {
        $rootScope.modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
        });
    }
    $rootScope.ok = function(){
        $rootScope.modalInstance.close();
    };
    $rootScope.cancel = function() {
        $rootScope.modalInstance.dismiss('cancel');  
    };  
    
    
    console.log(rooms);  
    
    return {
      all: rooms
     };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$rootScope', '$firebaseArray', '$uibModal', '$log', '$document', '$cookies', 'Message', Room]);
})();
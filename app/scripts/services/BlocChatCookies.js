(function() {
  function BlocChatCookies($rootScope, $cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $rootScope.userModalInstance = $uibModal.open({
          templateUrl: '/templates/newUser.html'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$rootScope', '$cookies', '$uibModal', BlocChatCookies]);
})();
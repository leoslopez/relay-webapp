(function() {
  'use strict';

  angular
    .module('dopplerRelay')
    .controller('ErrorCtrl', ErrorCtrl);

  ErrorCtrl.$inject = [
    '$scope',
    'close',
    '$route',
    'description',
    'actionDescription',
    'rejectionTitle',
    'statusCode',
    'errorCode',
    'isAuthorizationModal',
    'buttonText'
  ];

  function ErrorCtrl($scope, close, $route, description, actionDescription, rejectionTitle, statusCode, errorCode, isAuthorizationModal, buttonText) {
    var vm = this;
    vm.errorMessage = description;
    vm.actionDescription = actionDescription || null;
    vm.rejectionTitle = rejectionTitle || null;
    vm.statusCode = statusCode;
    vm.errorCode = errorCode;
    vm.isAuthorizationModal = isAuthorizationModal;
    vm.buttonText = buttonText;
    vm.closeModal = close;
  }
})();

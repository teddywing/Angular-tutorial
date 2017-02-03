(function(angular) {

    angular
        .module('n.Hello', [])
        .component('hello',  {
            template:
                '<h2>Hello {{ $ctrl.name }}</h2>' +
                '<input type="text" ng-model="$ctrl.name" />',
            controller: function() {
                this.name = '';
            }
        });

})(window.angular);

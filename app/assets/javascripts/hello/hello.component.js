(function(angular) {

    angular
        .module('n.Hello', [])
        .component('hello',  {
            template:
                '<h2>Hello {{ $ctrl.name }}</h2>' +
                '<div>' +
                    '<input type="text" ng-model="$ctrl.name" />' +
                '</div>' +
                '<div>' +
                    '<button ng-click="$ctrl.console.log($ctrl.name)">Print to console</button>' +
                '</div>',
            controller: function() {
                this.name = '';
                this.console = window.console;
            }
        });

})(window.angular);

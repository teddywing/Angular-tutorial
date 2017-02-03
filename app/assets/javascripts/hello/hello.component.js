(function(angular) {

    angular
        .module('n.Hello', [])
        .component('hello',  {
            template: '<h2>Hello {{ $ctrl.name }}</h2>',
            controller: function() {
                this.name = 'World';
            }
        });

})(window.angular);

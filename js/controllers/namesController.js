'use strict'

angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.names = [
        {name: 'Evan', country: 'Marocco'},
        {name: 'Helga', country: 'OAE'},
        {name: 'Ilone', country: 'Germany'}
    ]
});
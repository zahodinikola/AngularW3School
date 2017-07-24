'use strict'

var app = angular.module('myApp', []);
                app.controller('myCtrl', function($scope) {
                    $scope.firstName = 'Billy';
                    $scope.lastName = 'Idol';
                    $scope.makeFullName = function() {
                        return $scope.firstName + " " + $scope.lastName;
                    };
                });
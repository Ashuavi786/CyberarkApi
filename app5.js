// Define AngularJS module and controller
var app = angular.module('myApp', []);

app.controller('TabController', function($scope, $http) {
    // Manage tabs
    $scope.activeTab = 1;

    $scope.setTab = function(tab) {
        $scope.activeTab = tab;
    };

    $scope.isTab = function(tab) {
        return $scope.activeTab === tab;
    };

    // Models to hold form inputs
    $scope.accountInfo = {};
    $scope.safeInfo = {};
    $scope.memberInfo = {};

    // Models to hold API responses
    $scope.accountInfoResponse = [];
    $scope.safeInfoResponse = [];
    $scope.memberInfoResponse = [];

    // Function to fetch Account Info
    $scope.fetchAccountInfo = function() {
        const apiUrl = 'https://api.example.com/account-info'; // Replace with your backend URL
        $http.post(apiUrl, $scope.accountInfo)
            .then(function(response) {
                $scope.accountInfoResponse = response.data; // Bind data to table
            })
            .catch(function(error) {
                console.error('Error fetching account info:', error);
                alert('Failed to fetch account info.');
            });
    };

    // Function to fetch Safe Info
    $scope.fetchSafeInfo = function() {
        const apiUrl = 'https://api.example.com/safe-info'; // Replace with your backend URL
        $http.post(apiUrl, $scope.safeInfo)
            .then(function(response) {
                $scope.safeInfoResponse = response.data; // Bind data to table
            })
            .catch(function(error) {
                console.error('Error fetching safe info:', error);
                alert('Failed to fetch safe info.');
            });
    };

    // Function to fetch Member Info
    $scope.fetchMemberInfo = function() {
        const apiUrl = 'https://api.example.com/member-info'; // Replace with your backend URL
        $http.post(apiUrl, $scope.memberInfo)
            .then(function(response) {
                $scope.memberInfoResponse = response.data; // Bind data to table
            })
            .catch(function(error) {
                console.error('Error fetching member info:', error);
                alert('Failed to fetch member info.');
            });
    };
});

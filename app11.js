// app.js
angular.module('cyberArkApp', [])
.controller('TabController', function($scope) {
    // Initialize main tab and subtab selections
    this.tab = 1;
    this.subTab = 1;

    // Sample data to display in each section
    $scope.accountInfo = "Sample account information...";
    $scope.safeDetails = "Sample safe details information...";
    $scope.safeMemberDetails = "Sample safe member details information...";

    // Set the main tab
    this.setTab = function(tab) {
        this.tab = tab;
    };

    // Check if a main tab is active
    this.isTab = function(tab) {
        return this.tab === tab;
    };

    // Set the subtab within Safe Info
    this.setSubTab = function(subTab) {
        this.subTab = subTab;
    };

    // Check if a subtab is active within Safe Info
    this.isSubTab = function(subTab) {
        return this.subTab === subTab;
    };
});
angular.module("bas", ["ui.bootstrap", "ngSanitize"])

    .controller("MenuController", ["$scope", function ($scope) {
            $scope.isCollapsed = true;
    }])

    .factory("Popover", ["$uibModal", function($uibModal){
        var popoverService = {},
            currentModalInstance;

        popoverService.open = function(options){
            currentModalInstance = $uibModal.open({
                animation: false,
                windowClass: 'bas-popover-window',
                templateUrl: 'popover.html',
                controller: function($scope) {
                    $scope.options = $scope.$resolve.options;
                    $scope.close = currentModalInstance.close;
                },
                resolve: {
                    options: function() { return options }
                }
            });
        };

        return popoverService;
    }])

    .controller("ServicesController", ["$scope", "Popover", function ($scope, Popover) {
        console.log("Hi");

        $scope.services = [
            {
                name: "Private Tutoring",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Small Group Sessions",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Classroom Learning Sessions",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Homework Help",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Study Skills",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "SAT Preparation",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Academic Coaching",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Our List of Subjects",
                shortDescription: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            }
        ];

        $scope.selectService = function (serviceIndex) {
            $scope.selectedServiceIndex = serviceIndex;
            $scope._selectedServiceIndexInput = serviceIndex+"";
            $scope.selectedService = $scope.services[serviceIndex];
        };

        $scope.selectService(0);

        $scope.openServiceInPopover = function() {
            Popover.open({
                header: "More about "+$scope.selectedService.name,
                detailHTML: $scope.selectedService.detailPopover
            });
        };


    }]);

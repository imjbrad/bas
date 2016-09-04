angular.module("bas", ["ui.bootstrap", "ngSanitize"])

    .controller("MenuController", function ($scope) {
            $scope.isCollapsed = true;
    })

    .controller("ServicesController", function ($scope) {
        console.log("Hi");

        $scope.services = [
            {
                name: "Private Tutoring",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Small Group Sessions",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Classroom Learning Sessions",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Homework Help",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Study Skills",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "SAT Preparation",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Academic Coaching",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            },
            {
                name: "Our Subjects",
                shortDescription: "<p>this is a services omg yes it is!</p>",
                detailPopover: "<p>this is a detail pop over omg yes it is!</p>"
            }

        ];

        $scope.selectService = function (serviceIndex) {
            $scope.selectedServiceIndex = serviceIndex;
            $scope._selectedServiceIndexInput = serviceIndex+"";
            $scope.selectedService = $scope.services[serviceIndex];
        };

        $scope.selectService(0);


    });

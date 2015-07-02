(function () {
    "use strict";

    angular
        .module("common.services",
                    ["ngResource"]) //set dependency to ngResource. ngResource is module who contains $resource service
    	.constant("appSettings",
        {
            // path to the hosting server with WEB Api
            serverPath: "http://localhost:53892/"
        });
}());

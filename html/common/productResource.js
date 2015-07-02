// custom angular service who communicates with web-api services
(function () {
    "use strict";

    angular
        .module("common.services")
        // register custom factory services with this module
        .factory("productResource",
                ["$resource",
                 "appSettings",
                    productResource])
    // this issue a sync. web request to web api
    // then get response from web api


    // $resource is injected like a parameter, appSettings for define server path
    // :id is optional parameters
    // this function return $resource object and we setup communication with web api services
    function productResource($resource, appSettings) {
        //two types of parameter: Query String and URL path
        // for sending parameter with query string we don't need to have maching id with name in productResource.query 
        return $resource(appSettings.serverPath + "/api/products/:id");

        // for sending parameter with URL we need to have maching search with name in productResource.query
        // if we not have this search here then parametar will be added like query string
        // return $resource(appSettings.serverPath + "/api/products/:search");
    }

}());


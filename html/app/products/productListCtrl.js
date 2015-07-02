//PRODUCT PROPERTIES bind by model in this controller
// this is associated with main module(productManagement)
// we can call web API directly but that is not reusable and don't separate control logic with data access,
//we will use common for DAL (seperate angular model)

// here controler use productResource service, and call query method of $resource object
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource", ProductListCtrl]);
    //we pass parameter here productResource, and then we must define this in controller
    function ProductListCtrl(productResource) {
        var vm = this;
        
        vm.searchCriteria = "";

        // query method expect to receive array from web api
        // function (data) is return data(array)
        // {search: 'GDN'} is query string in form of object for Query String is products?search="GDN" for URL path is products/GDN whichever way we use
        // additional query string parameter we add with comma separated object in parenthese
        // parameter name in web api method must match with query string parameter
        productResource.query({ search: vm.searchCriteria }, function (data) {
            vm.products = data;// assign data to the model
        });
    }
}());

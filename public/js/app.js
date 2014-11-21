(function () {


    angular.module("Flipkart", [])
        .controller("LaptopsController", ['$scope', 'RestService',
            function (scope, RestService) {

                RestService.get("/laptops").then(function (response) {
                    scope.laptops = response;
                });


            }
        ])
        .factory("RestService", ['$http', '$q',

            function ($http, $q) {

                var restService = {

                    /**
                     *  gets a sinlge record
                     */
                    get: function(path) {
                        var def = $q.defer();
                        $http.get(path)
                            .success(function(data, status, headers, config) {
                                def.resolve(data);
                            })
                            .error(function(data, status, headers, config) {
                                def.reject("Error");
                            });
                        return def.promise;
                    },

                    /**
                     *  for posting data
                     */
                    post: function(path, payload) {
                        $http.post(path, payload)
                            .success(function(data, status, headers, config) {
                                // this callback will be called asynchronously
                                // when the response is available
                            })
                            .error(function(data, status, headers, config) {
                                // called asynchronously if an error occurs
                                // or server returns response with an error status.
                            });

                    }
                };
                return restService;
            }
        ]);


})();
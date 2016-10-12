angular.module('factoryModule')
    .factory('armsFactory', aFactory);

aFactory.$inject = ['$http'];

function aFactory($http) {


    function getEnterArms() {
        return $http.get('/api/enter');
    }

    function postEnterArms(armsData) {
        return $http.post('/api/enter', armsData);
    }



    function getListing(){
        return $http.get('/api/profileListing');
    }

    function postListing(listingData){
        return $http.post('/api/profileListing', listingData);
        // $http({
        //     method : 'POST',
        //     url : '/api/profileListing',
        //     data : listingData
        // })
    }



        function getUpdate(){
        return $http.get('/api/profileUpdate');
    }

    function postUpdate(updateData){
        return $http.post('/api/profileUpdate', updateData);
    }



            function getExpired(){
        return $http.get('/api/profileExpired');
    }

    function postExpired(expiredData){
        return $http.post('/api/profileExpired', expiredData);
    }

    

    return {
        getEnterArms   :    getEnterArms,
        postEnterArms  :    postEnterArms,
        getListing     :    getListing,
        postListing    :    postListing,
        getUpdate      :    getUpdate,
        postUpdate     :    postUpdate,
        getExpired     :    getExpired,
        postExpired    :    postExpired

    }
};
var App = App || {};

App.Helpers = (function()
{
    /**
     * Get a parameter from teh url
     * Taken from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
     */
    function getParameterByName(name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        
        var url = window.location.href;
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        
        if (!results) {
            return null;
        }
        
        if (!results[2]) {
            return '';
        }
        
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }





    /**
     * Functions available to the public
     */
    return {
        getParameterByName: getParameterByName
    };
})();

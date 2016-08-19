var App = App || {};

// start the app
App.init = function () {
    App.Timeline.init();
    
    $(".timeline").on("click", "img", function() {
        var image = "<img src='" + $(this).attr("src") + "' />";
        
        App.Modal.displayModal(image);
    });
};

// run on DOM load
$(document).ready(App.init);

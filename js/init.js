var App = App || {};

// start the app
App.init = function () {
    App.Timeline.loadCurrentPage();
};

// run on DOM load
$(document).ready(App.init);

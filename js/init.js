var App = App || {};

// start the app
App.init = function () {
    App.Timeline.init();
};

// run on DOM load
$(document).ready(App.init);

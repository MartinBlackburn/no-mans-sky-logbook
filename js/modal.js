var App = App || {};

App.Modal = (function()
{
    /**
     * Display a modal with a given message
     *
     * @param string message
     */
    function displayModal(message)
    {
        var modalTemplate = ["<div class='modal'>",
                                "<div class='modal__inner'>",
                                    "<div class='modal__message'>" + message + "</div>",
                                "</div>",
                             "</div>"
                            ].join("\n");

        //add modal to page
        $("body").append(modalTemplate);

        //fade modal in
        $(".modal").hide().fadeIn(200);

        //add event handlers
        $(".modal").on("click", function(event) {
            closeModal();
        });
    }





    /**
     * Close modal
     */
    function closeModal()
    {
        //remove event handlers
        $(".modal").off();

        //fadeout and remove modal
        $(".modal").fadeOut(200, function() {
            $(this).remove();
        });
    }





    /**
     * Functions available to the public
     */
    return {
        displayModal: displayModal
    };
})();

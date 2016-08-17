var App = App || {};

App.Timeline = (function()
{
    /**
     * Variables
     */
    var entriesPath = "logs/";
    var numberOfEntries = 12;
    
    
    
    
    
    /**
     * Setup
     */
    function init()
    {
        addPlaceholders();
        loadEntries();
    }
    
    /**
     * Add placeholder elements for entries
     * placeholders are needed as ajax may load them in the wrong order
     */
    function addPlaceholders()
    {
        for (var i = 1; i <= numberOfEntries; i++) {
            $(".timeline").append("<div class='entry entry--" + i + "'></div>");
        }
    }
    
    /**
     * Load entries
     */
    function loadEntries()
    {
        //load backwards so newest ones appear first
        for (var i = numberOfEntries; i >= 1; i--) {
            $.ajax({
                dataType: "json",
                url: entriesPath + i + ".json",
                index: i,
                cache: false,
                success: function(entry) { renderEntry(this.index, entry) }
            });
        }
    }
    
    /**
     * Display a entry within its placeholder
     *
     * @param int index
     * @param object entry
     */
    function renderEntry(index, entry)
    {
        var imageTemplate = "";
        var textClass = "";
        
        if(entry.image) {
            imageTemplate = "<div class='entry__image'><img src='images/logs/" + entry.image + "' /></div>";
        } else {
            textClass = "entry__text--full";
        }
        
        var entryTemplate = ["<div class='entry__icon'></div>",
                            "<div class='entry__content'>",
                                "<h2 class='entry__title'>" + entry.title + "</h2>",
                                "<div class='entry__date'>" + entry.date + "</div>",
                                imageTemplate,
                                "<p class='entry__text " + textClass + "'>" + entry.text.join("<br /><br />") + "</p>",
                            "</div>",
                            ].join("\n");
        
        //add class for type, so can be styled differently
        $(".entry--" + index).addClass("entry--" + entry.type);
        
        //add entry to the page
        //with a fade in to look pretty
        $(".entry--" + index).append(entryTemplate).hide().fadeIn(200);
    }
    
    
    
    
    
    /**
     * Public functions
     */
    return {
        init: init
    };
})();
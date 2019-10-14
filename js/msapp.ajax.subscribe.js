(function($) {
    'use strict';

    // Get the form element.
    // Get the messages element.
    let form = $('#ms-js-subscription-form');

    $(form).submit(function(event) {

        // Stop the browser from submitting the form.
        event.preventDefault();

        //Grab attributes and values out of the form
        let data = { email: $('#ms-js-subscribe-input').val() },
            endPoint = $(this).attr('action');

        //Make the ajax request
        $.ajax({
            method: 'POST',
            dataType: "json",
            url: endPoint,
            data: data
        }).done(function(data) {
            alert(data.responseText);
        }).fail(function(data) {
            let message = data.responseText;

            if(data.responseText === undefined)
                message = "Sorry, It's not supported in local!"

            alert(message);
        });
    });

})(jQuery);
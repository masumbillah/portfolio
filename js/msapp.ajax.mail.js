$(function() {

	// Get the form element.
	// Get the messages element.
	let form = $('#ms-js-contact-form'),
		formMessages = $('#ms-js-contact-form-message');

	// Set up an submit event listener for the contact form.
	$(form).submit(function(e) {

		// Stop the browser from submitting the form.
		e.preventDefault();

		// Get form data by serialize the form.
		let formData = $(form).serialize();

		// Submit/Request the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		
		}).done(function(response) {
			// Make sure the form messages has the 'ms-success' class.
			$(formMessages).removeClass('ms-error-color');
			$(formMessages).addClass('ms-success-color');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('.ms-form-group input, .ms-form-group textarea').val('');
		
		}).fail(function(data) {
			// Make sure the form messages has the 'error' class.
			$(formMessages).removeClass('ms-success-color');
			$(formMessages).addClass('ms-error-color');
			
			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! something went wrong and your message could not be sent.');
			}
		});
	});

});
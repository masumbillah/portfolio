<?php
//Check has email
if (isset($_POST['email'])) {

	//Get email addess
	$email = $_POST['email'];

	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		//Get all emails from store and explode emails
		$file = file_get_contents(__DIR__.'/subscribe-emails-store.php');
		$file = explode(', ', $file);

		//If your email is matched with existing email
		//If your email is not matched. Email is new for subcribe
		if (in_array($email, $file)) {
			echo "You have already subscribed!!!";
		} else {
			$fopen = fopen(__DIR__.'/subscribe-emails-store.php', 'a');
			fwrite($fopen, $email.', ');
			fclose($fopen);
			echo "Thank you for subscribing...";
		}
	} else {
		echo "Please enter a valid email...";
	}
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data here
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can perform database operations or send email notifications here

    // For this example, let's just send a confirmation message
    $response = "Thank you, $name! Your message has been received.";
    echo json_encode(["success" => true, "message" => $response]);
} else {
    // Handle other backend operations or API requests here
}
?>

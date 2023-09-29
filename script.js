function countdown(number, callback) {
    if (number === 0) {
        callback();
    } else {
        console.log(number);
        setTimeout(function() {
            countdown(number - 1, callback);
        }, 1000);
    }
}

countdown(10, function() {
    console.log("Happy Independence Day");
    // Display "Happy Independence Day" on the screen
    const messageElement = document.createElement("div");
    messageElement.textContent = "Happy Independence Day";
    document.body.appendChild(messageElement);
});

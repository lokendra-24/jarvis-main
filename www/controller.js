$(document).ready(function () {

    // Display dynamic status (Listening, Recognizing, Responding)
    eel.expose(updateStatus)
    function updateStatus(message) {
        $("#statusText").text(message);
    }

    // Display Assistant Speak Message (Inside SiriWave textillate)
    eel.expose(DisplayMessage)
    function DisplayMessage(message) {
        $("#statusText").text(message);
        $('.siri-message').textillate('start');
    }

    // Display Hood after response
    eel.expose(ShowHood)
    function ShowHood() {
        $("#Oval").attr("hidden", false);
        $("#SiriWave").attr("hidden", true);
    }

    // Show User's Command (Sender Side)
    eel.expose(senderText)
    function senderText(message) {
        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `
                <div class="row justify-content-end mb-4">
                    <div class="width-size">
                        <div class="sender_message">${message}</div>
                    </div>
                </div>`; 
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    // Show Assistant's Response (Receiver Side)
    eel.expose(receiverText)
    function receiverText(message) {
        var chatBox = document.getElementById("chat-canvas-body");
        if (message.trim() !== "") {
            chatBox.innerHTML += `
                <div class="row justify-content-start mb-4">
                    <div class="width-size">
                        <div class="receiver_message">${message}</div>
                    </div>
                </div>`; 
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    // Hide Loader and show Face Auth animation
    eel.expose(hideLoader)
    function hideLoader() {
        $("#Loader").attr("hidden", true);
        $("#FaceAuth").attr("hidden", false);
    }

    // Hide FaceAuth and show Success Animation
    eel.expose(hideFaceAuth)
    function hideFaceAuth() {
        $("#FaceAuth").attr("hidden", true);
        $("#FaceAuthSuccess").attr("hidden", false);
    }

    // Hide Success and show Welcome
    eel.expose(hideFaceAuthSuccess)
    function hideFaceAuthSuccess() {
        $("#FaceAuthSuccess").attr("hidden", true);
        $("#HelloGreet").attr("hidden", false);
    }

    // Hide Start and Show Oval (Main Screen)
    eel.expose(hideStart)
    function hideStart() {
        $("#Start").attr("hidden", true);
        setTimeout(function () {
            $("#Oval").addClass("animate__animated animate__zoomIn");
            $("#Oval").attr("hidden", false);
        }, 1000);
    }

});

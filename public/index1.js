console.log("hello World");
let htmlMarkup = `
<div class="container">
      <div class="widget resize-drag" id="widget">
        <div class="chat_header">
          <!--Add the name of the bot here -->
          <span title="EOTSS" style="color: white; margin-left: 5px"
            >EOTSS</span
          >
          <span
            title="Close"
            style="
              color: white;
              margin-right: 5px;
              float: right;
              margin-top: 5px;
            "
            id="close"
          >
            <i class="material-icons">close</i>
          </span>
          <span
            title="Minimize"
            class="action-btns"
            style="margin-top: 0px"
            id="minimize"
          >
            <i class="material-icons">minimize</i>
          </span>
          <span title="Help" class="action-btns" id="setting">
            <span class="material-icons"> help </span>
            <span title="Help" class="settings" id="settings">
              <div>
                <span style="font-weight: 600">Shortcuts</span>
                <hr style="border-color: #c1ced4" />
                <ul>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Toggle bot:</span>
                      <span class="settings-value">Alt + b</span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Increase Font:</span>
                      <span class="settings-value">Alt + </span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Decrease Font:</span>
                      <span class="settings-value">Alt - </span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Minimize bot:</span>
                      <span class="settings-value">Alt + m </span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Close bot:</span>
                      <span class="settings-value">Alt + c </span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Toggle Mic:</span>
                      <span class="settings-value">Alt + r </span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Send input:</span>
                      <span class="settings-value">Alt + enter </span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Toggle help:</span>
                      <span class="settings-value">Alt + i </span>
                    </div>
                  </li>
                  <li>
                    <div class="shortcuts-info">
                      <span class="settings-label">Reset bot:</span>
                      <span class="settings-value">Alt + q </span>
                    </div>
                  </li>
                </ul>
              </div>
            </span>
          </span>
          <span
            title="Enable Visual Enhancement Mode"
            class="action-btns"
            id="visual-enhancement"
          >
            <i class="material-icons">accessible</i>
          </span>
          <span title="Descrease Font" class="action-btns" id="decrease-font">
            A
            <!-- <i class="material-icons">expand_more</i> -->
          </span>
          <span title="Increase Font" class="action-btns" id="increase-font">
            A
            <!-- <i class="material-icons">expand_less</i> -->
          </span>
          <span title="Reset bot" class="action-btns" id="reset-bot">
            <!-- <i class="material-icons">restore</i> -->
            <i
              title="Reset bot"
              class="fas fa-history reset-bot"
              style="margin-top: 3px"
            ></i>
          </span>
          <div>
            <span
              title="Your Personal Assistant"
              style="
                color: white;
                margin-left: 5px;
                font-size: small;
                font-style: italic;
                display: block;
              "
              >Your Personal Assistant
            </span>
          </div>
        </div>
        <!--Chatbot contents goes here -->

        <div class="chats" id="chats">
          <div class="clearfix"></div>
          <div class="testing" id="testing" style="margin-top: 10px"></div>
        </div>

        <!--user typing indicator -->
        <div class="keypad">
          <input
            type="text"
            id="keypad"
            disabled
            class="usrInput browser-default"
            placeholder="Type a message..."
            autocomplete="off"
          />

          <div title="Mic" class="popup">
            <i
              id="mic-btn-on"
              class="fas fa-microphone-alt fa-2x hide"
              style="margin-left: 3px; margin-top: 5px"
            ></i>
            <span class="popuptext" id="myPopup">Go on i'm Listening!</span>
            <i
              id="mic-btn-off"
              class="fas fa-microphone fa-2x"
              style="margin-left: 3px; margin-top: 5px"
            ></i>
          </div>
          <i
            title="Send"
            id="send-btn"
            class="fas fa-paper-plane fa-2x"
            style="margin-left: 3px; margin-top: 5px"
          ></i>
          <i
            title="Reset bot"
            class="fas fa-history fa-2x reset-bot"
            style="cursor: pointer; margin-left: 3px; margin-top: 5px"
          ></i>
        </div>
      </div>
      <!--bot widget -->

      <div id="creya_logo" title="EOTSS Bot">
        <div class="profile_div" id="profile_div">
          <img class="imgProfile" alt="EOTSS Bot" src="https://drive.google.com/file/d/1fxvx5yYhHhIdKnmRLQITNa__NXgVDb9V/view" />
        </div>
        <div id="bot" class="bot">
          <i id="toggleCreya" class="fas fa-chevron-right fa-2x"></i>
        </div>
      </div>

      <div class="creya_logo_min" title="Chatbot" id="creya_logo_min">
        <i id="togglecreya_new" class="fas fa-chevron-left"></i>
        <span
          class="profile_div_tiny"
          id="profile_div_tiny"
          style="font-family: 'Roboto', sans-serif; font-style: italics"
          >EOTSS</span
        >
      </div>
    </div>
`;

let cssMarkup = `
.chart-height {
    min-height: 290px !important;
  }

  .hints {
    background: linear-gradient(60deg, #213f58, #0c7fa4);
  }

  .fa-paper-plane:before {
    content: "\\f1d8";
    color: #175f7d;
  }

  .fa-microphone:before,
  .fa-microphone-alt:before,
  .fa-history:before {
    color: #175f7d;
  }

  .fa-microphone-alt:before {
    color: #e82719;
  }

  .widget {
    width: 480px;
    right: 15px !important;
    height: 590px;
    bottom: 5% !important;
    position: fixed !important;
    background-image: url("images/chat-background.png") !important;
    border-radius: 10px 10px 10px 10px !important;
    box-shadow: 0px 2px 10px 1px #b5b5b5 !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 400px 550px;
    transform-origin: 400px 550px;
  }

  .chat_header {
    height: 8% !important;
    background: linear-gradient(60deg, #213f58, #0c7fa4);
    border-radius: 10px 10px 0px 0px !important;
    padding: 5px !important;
    font-size: 20px !important;
  }

  .chats {
    height: 440px !important;
    padding: 5px !important;
    padding-top: 0px !important;
    margin-top: 5px !important;
    border-radius: 1px !important;
    overflow-y: scroll !important;
    transition: 0.2s !important;
  }

  div.chats::-webkit-scrollbar,
  div.botMsg::-webkit-scrollbar {
    width: 4px !important;
    /* remove scrollbar space /
    background: transparent !important;
    / optional: just make scrollbar invisible */
  }

  /* Track */

  div.chats::-webkit-scrollbar-track,
  div.botMsg::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey !important;
    border-radius: 20px !important;
  }

  /* Handle */

  div.chats::-webkit-scrollbar-thumb,
  div.botMsg::-webkit-scrollbar-thumb {
    background: linear-gradient(60deg, #213f58, #0c7fa4);
    border-radius: 5px !important;
  }

  /* Handle on hover */

  div.chats::-webkit-scrollbar-thumb:hover,
  div.botMsg::-webkit-scrollbar-thumb:hover {
    background: #b30000 !important;
  }

  #close,
  #minimize {
    cursor: pointer !important;
  }

  .clearfix {
    margin-top: 2px !important;
    margin-bottom: 2px !important;
  }

  .message {
    margin-top: 5px !important;
    margin-bottom: 5px !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .botAvatar {
    border-radius: 50% !important;
    width: 2.5em !important;
    height: 2.5em !important;
    float: left !important;
    margin-left: 5px !important;
    border: 2px solid #6072e6 !important;
  }

  .botMsg {
    float: left !important;
    margin-top: 5px !important;
    background: #ffffff !important;
    box-shadow: 2px 5px 5px 1px #efeef5 !important;
    border: 1px solid #ffffff !important;
    margin-left: 0.5em !important;
    padding: 0.6em 1em !important;
    border-radius: 1.5em !important;
    max-width: 90% !important;
    min-width: 25% !important;
    font-size: 16px;
    word-wrap: break-word !important;
  }

  .userMsg {
    animation: animateElement linear 0.2s !important;
    animation-iteration-count: 1 !important;
    margin-top: 5px !important;
    word-wrap: break-word !important;
    padding: 0.6em 1em !important;
    float: right !important;
    margin-right: 0.5em !important;
    background: #175f7d !important;
    border: 1px solid #175f7d !important;
    color: #fff !important;
    border-radius: 1.5em !important;
    margin-bottom: 0.15em !important;
    font-size: 16px;
    max-width: 55% !important;
    min-width: 25% !important;
    line-height: 1.5em !important;
  }

  .userAvatar {
    animation: animateElement linear 0.3s !important;
    animation-iteration-count: 1 !important;
    border-radius: 50% !important;
    width: 2.5em !important;
    height: 2.5em !important;
    float: right !important;
    margin-right: 5px !important;
    border: 2px solid #213f58 !important;
  }

  .singleCard {
    padding-right: 15px !important;
  }

  .suggestions {
    padding: 5px !important;
    width: 100% !important;
    border-radius: 10px !important;
    background: #ffffff !important;
    box-shadow: 2px 5px 5px 1px #dbdade !important;
  }

  .cardsImage {
    width: 100% !important;
    height: 80% !important;
    border-radius: 10px 10px 0px 0px !important;
  }

  .keypad {
    height: 45px !important;
    position: absolute !important;
    bottom: 10px !important;
    width: 100% !important;
  }

  .usrInput {
    background: #f1f0f0 !important;
    padding: 1px;
    width: 68%;
    margin-left: 4% !important;
    border-radius: 20px !important;
    box-shadow: 0px 2px 10px 1px #b5b5b5 !important;
    border: 0 !important;
    padding-left: 15px !important;
    height: 35px !important;
}

  input:focus {
    outline: none !important;
  }

  video:focus {
    outline: none !important;
  }

  .menuTitle {
    padding: 5px !important;
    margin-top: 5px !important;
    margin-bottom: 5px !important;
  }

  .menu {
    padding: 5px !important;
    max-width: 100% !important;
    display: flex !important;
    flex-wrap: wrap !important;
  }

  .list {
    padding: 5px !important;
    max-width: 100% !important;
  }

  .menuChips {
    margin-right: 3px !important;
    display: block !important;
    background: #175f7d !important;
    color: #fff !important;
    text-align: center !important;
    padding: 5px !important;
    padding-left: 7px !important;
    padding-right: 6px !important;
    margin-bottom: 5px !important;
    cursor: pointer !important;
    border-radius: 7px !important;
    font-size: 12px !important;
    word-wrap: break-word !important;
  }

  .menuChips:hover {
    box-shadow: 4px 6px 15px 1px rgba(33, 63, 88, 0.25);
  }

  .imgcard {
    object-fit: cover !important;
    width: 80% !important;
    height: 65px !important;
    border-radius: 10px 10px 10px 10px !important;
    margin-left: 1% !important;
  }

  .chip {
    background-color: #6072e6 !important;
    color: #fff !important;
    font-weight: normal !important;
    font-weight: 0 !important;
    text-align: center !important;
  }

  @keyframes animateElement {
    0% {
      opacity: 0 !important;
      transform: translate(0px, 10px) !important;
    }

    100% {
      opacity: 1 !important;
      transform: translate(0px, 0px) !important;
    }
  }

  .imgProfile {
    width: 100% !important;
    padding: 2% !important;
  }

  #creya_logo {
    position: fixed;
    bottom: 55px !important;
    right: 16px !important;
    width: 7%;
    height: 12%;
    transition: 0.5s;
    transform: translate(200%);
  }

  .profile_div {
    padding: 5px !important;
    width: 64%;
    cursor: pointer !important;
    position: relative;
    float: left;
  }

  .bot {
    cursor: pointer !important;
    width: 12%;
    float: left;
    padding-top: 50%;
    margin-left: 2px;
  }

  #togglecreya_new {
    margin-right: 8px;
    cursor: pointer !important;
  }

  #toggleCreya {
    color: #175f7d;
  }

  #profile_div_tiny {
    cursor: pointer !important;
  }

  .creya_logo_min {
    position: fixed !important;
    right: -170px !important;
    bottom: 65px !important;
    background: #175f7d;
    border-radius: 12px;
    color: white;
    padding: 5px !important;
    width: 95px !important;
    /* transform: translate(200%); */
    transition: 0.5s;
  }

  .profileIcon {
    height: 15% !important;
    align-items: center !important;
    float: left !important;
    margin-right: 10px !important;
  }

  .keya-wrapper {
    width: 480px !important;
    height: 117px !important;
    border-radius: 20px 20px 0px 0px !important;
    background-color: white !important;
    position: absolute !important;
    padding-top: 27px !important;
    left: 0px !important;
  }

  .button-suggestions {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  .jc-bs3-container {
    width: 30% !important;
  }

  #send-btn:hover,
  #mic-btn-on:hover,
  #mic-btn-off:hover {
    cursor: pointer;
  }

  .popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* The actual popup */

  .popup .popuptext {
    visibility: hidden;
    width: 117px;
    background-color: #175f7d;
    color: #fff;
    text-align: center;
    border-radius: 12px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
  }

  /* Popup arrow */

  .popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 69%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  /* Toggle this class - hide and show the popup */

  .popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

  /* Add animation (fade in the popup) */

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .popup .show {
  }

  .hide {
    display: none !important;
  }

  .activateTiny {
    color: #2ab6e9 !important;
  }

  .scroll {
    overflow-y: scroll;
    height: 300px;
  }

  .clearfix {
    clear: both;
  }

  .creyaTr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding: 15px 5px;
  }

  .creyaTh,
  .creyaTd {
    padding: 15px 5px;
  }

  /*
new
*/

  div#wave {
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  div#wave .dot {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 3px;
    background: #175f7d;
    animation: wave 1.3s linear infinite;
  }

  div#wave .dot:nth-child(2) {
    animation-delay: -1.1s;
  }

  div#wave .dot:nth-child(3) {
    animation-delay: -0.9s;
  }

  @keyframes wave {
    0%,
    60%,
    100% {
      transform: initial;
    }

    30% {
      transform: translateY(-15px);
    }
  }

  .card-data {
    color: white;
    margin-top: 12px;
    margin-left: 10px;
    margin-right: 10px;
    font-style: italic;
    font-weight: bold;
  }

  .idea-icon {
    font-size: 25px;
    color: white;
  }

  .mainContainer {
    display: flex;
    flex-direction: row;
    font-size: 70px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(60deg, #213f58, #0c7fa4);
  }

  body {
    margin: 0;
  }

  .leftSide {
    display: flex;
    vertical-align: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }

  .rightSide {
    width: 100vw;
    height: 100vh;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 31% 100%);
    background: white;
  }

  .content {
    display: flex;
    flex-direction: column;
    color: #3e333e;
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 30px;
    padding-bottom: 30px;
    background: #e6e6e6;
    border: 2px solid 0080a7;
    border-radius: 36px;
  }

  .loginHeader {
    font-size: 36px;
    display: flex;
    justify-content: center;
    color: #017ba0;
    border-radius: 30%;
    background: #c6d3d8;
  }

  .logout {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submit-btn {
    font-family: "Roboto", sans-serif;
    outline: none;
    border-radius: 8px;
    background: #0080a7;
    color: white;
    padding: 10px;
    border: 1.5px solid #0080a7;
  }

  .submit-btn:hover {
    background: white;
    border: 1.5px solid #0080a7;
    color: black;
  }

  .animated {
    height: 100vh;
  }

  .shortcuts-info {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }


  .settings {
    width: 210px;
    background-color: #ffffff;
    border: 2px solid #c1ced4;
    text-align: center;
    border-radius: 12px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    margin-left: -45%;
    top: 11%;
    padding: 10px;
    color: #000000;
    text-align: left;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 200px 0px;
    transform-origin: 200px 0px;
    font-size: 16px;
  }

  .settings::before {
    content: "";
    position: absolute;
    top: -16px;
    left: 69%;
    margin-left: 44px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent #c1ced4 transparent;
  }

  .show-settings {
    transform: scale(1);
  }

  .action-btns {
    color: white;
    margin-right: 5px;
    float: right;
    margin-top: 5px;
    cursor: pointer;
    visibility: visible;
    padding-left: 3px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .hide {
    visibility: hidden;
  }

  .settings-label {
    font-weight: 600;
  }

  .settings-value {
    padding-left: 5px;
    font-style: italic;
  }

  #decrease-font {
    margin-top: 10px;
    font-size: 15px;
  }

  #reset-bot {
    margin-top: 7px;
  }
  #reset-bot i::before {
    color: white;
  }
  .logo {
    width: 400px;
  }
  .logo img {
    max-width: 100%;
    max-height: 100%;
  }
`;
var style = document.createElement("style");
style.innerHTML = cssMarkup;
document.body.appendChild(style);

var div = document.createElement("div");
div.innerHTML = htmlMarkup;
document.body.appendChild(div);

// $( "#widget" ).resizable({ ghost: true });

let fontSize = 16;
let chatBotOpened = false;
let micOn = false;

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector("#creya_logo").style.transform = "translate(-20%)";
  setTimeout(() => {
    document.querySelector("#creya_logo").style.transform = "translate(20%)";
  }, 400);
  msg = "I couldn't get that. Let' try something else!";
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//Voice Recognition

//Toggle the mic on and off based on the user input
function toggleMic() {
  $("#mic-btn-on").toggleClass("hide");
  $("#mic-btn-off").toggleClass("hide");
}

try {
  window.SpeechRecognition =
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition ||
    window.oSpeechRecognition ||
    window.SpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  //Event listener for processing the result of the voice recognition
  recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join("");

    $(".usrInput").val(transcript);
  });

  //Send the message of the user upon the end of voice recognition
  recognition.addEventListener("end", function() {
    myFunction();
    toggleMic();
    sendMessage();
    micOn = false;
  });

  // Turn of the voice recognition
  $("#mic-btn-on").click(function() {
    micOn = false;
    myFunction();
    toggleMic();
    recognition.stop();
  });

  // Turn on the voice recognition
  $("#mic-btn-off").click(function() {
    micOn = true;
    myFunction();
    toggleMic();
    recognition.start();
  });

  //Stop listening the user
  function stopListening() {
    recognition.stop();
  }
} catch (exception) {
  $("#mic-btn-off").toggleClass("hide");
}

let minimumFontSize = 12;
let maximumFontSize = 22;

document.querySelector("#increase-font").addEventListener("click", e => {
  if (fontSize < maximumFontSize) {
    fontSize += 2;
    updateFontSize();
  }
});

document.querySelector("#decrease-font").addEventListener("click", e => {
  if (fontSize > minimumFontSize) {
    fontSize -= 2;
    updateFontSize();
  }
});

function updateFontSize() {
  document
    .querySelectorAll(".botMsg ")
    .forEach(el => el.setAttribute("style", `font-size:${fontSize}px`));
  document
    .querySelectorAll(".userMsg ")
    .forEach(el => el.setAttribute("style", `font-size:${fontSize}px`));
  // document.querySelectorAll(".settings ").forEach(el => el.setAttribute('style', `font-size:${fontSize}px`));

  // updateFontSettings();
}

function updateFontSettings() {
  if (fontSize == minimumFontSize) {
    document.querySelector("#decrease-font").classList.add("hide");
  } else {
    document.querySelector("#decrease-font").classList.remove("hide");
  }

  if (fontSize == maximumFontSize) {
    document.querySelector("#increase-font").classList.add("hide");
  } else {
    document.querySelector("#increase-font").classList.remove("hide");
  }
}

var isClosed = false;
var sessionStarted = false;

var role = "<%= role %>";
var name = "<%= name %>";
var tenant_id = name + "|" + role;
var activateTiny = false;

function sendData(e) {
  var text = $(".usrInput").val();
  if (text == "" || $.trim(text) == "") {
    e.preventDefault();
    return false;
  } else {
    $(".usrInput").blur();
    setUserResponse(text);
    send(text, "message");
    e.preventDefault();
    return false;
  }
}

//---------------------------------- on input/text enter -------------------------------------------
$(".usrInput").on("keyup keypress", function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    sendData(e);
  }
});

//------------------------------------- Set user response-------------------------------------------
function setUserResponse(val) {
  //disable the user input
  document.querySelector(".usrInput").disabled = true;

  var UserResponse =
    '<p class="userMsg">' + val + ' </p><div class="clearfix"></div>';
  $(UserResponse)
    .appendTo(".testing")
    .show("slow");
  $(".usrInput").val("");
  scrollToBottomOfResults();
  $(".suggestions").remove();
  noUserInput = false;
  var BotResponse =
    '<div class="botMsg" id="typing" style="border:0px !important;background:transparent !important;box-shadow:none !important">' +
    `<div id="wave">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                </div>` +
    '</div><div class="clearfix"></div>';
  $(BotResponse)
    .appendTo(".testing")
    .hide()
    .fadeIn(1000);
}

//---------------------------------- Scroll to the bottom of the chats-------------------------------
function scrollToBottomOfResults() {
  var terminalResultsDiv = document.getElementById("chats");
  terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

//---------------------------------- Send Message back to the rasa server----------------------------
function send(message, intent) {
  var dataTobeSent = null;
  if (intent == "action") {
    dataTobeSent = JSON.stringify({
      action: message,
      sender: tenant_id
    });
  } else {
    dataTobeSent = JSON.stringify({
      message: message,
      sender: tenant_id
    });
  }

  $.ajax({
    url: "https://chatbot.neurosoph.com:8080/webhooks/rest/webhook",
    type: "POST",
    contentType: "application/json",
    data: dataTobeSent,
    success: function(data, textStatus) {
      let firstMessage = document.querySelector("#testing").children[0];
      if (!firstMessage) {
        if (data.length > 1) {
          data.pop();
        }
      }
      setBotResponse(data);
      enableUserInput();
    },
    error: function(errorMessage) {
      setBotResponse("");
      enableUserInput();
    }
  });
}

function enableUserInput() {
  setTimeout(function() {
    document.querySelector(".usrInput").disabled = false;
    $(".usrInput").focus();
  }, 1500);
}

//------------------------------------ Set bot response -------------------------------------
function setBotResponse(val) {
  setTimeout(function() {
    $("#typing").remove();
  }, 500);

  setTimeout(function() {
    if (val.length < 1) {
      //if there is no response from Rasa
      msg = "I couldn't get that. Let' try something else!";
      var BotResponse =
        '<p class="botMsg">' + msg + '</p><div class="clearfix"></div>';
      $(BotResponse)
        .appendTo(".testing")
        .hide()
        .fadeIn(500);
    } else {
      //if we get response from Rasa
      for (i = 0; i < val.length; i++) {
        //check if there is text message
        if (val[i].hasOwnProperty("custom")) {
          data = JSON.parse(val[i].custom);
          var type = Object.keys(data)[0];
          if (type == "list") {
            var count = 0;
            var length = data.list.length - 1;
            var markup = `<div class="botMsg"><table><tr><th>Product Name</th><th>Facility ID</th><th>ATP</th><th>QOH</th></tr>`;
            data.list.forEach(row => {
              if (count == length) {
                markup += `<tr><td style="font-weight:bold;">${
                  row.product_name
                }</td><td style="font-weight:bold;">${
                  row.facility_id
                }</td><td style="font-weight:bold;" class="numerical">${
                  row.atp
                }</td><td style="text-align:right;font-weight:bold;">${
                  row.qoh
                }</td></tr>`;
              } else {
                markup += `<tr><td>${row.product_name}</td><td>${
                  row.facility_id
                }</td><td class="numerical">${
                  row.atp
                }</td><td style="text-align:right;">${row.qoh}</td></tr>`;
              }
              count += 1;
            });
            markup += `</table></div><div class="clearfix"></div><br/>`;
            $(markup)
              .appendTo(".chats")
              .hide()
              .fadeIn(1000);
          } else if (type == "str") {
            data = data.str;
            const date = new Date(data.date);
            const formattedDate = date
              .toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
              .replace(/ /g, "-");
            var BotResponse =
              '<p class="botMsg">' +
              `As on ${formattedDate} the customer: ${
                data.party_name
              } has to pay <span style="font-weight:bold;">${data.currency} ${
                data.outstanding_amount
              }</span>.` +
              '</p><div class="clearfix"></div>';
            $(BotResponse)
              .appendTo(".testing")
              .hide()
              .fadeIn(500);
          } else if (type == "buttons") {
            addSuggestion(data.buttons, "list");
          }
        }

        if (val[i].hasOwnProperty("text")) {
          let firstMessage = document.querySelector("#testing").children[0];
          if (firstMessage) {
            if (firstMessage.textContent == val[i]) {
              return;
            }
          }
          let inputStr = val[i].text.split(" ");
          if (val[i].text.includes("https")) {
            let markup = '<p class="botMsg">';
            let delimeter = "";
            inputStr.forEach(str => {
              if (str.includes("https")) {
                delimeter = str;
              }
            });
            markup += val[i].text.split(delimeter)[0];
            markup += `<a href="${delimeter}" target="_blank">${
              val[i].text.split(delimeter)[1]
            }</a> `;
            markup += '</p><div class="clearfix"></div>';
            $(markup)
              .appendTo(".testing")
              .hide()
              .fadeIn(500);
          } else {
            var BotResponse =
              '<p class="botMsg">' +
              val[i].text +
              '</p><div class="clearfix"></div>';
            $(BotResponse)
              .appendTo(".testing")
              .hide()
              .fadeIn(500);
          }
        }

        //check if there is button message
        if (val[i].hasOwnProperty("buttons")) {
          if (val[i].hasOwnProperty("custom")) {
            data = JSON.parse(val[i].custom);
            var type = Object.keys(data)[0];
          }
          addSuggestion(val[i].buttons, "menu");
        }
      }
      scrollToBottomOfResults();
    }
  }, 500);
}

function getFormattedCurrency(val, currencyValue) {
  let value = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: currencyValue,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(val);
  return value;
}
function sendMessage() {
  var text = $(".usrInput").val();
  if (text == "" || $.trim(text) == "") {
    return false;
  } else {
    $(".usrInput").blur();
    setUserResponse(text);
    send(text, "message");
    return false;
  }
}
function resetBot() {
  $("#testing").empty();
  $(".usrInput").val("");
  send("/restart", "message");
}
// ------------------------------------------ Send Button -----------------------------------------------
$(".reset-bot").click(resetBot);

// ------------------------------------------ Toggle chatbot --------------------------------------------
$("#profile_div").click(function() {
  if ($("#testing").text().length == 0 || !sessionStarted) {
    sessionStarted = true;
    isNewSession = true;
    send("/session_start", "message");
    firstMessageSent = true;
    $("#testing").empty();
    $(".usrInput").val("");
  }
  showChatBot();

  $(".usrInput").focus();
  scrollToBottomOfResults();
});
$("#profile_div_tiny").click(function() {
  if ($("#chats").text().length == 0 || !sessionStarted) {
    sessionStarted = true;
    $("#testing").empty();
    $(".usrInput").val("");
    isNewSession = true;
    send("/session_start", "message");
    firstMessageSent = true;
  }

  showChatBot();
  $(".usrInput").focus();
  scrollToBottomOfResults();
});

$("#minimize").click(function() {
  hideChatBot();
});

$("#tiny").click(function() {
  if (activateTiny) {
    activateTiny = false;
  } else {
    activateTiny = true;
  }
  $("#tiny").toggleClass("activateTiny");
});

function toggleCreyaLogo() {
  if (activateTiny) {
    activateTiny = false;
  } else {
    activateTiny = true;
  }
}

$("#toggleCreya").click(function() {
  document
    .getElementById("creya_logo")
    .setAttribute("style", "right:-170px !important");
  document
    .getElementById("creya_logo_min")
    .setAttribute("style", "right:-30px !important");
  toggleCreyaLogo();
});

$("#togglecreya_new").click(function() {
  document
    .getElementById("creya_logo")
    .setAttribute("style", "transform:translate(0)");
  document
    .getElementById("creya_logo_min")
    .setAttribute("style", "right:-170px !important");
  toggleCreyaLogo();
});

function handleSettings() {
  document.querySelector(".settings").classList.toggle("show-settings");
}

$("#setting").click(handleSettings);

function hideChatBot() {
  chatBotOpened = false;
  document.getElementById("widget").setAttribute("style", "transform:scale(0)");
  handleChatBotHiding();
}
function showChatBot() {
  chatBotOpened = true;
  document.getElementById("widget").setAttribute("style", "transform:scale(1)");
  handleChatBotHiding();
}

$("#close").click(function() {
  sessionStarted = false;
  Math.floor(Math.random() * 10 + 1);
  hideChatBot();
  document.querySelector(".usrInput").disabled = true;
  $("#testing").empty();
  $(".usrInput").val("");

  //check if mic is on
  if (document.getElementsByClassName("show").length > 0) {
    stopListening();
  }
});

function handleChatBotHiding() {
  if (activateTiny) $("#creya_logo_min").toggleClass("hide");
  else $("#creya_logo").toggle();

  if (document.getElementsByClassName("show").length > 0) {
    stopListening();
  }
}

// ------------------------------------------ Suggestions -----------------------------------------------

function addSuggestion(textToAdd, type) {
  setTimeout(function() {
    var suggestions = textToAdd;
    var suggLength = textToAdd.length;
    $(
      ' <div class="singleCard"> <div class="button-suggestions suggestions"><div class="' +
        type +
        '"></div></div></diV>'
    )
      .appendTo(".testing")
      .hide()
      .fadeIn(1000);
    // Loop through suggestions
    for (i = 0; i < suggLength; i++) {
      $(
        '<div class="menuChips" data-payload=\'' +
          suggestions[i].payload +
          "'>" +
          suggestions[i].title +
          "</div>"
      ).appendTo("." + type);
    }
    scrollToBottomOfResults();
  }, 1000);
}

// on click of suggestions, get the value and send to rasa
$(document).on("click", ".menuChips", function() {
  var text = this.innerText;
  var payload = this.getAttribute("data-payload");
  setUserResponse(text);
  send(payload, "message");
  $(".suggestions").remove(); //delete the suggestions
});

// define a handler
function doc_keyUp(e) {
  // this would test for whichever key is 40 and the ctrl key at the same time
  if (e.altKey && e.keyCode == 66) {
    // call your function to do the thing
    if (chatBotOpened) {
      $("#minimize").click();
    } else {
      $("#profile_div").click();
    }
  }
  if (e.altKey && e.keyCode == 77) {
    // call your function to do the thing
    if (chatBotOpened) {
      $("#minimize").click();
    }
  }
  if (e.altKey && e.keyCode == 67) {
    // call your function to do the thing
    if (chatBotOpened) {
      $("#close").click();
    }
  }

  if (e.altKey && e.keyCode == 13) {
    // call your function to do the thing
    sendData(e);
  }
  if (e.altKey && e.keyCode == 82) {
    // call your function to do the thing
    if (micOn) {
      $("#mic-btn-on").click();
    } else {
      $("#mic-btn-off").click();
    }
  }

  if (e.altKey && e.keyCode == 107) {
    // call your function to do the thing
    if (fontSize < maximumFontSize) {
      fontSize += 2;
      updateFontSize();
    }
  }

  if (e.altKey && e.keyCode == 109) {
    // call your function to do the thing
    if (fontSize > minimumFontSize) {
      fontSize -= 2;
      updateFontSize();
    }
  }

  if (e.altKey && e.keyCode == 73) {
    // call your function to do the thing
    handleSettings();
  }

  if (e.altKey && e.keyCode == 81) {
    // call your function to do the thing
    resetBot();
  }
}
// register the handler
document.addEventListener("keyup", doc_keyUp, false);

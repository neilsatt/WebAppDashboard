let alertBtn = document.getElementById('alertButton');
alertBtn.addEventListener('click', removeAlert, false);
alertBtn.addEventListener('click', removeCircle, false);

function removeAlert() {
    let alertDiv = document.getElementById('alertMessage');
    alertDiv.parentNode.removeChild(alertDiv);
}

function removeCircle() {
    let bellCircle = document.getElementById('circle');
    bellCircle.parentNode.removeChild(bellCircle);
}

// send btn functionality
let sendBtn = document.getElementById('sendBtn');
let searchInput = document.getElementById('bottomSearchInput');
let messageArea = document.getElementById('messageTextArea');
sendBtn.addEventListener('click', sendMessage, false);

function sendMessage() {
    if(searchInput.value === ""){
        alert('Please enter a User Name'); 
        return;
    }
    else {
        alert("The User you searched for is: "+searchInput.value);
    }
    if(messageArea.value === ""){
        alert('Please enter a Message'); 
        return;
    }
    else {
        alert("The Message you left is: "+messageArea.value);
    }
}

// jquery on/off button
new DG.OnOffSwitch({
    el: '#on-off-switch',
    textOn: 'On',
    textOff: 'Off',
    width: 90,
    trackColorOn:'#716ecc',

});

new DG.OnOffSwitch({
    el: '#on-off-switch2',
    textOn: 'On',
    textOff: 'Off',
    width: 90,
    trackColorOn:'#716ecc',

});
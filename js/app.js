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
sendBtn.addEventListener('click', sendMessage, false);

function sendMessage() {
    alert('hi there');
    //if user isn’t selected or message field is empty.
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
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
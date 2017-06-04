let alertBtn = document.getElementById('alertButton');
alertBtn.addEventListener('click', removeAlert, false);

function removeAlert() {
    let alertDiv = document.getElementById('alertMessage');
    alertDiv.parentNode.removeChild(alertDiv);
}
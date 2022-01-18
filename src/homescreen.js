function showAlert() {
    alert('clicked the button');
}

function showPopupPrompt() {
    var age = prompt('Whats your age my Friend !');
    var divElement = document.getElementById('dynamic-div');
    var h1 = document.createElement('h1');
    h1.setAttribute('id', "h1")
    h1.appendChild(document.createTextNode(age));
    divElement.appendChild(h1).innerHTML();
}

function resetData() {

    document.getElementById('dynamic-div').remove('h1');

}
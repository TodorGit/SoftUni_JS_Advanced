function addItem() {
    let info = document.getElementById('newItemText').value
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(info));
    document.getElementById('items').appendChild(li);

    document.getElementById('newItemText').value = '';

    
}
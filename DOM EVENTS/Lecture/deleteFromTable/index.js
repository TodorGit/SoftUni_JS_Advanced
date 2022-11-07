function solve() {
    let ul = document.getElementById("items");
    let input = document.getElementById("newText");
    let value = document.getElementById("newText").value;

    let li = document.createElement("li");
    li.textContent = value + " ";

    let deleteBtn = document.createElement("a");
    deleteBtn.textContent = "Delete" 
    deleteBtn.style.color = "red"
    deleteBtn.addEventListener("click", function (event){
        event.target.parentElement.remove()
    });

    li.append(deleteBtn)

    ul.append(li);
    input.value = ''; 
}
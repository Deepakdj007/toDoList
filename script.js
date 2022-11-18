var input = document.getElementById("item");
var add = document.getElementById("Add");
var ul = document.querySelector('ul');

function addToList(){
    var li  = document.createElement("li");
    var div = document.createElement("div");
    div.classList.add("list-items");
    var but1 = document.createElement("button");
    but1.classList.add("done");
    but1.textContent = "Done";
    but1.setAttribute("onclick","return this.parentNode.querySelector('p').toggleClass('green')")
    var but2 = document.createElement("button");
    but2.classList.add("delete");
    but2.textContent = "DEL";
    but2.setAttribute("onclick","return this.parentNode.parentNode.remove();")
    var item = document.createElement('p');
    item.textContent = input.value;
    item.classList.add("green")
    div.append(item,but1,but2);
    li.appendChild(div);
    ul.appendChild(li);
    input.value = "";
}

function addToListAfterClick(){
    if(input.value.length > 0){
        addToList();
    }
}

function addToListAfterEnter(event){
    console.log(event.key);
    if(input.value.length>0 && event.key === "Enter"){
        addToList();
    }
}

function removeItem(event){
    event.currentTarget.parentNode.parentNode.remove();
}

add.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterEnter)
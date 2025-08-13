let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {

    if(input.value == ''){
        alert('enter any task')

    }
    else {
    
        let item = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = input.value;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("change", function() {
        if (this.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
     });
     
        item.appendChild(checkbox);     
         item.appendChild(span);
         ul.appendChild(item);  
        input.value = "";
  
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");
        item.appendChild(delBtn);        
    }
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName =="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted")
    }
});

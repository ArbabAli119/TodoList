let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);  
    input.value = "";
});

// Using event delegation to handle delete button clicks

ul.addEventListener("click", function(event) {
    if(event.target.nodeName =="BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted")
    }
});






// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     }); 
// } 


// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function() {
//     let item = document.createElement("li");

//     // Create checkbox
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";

//     // Create span to hold todo text
//     let span = document.createElement("span");
//     span.innerText = input.value;

//     // When checkbox changes, toggle strikethrough on span
//     checkbox.addEventListener("change", function() {
//         if (this.checked) {
//             span.style.textDecoration = "line-through";
//         } else {
//             span.style.textDecoration = "none";
//         }
//     });

//     // Create delete button
//     let delBtn = document.createElement("button");
//     delBtn.innerText = "Delete";
//     delBtn.classList.add("delete");

//     // Append checkbox, span, and delete button to li
//     item.appendChild(checkbox);
//     item.appendChild(span);
//     item.appendChild(delBtn);

//     ul.appendChild(item);  
//     input.value = "";
// });

// // Using event delegation to handle delete button clicks
// ul.addEventListener("click", function(event) {
//     if(event.target.nodeName == "BUTTON") {
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("Deleted");
//     }
// });

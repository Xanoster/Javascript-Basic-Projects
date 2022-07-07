const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = False;
let editID = "";

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value !== "" && !editFlag) {
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                  <button type="button" class="delete-btn">x</button>
                </div>`;
        list.appendChild(element);
        container.classList.add("show-container");
        setBackToDefault();
    }
}

function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    setBackToDefault();
}

function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// feat: implement basic add item functionality

// feat: create delete item logic

// feat: implement clear all items feature

// refactor: add setBackToDefault helper function

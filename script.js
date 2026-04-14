const inputbox = document.querySelector('.input-box input');
const addbtn = document.querySelector('.input-btn');
const rightbox = document.querySelector('.right');
const taskButtons = document.querySelectorAll(".task-list button");

taskButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        inputbox.value = btn.textContent.trim();
    });
});

addbtn.addEventListener("click", () => {
    let tasktext = inputbox.value.trim();

    if (tasktext === "") {
        alert("Please enter a task.");
        return;
    }

    let task = document.createElement("div");
    task.classList.add("task-item");

    let now = new Date();
    let date = now.toLocaleDateString();

    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

   
    let text = document.createElement("span");
    text.textContent = tasktext;

    
    let dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = date;

    
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "https://cdn-icons-png.flaticon.com/128/6997/6997199.png";
    deleteBtn.style.width = "20px";
    deleteBtn.style.height = "20px";
    deleteBtn.style.marginLeft = "auto";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.display = "none";


    deleteBtn.addEventListener("click", () => {
        task.remove();
    });
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            task.classList.add("done");
            task.style.textDecoration = "line-through";
            deleteBtn.style.display = "inline";
        } else {
            task.classList.remove("done");
            deleteBtn.style.display = "none";
        }
    });


    task.appendChild(checkbox);
    task.appendChild(text);
    task.appendChild(dateSpan);
    task.appendChild(deleteBtn);

    rightbox.appendChild(task);
    inputbox.value = "";
});

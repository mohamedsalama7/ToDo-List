const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container")




function addTask(){
  if(inputBox.value === ''){
    as.alert({
      title: "Alert",
      text: "You Must Adding Task",
      icon: true,
      image: false,
    });
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}


listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }else if (e.target.tagName === "SPAN"){
    as.confirm({
      title: "Confirm",
      text: 'Are You Sure You Want Delete This Task?',
      icon: true,
      image: "",
      okBtnHtml: "Yes",
      cancelBtnHtml: "No",
      onConfirm: function(){
        e.target.parentElement.remove()
        saveData()
      },
      onCancel: function(){
      }
    });
    saveData()
  }
},false)

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}

window.onload = showTask()


let span = document.querySelector(".date");
let year = new Date 
span.innerHTML = year.getFullYear();


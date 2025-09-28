function expense(){
    expensetype=document.getElementById("expensetype").value
    expenseamount=document.getElementById("expenseamount").value
}

function income(){
    incometype=document.getElementById("incometype").value
    incomeamount=document.getElementById("incomeamount").value
}

function clear(){
    localStorage.clear();
    alert("All data cleared!");
    location.reload();
}

const user = JSON.parse(window.localStorage.getItem("users"));
const welcome = document.getElementById("welcome");
welcome.innerHTML=`Welcome ${user[0].name}`;

function Logout(){
    window.location = "/index.html";
    localStorage.clear();
}


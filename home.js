function income() {
  const incometype = document.getElementById("incomeType").value.trim();
  const incomeamount = document.getElementById("incomeAmount").value.trim();
  const incometable = document.getElementById("incomeData");

  if (!incometype || !incomeamount) {
    alert("Please enter both type and amount");
    return;
  }

  // Initialize currentUser if null
  let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
    income: [],
    expense: [],
    balance: 0
  };

  const amount = parseFloat(incomeamount);

  currentUser.income.push({
    type: incometype,
    amount: amount,
    date: new Date().toLocaleDateString()
  });

  const totalIncome = currentUser.income.reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = currentUser.expense.reduce((sum, e) => sum + e.amount, 0);
  currentUser.balance = totalIncome - totalExpense;

  incometable.innerHTML += `
    <tr>
      <td class="border px-4 py-2">${incometype}</td>
      <td class="border px-4 py-2">${amount}</td>
      <td class="border px-4 py-2">${currentUser.balance}</td>
      <td class="border px-4 py-2">${new Date().toLocaleDateString()}</td>
    </tr>
  `;

  document.getElementById("balance").innerHTML = currentUser.balance;
  document.getElementById("expense").innerHTML = totalExpense;

  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  alert("Income Added");

  document.getElementById("incomeType").value = "";
  document.getElementById("incomeAmount").value = "";
}


function expense() {
  const expensetype = document.getElementById("expenseType").value.trim();
  const expenseamount = document.getElementById("expenseAmount").value.trim();
  const expensetable = document.getElementById("expenseData");

  if (!expensetype || !expenseamount) {
    alert("Please enter both type and amount");
    return;
  }

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const amount = parseFloat(expenseamount);

  currentUser.expense.push({
    type: expensetype,
    amount: amount,
    date: new Date().toLocaleDateString()
  });

  const totalIncome = currentUser.income.reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = currentUser.expense.reduce((sum, e) => sum + e.amount, 0);
  currentUser.balance = totalIncome - totalExpense;

  expensetable.innerHTML += `
    <tr>
      <td class="border px-4 py-2">${expensetype}</td>
      <td class="border px-4 py-2">${amount}</td>
      <td class="border px-4 py-2">${currentUser.balance}</td>
      <td class="border px-4 py-2">${new Date().toLocaleDateString()}</td>
    </tr>
  `;

  // ✅ Update balance and total expense in DOM
  document.getElementById("balance").innerHTML = currentUser.balance;
  document.getElementById("expense").innerHTML = totalExpense;

  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  alert("Expense Added");

  document.getElementById("expenseType").value = "";
  document.getElementById("expenseAmount").value = "";
}
function clearAll() {
  // Remove currentUser from localStorage
  localStorage.removeItem("currentUser");

  // Reset balance and total expense display
  document.getElementById("balance").innerHTML = "0";
  document.getElementById("expense").innerHTML = "0";

  // Delete all rows from income and expense tables
  document.getElementById("incomeData").innerHTML = "";
  document.getElementById("expenseData").innerHTML = "";

  alert("All data cleared!");
}

function Logout() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("users");
    window.location = "/index.html";
  }
}

let welcome = document.getElementById("welcome");
names=JSON.parse(localStorage.getItem("users"));
welcome.innerHTML = `welcome ${names[0].name}`;

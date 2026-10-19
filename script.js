
const transactionForm = document.getElementById("transaction-form");
const transactionList = document.getElementById("transaction-list");
const dateInput = document.getElementById("date");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const noteInput = document.getElementById("note");
const totalIncomeElement = document.getElementById("total-income");
const totalExpenseElement = document.getElementById("total-expense");
const balanceElement = document.getElementById("balance");
const errorMessage = document.getElementById("error-message");

const STORAGE_KEY = "moneyManagerTransactions";

let transactions = [];

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

try {
  const savedTransactions = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (Array.isArray(savedTransactions)) {
    transactions = savedTransactions.filter((transaction) =>
      transaction &&
      typeof transaction.id === "string" &&
      typeof transaction.date === "string" &&
      ["income", "expense"].includes(transaction.type) &&
      typeof transaction.category === "string" &&
      Number.isFinite(transaction.amount) &&
      transaction.amount > 0 &&
      typeof transaction.note === "string" &&
      Number.isFinite(transaction.createdAt)
    );
  }
} catch {
  transactions = [];
}

dateInput.value = new Date().toLocaleDateString("en-CA");

function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

function updateSummary() {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  totalIncomeElement.textContent = rupiah.format(totalIncome);
  totalExpenseElement.textContent = rupiah.format(totalExpense);
  balanceElement.textContent = rupiah.format(totalIncome - totalExpense);
}

function renderTransactions() {
  transactionList.replaceChildren();

  const sortedTransactions = [...transactions].sort(
    (a, b) => a.createdAt - b.createdAt
  );

  if (sortedTransactions.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "Belum ada transaksi.";
    transactionList.appendChild(message);
  }

  sortedTransactions.forEach((transaction) => {
    const item = document.createElement("div");
    item.className = "transaction-item";

    const info = document.createElement("div");
    info.className = "transaction-info";

    const title = document.createElement("h3");
    title.textContent = transaction.category;

    const date = document.createElement("p");
    date.textContent = transaction.date;

    const note = document.createElement("p");
    note.textContent = transaction.note || "Tanpa catatan";

    const amount = document.createElement("p");
    amount.className =
      "transaction-amount " +
      (transaction.type === "income" ? "income" : "expense");

    const sign = transaction.type === "income" ? "+" : "-";
    amount.textContent = sign + rupiah.format(transaction.amount);

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn-delete";
    deleteButton.textContent = "Hapus";

    deleteButton.addEventListener("click", () => {
      if (!confirm("Yakin ingin menghapus transaksi ini?")) {
        return;
      }

      const previousTransactions = transactions;

      transactions = transactions.filter(
        (entry) => entry.id !== transaction.id
      );

      try {
        saveTransactions();
        renderTransactions();
      } catch {
        transactions = previousTransactions;
        errorMessage.textContent = "Transaksi gagal dihapus. Coba lagi.";
      }
    });

    info.append(title, date, note, amount);
    item.append(info, deleteButton);
    transactionList.appendChild(item);
  });

  updateSummary();
}

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.textContent = "";

  const amount = Number(amountInput.value);

  if (
    !dateInput.value ||
    !typeInput.value ||
    !categoryInput.value ||
    amountInput.value.trim() === ""
  ) {
    errorMessage.textContent = "Lengkapi semua data wajib terlebih dahulu.";
    return;
  }

  if (!Number.isFinite(amount) || amount < 0) {
    errorMessage.textContent = "Nominal tidak boleh negatif.";
    amountInput.focus();
    return;
  }

  const transaction = {
    id: crypto.randomUUID(),
    date: dateInput.value,
    type: typeInput.value,
    category: categoryInput.value,
    amount: amount,
    note: noteInput.value.trim(),
    createdAt: Date.now()
  };

  transactions.push(transaction);

  try {
    saveTransactions();
    transactionForm.reset();
    dateInput.value = new Date().toLocaleDateString("en-CA");
    renderTransactions();
  } catch {
    transactions = transactions.filter(
      (entry) => entry.id !== transaction.id
    );

    errorMessage.textContent = "Data gagal disimpan. Periksa penyimpanan browser.";
  }
});

renderTransactions();


const transactionForm = document.getElementById("transactionForm");
const transactionList = document.getElementById("transactionList");
const dateInput = document.getElementById("date");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const noteInput = document.getElementById("note");

const STORAGE_KEY = "moneyManagerTransactions";

let transactions = [];

try {
  const savedTransactions = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  );

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

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

dateInput.value = new Date().toLocaleDateString("en-CA");

function saveTransactions() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(transactions)
  );
}

function renderTransactions() {
  transactionList.replaceChildren();

  const sortedTransactions = [...transactions].sort(
    (a, b) => b.createdAt - a.createdAt
  );

  if (sortedTransactions.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "Belum ada transaksi.";
    transactionList.appendChild(message);
    return;
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
      const confirmed = confirm(
        "Yakin ingin menghapus transaksi ini?"
      );

      if (!confirmed) {
        return;
      }

      const previousTransactions = transactions;

      transactions = transactions.filter(
        (item) => item.id !== transaction.id
      );

      try {
        saveTransactions();
        renderTransactions();
      } catch {
        transactions = previousTransactions;
        alert("Transaksi gagal dihapus. Coba lagi.");
      }
    });

    info.append(title, date, note, amount);
    item.append(info, deleteButton);
    transactionList.appendChild(item);
  });
}

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!transactionForm.reportValidity()) {
    return;
  }

  const amount = Number(amountInput.value);

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Nominal harus lebih dari 0.");
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
      (item) => item.id !== transaction.id
    );

    alert("Data gagal disimpan. Periksa penyimpanan browser.");
  }
});

renderTransactions();

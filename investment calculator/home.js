function calculate() {
  var balance = parseFloat(document.getElementById("balance").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var months = parseFloat(document.getElementById("months").value);

  var totalAmount = balance * Math.pow(1 + rate / 100, months);
  var interest = totalAmount - balance;

  document.getElementById("result").innerHTML =
    "After " +
    months +
    " months, your investment will be worth $" +
    totalAmount.toFixed(2) +
    " with interest of $" +
    interest.toFixed(2) +
    ".";
}

function updateDom(value, color) {
  var resultElement = document.getElementById("result");
  resultElement.style.color = color;

  if (typeof value === "string") {
    resultElement.innerHTML = value;
  } else {
    var formattedValue = value.toLocaleString();
    resultElement.innerHTML =
      "After " +
      document.getElementById("months").value +
      " months, your investment will be $" +
      formattedValue +
      ".";
    value.toFixed(2) + ".";
  }
}

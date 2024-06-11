const originalAlert = window.alert;
const originalPrompt = window.prompt;
const originalConfirm = window.confirm;

window.alert = function () {
  return originalConfirm.apply(this, arguments); // Use confirm instead of alert
};

window.prompt = function () {
  return originalAlert.apply(this, arguments); // Use alert instead of prompt
};

window.confirm = function () {
  return originalPrompt.apply(this, arguments); // Use prompt instead of confirm
};

// Examples
console.log(window.alert("This is a confirm function")); // prompt instead of alert
console.log(window.prompt("This is an alert function")); // confirm instead of prompt
console.log(window.confirm("This is a prompt function")); // alert instead of confirm

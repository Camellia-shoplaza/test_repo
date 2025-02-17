<<<<<<< HEAD
document.addEventListener("DOMContentLoaded",(function(){var notificationElm=document.querySelector(".notification-error");notificationElm&&notificationElm.previousElementSibling&&"function"==typeof notificationElm.previousElementSibling.focus&&notificationElm.previousElementSibling.focus()}));
=======
document.addEventListener("DOMContentLoaded", function() {
  // If there are any error notifications below an input field, focus that field
  var notificationElm = document.querySelector(".notification-error");
  if (
    notificationElm &&
    notificationElm.previousElementSibling &&
    typeof notificationElm.previousElementSibling.focus === "function"
  ) {
    notificationElm.previousElementSibling.focus();
  }
});
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e

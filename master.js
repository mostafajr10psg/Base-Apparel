const mail = document.querySelector("input[type='email']");
const mailErrorMsg = document.querySelector(".error-msg");
const mailErrorIcon = document.querySelector("form .error-icon");
const mailName = document.querySelector(".success-mail p span");
const successMail = document.querySelector(".success-mail");
const closeIcon = document.querySelector(".success-mail i");
const overlay = document.querySelector(".overlay");

function addClassToElements(className, ...elements) {
  for (let ele of elements) {
    ele.classList.add(className);
  }
}

function removeClassFromElements(className, ...elements) {
  for (let ele of elements) {
    ele.classList.remove(className);
  }
}

function showInputErrors() {
  removeClassFromElements("hidden", mailErrorMsg, mailErrorIcon);
  mail.classList.add("border-error");
}

function hideInputErrors() {
  addClassToElements("hidden", mailErrorMsg, mailErrorIcon);
  mail.classList.remove("border-error");
}

document.forms[0].onsubmit = (e) => {
  e.preventDefault();

  if (mail.value === "") {
    showInputErrors();
  } else {
    if (/\w+@\w+\.\w+/.test(mail.value)) {
      // mail is valid
      mailName.textContent = mail.value;
      mailName.style.cssText = "font-weight: bold; color: rgb(238 140 140)";
      successMail.classList.remove("hidden");
      overlay.classList.remove("hidden");
      hideInputErrors();
      closeIcon.onclick = () => {
        successMail.classList.add("hidden");
        overlay.classList.add("hidden");
        mail.value = "";
      };
    } else {
      // mail is not empty and NOT valid
      showInputErrors();
      mailErrorMsg.textContent = `Enter a valid email address`;
    }
  }
};

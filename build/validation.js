"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
  const formContact = document.getElementById("form-contact");
  formContact.addEventListener("submit", SendForm);

  function SendForm(e) {
    let error = formValidate(formContact);
    if (error > 0) {
      e.preventDefault();
    } else {
    }
  }

  function formValidate(formContact) {
    let error = 0;

    let RequiredFields = document.querySelectorAll(".required");

    for (let i = 0; i < RequiredFields.length; i++) {
      const inputReq = RequiredFields[i];
      removeError(inputReq);

      if (inputReq.classList.contains("input__name")) {
        let errorSurname = document.querySelector(".error__message-name");
        if (nameValidate(inputReq)) {
          addError(inputReq);
          errorSurname.classList.add("error__message-show");
          errorSurname.innerHTML = "Introduceți un nume/prenume valid";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorSurname.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("input__phone")) {
        let errorPhone = document.querySelector(".error__message-phone");
        if (phoneValidate(inputReq)) {
          addError(inputReq);
          errorPhone.classList.add("error__message-show");
          errorPhone.innerHTML = "Introduceți un numar valid";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorPhone.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("input__email")) {
        let errorEmail = document.querySelector(".error__message-email");
        if (emailValidate(inputReq)) {
          addError(inputReq);
          errorEmail.classList.add("error__message-show");
          errorEmail.innerHTML = "Introduceți un email valid";
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorEmail.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("input__checkbox-1")) {
        function check() {
          let check = document.querySelector(".input__checkbox-1 ");
          if (check.checked === true) {
            return true;
          } else {
            return false;
          }
        }
        let errorCheckBox = document.querySelector(".error__message-box-1");
        let cheked = check();
        if (!(cheked === true)) {
          errorCheckBox.classList.add("error__message-show");
          errorCheckBox.innerHTML = "Politica de confidențialitate";
          addError(inputReq);
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorCheckBox.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      } else if (inputReq.classList.contains("input__checkbox-2")) {
        function check() {
          let check = document.querySelector(".input__checkbox-2 ");
          if (check.checked === true) {
            return true;
          } else {
            return false;
          }
        }
        let errorCheckBox = document.querySelector(".error__message-box-2");
        let cheked = check();
        if (!(cheked === true)) {
          console.log("if");
          errorCheckBox.classList.add("error__message-show");
          errorCheckBox.innerHTML = "Permit prelucrarea datelor personale";
          addError(inputReq);
          error++;
          if (error > 0) {
            break;
          }
        } else {
          errorCheckBox.classList.remove("error__message-show");
          addSucces(inputReq);
        }
      }
    }

    return error;
  }

  function addError(inputReq) {
    inputReq.classList.add("error__border");
  }
  function removeError(inputReq) {
    inputReq.classList.remove("error__border");
  }
  function addSucces(inputReq) {
    inputReq.classList.add("succes__border");
  }

  function nameValidate(inputReq) {
    return !/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?){3,10}$/.test(inputReq.value);
  }
  function phoneValidate(inputReq) {
    return !/^.{8,13}$/.test(inputReq.value);
  }
  function emailValidate(inputReq) {
    return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      inputReq.value
    );
  }
});

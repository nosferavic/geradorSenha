let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let checkbox = document.querySelector("#especial");

var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
var specialCharset = "!@#$%¨&*()+=-?";
var charsetFinal = charset;
var novaSenha = "";
document.addEventListener("DOMContentLoaded", function () {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      charsetFinal = charset + specialCharset;
    } else {
      charsetFinal = charset;
    }
  });
});

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charsetFinal.length; i < sliderElement.value; i++) {
    pass += charsetFinal.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("✅Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}

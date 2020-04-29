import './main.scss';

const renderButton = () => {
  const button = document.createElement("button");
  button.textContent = "Click me";
  button.addEventListener("click", () => {
    alert("Welcome to Webpack & Babel");
  });
  document.body.querySelector(".container").appendChild(button);
};

renderButton();
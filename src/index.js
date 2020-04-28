import './main.css';

const renderButton = () => {
  const button = document.createElement("button");
  button.textContent = "Click me";
  button.addEventListener("click", () => {
    alert("button clicked");
  });
  document.body.appendChild(button);
};

renderButton();
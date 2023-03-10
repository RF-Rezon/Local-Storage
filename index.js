let firstInput = document.querySelector("#first_input");
let sceondInput = document.querySelector("#sceond_input");
let ul = document.querySelector("#ul");
let li = document.querySelector("#li");

simple = () => {
  const x = firstInput.value;
  const y = sceondInput.value;
  if (!x || !y) {
    window.alert("Input fild souldn't be empty");
    return;
  }
  first(x, y);
  sceond(x, y);
  firstInput.value = "";
  sceondInput.value = "";
};

let first = (x, y) => {
  let li = document.createElement("li");
  li.innerHTML = `
<li id="li">Key: ${x} & Value: ${y}</li>
`;
  ul.appendChild(li);
};

function sceond(x, y) {
  window.localStorage.setItem(x, y);
  window.localStorage.getItem(x);
}

let refresh = () => {
  ul.innerHTML = "";
  window.localStorage.clear();
};

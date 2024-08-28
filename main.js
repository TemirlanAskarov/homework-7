let $block = document.querySelector(".block");
let btnGenerator = document.querySelector(".btn");

function RandomNumGenerator() {
  $block.innerHTML = "";
  let numberBlock = document.createElement("div");
  numberBlock.classList.add("num_block");

  let num2 = Math.floor(Math.random() * 6) + 1;
  let num1 = Math.floor(Math.random() * 6) + 1;
  let num3 = Math.floor(Math.random() * 6) + 1;
  let num4 = Math.floor(Math.random() * 6) + 1;

  numberBlock.append(num1);
  numberBlock.append(num2);
  numberBlock.append(num3);
  numberBlock.append(num4);
  $block.appendChild(numberBlock);
}

btnGenerator.addEventListener("click", RandomNumGenerator);

const amount = localStorage.getItem("amount");
const id = localStorage.getItem("id");

const blocks = document.querySelector(".blocks");

for (let i = 1; i <= amount; i++) {
    let className = "";

    if (i === Number(id)) {
        className = "selected";
    }

    blocks.innerHTML += `<div class="block ${className}">${i}</div>`;
}

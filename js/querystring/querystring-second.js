const queryString = location.search;

const params = new URLSearchParams(queryString);

const amount = params.get("amount");
const id = params.get("id");

console.log("amount", amount);

const blocks = document.querySelector(".blocks");

for (let i = 1; i <= amount; i++) {
    let className = "";

    if (Number(id) === i) {
        className = "selected";
    }

    blocks.innerHTML += `<div class="block ${className}">${i}</div>`;
}

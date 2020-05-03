const selector = document.querySelector("select");
const blocks = document.querySelector(".blocks");

selector.addEventListener("change", function (event) {
    console.log(event.target.value);

    const amount = event.target.value;

    blocks.innerHTML = "";

    for (let i = 1; i <= amount; i++) {
        blocks.innerHTML += `<a class="block" href="querystring-second.html?amount=${amount}&id=${i}">${i}</a>`;
    }
});

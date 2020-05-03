const selector = document.querySelector("select");
const blocks = document.querySelector(".blocks");

selector.addEventListener("change", function (event) {
    const amount = event.target.value;

    localStorage.setItem("amount", amount);

    blocks.innerHTML = "";

    for (let i = 1; i <= amount; i++) {
        blocks.innerHTML += `<div class="block" id="${i}">${i}</div>`;
    }

    const allBlocks = document.querySelectorAll(".block");

    allBlocks.forEach(function (blk) {
        blk.addEventListener("click", function (event) {
            removeSelectedClasses(allBlocks);

            event.target.classList.add("selected");
            const id = blk.id;
            localStorage.setItem("id", id);
        });
    });

    console.log(allBlocks);
});

function removeSelectedClasses(allBlocks) {
    allBlocks.forEach(function (block) {
        block.classList.remove("selected");
    });
}

let signUp = document.querySelector(".sign-up");
let x = document.querySelector(".x");
let btn = document.querySelector(".btn");
let signUp__box = document.querySelector(".sign-up__box");
let signUp__btn = document.querySelector(".sign-up__btn");

btn.addEventListener("click", () => {
    signUp.classList.add("active");
});

function remove() {
    signUp.classList.remove("active");
}

x.addEventListener("click", remove);
signUp.addEventListener("click", remove);
signUp__btn.addEventListener("click", remove);

signUp__box.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
})
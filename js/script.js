let btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    let list = document.querySelector('.list');
    list.classList.toggle('hidden');
});

let dark = document.querySelector("#darkMode");
let root = document.documentElement;


if (localStorage.getItem("darkMode") === "enabled") {
    root.classList.add("dark");
    dark.classList.replace("fa-moon", "fa-sun");
}


dark.addEventListener("click", () => {
    if (!root.classList.contains("dark")) {
        root.classList.add("dark");
        dark.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("darkMode", "enabled"); 
    } else {
        root.classList.remove("dark");
        dark.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("darkMode", "disabled"); 
    }
});
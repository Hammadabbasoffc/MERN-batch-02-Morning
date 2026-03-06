const btn = document.getElementById("toggleTheme");

console.log(btn);


btn.addEventListener("click", () => {

    console.log("button is clicked");

    console.log(document.body.classList.contains("dark-theme"));


    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }
})
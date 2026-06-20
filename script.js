const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {

    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    if(btn.innerHTML.includes("Dark")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }

});

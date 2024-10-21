const body = document.querySelector("body");
const bodyStyle = getComputedStyle(body);
const scrollToTopBtn = document.querySelector("scroll-to-top-btn");
const progressBar = document.querySelector("#progressBar");

document.addEventListener("scroll", (e) => {
    updateProgressBar();
    if(scrollY > 50){
        showScrollBtn(true);
    } else{
        showScrollBtn(false);
    }
})

function showScrollBtn(condition){
    if(condition){
        scrollToTopBtn.classList.remove("hide");
    } else{
        scrollToTopBtn.classList.add("hide");
    }
}

function updateProgressBar() {
    var scrollAtual = document.documentElement.scrollTop || document.body.scrollTop;
    var alturaTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progresso = (scrollAtual / alturaTotal) * 100;

    progressBar.style.width = progresso + "%";
}
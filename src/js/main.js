window.onload = function () {
    var dos = document.querySelector("#dos");
    var tres = document.querySelector("#tres");
    dos.style.animationName = "animateIllustration2";
    tres.style.animationName = "animateIllustration3";


    document.querySelector(".icon").addEventListener("click", () =>{
        document.querySelector(".icon").classList.toggle("active");
    });
    
    var checkbox = document.querySelector('#switch');
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            trans()
            document.documentElement.setAttribute("data-theme", "dark");
        }
        else {
            trans()
            document.documentElement.setAttribute("data-theme", "light");
        }
    })

    var checkbox2 = document.querySelector('#switch2');
    checkbox2.addEventListener("change", function () {
        if (this.checked) {
            trans()
            document.documentElement.setAttribute("data-theme", "dark");
        }
        else {
            trans()
            document.documentElement.setAttribute("data-theme", "light");
        }
    })
    
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 800)
    }
    
    let themeConfigure = x =>{
        if(x.matches){
            document.documentElement.setAttribute("data-theme", "dark");
            document.getElementById("switch").checked="true";
            document.getElementById("switch2").checked="true";
        }
        else{
            document.documentElement.setAttribute("data-theme", "light");
            document.getElementById("switch").checked = "false";
            document.getElementById("switch2").checked = "false";
        }
    }

    const x = window.matchMedia("(prefers-color-scheme: dark)");
    themeConfigure(x);
    x.addListener(themeConfigure)
}
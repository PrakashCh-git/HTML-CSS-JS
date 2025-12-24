let incont = document.querySelector("#incontainer");
let btn = document.querySelector("button");


btn.addEventListener('click',()=>{
    let a = 0;
    let num = 50 + Math.floor(Math.random()*50);

    let int = setInterval(() => {
        a++;
        incont.style.width = `${a}`+"%";
        let h1 = document.querySelector('h1');
        h1.innerHTML = `${a}` + "%";
    }, num);

    setTimeout(function() {
        btn.style.opacity = 0.5;
        btn.innerHTML = "Donwloaded"
        clearInterval(int);
    }, num*100)   
})






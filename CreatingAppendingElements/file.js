let main = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click',()=>{

    let div = document.createElement('div');

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let x = Math.floor(Math.random()*101);
    let y = Math.floor(Math.random()*101);
    let angle = Math.floor(Math.random()*361);

    div.style.height = "200px";
    div.style.width = "200px";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.position = "absolute";
    div.style.left = `${x}`+"%";
    div.style.top =  `${y}`+"%";
    div.style.rotate = `${angle}`+"deg";

    main.appendChild(div);
    
})
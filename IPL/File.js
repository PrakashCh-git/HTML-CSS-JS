let arr = [
    {   
        name:"CSK",
        cap: "MSD",
        Pcolor: "yellow",
        Scolor: "black",
    },
    {
        name:"MI",
        cap: "HITMAN",
        Pcolor: "blue",
        Scolor: "gold",
    },
    {
        name:"KKR",
        cap: "GG",
        Pcolor: "purple",
        Scolor: "gold",
    },
    {
        name:"LSG",
        cap: "HP",
        Pcolor: "blue",
        Scolor: "black",
    },
    {
        name:"RR",
        cap: "SS",
        Pcolor: "pink",
        Scolor: "yellow",
    },
    {
        name:"SRH",
        cap: "DW",
        Pcolor: "orange",
        Scolor: "black",
    },
    {
        name:"RCB",
        cap: "KING KOLHI",
        Pcolor: "crimson",
        Scolor: "black",
    }
];


let btn = document.querySelector('button');
let div = document.querySelector('div');
let main = document.querySelector('main');


btn.addEventListener('click',function(){
    let x = Math.floor(Math.random()*arr.length);

    let h1 = document.querySelector('H1');
    let Cap = document.getElementById("cap");

    h1.innerHTML = arr[x].name;
    Cap.innerHTML = arr[x].cap;
    div.style.backgroundColor = arr[x].Pcolor;
    main.style.backgroundColor = arr[x].Scolor;

});
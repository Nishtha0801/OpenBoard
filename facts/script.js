let body = document.querySelector("body");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");
// let h1 = document.createElement("h1");
// h1.innerText = "Hie I am added dynamically";



// body.appendChild(h1);// last m jaake append hota h
// let li = document.createElement("li");
// li.innerText ="hi i am dynamic li";
// ul.appendChild(li);

// ul.innerHTML = `<li> Hie i am first li </li>
//                 <li> hie i am second li</li> `;

//todo list
btn.addEventListener("click",function(){
    let value = input.value;
    input.value = "";
    //console.log(value);
    if(value){
        let li = document.createElement("li");
        let p = document.createElement("p");
        let close = document.createElement("button");
        close.innerText = "Delete";
        p.innerText = value;
        li.appendChild(p);
        li.appendChild(close);
        ul.appendChild(li);
    }
    
})



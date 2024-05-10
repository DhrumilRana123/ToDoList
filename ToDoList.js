let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let list = ["tea", "bath"];

btn.addEventListener("click", (event) => {

    if((inp.value == NaN)) {
        list.push(inp.value);
    }

    for(el of list) {
        let li = document.createElement("li");
        li.innerText = el;

        ul.append(li);
    }
});
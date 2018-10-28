var images = ["images/win.jpg", "images/lunch.jpg", "images/trouble.jpg",
    "images/food.jpg", "images/yes.gif", "images/question.jpg", "images/fire.png"];
var bodyImg = document.createElement("img");
bodyImg.src=images[0];
console.log(bodyImg);
document.body.appendChild(bodyImg);
var word = "победа";
var cont = document.createElement("div");
cont.id = "cont";
document.body.appendChild(cont);
for(var i = 0; i < word.length; i++){
    var span = document.createElement("span");
    span.className = "span";
    span.innerText = word.charAt(i);
    span.id = word.charAt(i);
    cont.appendChild(span);
}

var classes = ["first", "second", "third", "forth", "fifth", "kick"];
var ind = 0;
document.addEventListener("click", function () {
    if(cont.childElementCount>0) {
        cont.firstElementChild.classList.add(classes[ind]);
        bodyImg.src = images[ind+1];
        if(classes[ind] ==="fifth"){
            bodyImg.src = images[ind+1];
            var img = document.createElement("img");
            cont.firstElementChild.appendChild(img);
            img.src=images[6];
        }
        setInt();
        ind++;
        if(cont.firstChild.firstChild.textContent===word[5]) {
            document.body.removeChild(bodyImg);
            var div = document.createElement("div");
            cont.appendChild(div);
            div.classList.add("div");
            var id = 1;
            for(var i = 0; i < 7; i++){
                for(var y = 0; y< 7; y++){
                    var divIn = document.createElement("div");
                    divIn.id = id + "";
                    divIn.classList.add("divIn");
                    divIn.style.top = 3*i+"vh";
                    divIn.style.left = 1*y + "vw";
                    div.appendChild(divIn);
                    console.log(divIn.id);
                    id++;
                }
            }
            setInterval(function () {
                document.getElementById((49*Math.random()).toFixed(0)).style.backgroundColor = "white";
            },25);
            setInt();
        }
    }
});
function setInt() {
    setTimeout(function () {
        cont.removeChild(cont.firstChild);
    },3000);
}
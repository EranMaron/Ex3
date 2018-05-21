

window.onload = function() {
    
    console.log ("Got In 'onLoad' Function");

    for (i=0; i<4; i++) {
        var boxObj = document.createElement("article");
        var contObj = document.getElementById("container");
        contObj.appendChild(boxObj);
        boxObj.style.opacity = Math.random();
    }


    var plusBtn = document.getElementById("plusButton");
    plusBtn.onclick = function () {clickFunc()};
        
    function clickFunc() {
            var box = document.createElement("article");
            var mainBox = document.getElementById("mainSection");
            mainBox.appendChild(box);
            box.style.opacity = Math.random();
            console.log ("New Box Was Added");
        }
}
function start() {
    let splash = document.getElementById("splash");

    splash.addEventListener("transitionend", () => {
        document.getElementById("bgm").play();
        splash.remove();
    });

    splash.classList.add("hide");
}

var x = document.getElementById("bgm");

function enableMute() { 
  x.muted = true;
} 

function disableMute() { 
  x.muted = false;
}

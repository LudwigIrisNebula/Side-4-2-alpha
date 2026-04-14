document.querySelectorAll(".title-bar").forEach(bar => {
    let win = bar.closest(".window");
    let offsetX, offsetY, isDragging = false;

    bar.onmousedown = function(e) {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    };
    document.addEventListener("mousemove", function(e) {
        if (isDragging) {
            win.style.left = (e.clientX - offsetX) + "px";
            win.style.top = (e.clientY - offsetY) + "px";
        }
    });
    document.addEventListener("mouseup", function() {
        isDragging = false;
    });
});
function closeWin(btn) {
    btn.closest(".window").style.display = "none";
}
function minimize(btn) {
    let win = btn.closest(".window");
    win.style.height = "25px";
}

function maximize(btn) {
    let win = btn.closest(".window");

    if (!win.classList.contains("max")) {
        win.dataset.prev = JSON.stringify({
            top: win.style.top,
            left: win.style.left,
            width: win.style.width,
            height: win.style.height
        });

        win.style.top = "0";
        win.style.left = "0";
        win.style.width = "100vw";
        win.style.height = "100vh";

        win.classList.add("max");
    } else {
        let prev = JSON.parse(win.dataset.prev);

        win.style.top = prev.top;
        win.style.left = prev.left;
        win.style.width = prev.width;
        win.style.height = prev.height;

        win.classList.remove("max");
    }
}
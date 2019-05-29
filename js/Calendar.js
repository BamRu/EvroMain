'use strict';

document.getElementsByClassName('games__link-table')[0].addEventListener("click", () => {
    let targetEl = document.getElementsByClassName("calendar")[0];
    if (targetEl.className === "calendar")
        targetEl.className = "calendar calendar_visible";
    else targetEl.className = "calendar";
})

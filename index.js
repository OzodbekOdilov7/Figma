let theme_controller = document.getElementById(`theme_controller`);
let onebox = document.querySelector(`.onebox`);
let twobox = document.querySelector(`.twobox`)

let toggle = true;
theme_controller.addEventListener(`click`, function () {
    console.log(1);

    if (!toggle) {
        onebox.classList.remove(`onebox_dark`)
        twobox.classList.remove(`twobox_dark`)
    } else {
        onebox.classList.add(`onebox_dark`)
        twobox.classList.add(`twobox_dark`)
    }

    toggle = !toggle
    console.log(toggle
    );
})

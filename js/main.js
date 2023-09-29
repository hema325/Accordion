

const extendBtns = document.querySelectorAll(".head");
const extendIcons = [...extendBtns].map(btn => btn.lastElementChild);
const accordionDetails = document.querySelectorAll(".details");

const slideDown = idx => {
    extendIcons[idx].classList.remove("fa-plus");
    extendIcons[idx].classList.add("fa-minus");
    extendBtns[idx].classList.add("active");
    accordionDetails[idx].style.height = accordionDetails[idx].scrollHeight + "px";

    accordionDetails.forEach((accordion, index) => index != idx ? slideUp(index) : null);
}

const slideUp = idx => {
    extendIcons[idx].classList.remove("fa-minus");
    extendIcons[idx].classList.add("fa-plus");
    extendBtns[idx].classList.remove("active");
    accordionDetails[idx].style.height = "0px";
}

extendBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {

        if (!extendBtns[idx].classList.contains("active"))
            slideDown(idx);
        else
            slideUp(idx);
    })
})

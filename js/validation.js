const form = document.getElementById("form");
const email = document.getElementById("email");

// Displays tooltip and forces form to not submit
form.addEventListener("submit", (ev) => {
    const emailVal = email.value.trim();
    const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRgx.test(emailVal)) {
        ev.preventDefault();
        tooltipDisplay(1);
    }
});

// Hides/Displays tooltip depending on the state
function tooltipDisplay(state) {
    const tooltip = document.getElementById("email-tooltip");

    tooltip.style.display = state ? "block" : "none";
}

// Hides tooltip after input is changed
email.addEventListener("input", (ev) => {
    tooltipDisplay(0);
});

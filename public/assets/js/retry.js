/**
 * ==========================================
 * LoveLink Retry Module
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const retryBtn =
        document.getElementById("retry-btn");

    if (!retryBtn) return;

    retryBtn.addEventListener("click", resetCalculator);

});

function resetCalculator() {

    document.getElementById("person-one").value = "";
    document.getElementById("person-two").value = "";

    clearErrors();

    document
        .getElementById("result")
        .classList
        .remove("active");

    // Reset FLAMES animation
    resetFlamesAnimation();

    document
        .getElementById("person-one")
        .focus();

    document
        .getElementById("calculator")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}
/**
 * ==========================================
 * LoveLink Download Module
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const downloadBtn =
        document.getElementById("download-btn");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", downloadResult);

});

async function downloadResult() {

    const resultCard =
        document.querySelector(".result-paper");

    const footer =
        document.querySelector(".letter-footer");

    if (!resultCard) {

        alert("Result not found!");

        return;

    }

    // Hide buttons
    footer.style.display = "none";

    try {

        const canvas = await html2canvas(resultCard, {

            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true

        });

        // Show buttons again
        footer.style.display = "flex";

        const link =
            document.createElement("a");

        const personOne =
            document.getElementById("result-person-one").textContent;

        const personTwo =
            document.getElementById("result-person-two").textContent;

        link.download =
            `${personOne}_${personTwo}_LoveLink.png`;

        link.href = canvas.toDataURL("image/png");

        link.click();

    }

    catch(error){

        footer.style.display = "flex";

        console.error(error);

    }

}
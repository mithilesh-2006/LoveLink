/**
 * ==========================================
 * LoveLink Share Module
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const shareBtn = document.getElementById("share-btn");

    if (!shareBtn) return;

    shareBtn.addEventListener("click", shareResult);

});


async function shareResult() {

    const personOne =
        document.getElementById("result-person-one").textContent.trim();

    const personTwo =
        document.getElementById("result-person-two").textContent.trim();

    const relationship =
        document.getElementById("result-relationship").textContent.trim();

    const quote =
        document.querySelector(".letter-content blockquote").textContent.trim();

    const websiteURL = window.location.origin;

    const shareText = `${personOne} ❤️ ${personTwo}

Relationship: ${relationship}

${quote}

✨ Check your own FLAMES result:
${websiteURL}

Made with ❤️ LoveLink`;


    /* ==========================================
       Web Share API
    ========================================== */

    if (navigator.share) {

        try {

            await navigator.share({

                title: "❤️ LoveLink - FLAMES Result",

                text: shareText,

                url: websiteURL

            });

            console.log("Shared successfully.");

        }

        catch (error) {

            if (error.name === "AbortError") {

                console.log("User cancelled sharing.");

                return;

            }

            console.error(error);

            fallbackShare(shareText);

        }

    }

    else {

        fallbackShare(shareText);

    }

}



/* ==========================================
   Clipboard Fallback
========================================== */

async function fallbackShare(text) {

    try {

        await navigator.clipboard.writeText(text);

        alert(
            "The result has been copied to your clipboard."
        );

    }

    catch (error) {

        console.error(error);

        prompt(
            "Copy and share this result manually:",
            text
        );

    }

}
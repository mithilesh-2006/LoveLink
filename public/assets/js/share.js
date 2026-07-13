/**
 * ==========================================
 * LoveLink Share Module
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const shareBtn =
        document.getElementById("share-btn");

    if (!shareBtn) return;

    shareBtn.addEventListener("click", shareResult);

});

async function shareResult() {

    const personOne =
        document.getElementById("result-person-one").textContent;

    const personTwo =
        document.getElementById("result-person-two").textContent;

    const relationship =
        document.getElementById("result-relationship").textContent;

    const quote =
        document.querySelector(".letter-content blockquote").textContent;

    const shareText =

`${personOne} ❤️ ${personTwo}

Relationship: ${relationship}

${quote}

Made with ❤️ LoveLink`;

    if (navigator.share) {

        try {

            await navigator.share({

                title: "LoveLink Result",

                text: shareText

            });

        }

        catch(error){

        }

    }

    else{

        alert("Sharing is not supported on this browser.");

    }

}
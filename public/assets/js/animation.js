/**
 * ==========================================
 * LoveLink Animation Module
 * ==========================================
 */

const FLAMES_MAP = {

    FRIEND: "F",
    LOVE: "L",
    AFFECTION: "A",
    MARRIAGE: "M",
    ENEMY: "E",
    SIBLING: "S"

};


async function playFlamesAnimation(result, callback) {

    const animation =
        document.getElementById("flames-animation");

    animation.classList.add("active");

    // Initial letters
    let letters = ["F", "L", "A", "M", "E", "S"];

    renderLetters(letters);

    await sleep(500);

    // Play every elimination step
    for (const step of result.steps) {

        // Highlight every counted position
        for (const index of step.path) {

            renderLetters(letters);

            highlightLetter(index);

            await sleep(180);

        }

        // Highlight removed letter
        renderLetters(letters);

        highlightLetter(step.removeIndex);

        await sleep(350);

        // Remove animation
        await removeLetter(step.removeIndex);

        // Update letters
        letters.splice(step.removeIndex, 1);

        renderLetters(letters);

        await sleep(400);

    }

    // Winner animation
    const winner =
        document.querySelector("#letters-container span");

    winner.classList.add("winner");

    await sleep(1000);

    callback();

}

function sleep(ms){

    return new Promise(resolve =>

        setTimeout(resolve, ms)

    );

}

function clearHighlights(){

    document

        .querySelectorAll("#letters-container span")

        .forEach(letter=>{

            letter.classList.remove("current");

        });

}

function renderLetters(letters) {

    const container = document.getElementById("letters-container");

    container.innerHTML = "";

    letters.forEach(letter => {

        const span = document.createElement("span");

        span.textContent = letter;

        span.dataset.letter = letter;

        container.appendChild(span);

    });

}

function highlightLetter(index) {

    const letters =
        document.querySelectorAll("#letters-container span");

    letters.forEach(letter =>
        letter.classList.remove("current")
    );

    if (letters[index]) {

        letters[index].classList.add("current");

    }

}

async function removeLetter(index) {

    const letters =
        document.querySelectorAll("#letters-container span");

    letters[index].classList.add("removed");

    await sleep(600);

}
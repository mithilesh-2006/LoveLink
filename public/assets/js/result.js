/**
 * ==========================================
 * LoveLink Result Module
 * ==========================================
 */

/**
 * Quotes for every FLAMES result
 */
const RESULT_QUOTES = {

    FRIEND: "Every great love story begins with friendship.",

    LOVE: "Some names were always meant to meet.",

    AFFECTION: "Care and kindness build beautiful relationships.",

    MARRIAGE: "Perhaps destiny has something special planned.",

    ENEMY: "Every story has unexpected twists.",

    SIBLING: "Some bonds feel just like family."

};

/**
 * Displays the result card.
 */

function showResult(data){

    document.getElementById("result-person-one").textContent =
        data.personOne;

    document.getElementById("result-person-two").textContent =
        data.personTwo;

    document.getElementById("result-relationship").textContent =
        data.relationship;

    document.querySelector(".letter-content blockquote").textContent =
        `"${RESULT_QUOTES[data.relationship]}"`;

    const section =
        document.getElementById("result");

    section.classList.add("active");

    section.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}
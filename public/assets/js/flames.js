/**
 * ==========================================
 * LoveLink FLAMES Engine
 * ==========================================
 */

const FLAMES = [
    "FRIEND",
    "LOVE",
    "AFFECTION",
    "MARRIAGE",
    "ENEMY",
    "SIBLING"
];

/**
 * Remove spaces and convert to lowercase.
 */
function prepareName(name) {

    return name
        .toLowerCase()
        .replace(/\s/g, "");

}

/**
 * Remove common characters.
 * Returns the number of remaining letters.
 */
function countRemainingLetters(name1, name2) {

    let first = prepareName(name1).split("");
    let second = prepareName(name2).split("");

    for (let i = 0; i < first.length; i++) {

        const index = second.indexOf(first[i]);

        if (index !== -1) {

            first.splice(i, 1);
            second.splice(index, 1);

            i--;

        }

    }

    return first.length + second.length;

}

/**
 * Perform FLAMES elimination.
 */
function eliminateFLAMES(count) {

    let flames = [...FLAMES];

    let index = 0;

    while (flames.length > 1) {

        index = (index + count - 1) % flames.length;

        flames.splice(index, 1);

    }

    return flames[0];

}

/**
 * Main function.
 */
function calculateFlames(name1, name2) {

    const count = countRemainingLetters(name1, name2);

    return {

        remainingCount: count,

        relationship: eliminateFLAMES(count)

    };

}
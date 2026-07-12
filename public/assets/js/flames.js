/**
 * ==========================================
 * LoveLink FLAMES Engine
 * ==========================================
 */

const FLAMES = [
    "F",
    "L",
    "A",
    "M",
    "E",
    "S"
];

const RELATIONSHIP_MAP = {
    F: "FRIEND",
    L: "LOVE",
    A: "AFFECTION",
    M: "MARRIAGE",
    E: "ENEMY",
    S: "SIBLING"
};

/**
 * Remove spaces and convert to lowercase.
 */
function prepareName(name) {

    return name
        .toLowerCase()
        .replace(/\s/g, "");

}

/**
 * Count remaining unmatched letters.
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
 * Generate the exact elimination order.
 */
function generateEliminationSequence(count) {

    let letters = [...FLAMES];

    let steps = [];

    let eliminationOrder = [];

    let currentIndex = 0;

    while (letters.length > 1) {

        let path = [];

        // Record every count
        for (let i = 0; i < count; i++) {

            path.push(currentIndex);

            currentIndex = (currentIndex + 1) % letters.length;

        }

        // Last counted letter
        const removeIndex =
            (currentIndex - 1 + letters.length) % letters.length;

        const removedLetter = letters[removeIndex];

        eliminationOrder.push(removedLetter);

        steps.push({

            path,

            removeIndex,

            removed: removedLetter,

            lettersBefore: [...letters]

        });

        letters.splice(removeIndex, 1);

        // Continue from the next letter
        if (letters.length > 0) {

            currentIndex = removeIndex % letters.length;

        }

    }

    return {

        winnerLetter: letters[0],

        eliminationOrder,

        steps

    };

}

/**
 * Main FLAMES function
 */
function calculateFlames(name1, name2) {

    const remainingCount =
        countRemainingLetters(name1, name2);

    const sequence =
        generateEliminationSequence(remainingCount);

    return {

        remainingCount,

        winnerLetter: sequence.winnerLetter,

        eliminationOrder: sequence.eliminationOrder,

        steps: sequence.steps,

        relationship:
            RELATIONSHIP_MAP[sequence.winnerLetter]

    };

}
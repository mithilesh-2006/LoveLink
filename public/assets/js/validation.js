/**
 * ==========================================
 * LoveLink Validation Module
 * ==========================================
 */

/**
 * Removes leading/trailing spaces
 * and converts multiple spaces into one.
 */
function normalizeName(name) {

    return name
        .trim()
        .replace(/\s+/g, " ");

}

/**
 * Checks whether the name is empty.
 */
function isEmpty(name) {

    return name.length === 0;

}

/**
 * Allows only letters and spaces.
 * Supports international alphabets.
 */
function isValidName(name) {

    const regex = /^[\p{L}\s]+$/u;

    return regex.test(name);

}

/**
 * Minimum length:
 * At least 2 characters (excluding spaces)
 */
function hasMinimumLength(name) {

    return name.replace(/\s/g, "").length >= 2;

}

/**
 * Prevent using identical names.
 */
function areDifferentNames(name1, name2) {

    return (
        name1.toLowerCase() !==
        name2.toLowerCase()
    );

}

/**
 * Main validation function
 */
function validateForm(name1, name2) {

    name1 = normalizeName(name1);
    name2 = normalizeName(name2);

    if (isEmpty(name1)) {

        return {
            valid: false,
            field: "person-one",
            message: "Please enter your name."
        };

    }

    if (isEmpty(name2)) {

        return {

            valid: false,
            field: "person-two",
            message: "Please enter your partner's name."

        };

    }

    if (!hasMinimumLength(name1)) {

        return {

            valid: false,
            field: "person-one",    
            message: "Your name must contain at least 2 letters."

        };

    }

    if (!hasMinimumLength(name2)) {

        return {

            valid: false,
            field: "person-two",
            message: "Partner's name must contain at least 2 letters."

        };

    }

    if (!isValidName(name1)) {

        return {

            valid: false,
            field: "person-one",
            message: "Your name can contain only letters."

        };

    }

    if (!isValidName(name2)) {

        return {

            valid: false,
            field: "person-two",
            message: "Partner's name can contain only letters."

        };

    }

    if (!areDifferentNames(name1, name2)) {

        return {

            valid: false,
            field: "person-one",
            message: "Please enter two different names."

        };

    }

    return {

        valid: true,

        message: "Validation successful.",

        data: {

            personOne: name1,

            personTwo: name2

        }

    };

}
/**
 * ==========================================
 * LoveLink Calculator Controller
 * ==========================================
 */

console.log("calculator.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("flames-form");

    form.addEventListener("submit", handleCalculation);

});

/**
 * Clear all validation errors
 */
function clearErrors() {

    document.getElementById("person-one-error").textContent = "";
    document.getElementById("person-two-error").textContent = "";

}

/**
 * Display validation error
 */

function showError(field, message) {
    console.log("showError called:", field, message);

    document.getElementById(`${field}-error`).textContent = message;

}

/**
 * Handles form submission
 */
function handleCalculation(event) {

    event.preventDefault();

    clearErrors();
    
    const personOne =
        document.getElementById("person-one").value;

    const personTwo =
        document.getElementById("person-two").value;

    // Validate input
    

    const validation = validateForm(personOne, personTwo);
    console.log(validation);

    if (!validation.valid) {

        showError(validation.field, validation.message);

        return;

    }

    // Calculate FLAMES
    const result = calculateFlames(

        validation.data.personOne,

        validation.data.personTwo

    );

    // Display result
    showResult({

        personOne: validation.data.personOne,

        personTwo: validation.data.personTwo,

        relationship: result.relationship,

        remainingCount: result.remainingCount

    });

}
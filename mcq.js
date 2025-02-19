function selectFirstRadioButtons() {
    // Select all radio buttons on the page
    let radioButtons = document.querySelectorAll('input.qwiz_choice_radio');

    // Iterate over the radio buttons
    radioButtons.forEach(radio => {
        // Check if it's the first option of a group
        if (radio.id.endsWith('-a0')) {
            radio.click(); // Auto-click the first option increment the 0 by 1  each time you wanna click another button
        }
    });
}
// Run the function
selectFirstRadioButtons();


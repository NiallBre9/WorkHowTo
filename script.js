const buttons = document.querySelectorAll('.box-link');

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    // Get the button's text
    const buttonText = event.target.textContent;

    // Depending on the button clicked, change the content or display new elements
 if (buttonText === 'EMAIL') {
    document.getElementById('email-options').classList.remove('hidden');
} else if (buttonText === 'PHONE') {
    document.getElementById('phone-options').classList.remove('hidden');
} else {
    document.getElementById('chat-options').classList.remove('hidden');
}}

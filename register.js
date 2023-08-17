

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const chairInput = document.querySelector('.chair-input');
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const bnameInput = document.querySelector('input[placeholder="Business Name"]');
    const telInput = document.querySelector('input[placeholder="Telephone Number"]');


    form.addEventListener('submit', function(event) {
        const chairValue = parseInt(chairInput.value);
        const bnameValue = bnameInput.value.trim();
        const nameValue = nameInput.value.trim();
        const telValue = telInput.value.trim();

        if (bnameValue === '') {
            event.preventDefault();
            alert('Business Name cannot be empty.');
        }else if (nameValue === '') {
            event.preventDefault();
            alert('Name cannot be empty.');
        }else if (telValue === '') {
            event.preventDefault();
            alert('Telephone Number cannot be empty.');
        }else if (isNaN(chairValue) || chairValue < 1 || chairValue > 10) {
            event.preventDefault();
            alert('Please enter a valid number of chairs (1-10).');
        }else{
            alert(`Thank you! Your registration has been submitted.`);
            window.location.href = 'index.html';
        }
    });
});
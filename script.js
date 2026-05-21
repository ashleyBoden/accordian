function displayAnswer(clickedButton) {


    document.querySelectorAll('.question').forEach(question => {
        if (question !== clickedButton) {
            question.nextElementSibling.style.display = 'none';
            question.style.marginBottom = '20px';
            question.style.backgroundColor = 'rgba(0, 0, 0, 0.759)';
        } else if (question === clickedButton && question.nextElementSibling.style.display === 'block') {
            question.nextElementSibling.style.display = 'none';
            question.style.marginBottom = '20px';
            question.style.backgroundColor = 'rgba(0, 0, 0, 0.759)';
        } else {
            question.nextElementSibling.style.display = 'block';
            question.style.marginBottom = '5px';
            question.style.backgroundColor = 'blue';
        }
    });
};
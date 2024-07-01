document.getElementById('main-button').addEventListener('click', () => {
    const text = document.getElementById("main-text");
    if (text.style.color === 'blue') {
        text.style.color = 'red';
        } else {
            text.style.color = 'blue';
        }
    }
);

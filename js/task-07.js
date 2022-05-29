const fontSize = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSize.addEventListener('input', (event) => { 
    textRef.style.fontSize = event.currentTarget.value + 'px';
});
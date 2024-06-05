// console.log('test');

const pushTagElements = document.querySelectorAll('.push-tag');

pushTagElements.forEach((pushTagElement, index) => {
    const exclamationSpan = document.createElement('span');
    exclamationSpan.textContent = `F${index+1} `;
    pushTagElement.parentNode.insertBefore(exclamationSpan, pushTagElement);
});
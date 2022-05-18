const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector('.item h2');
    console.log(`Category: ${title.textContent}`);
    const list = item.querySelector('.item ul');
    console.log(`Elements: ${list.children.length}`);
});


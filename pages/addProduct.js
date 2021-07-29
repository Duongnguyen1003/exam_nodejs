async function addProduct() {
    const add = await fetch('http://localhost:5000/api/product/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            description,
            image,
            author,
            category
        }),
    })
        .then(response => response.json())
        .then(() => {
            window.localhost.href = "index.html"
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

addProduct()
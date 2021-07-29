async function listProduct() {
    const product = await fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(data => {

            let screen = data.map((product, index) => {
                // console.log(product.image)
                return /*html*/`
             
                    <tbody>
                        <tr>
                            <td class="border border-black">${index + 1}</td>
                            <td class="border border-black">${product.title}</td>
                            <td class="border border-black"><img class="w-[250px] h-[450px]" src="${product.image}" alt=""></td>
                            <td class="border border-black">${product.description}</td>
                            <td class="border border-black">${product.author}</td>
                            <td class="border border-black">${product.category}</td>
                            <td class="border border-black">${product.linkpdf}</td>
                        </tr>
                    </tbody>
                
            `
            }).join('');
            let tables = /*html */`
            <table class="max-w-min">
                <thead>
                    <tr>
                        <th class="border border-black">Serial</th>
                        <th class="border border-black">Title</th>
                        <th class="border border-black">Image</th>
                        <th class="border border-black">Description</th>
                        <th class="border border-black">Author</th>
                        <th class="border border-black">Category</th>
                        <th class="border border-black">Linkpdf</th>
                    </tr>
                </thead>
                ${screen}
            </table>
                `
            document.querySelector('.root').innerHTML = tables;
        })
}
listProduct()
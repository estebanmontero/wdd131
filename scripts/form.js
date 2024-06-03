document.addEventListener('DOMContentLoaded', () => {
    // Products
    const products = [
        { 
            id: "fc-1888", 
            name: "flux capacitor", 
            averagerating: 4.5 },
        { 
            id: "fc-2050", 
            name: "power laces", 
            averagerating: 4.7 },
        {
             id: "fs-1987", 
             name: "time circuits", 
             averagerating: 3.5 },
        { 
            id: "ac-2000", 
            name: "low voltage reactor", 
            averagerating: 3.9 },
        { 
            id: "jj-1969", 
            name: "warp equalizer", 
            averagerating: 5.0 }
    ];

    // Select the product
    const productSelect = document.querySelector("#product-name");

   
    function createProductList() {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.innerText = product.name;
            productSelect.appendChild(option);
        });
    }


    createProductList();


    let counter = localStorage.getItem("tally") || 1;
    const counterDisplay = document.querySelector("#reviews");


    function tallyReviews() {
        counter = localStorage.getItem("tally");
        counter = Number(counter) + 1;
        localStorage.setItem("tally", counter);
        counterDisplay.innerText = counter;
    }


    document.querySelector('form').addEventListener('submit', () => {
        tallyReviews();
    });
});









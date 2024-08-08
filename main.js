console.log("Starting System");
let cart = JSON.parse(localStorage.getItem('cart')) || [];

 // array for the list of products 
const products = [
    //fruits
    {name: "Banana", pricePerKg: 100},
    {name: "Oranges", pricePerKg: 120},
    {name: "Grapes", pricePerKg: 140},
    {name: "Mango", pricePerKg: 100},
    {name: "Dragon fruit", pricePerKg: 210},
    {name: "Apples", pricePerKg: 130},

    //vegetables
    {name: "Green beans", pricePerKg: 130},
    {name: "Cabage", pricePerKg: 120},
    {name: "Carrot", pricePerKg: 140},
    {name: "Bell pepper", pricePerKg: 160},
    {name: "Onions", pricePerKg: 90},
    {name: "Broccoli", pricePerKg: 180},

    //DairyProducts
    {name: "Green beans", pricePerKg: 130},
    {name: "Cabage", pricePerKg: 120},
    {name: "Carrot", pricePerKg: 140},
    {name: "Bell pepper", pricePerKg: 160},
    {name: "Onions", pricePerKg: 90},
    {name: "Broccoli", pricePerKg: 180},

    //meat & seafood
    {name: "Chicken", pricePerKg: 130},
    {name: "Sausages", pricePerKg: 120},
    {name: "Prawns", pricePerKg: 140},
    {name: "Salmon", pricePerKg: 160},
    {name: "Seer fish", pricePerKg: 90},
    {name: "Eggs", pricePerKg: 180},

    //backing & cooking
    {name: "BackingPowder", pricePerKg: 130},
    {name: "Salt", pricePerKg: 120},
    {name: "Honey", pricePerKg: 160},
    {name: "Cupcake", pricePerKg: 110},
    {name: "Cookies", pricePerKg: 80},
    {name: "Crosant", pricePerKg: 200},
];


function addToCart(productIndex){
    const amount = parseFloat(document.getElementById(`amount-${productIndex}`).value); // assing amount to product index
    if (isNaN(amount) || amount <= 0) {   //check validity of the numbers 
        alert("Enter a valid number");  //error message display 
        return;
    }

    const product = {
        name: products[productIndex].name,
        amount: amount,
        pricePerKg: products[productIndex].pricePerKg,
        total: amount * products[productIndex].pricePerKg,
        favorites: false
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
    console.log("Product Added");
}

function updateCartTable(){
    const tbody = document.getElementById("table").getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
 
    let total = 0;
    cart.forEach((item, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = item.name;
        
        const amountCell = row.insertCell(1);
        const inputId = `amount-${index}`;
        amountCell.innerHTML = `<input id="${inputId}" type="number" step="1" value="${item.amount}" onchange="updateAmount(${index}, this.value)">`;
        
        row.insertCell(2).innerText = item.pricePerKg.toFixed(2);
        row.insertCell(3).innerText = item.total.toFixed(2);
     
        const favouriteCell = row.insertCell(4);
        favouriteCell.innerHTML = `<input type="checkbox" ${item.favorites ? 'checked' : ''} onchange="toggleFavorite(${index})">`;
    
        const deleteCell = row.insertCell(5);
        deleteCell.innerHTML = `<button onclick="removeFromCart(${index})">delete</button>`;

        total += item.total;
    });

        const purchaseRow = tbody.insertRow();
        const purchaseCell = purchaseRow.insertCell(0);
        purchaseCell.colSpan = 7; 
        purchaseCell.innerHTML = '<a href="./order.html" id="purchase-button">Purchase</a>'; // Link to the purchase.html page
        purchaseCell.style.textAlign = 'center';
    
    //styling the purchase button
   

// Hover effect for the purchase button
purchaseButton.addEventListener('mouseover', () => {
    purchaseButton.style.background = 'linear-gradient(135deg, #005f8b, #007bb5)'; 
    purchaseButton.style.transform = 'scale(1.09)'; 
});

    const rowTwo = tbody.insertRow();
    rowTwo.insertCell(0).innerText = "Total";
    rowTwo.insertCell(1).innerText = `${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);  // Remove item at the given index
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();  // Update the table after removing the item
}

function updateAmount(index, newAmount){
    const amount = parseFloat(newAmount);
    if (isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }

    cart[index].amount = amount;
    cart[index].total = amount * cart[index].pricePerKg;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
}

updateCartTable();

let favorite = JSON.parse(localStorage.getItem('favorite')) || [];


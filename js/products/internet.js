const fibre_items_container = document.querySelector(".fibre-items-container")
const cable_items_container = document.querySelector(".cable-items-container")

const fibre_products = [
    {
        "title": "FTTN - 50/10",
        "icon": "wifi",
        "desc1": "50/10 Mbps",
        "desc2": "Unlimited",
        "desc3": "10 Users",
        "price": "$49.99",
    },
    {
        "title": "FTTN - 25/10",
        "icon": "wifi",
        "desc1": "25/10 Mbps",
        "desc2": "Unlimited",
        "desc3": "5 Users",
        "price": "$44.99",
    },
    {
        "title": "FTTN - 15/1",
        "icon": "wifi",
        "desc1": "15/1 Mbps",
        "desc2": "Unlimited",
        "desc3": "2 Users",
        "price": "$0.01",
    }
]

const cable_products = [
    {
        "title": "Cable - 75/10",
        "icon": "wifi",
        "desc1": "75/10 Mbps",
        "desc2": "Unlimited",
        "desc3": "10 Users",
        "price": "$49.99",
    },
    {
        "title": "Cable - 300/20",
        "icon": "wifi",
        "desc1": "300/20 Mbps",
        "desc2": "Unlimited",
        "desc3": "20 Users",
        "price": "$84.99",
    }
]

function show_fibre_products() {
    fibre_items_container.innerHTML = '';
    fibre_products.forEach(fibre_product => {

        const itemEL = document.createElement('div');
        itemEL.classList.add('item');

        const { title, icon, desc1, desc2, desc3, price } = fibre_product

        itemEL.innerHTML = `
            <div class="item-header">
                <i class="fa fa-${icon}" aria-hidden="true"></i>
                <h1>${title}</h1>
            </div>
            <div class="item-info">
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc1}<br>
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc2}<br>
                <i class="fa fa-check-circle"aria-hidden="true"></i>${desc3}<br>
            </div>
            <div class="item-price">
                <span class="dollar-amount">${price}</span>
                <span class="amount-period">/Month</span>
            </div>
            <a href="form.html"><button>Order Now</button></a>
        `

        fibre_items_container.appendChild(itemEL);
    })
}

show_fibre_products();

function show_cable_products() {
    cable_items_container.innerHTML = '';
    cable_products.forEach(cable_product => {

        const itemEL = document.createElement('div');
        itemEL.classList.add('item');

        const { title, icon, desc1, desc2, desc3, price, link } = cable_product

        itemEL.innerHTML = `
            <div class="tag">New!</div>
            <div class="item-header">
                <i class="fa fa-${icon}" aria-hidden="true"></i>
                <h1>${title}</h1>
            </div>
            <div class="item-info">
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc1}<br>
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc2}<br>
                <i class="fa fa-check-circle"aria-hidden="true"></i>${desc3}<br>
            </div>
            <div class="item-price">
                <span class="dollar-amount">${price}</span>
                <span class="amount-period">/Month</span>
            </div>
            <a href="form.html"><button>Order Now</button></a>
        `

        cable_items_container.appendChild(itemEL);
    })
}

show_cable_products();
const fibre_items_container = document.querySelector(".fibre-items-container")
const cable_items_container = document.querySelector(".cable-items-container")

const fibre_products = [
    {
        "title": "Fiber - 50 + Home Phone",
        "icon1": "wifi",
        "icon2": "phone",
        "desc1": "50/10 Mbps",
        "desc2": "Unlimited",
        "desc3": "Canada Wide Free",
        "desc4": "All Features Free",
        "price": "$59.99",
        "link": ""
    },
    {
        "title": "Fiber - 25+ Home Phone",
        "icon1": "wifi",
        "icon2": "phone",
        "desc1": "25/10 Mbps",
        "desc2": "Unlimited",
        "desc3": "Canada Wide Free",
        "desc4": "All Features Free",
        "price": "$54.99",
        "link": ""
    },
]

const cable_products = [
    {
        "title": "Cable - 75 + Home Phone",
        "icon1": "wifi",
        "icon2": "phone",
        "desc1": "75/10 Mbps",
        "desc2": "Unlimited",
        "desc3": "Canada Wide Free",
        "desc4": "All Features Free",
        "price": "$59.99",
        "link": ""
    },
    {
        "title": "Cable - 300 + Home Phone",
        "icon1": "wifi",
        "icon2": "phone",
        "desc1": "300/20 Mbps",
        "desc2": "Unlimited",
        "desc3": "Canada Wide Free",
        "desc4": "All Features Free",
        "price": "$94.99",
        "link": ""
    }
]

function show_fibre_products() {
    fibre_items_container.innerHTML = '';
    fibre_products.forEach(fibre_product => {

        const itemEL = document.createElement('div');
        itemEL.classList.add('item');

        const { title, icon1, icon2, desc1, desc2, desc3, desc4, price, link } = fibre_product

        itemEL.innerHTML = `
            <div class="item-header">
                <i class="fa fa-${icon1}" aria-hidden="true"></i>
                <i class="fa fa-${icon2}" aria-hidden="true"></i>
                <h1>${title}</h1>
            </div>
            <div class="item-info">
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc1}<br>
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc2}<br>
                <i class="fa fa-check-circle"aria-hidden="true"></i>${desc3}<br>
                <i class="fa fa-check-circle"aria-hidden="true"></i>${desc4}<br>
            </div>
            <div class="item-price">
                <span class="dollar-amount">${price}</span>
                <span class="amount-period">/Month</span>
            </div>
            <a href="html/${link}"><button>Order Now</button></a>
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

        const { title, icon1, icon2, desc1, desc2, desc3, desc4, price, link } = cable_product

        itemEL.innerHTML = `
            <div class="item-header">
                <i class="fa fa-${icon1}" aria-hidden="true"></i>
                <i class="fa fa-${icon2}" aria-hidden="true"></i>
                <h1>${title}</h1>
            </div>
            <div class="item-info">
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc1}<br>
                <i class="fa fa-check-circle" aria-hidden="true"></i>${desc2}<br>
                <i class="fa fa-check-circle"aria-hidden="true"></i>${desc3}<br>
                <i class="fa fa-check-circle"aria-hidden="true"></i>${desc4}<br>
            </div>
            <div class="item-price">
                <span class="dollar-amount">${price}</span>
                <span class="amount-period">/Month</span>
            </div>
            <a href="html/${link}"><button>Order Now</button></a>
        `

        cable_items_container.appendChild(itemEL);
    })
}

show_cable_products();
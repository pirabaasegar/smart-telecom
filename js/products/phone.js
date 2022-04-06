const residential_items_container = document.querySelector(".residential-items-container")
const business_items_container = document.querySelector(".business-items-container")

const residential_products = [
    {
        "title": "Canada Wide Unlimited Calling",
        "icon": "phone",
        "desc1": "No Contract",
        "desc2": "No Hidden Fees",
        "desc3": "Canada Wide Free",
        "desc4": "All Features Free",
        "price": "$9.99",
        "link": ""
    },
    {
        "title": "Canada + US Wide Unlimited Calling",
        "icon": "phone",
        "desc1": "No Contract",
        "desc2": "No Hidden Fees",
        "desc3": "Canada + US Wide Free",
        "desc4": "All Features Free",
        "price": "$14.99",
        "link": ""
    }
]

const business_products = [
    {
        "title": "Canada Wide Unlimited Calling",
        "icon": "phone",
        "desc1": "No Contract",
        "desc2": "No Hidden Fees",
        "desc3": "Canada Wide Free",
        "desc4": "All Features Free",
        "price": "$19.99",
        "link": ""
    },
    {
        "title": "Canada + US Wide Unlimited Calling",
        "icon": "phone",
        "desc1": "No Contract",
        "desc2": "No Hidden Fees",
        "desc3": "Canada + US Wide Free",
        "desc4": "All Features Free",
        "price": "$29.99",
        "link": ""
    }
]

function show_residential_products() {
    residential_items_container.innerHTML = '';
    residential_products.forEach(residential_product => {

        const itemEL = document.createElement('div');
        itemEL.classList.add('item');

        const { title, icon, desc1, desc2, desc3, desc4, price, link } = residential_product

        itemEL.innerHTML = `
            <div class="item-header">
                <i class="fa fa-${icon}" aria-hidden="true"></i>
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

        residential_items_container.appendChild(itemEL);
    })
}

show_residential_products();

function show_business_products() {
    business_items_container.innerHTML = '';
    business_products.forEach(business_product => {

        const itemEL = document.createElement('div');
        itemEL.classList.add('item');

        const { title, icon, desc1, desc2, desc3, desc4, price, link } = business_product

        itemEL.innerHTML = `
            <div class="tag popular">Popular</div>
            <div class="item-header">
                <i class="fa fa-${icon}" aria-hidden="true"></i>
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

        business_items_container.appendChild(itemEL);
    })
}

show_business_products();
const items_container = document.querySelector(".items-container")

const categories = [
    {
        "title": "Internet",
        "icon": "wifi",
        "desc1": "Truly Unlimited",
        "desc2": "No Hidden Fees",
        "desc3": "No Contract",
        "price": "$49.99",
        "link": "internet.html"
    },
    {
        "title": "Home Phone",
        "icon": "phone",
        "desc1": "Truly Unlimited",
        "desc2": "No Hidden Fees",
        "desc3": "No Contract",
        "price": "$9.99",
        "link": "phone.html"
    },
    {
        "title": "Long Distance",
        "icon": "globe",
        "desc1": "Starting 1¢",
        "desc2": "No Hidden Fees",
        "desc3": "No Contract",
        "price": "$0.01",
        "link": "longdistance.html"
    }
]

function show_categories() {
    items_container.innerHTML = '';
    categories.forEach(category => {

        const itemEL = document.createElement('div');
        itemEL.classList.add('item');

        const { title, icon, desc1, desc2, desc3, price, link } = category

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
            <a href="html/${link}"><button>View All Plans</button></a>
        `

        items_container.appendChild(itemEL);
    })
}

show_categories();
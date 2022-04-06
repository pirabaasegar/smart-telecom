const review_items = document.querySelector(".review-items")

const reviews = [
    {
        "profile_name": "Fred Rodriquez",
        "image": "https://templatekit.jegtheme.com/evernet/wp-content/uploads/sites/59/2021/03/P2UGM57-150x150.jpg",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "profile_name": "Audrey Stevenson",
        "image": "https://templatekit.jegtheme.com/evernet/wp-content/uploads/sites/59/2021/03/RHDZL5A-150x150.jpg",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "profile_name": "Bennett Miller",
        "image": "https://templatekit.jegtheme.com/evernet/wp-content/uploads/sites/59/2021/03/PYTF4B7-150x150.jpg",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

function show_reviews() {
    review_items.innerHTML = '';
    reviews.forEach(review => {

        const itemEL = document.createElement('div');
        itemEL.classList.add('review-item');

        const { profile_name, image, message } = review

        itemEL.innerHTML = `
            <div class="review-profile">
                <div class="profile-info">
                    <img src="${image}">
                    <div class="name-star">
                        <strong>${profile_name}</strong>
                        <div class="rating-stars">
                            <ul>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <p>${message}</p>
                </div>
            </div>
        `
        review_items.appendChild(itemEL);
    })
}

show_reviews();
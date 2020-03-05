"use strict";
/**
 * Fetch information of restaurants
 */
async function getRestaurantsInfo() {
    const response = await fetch(
        "http://red-strapi-postgres-heroku.herokuapp.com/Restaurants"
    );
    var restaurantInfo = await response.json();
    return restaurantInfo;
}
const restaurantInfo = getRestaurantsInfo();
getRestaurantsInfo().then(info => {
    show3RestaurantsWithHighestScore(info);
    makeButtonsForEachRestaurant(info);
    showRestaurantInfoAnd3Reviews(info);
    changeStyleForActiveButton();
    showTotalRestaurants(info);
    setInitialState(info);
})
// End


/**
 * Fetch reviews of restaurants
 */
async function getRestaurantsReviews() {
    const response = await fetch(
        "http://red-strapi-postgres-heroku.herokuapp.com/Reviews"
    );
    var restaurantReviews = await response.json();
    return restaurantReviews;
}
const restaurantReviews = getRestaurantsReviews();
getRestaurantsReviews().then(reviews => {
    showLatest3Reviews(reviews);
    showTotalReviews(reviews);
})
//End


/**
 * Show total number of restaurants in Strapi
 */
function showTotalRestaurants(info) {
    writeOnWebPage("span", " " + info.length, "totalRestaurants")
}
// End


/**
 * Show total number of reviews in Strapi
 */
function showTotalReviews(reviews) {
    writeOnWebPage("span", " " + reviews.length, "totalReviews")
}
// End


/**
 * Post user comments
 */
// function submitReview() {

//     let name = document.getElementById("name").value;
//     let review = document.getElementById("review").value;
//     let rating= document.getElementById("rating").value;
//     let idrestaurant= "W8T6U6";

//     // var activeButton = document.getElementsByClassName("restaurant-button-active");
//     // var restaurantID = activeButton.id;
//     fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews", {
//         method: "POST",
//         body:JSON.stringify({
//             name:name,
//             review:review,
//             rating:rating,
//             idrestaurant:idrestaurant
//         })
//     }).then(
//         (response) => response.json())  
// }
//End
    // fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews", {
    //     method: "POST",
    //     // mode: "cors",
    //     // cache: "no-cache",
    //     // credentials: "include",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     // redirect: "follow",
    //     // referrerPolicy: "no-referrer",
    //     body: {
    //         "name": "Ivan",
    //         "rating": 5,
    //         "idrestaurant": "G0D0WN",
    //         "review": "Please Show Up"
    //     }
    // })
// fetch("http://red-strapi-postgres-heroku.herokuapp.com/Reviews", {
//     "method": "POST",
//     "headers": {"content-type": "multipart/form-data"},
//     "body": {
//         "name": "Ivan",
//         "rating": 5,
//         "idrestaurant": "G0D0WN",
//         "review": "Please Show Up!"
//     }
// })
// .then(response => {
//   console.log(response);
// })
// .catch(err => {
//   console.log(err);
// });


/**
 * A function to avoid repeating code when creating new nodes
 * 
 * @param {*} newElement is the new HTML tag you want to create
 * @param {*} text is the text node
 * @param {*} targetID is the id in html where the node will be placed
 * @param {*} attribute in case you need to set attribute, write your attribute here
 * @param {*} value set the value of your attribute here
 */
function writeOnWebPage(newElement, text, targetID, attribute, value) {
    var newTag = document.createElement(newElement);
    var textNode = document.createTextNode(text);
    newTag.appendChild(textNode);
    newTag.setAttribute(attribute, value)
    var list = document.getElementById(targetID);
    list.appendChild(newTag);
}
//End


/**
 * Create a <br> at target ID in html
 */
function giveMeABreak(targetID) {
    var target = document.getElementById(targetID);
    var aBreak = document.createElement('br');
    target.appendChild(aBreak);
 }
 // End


/*
 * Show the names of the restaurants as buttons with dynamic id
 */
function makeButtonsForEachRestaurant(restaurantInfo){
    for (let i = 0; i < restaurantInfo.length; i++) {
        var newTag = document.createElement("button");
        var textnode = document.createTextNode(restaurantInfo[i].name);
        newTag.appendChild(textnode);
        newTag.setAttribute("id", "restaurantButton" + i);
        newTag.classList.add("restaurant-button");
        var list = document.getElementById("restaurant-list");
        list.insertBefore(newTag, list.childNodes[0]);
    }
};
// End


/**
 * Calculate the average score of a given restaurant
 * @param {*} restaurantID the id of restaurant
 */
async function calculateAverageScore(restaurantID) {
    var restaurantReview = await getRestaurantsReviews();
    var arrayOfScores = new Array;
    for (var i = 0; i < restaurantReview.length; i++){
        if (restaurantReview[i].idrestaurant == restaurantID){
            arrayOfScores.push(restaurantReview[i].rating);
        }
    }
    // after all scores are collected, calculate the average score
    var sum = new Number;
    for (var i = 0; i < arrayOfScores.length; i++){
        sum = sum + arrayOfScores[i];
    }
    var averageScore = sum / arrayOfScores.length;
    // return the score with 1 decimal
    return averageScore.toFixed(1);
}
//End


/**
 * Clean up the content of 3 reviews of the restaurant
 */
function cleanUpReviews() {
    document.getElementById('review1').innerHTML='';
    document.getElementById('review2').innerHTML='';
    document.getElementById('review3').innerHTML='';
}
//  End


/**
 * When a restaurant name is clicked:
 *     1. the restaurant info should show up in the restaurant detail section;
 *     2. the lastest 3 reviews should show up in the restaurant review section;
 */
function showRestaurantInfoAnd3Reviews(restaurantInfo) {
    for (let i = 0; i < restaurantInfo.length; i++) {
        const targetButton = document.getElementById("restaurantButton" + i);
        const name = restaurantInfo[i].name;
        const type = restaurantInfo[i].type;
        const dining = restaurantInfo[i].dining;
        const description = restaurantInfo[i].description;
        const website = restaurantInfo[i].url;
        const restaurantID = restaurantInfo[i].idnumber;
        // show restaurant info in the restaurant detail section
        calculateAverageScore(restaurantID).then(score => {
            targetButton.addEventListener("click", () => {
                document.getElementById('restaurant-details').innerHTML='';
                writeOnWebPage("h1", name, "restaurant-details");
                writeOnWebPage("span", "Cuisine: " + type, "restaurant-details");
                writeOnWebPage("span", "Dining: " + dining, "restaurant-details");
                writeOnWebPage("span", "Score: " + score, "restaurant-details");
                writeOnWebPage("a", "Website: " + website, "restaurant-details", 'href', website);
                writeOnWebPage("p", description, "restaurant-details");
            })
        });
        // show 3 reviews of THIS restaurant in review section
        restaurantReviews.then(reviews =>{
            const reviewsOfThisRestaurant = [];
            for (let i = 0; i < reviews.length; i++){
                if (reviews[i].idrestaurant === restaurantID){
                    reviewsOfThisRestaurant.push(
                        {
                            "nameOfWritter": reviews[i].name,
                            "review": reviews[i].review
                        });
                }
            }
            targetButton.addEventListener("click", () => {
                cleanUpReviews();
                writeOnWebPage("span", reviewsOfThisRestaurant[0].nameOfWritter + ": ", "review1");
                writeOnWebPage("article", reviewsOfThisRestaurant[0].review, "review1");
                writeOnWebPage("span", reviewsOfThisRestaurant[1].nameOfWritter + ": ", "review2");
                writeOnWebPage("article", reviewsOfThisRestaurant[1].review, "review2");
                writeOnWebPage("span", reviewsOfThisRestaurant[2].nameOfWritter + ": ", "review3");
                writeOnWebPage("article", reviewsOfThisRestaurant[2].review, "review3");
            })
        })
    }
};
// End


/**     
 * When user clicks a button, this button should change style until another button is clicked.
 */
function changeStyleForActiveButton() {
    var buttonContainer = document.getElementById("restaurant-list");
    var buttons = buttonContainer.getElementsByClassName("restaurant-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var currentButton = document.getElementsByClassName("restaurant-button-active");
            currentButton[0].className = currentButton[0].className.replace("restaurant-button-active", "");
            // Add the active class to the current/clicked button
            console.log(currentButton[0]);
            this.classList.add("restaurant-button-active");
        });
    }
}
// End


/**
 * Set initial state:
 *      1. make one button to be active when page load;
 *      2. display info and reviews of that restaurant.
 */     
function setInitialState(restaurantInfo) {
    const initialButton = document.getElementById("restaurantButton0");
    initialButton.classList.add("restaurant-button-active");
    // show initial restaurant info in the restaurant detail section
    calculateAverageScore(restaurantInfo[0].idnumber).then(score => {
        document.getElementById('restaurant-details').innerHTML='';
        writeOnWebPage("h1", restaurantInfo[0].name, "restaurant-details");
        writeOnWebPage("span", "Cuisine: " + restaurantInfo[0].type, "restaurant-details");
        writeOnWebPage("span", "Dining: " + restaurantInfo[0].dining, "restaurant-details");
        writeOnWebPage("span", "Score: " + score, "restaurant-details");
        writeOnWebPage("a", "Website: " + restaurantInfo[0].url, "restaurant-details", 'href', restaurantInfo[0].url);
        writeOnWebPage("p", restaurantInfo[0].description, "restaurant-details");
    });
    // show 3 reviews of initial restaurant in review section
    restaurantReviews.then(reviews =>{
        const reviewsOfThisRestaurant = [];
        for (let i = 0; i < reviews.length; i++){
            if (reviews[i].idrestaurant === restaurantInfo[0].idnumber){
                reviewsOfThisRestaurant.push(
                    {
                        "nameOfWritter": reviews[i].name,
                        "review": reviews[i].review
                    });
            }
        }
        cleanUpReviews();
        writeOnWebPage("span", reviewsOfThisRestaurant[0].nameOfWritter + ": ", "review1");
        writeOnWebPage("article", reviewsOfThisRestaurant[0].review, "review1");
        writeOnWebPage("span", reviewsOfThisRestaurant[1].nameOfWritter + ": ", "review2");
        writeOnWebPage("article", reviewsOfThisRestaurant[1].review, "review2");
        writeOnWebPage("span", reviewsOfThisRestaurant[2].nameOfWritter + ": ", "review3");
        writeOnWebPage("article", reviewsOfThisRestaurant[2].review, "review3");
    })
};

// End


/**
 * Compare the average score of all restaurants and list the top 3
 */
function show3RestaurantsWithHighestScore(restaurantInfo) {
    const allAverageScores = new Array();
    for (let i = 0; i < restaurantInfo.length; i++) {
        const restaurantName = restaurantInfo[i].name;
        const restaurantID = restaurantInfo[i].idnumber;
        calculateAverageScore(restaurantID).then(score => {
            const restaurantObject = {'name':restaurantName, 'score': score}
            allAverageScores.push(restaurantObject);
            var newArraySortedByScore = allAverageScores.sort((a,b) => {return b.score - a.score});
            // Reason for this IF statement:
            // 1. get rid of console error; 
            // 2. avoid having letters flashing while the FOR loop runs.
            if (i == restaurantInfo.length - 1) {
                document.getElementById("top-restaurants").innerHTML='';
                writeOnWebPage("span", 'No.1 ' + newArraySortedByScore[0].name + ': ', "top-restaurants");
                writeOnWebPage("span", newArraySortedByScore[0].score + '/5.0', "top-restaurants");
                giveMeABreak("top-restaurants");
                writeOnWebPage("span", 'No.2 ' + newArraySortedByScore[1].name + ': ', "top-restaurants");
                writeOnWebPage("span", newArraySortedByScore[1].score + '/5.0', "top-restaurants");
                giveMeABreak("top-restaurants");
                writeOnWebPage("span", 'No.3 ' + newArraySortedByScore[2].name + ': ', "top-restaurants");
                writeOnWebPage("span", newArraySortedByScore[2].score + '/5.0', "top-restaurants");
            }
        })
    }
};
// End


/**
 * Compare the post date of all reviews and list the top 3
 */
function showLatest3Reviews(reviews) {
    for (let i = 0; i < reviews.length; i++) {
        var reviewsSortedByDate = reviews.sort((a,b) => {
            var a = new Date(a.created_at);
            var b = new Date(b.created_at);
            return b - a;
        })
        const reviewer1 = reviewsSortedByDate[0].name;
        const reviewer2 = reviewsSortedByDate[1].name;
        const reviewer3 = reviewsSortedByDate[2].name;
        const restaurantID1 = reviewsSortedByDate[0].idrestaurant;
        const restaurantID2 = reviewsSortedByDate[1].idrestaurant;
        const restaurantID3 = reviewsSortedByDate[2].idrestaurant;
        if (i == reviews.length - 1) {
            restaurantInfo.then(info => {
                const restaurant1 = info.find(restaurantObject => {
                    if (restaurantID1 === restaurantObject.idnumber) {
                        return restaurantObject;
                    }
                })
                const restaurant2 = info.find(restaurantObject => {
                    if (restaurantID2 === restaurantObject.idnumber) {
                        return restaurantObject;
                    }
                })
                const restaurant3 = info.find(restaurantObject => {
                    if (restaurantID3 === restaurantObject.idnumber) {
                        return restaurantObject;
                    }
                })
                document.getElementById("latest-reviews-content").innerHTML='';
                writeOnWebPage("span", reviewer1 + " wrote a review for ", "latest-reviews-content");
                writeOnWebPage("span", restaurant1.name, "latest-reviews-content");
                writeOnWebPage("article", reviewsSortedByDate[0].review, "latest-reviews-content");
                giveMeABreak("latest-reviews-content");
                writeOnWebPage("span", reviewer2 + " wrote a review for ", "latest-reviews-content");
                writeOnWebPage("span", restaurant2.name, "latest-reviews-content");
                writeOnWebPage("article", reviewsSortedByDate[1].review, "latest-reviews-content");
                giveMeABreak("latest-reviews-content");
                writeOnWebPage("span", reviewer3 + " wrote a review for ", "latest-reviews-content");
                writeOnWebPage("span", restaurant3.name, "latest-reviews-content");
                writeOnWebPage("article", reviewsSortedByDate[2].review, "latest-reviews-content");
            })
        }
    }
}


/**
 * Put the clicked img on top
 */
function changeImage1() {
    document.getElementById("id1").src ="/images/joseph-gonzalez-egg-unsplash-resized.jpg";
}
function changeImage2() {
    document.getElementById("id1").src ="/images/jay-wennington-N_Y88TWmGwA-unsplash-resized.jpg";
}
function changeImage3() {
    document.getElementById("id1").src ="/images/brooke-lark-oaz0raysASk-unsplash-resized.jpg";
}
//End
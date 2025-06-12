import { calculateStarAverage } from "./logic.js";

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
const updateStarRating = () => {
  // Average Star Rating
  const starRating = document.querySelector(".starRating");

  const currentRating = calculateStarAverage(reviews)
  console.log(currentRating);

  starRating.textContent = "Star Rating: " + currentRating;
}

updateStarRating();

const renderReview = (review) => {
  console.log(review);

  // setting up structure
  const container = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const username = document.createElement('p');
  const rating = document.createElement('p');
  const written_review = document.createElement('p');


  container.className = 'review_container';
  img.src = review.image;
  username.textContent = review.username;
  rating.textContent = review.star;
  written_review.textContent = review.review;


  document.body.appendChild(container);

  container.appendChild(img);
  container.appendChild(div);

  div.appendChild(username);
  div.appendChild(rating);
  div.appendChild(written_review);

  

}

reviews.forEach(review => renderReview(review));

// Javascript forms
const form = document.querySelector("form");

const submitForm = (form) => {
  const newReview = {
    username: form['username'].value,
    image: form['image'].value,
    star: form['reason'].value,
    review: form['review'].value,
  }

  renderReview(newReview);
  reviews.push(newReview);
  
  updateStarRating();
}


form.addEventListener("submit", function(event){
  event.preventDefault();
  submitForm(form);
})



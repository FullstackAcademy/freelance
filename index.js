/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function getRandomFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

  return { name, occupation, rate };
}

const Freelancers = Array.from({ length: NUM_FREELANCERS }, getRandomFreelancer);

function averageRate(freelancers) {
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
  return total / freelancers.length;
}

const averageRates = averageRate(Freelancers);

// === Components ===

function freelancer(freelancer) {
  document.createElement("figure");
  figure.className = "freelancer";

  const name = document.createElement("h3");
  name.textContent = freelancer.name;
  figure.appendChild(name);
  const occupation = document.createElement("p");
  occupation.textContent = freelancer.occupation;
  figure.appendChild(occupation);
  const rate = document.createElement("p");
  rate.textContent = `Rate: $${freelancer.rate}/hr`;
  figure.appendChild(rate);
  return figure;
}


function freelancers () {
  const container = document.createElement("div");
  container.className = "freelancers";

  Freelancers.forEach(freelancerData => {
    const freelancerElement = freelancer(freelancerData);
    container.appendChild(freelancerElement);
  });

  return container;
}


function averageRateElement() {
  const article = document.createElement("article");
  article.className = "average-rate";
  const heading = document.createElement("h2");
  heading.textContent = "Average Rate of Freelancers";
  article.appendChild(heading);
  const rate = document.createElement("p");
  rate.textContent = `The average rate is $${averageRates.toFixed(2)}/hr`;
  article.appendChild(rate);
  return article;
}


// === Render ===

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "The average rate is $${averageRates.toFixed(2)}/hr"; 
  app.appendChild(averageRateElement());
  app.appendChild(freelancers());
}

  

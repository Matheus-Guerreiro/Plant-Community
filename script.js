const container = document.querySelector(".container");
const content = document.querySelector(".content");
const animation = document.querySelector(".animation");
const steps = document.querySelectorAll(".container .step");
const stepsContainer = document.querySelector(".container .steps");
const continueBtn = document.querySelector(".container .continue-btn");
const skipBtn = document.querySelector(".skip");
const dots = document.querySelectorAll(".container .dot");

let stepPosition = 0;
let currentStep = 0;
let currentSkip = 0;

continueBtn.addEventListener("click", () => {
  currentStep++;

  if (currentStep >= steps.length || currentSkip == 1) {
    content.style.display = "none";
    animation.style.display = "flex";
    currentStep = 0;
  }

  stepPosition += steps[0].offsetWidth;
  stepsContainer.style.transform = `translateX(-${stepPosition}px)`;


  dots.forEach((d) => {
    d.classList.remove("active");
  });

  dots[currentStep].classList.add("active");

  if (currentStep == steps.length - 1) {
    continueBtn.innerHTML = "Get started";
    skipBtn.style.display = `none`;
  }
});

skipBtn.addEventListener("click", () => {
  currentStep++;
  currentSkip = 1

  stepPosition += steps[0].offsetWidth;
  stepsContainer.style.transform = `translateX(-${1300}px)`;

  dots.forEach((d) => {
    d.classList.remove("active");
  });

  dots[currentStep + 1].classList.add("active");

  if ([currentStep] == steps.length - 2) {
    continueBtn.innerHTML = "Get started";
    skipBtn.style.display = `none`;
  }
});

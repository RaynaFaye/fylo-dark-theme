const form = document.querySelector('form');
const emailInput = form.querySelector('.access__email');
const tooltip = document.querySelector('.tooltip');
const tooltipTwo = document.querySelector('.tooltiptwo');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInputValue = event.target.email.value;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regexEmail.test(emailInputValue)) {
    tooltip.style.display = 'block';
    emailInput.style.border = '2px solid rgb(218, 55, 55)';
  } else {
    tooltip.style.display = 'none';
    emailInput.style.border = 'none';
    tooltipTwo.style.display = 'block';
    setTimeout(function () {
      tooltipTwo.style.display = 'none';
    }, 3000);
    form.reset();
  }
});

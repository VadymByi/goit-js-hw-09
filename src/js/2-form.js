import '../css/2-form.css';

console.log('form is ready');

const feedbackForm = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parseData = JSON.parse(savedData);
  if (parseData.email) {
    feedbackForm.elements.email.value = parseData.email;
    formData.email = parseData.email;
  }
  if (parseData.message) {
    feedbackForm.elements.message.value = parseData.message;
    formData.message = parseData.message;
  }
}

feedbackForm.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
});

// inputs.forEach(input => {
//   const typePlaceholder = input.type;
//   input.addEventListener('focus', () => {
//     input.placeholder = typePlaceholder;
//   });
//   input.addEventListener('blur', () => {
//     input.placeholder = '';
//   });
// });

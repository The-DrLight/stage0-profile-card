const form = document.getElementById('contact-form');
const successMsg = document.getElementById('success');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  const errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message'),
  };

  // Reset messages
  Object.values(errors).forEach(err => (err.textContent = ''));
  successMsg.hidden = true;

  let valid = true;

  // Name
  if (!name.value.trim()) {
    errors.name.textContent = 'Full name is required.';
    valid = false;
  }

  // Email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!email.value.trim()) {
    errors.email.textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    errors.email.textContent = 'Enter a valid email (name@example.com).';
    valid = false;
  }

  // Subject
  if (!subject.value.trim()) {
    errors.subject.textContent = 'Subject is required.';
    valid = false;
  }

  // Message
  if (!message.value.trim()) {
    errors.message.textContent = 'Message is required.';
    valid = false;
  } else if (message.value.trim().length < 10) {
    errors.message.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (valid) {
    form.reset();
    successMsg.hidden = false;
  }
});

const fruitCatalog = [
  {
    id: 'apple',
    name: 'Apple',
    category: 'Fresh Fruit',
    price: '$2.50 / kg',
    description: 'Crisp and juicy with a naturally sweet taste that makes a perfect daily snack.',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin C, fiber, potassium, antioxidants',
    benefits: 'Supports heart health, improves digestion, and boosts immunity.'
  },
  {
    id: 'banana',
    name: 'Banana',
    category: 'Energy Fruit',
    price: '$1.80 / bunch',
    description: 'Soft, creamy, and rich in natural energy for active lifestyles.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Potassium, vitamin B6, fiber, magnesium',
    benefits: 'Helps maintain energy, supports muscles, and aids digestion.'
  },
  {
    id: 'orange',
    name: 'Orange',
    category: 'Citrus Fruit',
    price: '$3.00 / kg',
    description: 'Fresh citrus flavor with a juicy boost of hydration and vitamins.',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin C, folate, antioxidants, flavonoids',
    benefits: 'Strengthens immunity and supports healthy skin.'
  },
  {
    id: 'mango',
    name: 'Mango',
    category: 'Tropical Fruit',
    price: '$4.20 / kg',
    description: 'Golden sweetness with a smooth texture and tropical aroma.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin A, C, fiber, beta-carotene',
    benefits: 'Enhances eye health and provides natural energy.'
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'Berry Fruit',
    price: '$3.75 / box',
    description: 'Sweet berries packed with flavor and antioxidants for everyday wellness.',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin C, manganese, folate, antioxidants',
    benefits: 'Promotes glowing skin and supports heart health.'
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    category: 'Hydrating Fruit',
    price: '$2.90 / piece',
    description: 'Cool, juicy, and naturally refreshing for hot days and hydration.',
    image: 'https://images.unsplash.com/photo-1629084092232-3f8c6a7e8f5b?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Water, vitamin C, lycopene, potassium',
    benefits: 'Keeps the body hydrated and supports skin health.'
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    category: 'Tropical Fruit',
    price: '$3.60 / piece',
    description: 'A vibrant tropical fruit with a sweet and tangy taste.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin C, manganese, bromelain, fiber',
    benefits: 'Aids digestion and helps reduce inflammation.'
  },
  {
    id: 'grapes',
    name: 'Grapes',
    category: 'Berry Fruit',
    price: '$2.80 / bunch',
    description: 'Small, juicy, and convenient for snacking and healthy meals.',
    image: 'https://images.unsplash.com/photo-1519996521430-02b4e7864f89?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin K, potassium, antioxidants, fiber',
    benefits: 'Supports circulation and helps reduce oxidative stress.'
  },
  {
    id: 'kiwi',
    name: 'Kiwi',
    category: 'Exotic Fruit',
    price: '$4.00 / kg',
    description: 'Tangy and refreshing with a bright green interior full of nutrients.',
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin C, vitamin E, folate, potassium',
    benefits: 'Improves immunity and supports digestion.'
  },
  {
    id: 'papaya',
    name: 'Papaya',
    category: 'Tropical Fruit',
    price: '$3.20 / piece',
    description: 'Smooth and naturally sweet with rich tropical flavor.',
    image: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=900&q=80',
    nutrition: 'Vitamin C, beta-carotene, papain, folate',
    benefits: 'Supports digestion and helps maintain healthy skin.'
  }
];

function showToast(message) {
  let toast = document.getElementById('toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function updateNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navMenu?.querySelectorAll('a').forEach((link) => {
    const linkPage = link.getAttribute('href')?.split('#')[0];
    if (linkPage === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const loggedInItems = document.querySelectorAll('.auth-logged-in');
  const loggedOutItems = document.querySelectorAll('.auth-logged-out');

  loggedInItems.forEach((item) => item.classList.toggle('hidden', !isLoggedIn));
  loggedOutItems.forEach((item) => item.classList.toggle('hidden', isLoggedIn));

  const signOutButtons = document.querySelectorAll('.nav-signout');
  signOutButtons.forEach((button) => {
    button.addEventListener('click', handleSignOut);
  });
}

function handleSignOut() {
  const confirmLogout = window.confirm('Are you sure you want to sign out?');

  if (!confirmLogout) {
    return;
  }

  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('currentUser');
  sessionStorage.setItem('flashMessage', 'You have been signed out successfully.');
  window.location.href = 'index.html';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setupSignupForm() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorBox = document.getElementById('signupError');
    const successBox = document.getElementById('signupSuccess');

    errorBox.classList.remove('show');
    successBox.classList.remove('show');

    if (!name || !email || !password || !confirmPassword) {
      errorBox.textContent = 'Please fill in all fields.';
      errorBox.classList.add('show');
      return;
    }

    if (!validateEmail(email)) {
      errorBox.textContent = 'Please enter a valid email address.';
      errorBox.classList.add('show');
      return;
    }

    if (password.length < 6) {
      errorBox.textContent = 'Password must be at least 6 characters long.';
      errorBox.classList.add('show');
      return;
    }

    if (password !== confirmPassword) {
      errorBox.textContent = 'Passwords do not match.';
      errorBox.classList.add('show');
      return;
    }

    const account = { name, email, password };
    localStorage.setItem('freshfruitUser', JSON.stringify(account));
    successBox.textContent = 'Account created successfully. You can now sign in.';
    successBox.classList.add('show');
    form.reset();
  });
}

function setupSigninForm() {
  const form = document.getElementById('signinForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('signinEmail').value.trim();
    const password = document.getElementById('signinPassword').value;
    const rememberMe = document.getElementById('rememberMe')?.checked;
    const errorBox = document.getElementById('signinError');

    const savedUser = JSON.parse(localStorage.getItem('freshfruitUser') || 'null');

    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      errorBox.textContent = 'Invalid email or password.';
      errorBox.classList.add('show');
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify({ name: savedUser.name, email: savedUser.email }));

    if (rememberMe) {
      localStorage.setItem('freshfruitRemember', 'true');
    } else {
      localStorage.removeItem('freshfruitRemember');
    }

    sessionStorage.setItem('flashMessage', 'Welcome back!');
    window.location.href = 'index.html';
  });
}

function setupProfilePage() {
  const profileSection = document.getElementById('profileSection');
  if (!profileSection) return;

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    window.location.href = 'signin.html';
    return;
  }

  const user = JSON.parse(localStorage.getItem('currentUser') || localStorage.getItem('freshfruitUser') || '{}');
  const nameField = document.getElementById('profileName');
  const emailField = document.getElementById('profileEmail');
  const statusField = document.getElementById('profileStatus');

  if (nameField) nameField.textContent = user.name || 'Customer';
  if (emailField) emailField.textContent = user.email || 'No email available';
  if (statusField) statusField.textContent = 'Active';

  const signOutBtn = document.getElementById('profileSignOut');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', handleSignOut);
  }
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorBox = document.getElementById('contactError');
    const successBox = document.getElementById('contactSuccess');

    errorBox.classList.remove('show');
    successBox.classList.remove('show');

    if (!fullName || !email || !phone || !subject || !message) {
      errorBox.textContent = 'Please complete all required fields.';
      errorBox.classList.add('show');
      return;
    }

    if (!validateEmail(email)) {
      errorBox.textContent = 'Please enter a valid email address.';
      errorBox.classList.add('show');
      return;
    }

    successBox.textContent = 'Thank you! Your message has been received.';
    successBox.classList.add('show');
    form.reset();
  });
}

function renderFruitCards(filterText = '') {
  const grid = document.getElementById('fruitGrid');
  if (!grid) return;

  const searchTerm = filterText.trim().toLowerCase();
  const filteredFruit = fruitCatalog.filter((fruit) => {
    if (!searchTerm) return true;
    return [fruit.name, fruit.category, fruit.description]
      .some((value) => value.toLowerCase().includes(searchTerm));
  });

  const summary = document.getElementById('fruitResultCount');
  if (summary) {
    summary.textContent = `${filteredFruit.length} fruit(s) found`;
  }

  if (filteredFruit.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h2>No fruits found</h2>
        <p>Try searching for a different fruit, category, or flavor.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredFruit.map((fruit) => `
    <article class="fruit-card">
      <img src="${fruit.image}" alt="${fruit.name} fruit" />
      <div class="fruit-card-content">
        <h3>${fruit.name}</h3>
        <div class="meta-line">
          <span>${fruit.category}</span>
          <span class="price-tag">${fruit.price}</span>
        </div>
        <p>${fruit.description}</p>
        <a class="link-button" href="fruit-details.html?fruit=${fruit.id}">View Details</a>
      </div>
    </article>
  `).join('');
}

function setupFruitSearch() {
  const searchInput = document.getElementById('fruitSearch');
  if (!searchInput) return;

  renderFruitCards();
  searchInput.addEventListener('input', function () {
    renderFruitCards(this.value);
  });
}

function setupFruitDetails() {
  const detailContainer = document.getElementById('fruitDetail');
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const fruitId = params.get('fruit');
  const fruit = fruitCatalog.find((item) => item.id === fruitId) || fruitCatalog[0];

  detailContainer.innerHTML = `
    <div class="detail-layout">
      <div class="detail-image">
        <img src="${fruit.image}" alt="${fruit.name}" />
      </div>
      <div class="detail-card">
        <div class="detail-content">
          <h2>${fruit.name}</h2>
          <div class="detail-meta">
            <span class="detail-badge">${fruit.category}</span>
            <span class="detail-badge">${fruit.price}</span>
          </div>
          <p>${fruit.description}</p>
          <ul class="info-list">
            <li><strong>Nutritional information:</strong> ${fruit.nutrition}</li>
            <li><strong>Health benefits:</strong> ${fruit.benefits}</li>
            <li><strong>Best for:</strong> A refreshing natural snack and healthy daily routine.</li>
          </ul>
          <a class="link-button" href="fruits.html">Back to Fruits</a>
        </div>
      </div>
    </div>
  `;
}

function showPageAlert() {
  const message = sessionStorage.getItem('flashMessage');
  if (!message) return;

  showToast(message);
  sessionStorage.removeItem('flashMessage');
}

function initializePage() {
  updateNavigation();
  setupSignupForm();
  setupSigninForm();
  setupProfilePage();
  setupContactForm();
  setupFruitSearch();
  setupFruitDetails();
  showPageAlert();
}

document.addEventListener('DOMContentLoaded', initializePage);

// ===== SIGNUP =====
document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const msg = document.getElementById('signup-msg');
  msg.textContent = '⏳ Signing up...';
  msg.style.color = '#e67e22';

  try {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();

    if (res.ok) {
      msg.textContent = '✅ Signed up successfully!';
      msg.style.color = 'green';
      localStorage.setItem('token', result.token);
      e.target.reset();
    } else {
      msg.textContent = '❌ ' + result.message;
      msg.style.color = 'red';
    }
  } catch (err) {
    msg.textContent = '❌ Cannot reach server. Is the backend running?';
    msg.style.color = 'red';
  }
});

// ===== CONTACT =====
document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const msg = document.getElementById('contact-msg');
  msg.textContent = '⏳ Sending...';
  msg.style.color = '#e67e22';

  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    msg.textContent = '✅ ' + result.message;
    msg.style.color = 'green';
    e.target.reset();
  } catch (err) {
    msg.textContent = '❌ Cannot reach server.';
    msg.style.color = 'red';
  }
});

// ===== SUBSCRIBE BUTTONS =====
document.querySelectorAll('.plan-btn').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please sign up first!');
      document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    try {
      const res = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ plan: btn.dataset.plan, price: parseInt(btn.dataset.price) })
      });
      const result = await res.json();
      if (res.ok) {
        alert('🎉 Order placed: ' + btn.dataset.plan);
      } else {
        alert('❌ ' + result.message);
      }
    } catch {
      alert('❌ Cannot reach server. Is the backend running?');
    }
  });
});

console.log('✅ api.js loaded, API_URL =', API_URL);
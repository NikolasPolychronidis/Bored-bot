const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('activity').textContent = data.activity;
      document.getElementById('title').textContent = '🦾 HappyBot🦿';
      document.querySelector('button').parentElement.classList.add('fun');
    });
});

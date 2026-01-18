let history = ['home-page'];
function showPage(id) { if(history[history.length-1] !== id) history.push(id); updateUI(id); }
function updateUI(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById('back-arrow').style.display = (id === 'home-page') ? 'none' : 'block';
    document.getElementById('n-h').classList.toggle('active-nav', id==='home-page');
    document.getElementById('n-p').classList.toggle('active-nav', id==='profile-page');
}
function goBack() { if(history.length > 1) { history.pop(); updateUI(history[history.length-1]); } }
function sendOTP() { document.getElementById('reg-box').style.display = 'none'; document.getElementById('otp-box').style.display = 'block'; }
function verifyOTP() {
    if(document.getElementById('otp-in').value === "1234") {
        localStorage.setItem('user', document.getElementById('p-name').value);
        emailjs.send('Service_zkii1pi', 'Template_qyvy303', { from_name: localStorage.getItem('user') });
        goHome();
    } else { alert("Wrong OTP"); }
}
function goHome() { history = ['home-page']; updateUI('home-page'); }
const data = {"മലപ്പുറം": ["Almas Hospital", "Aster MIMS"], "കോഴിക്കോട്": ["Baby Memorial", "Starcare"]};
function loadHospitals() {
    const d = document.getElementById('dist').value;
    const res = document.getElementById('results');
    res.innerHTML = "";
    if(data[d]) data[d].forEach(h => { res.innerHTML += `<div class="card" onclick="book('${h}')"><b>${h}</b><br><small>Book →</small></div>`; });
}
function book(h) {
    if(!localStorage.getItem('user')) { showPage('profile-page'); return; }
    document.getElementById('tk-id').innerText = "#M" + Math.floor(1000 + Math.random()*9000);
    showPage('success-page');
}
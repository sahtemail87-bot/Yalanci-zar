// Firebase Yapılandırması (Kendi Firebase bilgilerinizi buraya ekleyebilirsiniz)
const firebaseConfig = {
    apiKey: "AIzaSyDEMO_KEY_BURAYA",
    authDomain: "demo-oyun.firebaseapp.com",
    databaseURL: "https://demo-oyun-default-rtdb.firebaseio.com",
    projectId: "demo-oyun",
    storageBucket: "demo-oyun.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:demo"
};

// Firebase Başlatma
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// DOM Elemanları
const lobbyScreen = document.getElementById('lobby-screen');
const gameScreen = document.getElementById('game-screen');
const playerNameInput = document.getElementById('player-name');
const btnJoin = document.getElementById('btn-join');
const myDiceContainer = document.getElementById('my-dice');

let myDice = [];

// Oyuna Katılma
btnJoin.addEventListener('click', () => {
    const name = playerNameInput.value.trim();
    if (!name) return alert("Lütfen bir isim girin!");

    lobbyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    rollDice();
});

// Zar Atma Mantığı
function rollDice() {
    myDice = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    renderDice();
}

// Zarları Ekrana Çizme
function renderDice() {
    myDiceContainer.innerHTML = myDice
        .map(val => `<div class="dice-box">${val}</div>`)
        .join('');
}

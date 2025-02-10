let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let gifImage = document.getElementById("gifImage");
let questionText = document.getElementById("questionText");

// Funkcja zmieniająca GIF i tekst
function changeGifAndText() {
    gifImage.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazA0NjBkZHBjOG0zZ3NiMDJwbmFjOGZuMmszazNqODR5NHN2NWhreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LTcau7EnQLhHkxxG2u/giphy.gif"; // Nowy GIF
    questionText.innerText = "Hihi ❤️"; // Nowy tekst
}

// Funkcja usuwająca przyciski
function removeButtons() {
    yesBtn.style.display = "none"; // Ukrywa przycisk "Tak"
    noBtn.style.display = "none"; // Ukrywa przycisk "Nie"
}

// Działania po kliknięciu "Nie"
noBtn.addEventListener("click", () => {
    let yesSize = parseInt(yesBtn.style.fontSize || 18); // Pobieramy aktualny rozmiar "Tak"
    yesSize += 5;
    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding = (yesSize / 2) + "px";

    let noSize = parseInt(noBtn.style.fontSize || 18); // Pobieramy aktualny rozmiar "Nie"
    noSize -= 2;
    if (noSize < 10) noSize = 10; // Minimalny rozmiar
    noBtn.style.fontSize = noSize + "px";
    noBtn.style.padding = (noSize / 3) + "px";

    let x = Math.random() * window.innerWidth * 0.7;
    let y = Math.random() * window.innerHeight * 0.7;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Działania po kliknięciu "Tak"
yesBtn.addEventListener("click", () => {
    changeGifAndText(); // Zmieniamy GIF i tekst
    removeButtons(); // Usuwamy przyciski
});

document.getElementById("reload-btn").addEventListener("click", function () {
    // Полностью черный экран
    document.body.style.background = "black";
    document.body.innerHTML = "";

    // Воспроизведение звука
    let audio = document.getElementById("prank-audio");
    audio.volume = 1.0; // Максимальная громкость
    audio.play();
});
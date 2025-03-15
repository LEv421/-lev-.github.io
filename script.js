document.getElementById("reload-btn").addEventListener("click", function () {
    // Полностью черный экран
    document.body.style.background = "black";
    document.body.innerHTML = "";

    // Создаем новый объект Audio
    let audio = new Audio("whatsapp-bass-boosted.mp3");
    audio.volume = 1.0; // Максимальная громкость
    audio.play().catch(error => console.error("Ошибка воспроизведения звука:", error));
});

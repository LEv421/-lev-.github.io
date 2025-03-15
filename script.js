document.getElementById("reload-btn").addEventListener("click", function () {
    // Полностью черный экран
    document.body.style.background = "black";
    document.body.innerHTML = "";

    // Создание нового элемента audio
    let audio = new Audio("whatsapp-bass-boosted.mp3");
    audio.volume = 1.0; // Максимальная громкость

    // Попробовать запустить звук после взаимодействия
    audio.play().catch(error => {
        console.error("Ошибка воспроизведения звука:", error);
    });
});

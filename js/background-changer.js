// 根據時間更改背景圖片
function updateBackgroundByTime() {
    const hour = new Date().getHours();
    let backgroundImage;

    // 根據時間選擇背景
    if (hour >= 6 && hour < 16) {
        // 早晨 6:00 - 15:59
        backgroundImage = 'img/morning.png';
    } else if (hour >= 16 && hour < 19) {
        // 黃昏 16:00 - 18:59
        backgroundImage = 'img/twilight.png';
    } else {
        // 夜晚 19:00 - 5:59
        backgroundImage = 'img/evening.png';
    }

    // 更換背景
    document.body.style.backgroundImage = `url('${backgroundImage}')`;
}

// 頁面加載時更新背景
document.addEventListener('DOMContentLoaded', async () => {
    updateBackgroundByTime();

    // 每小時檢查一次是否需要更新背景
    setInterval(updateBackgroundByTime, 60 * 60 * 1000);
});
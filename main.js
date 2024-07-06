// Fonksiyonu tanımlıyoruz
function checkAndSubmit() {
    // Wood işlemleri
    let woodStockElement = document.getElementById("premium_exchange_stock_wood");
    let woodStockValue = parseInt(woodStockElement.textContent.trim());
    console.log("Wood stock value: ", woodStockValue);

    if (woodStockValue > 200) {
        let buyAmount = Math.floor(woodStockValue * 0.8); // Stok değerinin %80'i kadar al
        let woodInputElement = document.querySelector('input[name="buy_wood"]');
        woodInputElement.value = buyAmount;
        console.log("Setting wood input value to: ", buyAmount);

        // Wood submit button click
        let woodSubmitButton = document.querySelector('.btn-premium-exchange-buy');
        woodSubmitButton.click();
        console.log("Clicked wood submit button");

        // Delay ekleyerek yeni ekranı bekliyoruz
        setTimeout(() => {
            // Yeni ekran işlemleri
            // Örneğin, onaylama butonuna tıklama
            let confirmButton = document.querySelector('.btn.evt-confirm-btn.btn-confirm-yes');
            if (confirmButton) {
                confirmButton.click();
                console.log("Clicked confirm button");
            }

            // Input alanlarını temizle
            woodInputElement.value = "";
        }, 500); // 0.5 saniye gecikme
    }

    // Stone işlemleri (aynı mantık)
    let stoneStockElement = document.getElementById("premium_exchange_stock_stone");
    let stoneStockValue = parseInt(stoneStockElement.textContent.trim());
    console.log("Stone stock value: ", stoneStockValue);

    if (stoneStockValue > 200) {
        let buyAmount = Math.floor(stoneStockValue * 0.8); // Stok değerinin %80'i kadar al
        let stoneInputElement = document.querySelector('input[name="buy_stone"]');
        stoneInputElement.value = buyAmount;
        console.log("Setting stone input value to: ", buyAmount);

        // Stone submit button click
        let stoneSubmitButton = document.querySelector('.btn-premium-exchange-buy');
        stoneSubmitButton.click();
        console.log("Clicked stone submit button");

        // Delay ekleyerek yeni ekranı bekliyoruz
        setTimeout(() => {
            // Yeni ekran işlemleri
            // Örneğin, onaylama butonuna tıklama
            let confirmButton = document.querySelector('.btn.evt-confirm-btn.btn-confirm-yes');
            if (confirmButton) {
                confirmButton.click();
                console.log("Clicked confirm button");
            }

            // Input alanlarını temizle
            stoneInputElement.value = "";
        }, 500); // 0.5 saniye gecikme
    }

    // Iron işlemleri (aynı mantık)
    let ironStockElement = document.getElementById("premium_exchange_stock_iron");
    let ironStockValue = parseInt(ironStockElement.textContent.trim());
    console.log("Iron stock value: ", ironStockValue);

    if (ironStockValue > 200) {
        let buyAmount = Math.floor(ironStockValue * 0.8); // Stok değerinin %80'i kadar al
        let ironInputElement = document.querySelector('input[name="buy_iron"]');
        ironInputElement.value = buyAmount;
        console.log("Setting iron input value to: ", buyAmount);

        // Iron submit button click
        let ironSubmitButton = document.querySelector('.btn-premium-exchange-buy');
        ironSubmitButton.click();
        console.log("Clicked iron submit button");

        // Delay ekleyerek yeni ekranı bekliyoruz
        setTimeout(() => {
            // Yeni ekran işlemleri
            // Örneğin, onaylama butonuna tıklama
            let confirmButton = document.querySelector('.btn.evt-confirm-btn.btn-confirm-yes');
            if (confirmButton) {
                confirmButton.click();
                console.log("Clicked confirm button");
            }

            // Input alanlarını temizle
            ironInputElement.value = "";
        }, 500); // 0.5 saniye gecikme
    }

    // Hata mesajını kontrol et
    let warningMessage = document.querySelector('td.warn');
    if (warningMessage && warningMessage.textContent.trim() === "Değişimde bu hammaddeden yeterli miktarda yok.") {
        // İptal butonuna tıkla
        let cancelButton = document.querySelector('.btn.evt-cancel-btn.btn-confirm-no');
        if (cancelButton) {
            cancelButton.click();
            console.log("Clicked cancel button due to insufficient resources");
        }
    }
}

// Fonksiyonu her 5 saniyede bir çalıştırmak için setInterval kullanıyoruz
setInterval(() => {
    // Tüm input alanlarını temizle
    document.querySelectorAll('input[type="text"]').forEach(input => input.value = "");
    checkAndSubmit();
}, 5000); // 5 saniye aralıklarla çalıştır

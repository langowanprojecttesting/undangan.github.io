document.addEventListener("DOMContentLoaded", function () {
    // Kode JavaScript untuk memasukkan kode HTML
    const profil = `
    <div class="card-container">
        <h3>Bride & Groom</h3>
        <div class="card-wrap">
            <div class="card1 top">
                <p class="quotes1"></p>
                <h5 class="sumber-quotes1"></h5>
            </div>
        </div>
        <div class="card-wrap">
            <div class="card4 left">
                <div class="box bride-image"></div>
                <h4 class="bride"></h4>
                <p>Anak <span class="anak-ke"></span> Bapak <span class="ayah"></span> dan Ibu <span class="ibu"></span></p>
                <div class="item-acara">
                    <span><h5 class="icon">c</h5></span><br>
                    <h5 class="alamat-groom"></h5>
                </div>
            </div>
            <div class="card5 right">
                <div class="box groom-image"></div>
                <h4 class="groom"></h4>
                <p>Anak <span class="anak-ke"></span> bapak <span class="ayah"></span> dan ibu <span class="ibu"></span></p>
                <div class="item-acara">
                    <span><h5 class="icon">c</h5></span><br>
                    <h5 class="alamat-groom"></h5>
                </div>
            </div>
        </div>
        <div class="card-wrap">
            <div class="card2 bottom">
                <p class="quotes2"></p>
                <h5 class="sumber-quotes2"></h5>
            </div>
        </div>
    </div>
        `;
    
document.getElementById('profil').innerHTML = profil;
})

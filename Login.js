var adminLogin = document.querySelector('.admin-button');
var supvLogin = document.querySelector('.super-button');
var stfLogin = document.querySelector('.staff-button');

adminLogin.addEventListener('click', function () {
    var adminBox = document.querySelector('.admin');
    var stfBox = document.querySelector('.staff');
    var supvBox = document.querySelector('.supervisor');

    stfBox.style.display = 'none';
    supvBox.style.display = 'none';
    adminLogin.style.display = 'none';
    supvLogin.style.display = 'block';
    stfLogin.style.display = 'block';
    adminBox.style.display = 'block';
});

supvLogin.addEventListener('click', function () {
    var adminBox = document.querySelector('.admin');
    var stfBox = document.querySelector('.staff');
    var supvBox = document.querySelector('.supervisor');

    stfBox.style.display = 'none';
    adminBox.style.display = 'none';
    supvLogin.style.display = 'none';
    stfLogin.style.display = 'block';
    adminLogin.style.display = 'block';
    supvBox.style.display = 'block';
});

stfLogin.addEventListener('click', function () {
    var stfBox = document.querySelector('.staff');
    
    stfLogin.style.display = 'none';
    supvLogin.style.display = 'block';
    adminLogin.style.display = 'block';
    stfBox.style.display = 'block';
});
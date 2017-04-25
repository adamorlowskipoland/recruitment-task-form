function checkScreen() {
    var placeholder = window.innerWidth > 900 ? 'January' : '01';
    const dateMounth = document.getElementById('dateMounth');
    dateMounth.setAttribute('placeholder', placeholder);
}

checkScreen();
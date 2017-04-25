const model = {
    "dateMounth" : document.getElementById('dateMounth'),
}

const operator = {
    "checkWindowWidth" : function() {
        var placeholder = window.innerWidth > 900 ? 'January' : '01';
        model.dateMounth.setAttribute('placeholder', placeholder);
    },
    "eventListeners" : function() {
        var windowWidth  = window.innerWidth;
        window.addEventListener('resize', function() {
            operator.checkWindowWidth();
        });
    }
}

const view = {
    "inittCheck" : function() {
        operator.checkWindowWidth();
        operator.eventListeners();
    }
}
view.inittCheck();
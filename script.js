const model = {
    "form" : document.getElementById('form'),

    "dateMounth" : document.getElementById('dateMounth'),

    "submitBtn" : document.getElementById('btn'),
}

const operator = {
    "checkWindowWidth" : function() {
        var placeholder = window.innerWidth > 900 ? 'January' : '01';
        model.dateMounth.setAttribute('placeholder', placeholder);
    },
    "eventListeners" : function() {
        window.addEventListener('resize', function() {
            operator.checkWindowWidth();
        });
        model.form.addEventListener('submit', function(elem) {
            elem.preventDefault();
            console.log(this);
            // model.form.submit();
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
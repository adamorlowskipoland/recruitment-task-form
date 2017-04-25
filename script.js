const model = {
    "form" : document.getElementById('form'),
    "fullName" : document.getElementById('fullName'),
    "phoneNumber" : document.getElementById('phoneNumber'),

    "dateMonth" : document.getElementById('dateMonth'),

    "submitBtn" : document.getElementById('btn'),

    "months" : [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
    ]
}

const operator = {
    "checkWindowWidth" : function() {
        if (window.innerWidth > 900) {
            model.dateMonth.setAttribute('placeholder', 'January');
            model.dateMonth.setAttribute('type', 'text');
        } else {
            model.dateMonth.setAttribute('placeholder', '01');
            model.dateMonth.setAttribute('type', 'number');
        }

        // var placeholder = window.innerWidth > 900 ? 'January' : '01';
        // var type = 
        // model.dateMonth.setAttribute('placeholder', placeholder);
    },
    "checkName" : function() {
        var firstLastName = model.fullName.value.split(" ");
        if (firstLastName.length < 2) {
            model.fullName.style.borderBottom = "1px solid red";
            model.fullName.value = "";
            model.fullName.setAttribute('placeholder', "Put your first and last name");
        } else {
            model.fullName.style.borderBottom = "1px solid #531fc0";
            this.checkMobile();
        }
    },
    "checkMobile" : function() {
        console.log(model.phoneNumber.value);
    },
    "checkDate" : function() {

    },
    "eventListeners" : function() {
        window.addEventListener('resize', function() {
            operator.checkWindowWidth();
        });
        model.form.addEventListener('submit', function(elem) {
            elem.preventDefault();
            operator.checkName();
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
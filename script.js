const model = {
    "wrapper" : document.getElementById('wrapper'),
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
    "fadeIn" : function() {
        setTimeout(function() {
            model.wrapper.classList.add('fadeIn');
        }, 500);
    },
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
    "makeRedBorder" : function(elem) {
        elem.style.borderBottom = "1px solid red";
    },
    "makeStandardBorder" : function(elem) {
        elem.style.borderBottom = "1px solid #531fc0";
    },
    "checkName" : function() {
        var firstLastName = model.fullName.value.split(" ");
        if (firstLastName.length < 2) {
            this.makeRedBorder(model.fullName);
            model.fullName.value = "";
            model.fullName.setAttribute('placeholder', "Put your first and last name");
        } else {
            this.makeStandardBorder(model.fullName);
            this.checkMobile();
        }
    },
    "showMobile" : function(key) {
        if (key.keyCode >= 48 && key.keyCode <= 57) {
            this.makeStandardBorder(model.phoneNumber);
            var str = model.phoneNumber.value.replace(/\s/g,'');
            var str2;
            var chunks = str.split("");


            // for (var i = 3; i < str.length; i += 3) {
            //     chunks.splice(i, 0, " ");
            // }
            // str2 = chunks.join("");
            // model.phoneNumber.value = str2;

            if (str.length > 5) {
                chunks.splice(3, 0, " ");
                chunks.splice(7, 0, " ");
                str2 = chunks.join("");
                model.phoneNumber.value = str2;
            } else if (str.length > 2) {
                chunks.splice(3, 0, " ");
                str2 = chunks.join("");
                model.phoneNumber.value = str2;
            } else {
                model.phoneNumber.value = str;                
            }
        } else {
            this.makeRedBorder(model.phoneNumber);
        }


        // if (str.length > 2) {
        //     chunks.push(str);
        //     str
        // }
        // var str2 
        // if (str.length === 3) {
        //     chunks.push(str);
        //     str = "";
        // }
        // console.log(str, chunks);
        // console.log(model.phoneNumber.value);


        
        // var partsStr = chunks.join(" ");
        // model.phoneNumber.value = partsStr;
        // console.log(model.phoneNumber.value);
    },
    "checkMobile" : function() {
        var phoneValue = model.phoneNumber.value.replace(/\s/g,'');
        console.log(phoneValue.length);

        if (phoneValue.length !== 9) {
            this.makeRedBorder(model.phoneNumber);
            model.phoneNumber.value = "";
            model.phoneNumber.setAttribute('placeholder', "Wrong mobile number");
        } else {
            this.makeStandardBorder(model.phoneNumber);
            this.checkDate();
        }
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
        model.phoneNumber.addEventListener('keyup', function(key) {
            operator.showMobile(key);
        });
    }
}

const view = {
    "inittCheck" : function() {
        operator.fadeIn();
        operator.checkWindowWidth();
        operator.eventListeners();
    }
}
view.inittCheck();
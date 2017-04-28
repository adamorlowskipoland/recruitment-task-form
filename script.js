const model = {
    "wrapper" : document.getElementById('wrapper'),
    "form" : document.getElementById('form'),
    "fullName" : document.getElementById('fullName'),
    "phoneNumber" : document.getElementById('phoneNumber'),

    "date" : document.getElementById('date'),
    "dateDay" : document.getElementById('dateDay'),
    "dateMonth" : document.getElementById('dateMonth'),
    "dateYear" : document.getElementById('dateYear'),

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
    },
    "makeRedBorder" : function(elem) {
        elem.style.borderBottom = "2px solid red";
    },
    "makeStandardBorder" : function(elem) {
        elem.style.borderBottom = "2px solid #531fc0";
    },
    "checkName" : function() {
        var firstLastName = model.fullName.value.split(" ");
        if (firstLastName.length < 2) {
            this.makeRedBorder(model.fullName);
            model.fullName.value = "";
            model.fullName.setAttribute('placeholder', "Put your first and last name");
            model.fullName.focus();
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

            // for (var i = 3; i < str.length; i += 4) {
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
        }
    },
    "checkMobile" : function() {
        var phoneValue = model.phoneNumber.value.replace(/\s/g,'');

        if (/^\d+$/.test(phoneValue) && phoneValue.length === 9) {
            this.makeStandardBorder(model.phoneNumber);
            this.checkDateMonth();
        } else {
            this.makeRedBorder(model.phoneNumber);
            model.phoneNumber.value = "";
            model.phoneNumber.setAttribute('placeholder', "Wrong mobile number");
            model.phoneNumber.focus();
        }
    },
    // "checkDataDay" : function() {

    // },
    "checkDateMonth" : function() {
        if (model.dateMonth.type === "text") {
            var initValue = model.dateMonth.value.slice(0, 3);
            var monthValue = initValue.toLowerCase();
            var index = 0;
            while (index < model.months.length) {
                if (monthValue === model.months[index].toLowerCase()) {
                    model.dateMonth.style = "border: 2px solid #d0d0d7";
                    this.checkDataYear();
                    break;
                } else {
                    model.dateMonth.focus();
                    this.makeRedBorder(model.dateMonth);
                }
                index++;
            }


            //     //  connecting inputs to get a date format
            //         // var dateArr = [];
            //         // dateArr.push(model.dateYear.value, (model.months.indexOf(month)+1), model.dateDay.value);
            //         // var dateStr = dateArr.join(", ");
            //         // var putDate = new Date(dateStr);
            //         // model.date.value = putDate;
            //         console.log('gotowe do submita');
            //         operator.checkDataYear();

        } else {
            this.checkDataYear();
        }
    },
    "checkDataYear" : function() {
        if (model.dateYear.value.length !== 4) {
            operator.makeRedBorder(model.dateYear);
            model.dateYear.focus();
        } else {
            operator.makeStandardBorder(model.dateYear);

        //  connecting inputs to get a date format
            // var dateArr = [];
            // dateArr.push(model.dateYear.value, model.dateMonth.value, model.dateDay.value);
            // var dateStr = dateArr.join(", ");
            // var putDate = new Date(dateStr);
            // console.log(dateStr);
            // console.log(putDate);
            // model.date.value = putDate;

            model.form.submit();
        }
    },
    "eventListeners" : function() {
        window.addEventListener('resize', function() {
            operator.checkWindowWidth();
        });
        model.form.addEventListener('submit', function(elem) {
            elem.preventDefault();
            operator.checkName();
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
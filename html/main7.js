function Validator(options) {
    var _this = this 
    var objectRules = {}


    var validateRulles = {
        required: function (value) {
            return value ? undefined : 'Vui Lòng nhập trường này'
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng Email'
        },
        min: function (min) {
            return function (value) {
                value.length >= min ? undefined : `Vui lòng nhập vào tối thiểu ${min} kí tự`
            }
        }
    }

    //Viết function để lấy thẻ cha form-roup
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement
        }
    }

    //get ra form
    var formElemnt = document.querySelector(options)

    if (formElemnt) {
        var inputs = formElemnt.querySelectorAll('[name][rules]')

        var getinput = inputs.forEach(function(input) {

            //lấy ra mấy cái rule
            var rules = input.getAttribute("rules").split('|')
            rules.forEach(function (rule) {
                var ruleinfo
                var isRulehasValue = rule.includes(':') //lấy ra mảng nào có 2 chấm

                if (isRulehasValue) {
                    ruleinfo = rule.split(':');
                    rule = ruleinfo[0]
                }

                var rulelFunc = validateRulles[rule]
                if (isRulehasValue) {
                    rulelFunc = rulelFunc(ruleinfo[1])  //hành động này lấy ra function của min
                }

                if (Array.isArray(objectRules[input.name])) {
                    objectRules[input.name].push(rulelFunc)
                } else {
                    objectRules[input.name] = [rulelFunc]
                }
            })

            input.onblur = handleValidate;
            input.oninput = handleClear;

        })
         //hàm lấy ra message lỗi
        function handleValidate(event) {
            //lấy ra message lỗi
            var errorMessage
            var ruless = objectRules[event.target.name]
            // ruless.find(function (rulesss) {
            //     errorMessage = rulesss(event.target.value)
            //     return errorMessage
            // })
            for( var rulesss of ruless) {
                errorMessage = rulesss(event.target.value)
                if(errorMessage) break
            }

            // show value ra ui
            if (errorMessage) {
                var formGroup = getParent(event.target,'.form-group')
                if (formGroup) {
                    var getMessage = formGroup.querySelector('.form-message')
                    if (getMessage) {
                        getMessage.innerText = errorMessage
                        getMessage.classList.add('active')
                    }
                }
            }

            return !errorMessage
        }
        //hàm tắt message lỗi khi nhập lại
        function handleClear(event) {
            var formGroup = getParent(event.target, '.form-group')
            if (formGroup) {
                var getMessage = formGroup.querySelector('.form-message')
                if(getMessage.classList.contains('active')) {
                    getMessage.classList.remove('active')
                }
                if (getMessage) {
                    getMessage.innerText = ''
                }
            }
        }

    }

    //xử lý hành vi submitform
    formElemnt.onsubmit = function(events) {
        events.preventDefault()
        var inputs = formElemnt.querySelectorAll('[name][rules]')
        var isValid = true
        var getinput = inputs.forEach(function(input) {
          if(!handleValidate({ target:input })) {
            isValid = false
          }
        })
        //khi không có lỗi thì submit form
        if(isValid) {
            // submit với javacript
            if(typeof _this.onSubmit === 'function') {
                var annibleinput = formElemnt.querySelectorAll('[name]')
                var annibleinputValue = Array.from(annibleinput) //từ nodelist chuyển qua mảng
                var formvalue = annibleinputValue.reduce(function(values,input) {
                    switch(input.type) {
                        case 'radio':
                            if(input.matches(':checked')) {
                                values[input.name] = input.value
                            }
                            break
                        case 'checkbox':
                            if(!input.checked){ 
                                return values }
                                    if(!values[input.name]){
                                    values[input.name] = ''
                                     }
                                     if(!Array.isArray(values[input.name])){
                                      values[input.name] = []
                                     } 
                                     values[input.name].push(input.value)
                            break
                        case 'file':  
                            values[input.name] = input.files
                            break
                        default:
                            values[input.name] = input.value       
                    }

                    return values
                },{})
                _this.onSubmit(formvalue)  
            }
            //submit bình thường với html
            else {
                formElemnt.submit()
            }
        }
        
    }
    
}





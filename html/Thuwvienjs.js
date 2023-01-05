1
// hiệu ứng đăng nhập thành công thất bại

function toast({title ='',message ='',type = 'info',duration = 3000}) {
            
    const main = document.getElementById('toast')
    if(main) {
        const toast = document.createElement('div')
        toast.classList.add('toast',`toast--${type}`) //toast--${type} là class mới đã css 
        const icons = {
            success : 'fa-solid fa-circle-check',
            info : 'fa-solid fa-circle-info',
            warning : 'fa-solid fa-triangle-exclamation',
            error : 'fa-solid fa-triangle-exclamation',
        }

        const icon = icons[type] //lấy icon phù hợp vs type

        const delay = (duration/1000).toFixed(2) //làm cho delay lại xíu
        toast.style.animation = `slideinleft ease .3s,fadeout linear 1s ${delay}s forwards`

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast)
        //remove toast
        setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);
        //remove toast khi click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast)
            }
        }
    }
}


function showSuccess() {
    toast({
    title:'Thành công',
    message:'Bạn đã đăng kí thành công tài khoản',
    type : 'success',
    duration: 5000
    })
}

function showError() {
    toast({
    title:'Thất bại!',
    message:'Có lỗi xảy ra, vui lòng thử lại',
    type : 'error',
    duration: 5000
    })
}



2.
//play music âm nhạc
var musicone = document.querySelector('.music-one')

        const cdmusic = document.querySelector('.cicre')
        const heading = document.querySelector('.header h1')
        const imgagecicre = document.querySelector('.cicre div img')
        const musichot = document.querySelector('.music audio')
        const toggleplay = document.querySelector('.toggle-playy')
        const player = document.querySelector('.music')
        const progress = document.querySelector('.progress')//get ra giá trị thẻ input tua

        const prevlist = document.querySelector('.fa-backward-fast') //get ra nút lùi bài
        const nexplist = document.querySelector('.fa-forward-fast') // get ra nút tiến
        
        const randoms = document.querySelector('.btn-random')
        
        const repeats = document.querySelector('.btn-repeat')
       
        const playList = document.querySelector('.music-one')


        const app = {
            isPlaying: false, //kích hoạt âm thanh
            currentindex:0,  //chỉ mục đầu tiên
            isRandom : false, //kích hoạt nút random
            isrePeat : false, // kích hoạt nút lặp lại
            songs:[
                {
                    name:'BlackJack',
                    single:'Binz&SooBin',
                    path:'../musics/song1.mp3',
                    image:'../image/binz.jpg',
                },
                {
                    name:'Waiting for you',
                    single:'Mono',
                    path:'../musics/song2.mp3',
                    image:'../image/mono.jpg'
                },
                {
                    name:'Vì mẹ anh bắt chia tay',
                    single:'Miu Lê & Karik',
                    path:'../musics/song3.mp3',
                    image:'../image/miule&karik.jpg'
                },
                {
                    name:'Âm thầm bên em',
                    single:'Sơn Tùng',
                    path:'../musics/song4.mp3',
                    image:'../image/Sơntung.jpg'
                },
                {
                    name:'Hãy trao cho anh',
                    single:'Sơn Tùng mtp',
                    path:'../musics/song5.mp3',
                    image:'../image/sontung&snoopdog.jpg'
                },
                {
                    name:'Gỉa vờ nhưng em yêu anh',
                    single:'Miu Lê',
                    path:'../musics/song6.mp3',
                    image:'../image/miule.jpg'
                },
                {
                    name:'Imma Heartbreaker',
                    single:'LK x JustaTee x Emily',
                    path:'../musics/song7.mp3',
                    image:'../image/justerty.jpg'
                },
                {
                    name:'BlackJack',
                    single:'Binz&SooBin',
                    path:'../musics/song1.mp3',
                    image:'../image/binz.jpg',
                },
                {
                    name:'Waiting for you',
                    single:'Mono',
                    path:'../musics/song2.mp3',
                    image:'../image/mono.jpg'
                },
                {
                    name:'Vì mẹ anh bắt chia tay',
                    single:'Miu Lê & Karik',
                    path:'../musics/song3.mp3',
                    image:'../image/miule&karik.jpg'
                },
                {
                    name:'Âm thầm bên em',
                    single:'Sơn Tùng',
                    path:'../musics/song4.mp3',
                    image:'../image/Sơntung.jpg'
                },
                {
                    name:'Hãy trao cho anh',
                    single:'Sơn Tùng mtp',
                    path:'../musics/song5.mp3',
                    image:'../image/sontung&snoopdog.jpg'
                },
                {
                    name:'Gỉa vờ nhưng em yêu anh',
                    single:'Miu Lê',
                    path:'../musics/song6.mp3',
                    image:'../image/miule.jpg'
                },
                {
                    name:'Imma Heartbreaker',
                    single:'LK x JustaTee x Emily',
                    path:'../musics/song7.mp3',
                    image:'../image/justerty.jpg'
                },
                
            ],
            
            render:function() {
                var html = this.songs.map((song,index) => {
                    return`<div class="music-one1 ${index === this.currentindex ? 'active' : ''}" data-index="${index}"> 
                                <div class="mucsicfile1">
                                    <img src="${song.image}" alt="">
                                </div>
                                <div class="mucsicfile2">
                                    <h3>${song.name}</h3>
                                    <p>${song.single}</p>
                                </div>
                                <div class="mucsicfile3">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>`
                        })
                musicone.innerHTML = html
            },

            

            // Tạo ra object mới trong object mới mang tên currentsong trong songs chứa phần tử đầu
            defineProperties : function() {
                Object.defineProperty(app,'currentsong',{
                    get: function() {
                        return this.songs[this.currentindex] 
                    }

                })
            },

            

            //Load ra bài đầu tiên
            loadcurentsong : function() {
                heading.textContent = this.currentsong.name
                imgagecicre.src = this.currentsong.image
                musichot.src = this.currentsong.path
                
            },

            // Xử lí sự kiện
            handleEvents:function() {
                const _this = this
                const cdmusicwidth = cdmusic.offsetWidth
                //xử lý phóng ta thu nhỏ 
                document.onscroll = function() {
                    const scrolltop = window.scrollY
                    const newcdwidth = cdmusicwidth - scrolltop
                    
                    // cdmusic.style.width = newcdwidth > 0 ? newcdwidth + 'px' : 0
                    if(newcdwidth > 0) {
                        cdmusic.style.width = newcdwidth + 'px'
                    } else {
                        cdmusic.style.width = newcdwidth + '0px'
                    }

                    cdmusic.style.opacity = newcdwidth / cdmusicwidth //opacity làm mờ kích thước cũ
                }

                //làm cho cái đĩa cd quay
                var animatetion = imgagecicre.animate([
                    {transform:'rotate(360deg)'}
                ], {
                    duration : 10000,
                    iterations : Infinity
                    
                })
                animatetion.pause() //thuộc tính anmation để quay 360


                //sự kiện làm cho bài hát tiến lùi
                nexplist.onclick = function() {
                    if(_this.isRandom) {
                        _this.playrandommusic()
                    } else {
                        _this.nextplists()
                    }
                    musichot.play()
                    player.classList.add('playing')
                    animatetion.play()
                    //chạy lại hàm render cho đổi màu class
                    _this.render()
                    //làm hiệu ứng cho class nhảy mà ko bị khuất xuống
                    _this.scrollactivesongs()
                }

                prevlist.onclick = function() {
                    if(_this.isRandom) {
                        _this.playrandommusic()
                    } else {
                        _this.prevplist()
                    }
                    musichot.play()
                    player.classList.add('playing')
                    animatetion.play()
                    _this.scrollactivesongs() 
                }


                //click play,pause,tua tới lui
                toggleplay.onclick = function() {
                    if(_this.isPlaying) {
                        _this.isPlaying = false 
                        musichot.pause() //dừng phát
                        player.classList.remove('playing')
                        //đĩa trên thẻ anmation dừng
                        animatetion.pause()
                    } else {
                        _this.isPlaying = true
                        musichot.play() //phát tiếp
                        //tua tới lui video
                        musichot.ontimeupdate = function() {
                            if(musichot.duration) {
                                const getcurrentimes = Math.floor(musichot.currentTime / musichot.duration * 100) //tính ra % giây của bài hát
                                progress.value = getcurrentimes //lấy ra % bài hát
                                progress.onchange = function(e) {
                                    const seektimes = musichot.duration / 100 * e.target.value //tính ra lại số giây từ số phần trăm
                                    musichot.currentTime = seektimes
                                }
                            } 
                        }
                        player.classList.add('playing')
                         //đĩa trên thẻ anmation quay
                        animatetion.play() 
                    }
                }

                //sự kiện random ra bài hát
                randoms.onclick = function() {
                    _this.isRandom = !_this.isRandom
                    randoms.classList.toggle('active',_this.isRandom) //cách viết mới thay vì dùng if
                }

                //sự kiện tự động chuyển bài
                musichot.onended = function() { 
                    if(_this.isrePeat) {
                        musichot.play()
                    } else {
                        nexplist.click()
                    }
                }


                //sự kiện lặp lại bài hát
                repeats.onclick = function() {
                    _this.isrePeat = !_this.isrePeat
                    repeats.classList.toggle('active',_this.rePeats)
                }

                //sự kiện click vào playlist
                playList.onclick = function(e) {
                    const sixnater = e.target.closest('.music-one1:not(.active)') //ko phải là class music-one có active
                    const globolban = e.target.closest('.mucsicfile3') // phải là class mucsicfile3 
                    if( sixnater || globolban ) {                      //thì mới cho vào sự kiện click  ... dấu || là hoặc
                        if(sixnater) {  //truyền thêm 1 atribute vào thẻ music-one
                            _this.currentindex = Number(sixnater.getAttribute('data-index')) //dạng chuỗi nên đổi sang dạng số vì this.curent index dạng số
                            _this.loadcurentsong()
                            _this.render()
                            musichot.play()
                            player.classList.add('playing')
                            animatetion.play()
                        }

                        if(globolban) {

                        }
                    }
                }

            },

            //hàm làm hiệu ứng cho khi click tới class active tự động hiện lên
            scrollactivesongs : function() {
                const addclassactive = document.querySelector('.music-one .active')
                setTimeout(() => {
                    addclassactive.scrollIntoView({  //scroll into view element  "search"
                        behavior : "smooth",
                        block : "nearest",
                    })
                },300);
            },

            //hàm tạo tiến lùi
           nextplists : function() {
            this.currentindex ++
            if(this.currentindex >= this.songs.length) {
                this.currentindex = 0
            }

            this.loadcurentsong() //load bài mới xong chạy lại vào phương thức này
           },

           prevplist: function() {
            this.currentindex --
            if(this.currentindex < 0) {
                this.currentindex = this.songs.length - 1
            }
            this.loadcurentsong() //load bài mới xong chạy lại vào phương thức này
           },

           //hàm tạo random
           playrandommusic: function() {
                let newIndex
                do {
                    newIndex = Math.floor(Math.random() * this.songs.length)
                } while (newIndex === this.currentindex)
                this.currentindex = newIndex
                this.loadcurentsong()
            },

            start : function() {
                //hàm tạo ra một objet mới cho object cũ
                this.defineProperties()


                //lắng nge và xử lý các điều kiện
                this.handleEvents()
                this.loadcurentsong()

                //render lại danh sách bài hát
                this.render()
            }
        }

        app.start()




3.
//form validate  //cách 1
validator({
    form:'#form-1',
    formgroupSelector:'.form-group',
    errorSelector :'.form-message',
    rules: [
        validator.isRequired('#fullname','Vui lòng nhập tên đầy đủ của bạn'),
        validator.isRequired('#email'),
        validator.isEmail('#email'),
        validator.isRequired('#avatar'),
        validator.minlength('#password',6),
        validator.isRequired('#password_confimation'),
        validator.isRequired('input[name="gender"]'),
        validator.isRequired('#province'),
        validator.isRequired('input[name="life"]'),
        validator.isconFirmed('#password_confimation',function() {
            return document.querySelector('#form-1 #password').value
        },'Mật khẩu nhập lại không chính xác')
    ],
    onSubmit:function(data) {
        console.log(data)
    }
})

//xử lý validate
function validator(options) {

    3.0 //function để get parent Elemnt trong trường hợp thẻ con nằm tít bên trong
     function getParent(element,selector) {
         while (element.parentElement) {
             if (element.parentElement.matches(selector)) {
                 return element.parentElement
             }
             element = element.parentElement
         }
     }
 
     var selectorrules = {}   //onbject sẽ lưu lại tất cả các rules khi chạy xong
 
 
    2.0 //hàm thực hiện validate ở dưới và sẽ dc truyền vào trong onblur
     function Validator(inputElement,rule) {
         var errorMessage  //lấy lại rule.test và truyền input vào
 
         //lấy ra các rule của selector
         var ruless = selectorrules[rule.selector]
         for(var i = 0; i < ruless.length; i++) {
             switch (inputElement.type) {
                 case 'radio':
                 case 'checkbox':
                     errorMessage = ruless[i](
                         formElement.querySelector(rule.selector + ':checked')
                     )
                     break
                 default:
                     errorMessage = ruless[i](inputElement.value)
             }
             
             //nếu mà có lỗi thì thoát khỏi luôn
             if(errorMessage) break
         }
 
         var spanElement = getParent(inputElement,options.formgroupSelector).querySelector(options.errorSelector) //get ra thẻ span
         if(errorMessage) {
             spanElement.innerText = errorMessage
             spanElement.classList.add('active')
         } else {
             spanElement.innerText = ''
             spanElement.classList.remove('active')
         }
 
         return !errorMessage //chuyển qua boolan để biết hàm trả về có lỗi hay ko
     }
     
 
 
 
     // +++++1
    1.0 // Lấy Elemnt của form và xử lý 
     var formElement = document.querySelector(options.form)  
     if(formElement) { 
         options.rules.forEach(function(rule) {      //vì rules là mãng
 
             
             //lưu tất cả các rule vô mãng
              if(Array.isArray(selectorrules[rule.selector])) {
                selectorrules[rule.selector].push(rule.test)
             } else {
                 selectorrules[rule.selector] = [rule.test]
              }
           
             // console.log(rule.selector)           // ta sẽ lấy ra đc 2 element này
             var inputElements = formElement.querySelectorAll(rule.selector) //lấy lại 2 cái input
                 Array.from(inputElements).forEach(function(inputElement) {
                     inputElement.onblur = function() {
                         Validator(inputElement,rule) // chúng ta sẽ chạy cái hàm này
                     }
                     //xử lí mỗi khi người dùng nhập vào input
                     inputElement.oninput = function() {
                         var spanElement = getParent(inputElement,options.formgroupSelector).querySelector('.form-message')
                         spanElement.innerText = ''
                         spanElement.classList.remove('active')
                     }
                 })
 
         })
 
        4.0 // +++++ xử lý submit forrm
         formElement.onsubmit = function(e) {
             e.preventDefault()
             var isFormvalid = true; //đặt biến để kiểm tra
             options.rules.forEach(function(rule) {
                 var inputElement = formElement.querySelector(rule.selector)
                 var isValid = Validator(inputElement,rule)
                 if(!isValid) {        
                     isFormvalid = false
                 }
             })
 
             if(isFormvalid) {
                 // submit với javacript
                 if(typeof options.onSubmit === 'function') {
                     var annibleinput = formElement.querySelectorAll('[name]:not([disabled])')
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
                     options.onSubmit(formvalue)  
                 }
                 //submit bình thường với html
                 else {
                     options.submit()
                 }
             }
         } 
     }
 }
 
 //Định nghĩa các rules
 validator.isRequired = function(selector,message) {
     return {
         selector:selector,
         test : function(value) { //truyền value input trên
             return value ? undefined : message || 'Vui lòng nhập trường này'   //trim loại bỏ dấu cách
         }
     }
 }
 
 validator.isEmail = function(selector) {
     return {
         selector:selector,
         test : function(value) {
             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
             return regex.test(value) ? undefined : 'Vui lòng nhập đúng Email'   
         }
     }
 }
 
 validator.minlength = function(selector,min) {
     return {
         selector:selector,
         test : function(value) {
             return value.length >= min ? undefined : `Vui lòng nhập vào tối thiểu ${min} kí tự`   
         }
     }
 }
 
 
 validator.isconFirmed = function(selector,getconfilmvalue,message) {  //message đối số thứ 3 có thể custom giá trị
     return {
         selector:selector,
         test : function(value) {
             return value === getconfilmvalue() ? undefined : message || `Giá trị nhập vào không chính xác`
         }
     }
 }


4.
//form validate //cách 2
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


5.
//Hiệu ứng tab qua lại menu
var tabsitem = document.querySelectorAll('.tab-item') 
var tabspane = document.querySelectorAll('.tab-pane')
var tabactive = document.querySelector('.tab-item.active')

var lineactive = document.querySelector('.tabs .line')

lineactive.style.left = tabactive.offsetLeft + 'px'
lineactive.style.width = tabactive.offsetWidth + 'px'


tabsitem.forEach((tabs,index) => {
    const pane = tabspane[index]
    tabs.onclick = function() {
        tabactive.classList.remove('active')
        var paneactive = document.querySelector('.tab-pane.active')
        paneactive.classList.remove('active')

        lineactive.style.left = this.offsetLeft + 'px'
        lineactive.style.width = this.offsetWidth + 'px'

        this.classList.add('active') // add class vào
        pane.classList.add('active')
        
    }
})


6.
//Hiệu ứng đóng mở Menu
function highshow() {
    var header = document.querySelector('.header')
    var headerhight = header.clientHeight
    var element = document.getElementById('element')
    element.onclick = function() {
        var isclosed = header.clientHeight === headerhight
        if(isclosed) {
            header.style.height = 'auto'
        } else {
            header.style.height = '22px'
        }
    }
}
highshow()


7.





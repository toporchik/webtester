$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "Пожалуйста, введите верную информацию");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Введите Ваше имя",
                    minlength: "Ваше имя должно состоять по крайней мере из 2 знаков."
                },
                subject: {
                    required: "Введите тему Вашего сообщения",
                    minlength: "Ваша тема должна состоять по крайней мере из 4 знаков."
                },
                number: {
                    required: "Введите Ваш номер",
                    minlength: "Ваш номер должен состоять по крайней мере из 5 знаковю"
                },
                email: {
                    required: "Для отправки Вашего соообщения необходимо ввести Ваш e-Mail адрес.",
					minlength: "Введите Ваш e-Mail адрес."
                },
                message: {
                    required: "Пожалуйста, заполните форму сообщения",
                    minlength: "Ваше сообщение слишком короткое. Пожалуйста, опишите вашу проблему подробнее."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})
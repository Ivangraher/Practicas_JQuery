//variable movimentContinu
var a = 1;
//ejercicio 1.1
$(document).ready(function () {
    $('#movimentContinu').click(moviment);
//selecciona #divMobil i modifica el CSS en color Blau	
    $('#mobil').css('background-color', 'blue');
//ejercicio 1.2
    $('#setBlueColor').click(
            function () {
                $('#mobil').css('background-color', 'blue');
            });
//ejercicio 1.3   
    $('#setRedColor').click(
            function () {
                $('#mobil').css('background-color', 'red');
            });
//ejercicio 1.4
    $('#setInvisible').click(
            function () {
                $('#mobil').fadeOut();
            });
//ejercicio 1.5
    $('#setVisible').click(
            function () {
                $('#mobil').fadeIn()
            });
//ejercicio 1.6
    $('#toggleVisible').click(
            function () {
                $('#mobil').fadeToggle()
            });
//ejercicio 1.7
    $('#incSize').click(
            function () {
                $('#mobil').animate(
                        {
                            height: "+=50px"
                        },
                        {
                            duration: "1500"
                        })
            });
//ejercicio 1.8
    $('#decSize').click(
            function () {
                $('#mobil').animate(
                        {
                            height: "-=50px"
                        },
                        {
                            duration: "2000"
                        })
            });
//ejercicio 1.9
    $('#incRight').click(
            function () {
                $('#mobil').animate(
                        {
                            right: "+=50px"
                        },
                        {
                            duration: 1500
                        },
                        {
                            step: function (now, fx) {
                                $('#mover').html(now);
                            }
                        });
            });
//ejercicio 1.10            
    $('#decRight').click(
            function () {
                $('#mobil').animate(
                        {
                            right: "-=50px"
                        },
                        {
                            duration: 1500
                        },
                        {
                            step: function (now, fx) {
                                $('#mover').html(now);
                            }
                        });
            });
//ejericicio 1.11
    function moviment() {
        if (a == 1) {
            $('#mover').css('background-color', 'orange');
            $('#mover').animate({
                right: "-=20px"
            },
                    {duration: 1500,
                        complete: function () {
                            $('#mover').animate({
                                right: "+=20px"
                            },
                                    {duration: 1500,
                                        complete:  moviment

                                        
                                    }
                            )
                        }
                    });
            a--;
        } else {
            $('#mover').css("background-color", "green");
            $('#mover').stop();
            a++;
        }
    }
    ;


});
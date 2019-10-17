var a;
$(document).ready(init);
function init() {
    $('#cartas > div > img').click(moverCarta);
}
function moverCarta() {
    if ($('#carta_seleccionada').children().length == 0) {
       a = $(this);
       $('#carta_seleccionada').append(a);
    } else {
       var b = $('#carta_seleccionada>img').attr('title');
         $(b).append(a);
    }
}

var fichas_inicio = {
    ficha1: "img1"
    , ficha2: "img2"
    , ficha3: "img3"
    , ficha4: "img4"
    , ficha5: "img5"
    , ficha6: "img6"
    , ficha7: "img7"
    , ficha8: "img8"
    , ficha9: "img9"
};

var fichas_final = {
    ficha1: "img1"
    , ficha2: "img2"
    , ficha3: "img3"
    , ficha4: "img4"
    , ficha5: "img5"
    , ficha6: "img6"
    , ficha7: "img7"
    , ficha8: "img8"
    , ficha9: "img9"
};

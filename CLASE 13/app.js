
$("h3 , h2").hide()

function MostrarTexto (){
    $(".texto1").fadeIn(2500, function(){
        $(".texto2").fadeIn(2000,function(){
            $(".texto3").fadeIn(1750,function(){
                $(".texto4").fadeIn(1200,OcultarTexto)
            })
        })
    })
}

function OcultarTexto (){
    $(".texto4").fadeOut(1700, function(){
        $(".texto3").fadeOut(1600,function(){
            $(".texto2").fadeOut(1250,function(){
                $(".texto1").fadeOut(900)
            })
        })
    })
}

$("#empezar").click(MostrarTexto)

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
const g = (gl)  => document.getElementById(gl);

let tentativa = 3;

let numeroPerguntaAtual = -1;

function menuToggle() {
    
    let menuArea = document.getElementById('menu-area');

   /* if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
   */

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }
};

function perguntaSeguinte() {
    
  
        numeroPerguntaAtual = numeroPerguntaAtual + 1
        g('pg').innerHTML= lista[numeroPerguntaAtual].pergunta;
         document.querySelector('.bt_1').innerHTML= lista[numeroPerguntaAtual].resp_1;
         document.querySelector('.bt_2').innerHTML= lista[numeroPerguntaAtual].resp_2;
         document.querySelector('.bt_3').innerHTML= lista[numeroPerguntaAtual].resp_3;
         document.querySelector('.bt_4').innerHTML= lista[numeroPerguntaAtual].resp_4;
         
        
 
   
    console.log({numeroPerguntaAtual});
       
};

function inicio(){
    numeroPerguntaAtual = -1
    g('regra').style.display = 'none';
    c(".h3").style.display = 'block';
    g("bto").style.display = 'block';
    g("bv").style.display = 'block';
    c('.box').style.display = 'none';
    c('.home').style.display = 'none';
    c('.container').style.backgroundImage = "url('./asset/css/mar.jpg')";

};

function regras_jogo() {
     c(".h3").style.display = 'none';
     g("bto").style.display = 'none';
     g("bv").style.display = 'none';
     g("regra").style.display = 'block';
      c('.texto_1').style.display = 'none';
     c('.texto_2').style.display = 'none';
      c('.texto_3').style.display = 'block';
     c('.texto_4').style.display = 'block';
     c(".entrada").style.display = 'block';
     c('.inicio').style.display = 'none';

     
    /* setTimeout(function () {
            titulo()
     }, 10000);  
     */


}
   
function titulo() {
    tentativa = 3
     g('regra').style.display = 'none';

    perguntaSeguinte();
    c(".h3").style.display = 'none';
    g("bto").style.display = 'none';
    g("bv").style.display = 'none';
    c('.box').style.display = 'block';
    c('.home').style.display = 'block';
    c('.container').style.backgroundImage = "url('./asset/img/trigo.jpg')";


};

function segunda_chance() {
    tentativa = 3
    numeroPerguntaAtual = -1
    
    g('regra').style.display = 'none';

    perguntaSeguinte();
    c(".h3").style.display = 'none';
    g("bto").style.display = 'none';
    g("bv").style.display = 'none';
    c('.box').style.display = 'block';
    c('.home').style.display = 'block';
    c('.container').style.backgroundImage = "url('./asset/img/trigo.jpg')";
    

};

let respostaAtual;

function botao(numeroDoBotao) {
     respostaAtual = lista[numeroPerguntaAtual].resp_correta;
    
  
     if(respostaAtual === numeroDoBotao){
        respostaCorreta()
    }
    
    else{
        respostaErrada()
    }
   
}



function respostaCorreta() {
    tentativa = 3;

    switch (numeroPerguntaAtual) {
        case 10:
            mudancaDeFase_1()
           break;
        case 19:
          proximoNivel()
            break;
    
        default:
           segueEmFrente()
           break;
    }
  
  
         

            
            
}

function segueEmFrente(){
    g('parg').style.display = 'none';
            g('par').style.display = 'block';
            setTimeout(function () {
                    g('par').style.display = 'none';
                    g('par_2').style.display = 'block';
            }, 1000)
            setTimeout(function () {
                    g('par_2').style.display = 'none';
            }, 2900);   
        
        
            setTimeout(function () {
                perguntaSeguinte() 
            }, 3000);

}


function mudancaDeFase_1() {
      g('parg').style.display = 'none';
            g('par').style.display = 'block';
            setTimeout(function () {
                    g('par').style.display = 'none';
                    g('par_3').style.display = 'block';
                     
            }, 1000)
            setTimeout(function () {
                    g('par_3').style.display = 'none';
            }, 3800);   
        
        
            setTimeout(function () {
                perguntaSeguinte() 
            }, 3900);

}



function respostaErrada() {
    tentativa = tentativa - 1;
    console.log({tentativa})
    g('parg').style.display ="block";

    if(tentativa === 0){
        g('parg').innerHTML = 'Que pena! Sua tentativas acabaram!'
        
        setTimeout(function (){
                segunda_chance()
        }, 4000)
    } else {
        g('parg').innerHTML = `Opa a resposta está errada! você tem mas ${tentativa} tentativa(s) !`
        
        
    }
    setTimeout(function () {
        g('parg').style.display = 'none';
    }, 3000);
    
}

function proximoNivel() {
     c('.box').style.display = 'none';
     g("regra").style.display = 'block';
     c(".entrada").style.display = 'none';
     c('.texto_1').style.display = 'block';
     c('.texto_2').style.display = 'block';
     c('.texto_3').style.display = 'none';
     c('.texto_4').style.display = 'none';
     c('.home').style.display = 'none';
     c('.inicio').style.display = 'block';
};


     






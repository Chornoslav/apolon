var btnBox = document.querySelector('.btn-box');

function dissappear (){
    btnBox.classList.add("none");
    document.querySelector('.characters').classList.add("display");
    
    var $char = document.querySelectorAll('.character');
    var $info = document.querySelectorAll('.info');

    $char[0].addEventListener('click', function(){
        profile();
        $info[0].classList.add("display")});
    $char[1].addEventListener('click', function(){
        profile();
        $info[1].classList.add("display")});
    $char[2].addEventListener('click', function(){
        profile();
        $info[2].classList.add("display")});
    $char[3].addEventListener('click', function(){
        profile();
        $info[3].classList.add("display")});
    $char[4].addEventListener('click', function(){
        profile();
        $info[4].classList.add("display")});
}

document.querySelector('.playBut').addEventListener("click", dissappear);

function profile(){
    document.getElementById('player').pause();
    document.getElementById('btn-music').play();
    document.querySelector('.characters').classList.remove("display");    

    infoBtns();
}
function infoBtns() {
    document.querySelectorAll('.new-char').forEach(function(e){
        e.addEventListener("click",
            function(){
                document.getElementById('player').play();
                document.querySelector('.characters').classList.add("display");
                document.querySelector('.info.display').classList.remove("display");
            }
        );
    })
}

function hellButton(){
    document.querySelector('.playBut').addEventListener("click", document.getElementById('player').play());
}

(function unicorns() {
    const pressed = [];
    const secretCode = 'pes';

    window.addEventListener('keyup', function() {
        pressed.push(e.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        if (pressed.join('').includes(secretCode)) {
            cornify_add();
        }
    });
})();

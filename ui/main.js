console.log('Loaded!');
var element=document.getElementById('main.txt');
element.innerHTML='New value';
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 10;
    img.style.marginLeft + 'px';
}
img.Onclick=function(){
    var interval=setInterval(moveright,100);
};

const bt=document.querySelectorAll('.button');
//console.log(bt)
const bd=document.querySelector('body');

bt.forEach(function(bt){
  //console.log(bt)
  bt.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
//
    bd.style.background=e.target.id;
//
    // if(e.target.id==='blue'){bd.style.background='blue'}
    // if(e.target.id==='grey'){bd.style.background='grey'}
    // if(e.target.id==='yellow'){bd.style.background='yellow'}
    // if(e.target.id==='white'){bd.style.background='white'}
  })
})
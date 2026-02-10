//////random colors
const randomC= function(){
  const values='0123456789ABCDEF'
  let colors='#'
  for(let i=0;i<6;i++){
    colors+=values[Math.floor(Math.random()*16)]
  }
  //console.log(colors)
  return colors
}
////////start
let inter
const colorChanging=function(){
if(!inter){
  inter= setInterval(function(){
    document.body.style.backgroundColor=randomC()
  },1000)}
}
////////stop
const colorChangingStop=function(){
      clearInterval(inter)
    inter=null;}
  
///////event
document.querySelector('#start').addEventListener('click',colorChanging)
document.querySelector('#stop').addEventListener('click',colorChangingStop)
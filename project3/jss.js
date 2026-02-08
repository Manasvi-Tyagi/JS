const cl=document.getElementById('clock')
    //document.querySelector('#clock')
    let date=new Date();
    setInterval(function(){
      let date=new Date();
      //console.log(date.toLocaleTimeString())
      cl.innerHTML=`${date.toLocaleTimeString()}`
    },1000);
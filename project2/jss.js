const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault(); //to avoid loading web after submitting
  const h=parseInt(document.querySelector('#height').value)
  const w=parseInt(document.querySelector('#weight').value)
  const res=document.querySelector('#results')
  if(h===''||h<0||isNaN(h)){res.innerHTML=`Please give a valid height ${h}`;}
  // res.innerHTML=`${h}`;
  else if(w===''||w<0||isNaN(w)){res.innerHTML=`Please give a valid weight ${h}`;}
  // res.innerHTML=`${h}`;
  else{
    const bmi=(w/((h*h)/10000)).toFixed(2);
    if(bmi<18.6){
      res.innerHTML=`<span>under weight ${bmi}</span>`
    }else if(bmi>24.9){
      res.innerHTML=`<span>over weight ${bmi}</span>`
    }else{
    res.innerHTML=`<span>normal range ${bmi}</span>`}
  }
})

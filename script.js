let OneAnimalBtn=document.querySelector('#OneAnimalBtn');
let OneAnimalTbl=document.querySelector('#OneAnimalTbl');
let dolphin=document.querySelector('#dolphin');
let dolphinBtn=document.querySelector('#dolphinBtn');

OneAnimalBtn.addEventListener('click' , function(){
    if(OneAnimalTbl.classList.contains('hide')){
        OneAnimalTbl.classList.remove('hide');
    }else{
        OneAnimalTbl.classList.add('hide');
        dolphin.classList.add('hide');
    }
});

dolphinBtn.addEventListener('click', function(){
   if(dolphin.classList.contains('hide')){
    dolphin.classList.remove('hide');
   }else{
    dolphin.classList.add('hide');
   }
});

let TwoAnimalBtn=document.querySelector('#TwoAnimalBtn');
let TwoAnimalTbl=document.querySelector('#TwoAnimalTbl');
let dogBtn=document.querySelector('#dogBtn');
let dogs=document.querySelector('#dogs');
let catsBtn=document.querySelector('#catsBtn');
let cats=document.querySelector('#cats');
let dogLag=document.querySelector('#dogLag');

TwoAnimalBtn.addEventListener('click',function(){
  if(TwoAnimalTbl.classList.contains('hide')){
    TwoAnimalTbl.classList.remove('hide');
    dogLag.classList.remove('hide');
  }else{
    TwoAnimalTbl.classList.add('hide');
    dogs.classList.add('hide');
    cats.classList.add('hide');
    dogLag.classList.add('hide');
    
  }
});

dogBtn.addEventListener('click', function(){
  if(dogs.classList.contains('hide')){
    dogs.classList.remove('hide');
  }else{
    dogs.classList.add('hide');
  }
});

catsBtn.addEventListener('click',function(){
  if(cats.classList.contains('hide')){
    cats.classList.remove('hide');
  }else{
    cats.classList.add('hide');
  }
});
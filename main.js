
let frontButton = document.querySelectorAll('.buttonFront');
let backButton = document.querySelectorAll('.buttonBack');
let saveButton = document.querySelectorAll('.buttonSave');
let cardFront = document.querySelectorAll('.front');
let cardBack = document.querySelectorAll('.back');
let rating = document.querySelectorAll('.rating');
let alert = document.querySelectorAll('.alert')

for(let i = 0; i < rating.length; i++){
  if(localStorage.getItem('rating' + i)){
    rating[i].value = localStorage.getItem('rating' + i);
  }
}


for(let i = 0; i < frontButton.length; i++){
  frontButton[i].addEventListener('click', function(e){
    e.preventDefault();
  cardFront[i].classList.toggle('hide');
  cardBack[i].classList.toggle('hide');
  backButton[i].classList.toggle('hide');
  frontButton[i].classList.toggle('hide');
  saveButton[i].classList.toggle('hide');
  })
}

for(let i = 0; i < backButton.length; i++){
  backButton[i].addEventListener('click', function(e){
   e.preventDefault();
  cardFront[i].classList.toggle('hide');
  cardBack[i].classList.toggle('hide');
  backButton[i].classList.toggle('hide');
  frontButton[i].classList.toggle('hide');
  saveButton[i].classList.toggle('hide');
  })
}

for(let i = 0; i < saveButton.length; i++){
  saveButton[i].addEventListener('click', function(e){
   e.preventDefault();
   if(rating[i].value === 'rate'){
     alert[i].classList.add('alert-danger');
     alert[i].innerHTML = "Please select a rating to save";
     setTimeout(function(){
      alert[i].classList.remove('alert-danger');
      alert[i].innerHTML = ""
     }, 2000)
   } else {
     localStorage.setItem(('rating' + i), rating[i].value)
     alert[i].classList.remove('alert-danger');
     alert[i].classList.add('alert-success');
     alert[i].innerHTML = "Saved";
     setTimeout(function(){
      alert[i].classList.remove('alert-success');
      alert[i].innerHTML = ""
     }, 2000)
   }


  })
}

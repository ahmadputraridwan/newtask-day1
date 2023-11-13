let Open = false 

function openBurger(){
  let burgerNav = document.getElementById('burger-container')
  if (!Open){
    burgerNav.style.display='block';
    Open=true;
  } else {
    burgerNav.style.display='none';
    Open=false;
  }
}

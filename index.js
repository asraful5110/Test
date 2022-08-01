const input = document.querySelector('input');
const text = document.querySelector('p');


input.onkeyup= (e)=>{
  text.innerText = e.target.value;
}
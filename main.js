const cont = document.getElementById('cont');
const input = document.getElementById('txt');
const textarea = document.getElementById('textarea');
const addbtn = document.getElementById('btn');
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];


addbtn.addEventListener('click', () => {
  if(input.value == ''){
      alert('Enter something pls');
  } else{
    cont.innerHTML += `
      <div id="blog" class="blog">
        <h3>${input.value}</h3>
        <p> ${textarea.value} </p>
        <button id="delete"> delete </button>
      </div>
    ` 
    input.value = '';
    textarea.value = '';
  }
  const del = document.querySelectorAll('#delete');
  const blog = document.getElementById('blog');
  for (var i = 0; i < del.length; i++) {
    del[i].onclick = function() {
   this.parentNode.remove();
 }
}
})

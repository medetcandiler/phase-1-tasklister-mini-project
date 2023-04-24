document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  const ul = document.querySelector('#tasks');

  // form submit event
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value === '') {
      alert('write sth to add as a task');
    } else {
      newItem(input.value)
    }
    input.value = '';
  });

  // delete item event
  ul.addEventListener('click', e => {
    if( e.target.id === 'btn'){
      let li = e.target.parentElement
      li.remove();
    }
  })

  function newItem(value) {
    let newLi = document.createElement('li');
    let btn = document.createElement('button');
    newLi.textContent = value;
    btn.innerHTML = 'x';
    btn.style.marginLeft = '1rem'
    btn.setAttribute('id', 'btn')
    newLi.appendChild(btn);
    ul.appendChild(newLi)
  }

  function deleteItem(){

  }
});

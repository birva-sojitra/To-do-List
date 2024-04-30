document.getElementById('add-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var input = document.getElementById('new-item');
  var text = input.value;

  if (text === '') return;

  var li = document.createElement('li');
  li.className = 'item';
  li.innerHTML = `
      <span class="item-text">${text}</span>
      <button class="remove-button" onclick="removeItem(this)">Remove</button>
      <button class="complete-button" onclick="completeItem(this)">Complete</button>
  `;

  var list = document.getElementById('todo-list');
  list.appendChild(li);

  input.value = '';
});

function removeItem(item) {
  var li = item.parentElement;
  li.parentNode.removeChild(li);
}

function completeItem(item) {
  var li = item.parentElement;
  li.classList.toggle('completed');
}
let lists = document.getElementsByClassName('list');
let leftBox = document.getElementById('left');
let rightBox = document.getElementById('right');
const resetButton = document.getElementById('resetButton');

let initialItems = Array.from(lists); // Store the initial items in container 1

for (list of lists) {
  list.addEventListener('dragstart', function (e) {
    let selected = e.target;

    // Add visual feedback during dragging
    selected.classList.add('dragging');

    rightBox.addEventListener('dragover', function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener('drop', function (e) {
      // Remove visual feedback from the dragged item
      selected.classList.remove('dragging');

      rightBox.appendChild(selected);
      selected = null;

      // Display success message
      showMessage('Item dropped into the second container', 'success');
    });
  });
}

// Reset button functionality
resetButton.addEventListener('click', function () {
  // Clear the second container
  rightBox.innerHTML = '';

  // Restore items to the initial state in container 1
  for (item of initialItems) {
    leftBox.appendChild(item);
  }

  // Display reset message
  showMessage('Containers reset', 'reset');
});

// Function to display messages
function showMessage(message, type) {
  let messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.classList.add('message', type);
  document.body.appendChild(messageElement);

  // Remove the message after 2 seconds
  setTimeout(function () {
    messageElement.remove();
  }, 2000);
}

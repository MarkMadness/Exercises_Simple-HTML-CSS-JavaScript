function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);

      event.currentTarget.style.backgroundColor = 'yellow';
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');

      const draggableElement = document.getElementById(id); // selecting the draggable element with the id retrieved
      const dropzone = event.target; // selecting the dropzone element
      dropzone.appendChild(draggableElement); // appending our draggable element to the dropzone

    event.dataTransfer.clearData(); // reseting the dataTransfer object
    
}
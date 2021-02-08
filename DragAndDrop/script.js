function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
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

function checkAnswer() {
  let dp1 = document.getElementsByClassName('dropzone1')[0].getElementsByTagName('p')[0].innerHTML;
  let dp2 = document.getElementsByClassName('dropzone2')[0].getElementsByTagName('p')[0].innerHTML;
  let dp3 = document.getElementsByClassName('dropzone3')[0].getElementsByTagName('p')[0].innerHTML;
  let dp4 = document.getElementsByClassName('dropzone4')[0].getElementsByTagName('p')[0].innerHTML;
  // console.log(dp1 + ', ' + dp2 + ', ' + dp3 + ', ' + dp4);
  if(dp1 === "draggable 4"){
    if(dp2 === "draggable 3"){
      if(dp3 === "draggable 2"){
        if(dp4 === "draggable 1"){
          document.getElementById('result').innerHTML = "That's the right answer!";
        }
      }
    }
  } else{
    document.getElementById('result').innerHTML = "Sorry, try again.";
  }
}


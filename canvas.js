window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d'); //here we may say 3d also

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //variables
  let painting = false;

  function startPosition() {
    painting = !painting;
    draw(e);
  }

  function finishPosition() {
    painting = !painting;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'orange';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPatch();
    ctx.moveTo(e.clientX, e.clientY);
  }

  //EventListeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishPosition);
  canvas.addEventListener('mousemove', draw);

  //Filled Square
  // ctx.fillStyle = 'red';
  // ctx.fillRect(50, 50, 200, 200);

  //Obramowanie
  // ctx.strokeStyle = 'red';
  // ctx.lineWidth = 3;
  // ctx.strokeRect(100, 100, 200, 500);
  // ctx.strokeStyle = 'blue';
  // ctx.strokeRect(200, 200, 200, 500);

  //A Line
  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(400, 100);
  // ctx.stroke();
});

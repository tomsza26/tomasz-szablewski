function Synth() {
  const c = document.createElement('canvas').getContext('2d');
  const postctx = document
    .querySelector('#canv')
    .appendChild(document.createElement('canvas'))
    .getContext('2d');

  const redFilter = document.createElement('canvas').getContext('2d');
  const greenFilter = document.createElement('canvas').getContext('2d');
  const blueFilter = document.createElement('canvas').getContext('2d');

  const { canvas } = c;
  let frame = 0;
  let noise = 0;

  const grid = 24;
  const perspective = 100;
  const depth = 5000;
  const cameraY = 100;

  const xInterval = depth / grid;
  const zInterval = depth / grid;

  const drawLine = (x1, y1, x2, y2) => {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
  };

  const drawSun = (x, y, r) => {
    c.fillStyle = c.createLinearGradient(x, y - r, x, y + r);
    c.fillStyle.addColorStop(0.1, '#fdce74');
    c.fillStyle.addColorStop(0.8, '#d60066');

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2);
    c.fill();
  };

  const loop = () => {
    frame++;

    if (
      postctx.canvas.width !== postctx.canvas.offsetWidth ||
      postctx.canvas.height !== postctx.canvas.offsetHeight
    ) {
      postctx.canvas.width = canvas.width = redFilter.canvas.width = greenFilter.canvas.width = blueFilter.canvas.width =
        postctx.canvas.offsetWidth / 2;

      postctx.canvas.height = canvas.height = redFilter.canvas.height = greenFilter.canvas.height = blueFilter.canvas.height =
        postctx.canvas.offsetHeight / 2;
    }

    c.fillStyle = '#0f050d';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.save();
    c.translate(canvas.width / 2, canvas.height / 2);

    drawSun(0, -64, 128);

    c.strokeStyle = '#00e9ff';
    for (let i = 0; i < grid * 10; i++) {
      const x1 = (-grid * 5 + i) * xInterval;
      const y1 = cameraY;
      const z1 = 1;

      const x2 = x1;
      const y2 = y1;
      const z2 = depth;

      const px1 = (x1 / z1) * perspective;
      const py1 = (y1 / z1) * perspective;

      const px2 = (x2 / z2) * perspective;
      const py2 = (y2 / z2) * perspective;

      drawLine(px1, py1, px2, py2);
    }

    for (let i = 0; i <= depth / zInterval; i++) {
      const x1 = -grid * 5 * xInterval;
      const y1 = cameraY;
      const z1 = i * zInterval - ((frame * 10) % zInterval);

      const x2 = grid * 5 * xInterval;
      const y2 = y1;
      const z2 = z1;

      const px1 = (x1 / z1) * perspective;
      const py1 = (y1 / z1) * perspective;

      const px2 = (x2 / z2) * perspective;
      const py2 = (y2 / z2) * perspective;

      if (z1 < 0) continue;

      drawLine(px1, py1, px2, py2);
    }
    c.restore();

    redFilter.drawImage(canvas, 2, 0);
    redFilter.globalCompositeOperation = 'multiply';
    redFilter.fillStyle = '#f00';
    redFilter.fillRect(0, 0, canvas.width, canvas.height);
    redFilter.globalCompositeOperation = 'source-over';

    greenFilter.drawImage(canvas, 2, 0);
    greenFilter.globalCompositeOperation = 'multiply';
    greenFilter.fillStyle = '#0f0';
    greenFilter.fillRect(0, 0, canvas.width, canvas.height);
    greenFilter.globalCompositeOperation = 'source-over';

    blueFilter.drawImage(canvas, 2, 0);
    blueFilter.globalCompositeOperation = 'multiply';
    blueFilter.fillStyle = '#00f';
    blueFilter.fillRect(0, 0, canvas.width, canvas.height);
    blueFilter.globalCompositeOperation = 'source-over';

    if (frame % 5 === 0) {
      noise = Math.random();
    }

    postctx.clearRect(0, 0, canvas.width, canvas.height);
    postctx.globalCompositeOperation = 'screen';
    postctx.filter = 'blur(0.5px)';
    postctx.drawImage(redFilter.canvas, 1, 0);
    postctx.drawImage(greenFilter.canvas, -1 * noise, 0);
    postctx.drawImage(blueFilter.canvas, -5 * noise, 0);

    postctx.filter = 'blur(8px)';
    postctx.drawImage(postctx.canvas, 0, 0);
    postctx.globalCompositeOperation = 'source-over';

    requestAnimationFrame(loop);
  };

  loop();
}

export default Synth;

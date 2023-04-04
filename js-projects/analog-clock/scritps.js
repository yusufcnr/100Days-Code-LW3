//jshint esversion:6


const drawClock = () => {
  // Get current time
  const canvas = document.getElementById("clock");
  const context = canvas.getContext("2d");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate angles of clock hands
  const hourAngle =
    (((hours % 12) + minutes / 60 + seconds / 3600) * 30 * Math.PI) / 180;
  const minuteAngle = ((minutes + seconds / 60) * 6 * Math.PI) / 180;
  const secondAngle = (seconds * 6 * Math.PI) / 180;

  // Draw clock face
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(100, 100, 90, 0, 2 * Math.PI);
  context.stroke();

  // Draw hour hand
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(
    100 + 50 * Math.sin(hourAngle),
    100 - 50 * Math.cos(hourAngle)
  );
  context.stroke();

  // Draw minutes hand
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(
    100 + 50 * Math.sin(minuteAngle),
    100 - 50 * Math.cos(minuteAngle)
  );
  context.stroke();

  // Draw second hand
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(
    100 + 50 * Math.sin(secondAngle),
    100 - 50 * Math.cos(secondAngle)
  );
  context.stroke();
};

setInterval(drawClock, 100);

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Zīmējam apli
ctx.beginPath();
ctx.arc(250, 200, 50, 0, 2 * Math.PI);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.stroke();

// Zīmējam taisnstūri
ctx.fillStyle = "green";
ctx.fillRect(100, 300, 300, 50);

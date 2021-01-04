socket.on("onMouseDown" , function(point){
    ctx.strokeStyle = point.color;
    ctx.lineWidth = point.width;
    ctx.beginPath();
    ctx.moveTo(point.x , point.y);
})

socket.on("onMouseMove" , function(point){
    ctx.strokeStyle = point.color;
    ctx.lineWidth = point.width;
    ctx.lineTo(point.x , point.y);
    ctx.stroke();
})
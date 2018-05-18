var date=new Date();
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["X","X","X","X","X","X","X"],
        datasets: [{
            label: '历史温度',
            data: [18, 19, 20, 21, 20, 19],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    	maintainAspectRatio:false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});







var sr=2**0.5;
var canvas=document.getElementById('cvs');
// canvas.width=document.documentElement.clientWidth;
var cvs=canvas.getContext('2d');
var mid_x=canvas.width/2;
var mid_y=canvas.height/2;
var temp_x=0;
var temp_y=0;
var arr={};
var num_points=1;
var rect=canvas.getBoundingClientRect();
var ob_tem=document.getElementById('ob_tem');
var mouse_div=document.getElementById('mouse_div');
function draw(x,y,h,x_d,y_d,h_d) {
	function point(x,y) {
		cvs.beginPath();
		cvs.rect(x-7,y-7,14,14);
		//cvs.closePath();
		cvs.stroke();
     //cvs.fill();
	}
	function record(x,y) {
		arr['x'+num_points]=x;
		arr['y'+num_points]=y;
		 num_points++;
	}
cvs.translate(mid_x-y/2-sr*x/8,mid_y-h/2+sr*x/8);//left-top corrner in the front face(0,0)
cvs.scale(0.7,0.7);
cvs.moveTo(0,0);
cvs.fillStyle='rgba(255,0,0,1)';
temp_x+=0;
temp_y+=h;
cvs.lineTo(temp_x,temp_y);
temp_x+=y;
cvs.lineTo(temp_x,temp_y);
temp_x+=sr*x/4;
temp_y-=sr*x/4;
cvs.lineTo(temp_x,temp_y);
temp_y-=h;
cvs.lineTo(temp_x,temp_y);
temp_x-=y;
cvs.lineTo(temp_x,temp_y);
temp_x-=sr*x/4;
temp_y+=sr*x/4;
cvs.lineTo(temp_x,temp_y);
temp_x+=y;
cvs.lineTo(temp_x,temp_y);
temp_y+=h;
cvs.lineTo(temp_x,temp_y);
temp_y-=h;
cvs.moveTo(temp_x,temp_y);
temp_x+=sr*x/4;
temp_y-=sr*x/4;
cvs.lineTo(temp_x,temp_y);
temp_x-=y;
cvs.moveTo(temp_x,temp_y);
temp_y+=h;
cvs.lineTo(temp_x,temp_y);
temp_x-=sr*x/4;
temp_y+=sr*x/4;
cvs.lineTo(temp_x,temp_y);
temp_x+=sr*x/4;
temp_y-=sr*x/4;
cvs.moveTo(temp_x,temp_y);
temp_x+=y;
cvs.lineTo(temp_x,temp_y);
cvs.stroke();
for(let t=1;t<=h_d;t++){
for (let i=1;i<=y_d;i++) {
	for(let j=1;j<=x_d;j++){
		record(i*y/(y_d+1)+j*sr*x/(4*(x_d+1)),(t*h/(h_d+1))-sr*x/(4*(x_d+1))*j)	
	}
	
}
}
for (let i=1;i<=num_points;i++) {
	point(arr['x'+i],arr['y'+i]);
}
canvas.onmousemove=function(e){
for (let i=1;i<=num_points;i++) {
cvs.clearRect(arr['x'+i]-8,arr['y'+i]-8,16,16);
point(arr['x'+i],arr['y'+i]);
 var x=e.offsetX,y=e.offsetY;

// console.log(x,y);
if(cvs.isPointInPath(x,y)){
cvs.fillStyle='purple';
if(i<=server_data.length){

	ob_tem.innerText=(server_data[i-1].temperature)+'℃';

}

}else{
cvs.fillStyle='#36A2EB';
}
cvs.fill();
}
}
}
draw(400,400,800,6,8,5);




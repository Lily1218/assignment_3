var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093'];
function setup() {
createCanvas(400, 400);
  //create line grid
  for(var pos = 25; pos < 400; pos+=25)
  {
    
  var index = floor(random() * colorList.length);

  var colorHex = colorList[index];

  stroke(color(colorHex));
    line(pos,10,pos,390);
    line(10,pos,390,pos);
  }

}


function draw() {
    for(var x = 25; x < 400; x += 50)
  {
    for(var y = 25; y < 400; y += 50)
    {
      noStroke();
      if(random()<0.1)
  {
   fill(249,220,8);
  } else {
   fill(255);
  }
      ellipse(x, y, 15);
    }
  }
  for(var x = 50; x < 400; x += 50)
  {
    for(var y = 50; y < 400; y += 50)
    {
      noStroke();
        if(random()<0.1)
  {
   fill(249,220,8);
  } else {
   fill(255);
  }
      ellipse(x, y, 10);
    }
  }
  
}
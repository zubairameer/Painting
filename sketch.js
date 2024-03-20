let size;
let factor;


function setup() {
  createCanvas(400, 400);
  size = 1;
  factor = 0.01;
  noStroke();
}

function draw() {
  background(250);

  //random
  // for( let i =0; i <= width; i+= size)
  // {
  //   for (let k = 0; k <= height; k+= size)
  //   {
  //     fill(random()*255, random()*255, random()*255)
  //     square(i,k,size);
  //   }
  // }

  //perlin noise
  for( let i =0; i <= width; i+= size)
  {
    for (let j = 0; j <= height; j+= size)
    {
      fill(noise((i+50)* factor, (j+50) * factor)*255,
           noise((i+100)* factor,(j+100) * factor)*255,
           noise(i * factor, j*factor)* 255)

      square(i,j,size);
    }
  }

  noLoop();


}

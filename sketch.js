var database;
var form

function setup(){
 canvas = createCanvas(400, 400)
  form = new Form();
  database = firebase.database()
}
function draw(){
form.display();

}

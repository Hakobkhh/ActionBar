

function preload(){
    load_action_images();
}

function setup() {
    createCanvas(800, 600);
    process_images();
    new ActionBar(50, 100, ['super', 'attack', 'act', 'item', 'spare'], on_action);
  }

function on_action(action){

}
    
function draw() {
    background(0);
    display_action_bars();
    mgr.update();
   }
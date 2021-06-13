var canvas = new fabric.Canvas("myCanvas");

var hero_y = 10;
var hero_x = 10;

var block_x = 10;
var block_y = 10;
var block_width = 30;
var block_height = 30;

var hero_object = ""
var block_object = ""

function hero_update(){
    fabric.Image.fromURL("I'm Batman.png", function(Img){
        hero_object = Img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top:hero_y,
            left:hero_x
        });
        canvas.add(hero_object);
    });
}

function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:hero_y,
            left:hero_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == "81"){
        block_height = block_height + 10;
        block_width = block_width + 10
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
        console.log("Shift + Q pressed");
    }

    if(e.shiftKey == true && keypressed == "69"){
        block_height = block_height - 10;
        block_width = block_width - 10
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
        console.log("Shift + E pressed");
    }

    if( keypressed == "87"){
        up();
        console.log("Up");
    }

    if( keypressed == "83"){
     down();
        console.log("Down");
    }

    if( keypressed == "65"){
        left();
        console.log("Left");
    }

    if( keypressed == "68"){
        right();
        console.log("Right");
    }

    if (keypressed == "70"){
        new_image('ironman_face.png')
        console.log("f");
    }

    if (keypressed == "66"){
        new_image('spiderman_body.png');
        console.log("b");
    }

    if (keypressed == "76"){
        new_image('ironman_legs.png');
        console.log("l");
    }

    if (keypressed == "82"){
        new_image('thor_right_hand.png');
        console.log("r");
    }

    if (keypressed == "72"){
        new_image('hulk_left_hand.png');
        console.log("h");
    }}

    function up(){
        if(hero_y >= 0){
            hero_y = hero_y - block_height;
            console.log("block image height = " + block_height);
            console.log("When W is pressed, X = " + hero_x + "and Y = " + hero_y);
            canvas.remove(hero_object);
            hero_update();
        }
    }
    
    function down(){
        if(hero_y <= 460){
            hero_y = hero_y + block_height;
            console.log("block image height = " + block_height);
            console.log("When S is pressed, X = " + hero_x + "and Y = " + hero_y);
            canvas.remove(hero_object);
            hero_update();
        }
    }
    
    function left(){
        if(hero_x >= 0){
            hero_x = hero_x - block_width;
            console.log("block image width = " + block_width);
            console.log("When A is pressed, X = " + hero_x + "and Y = " + hero_y);
            canvas.remove(hero_object);
            hero_update();
        }
    }
    
    function right(){
        if(hero_x <= 650){
            hero_x = hero_x + block_width;
            console.log("block image width = " + block_width);
            console.log("When D is pressed, X = " + hero_x + "and Y = " + hero_y);
            canvas.remove(hero_object);
            hero_update();
        }
    }
    
import {Config, Tools} from "./engine.js";

let canvas = document.getElementById("canvas");

let cfg = new Config();

cfg.getColor(0);

let color0 = document.getElementById('color0');
let color1 = document.getElementById('color1');
color0.style.background = cfg.getColor(0);
color1.style.background = cfg.getColor(1);

document.getElementById('save').addEventListener( "click" , function() { Tools.save(canvas, cfg)});
document.getElementById('canvas').addEventListener( "click" , function(event) { Tools.brush(canvas, cfg, event)});
document.getElementById('draw').addEventListener( "click" , function() { cfg.setDrawMode()});
document.getElementById('clear').addEventListener( "click" , function() { cfg.setClearMode()});
document.getElementById('swap').addEventListener( "click" , function() { 
    cfg.swapColors();
    color0.style.background = cfg.getColor(0);
    color1.style.background = cfg.getColor(1);
});

document.getElementById('new').addEventListener( "click" , function() {
    if (confirm("Скачать текущее изображение? Иначе оно будет утеряно!")){
        Tools.save(canvas, cfg);
    }
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    let size = prompt("Размер стороны холста? (16, 32, 64)", 16);
    if (isNaN(size)){
        size = 16;
        alert(`size = ${size}`);
    }
    if (size != 16)
        if (size != 32) 
            if (size != 64){
                size = 16;
                alert(`size = ${size}`);
            }
    cfg = new Config(320, size, undefined, cfg.getColor(0), cfg.getColor(1));
});

color0.addEventListener( "click" , function() {
    let newColor = prompt("Новый цвет (например '#000000')", cfg.getColor(0)) ?? cfg.getColor(0);
    cfg.setColor(0, newColor);
    color0.style.background = cfg.getColor(0);
});

color1.addEventListener( "click" , function() {
    let newColor = prompt("Новый цвет (например '#ffffff')", cfg.getColor(1)) ?? cfg.getColor(1);
    cfg.setColor(1, newColor);
    color1.style.background = cfg.getColor(1);
});
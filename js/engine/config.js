export class Config{
    get canvasSize(){
        return this._canvasSize;
    }

    get pictureSize(){
        return this._pictureSize;
    }

    get pixelSize(){
        return this._pixelSize;
    }

    get pictureName(){
        return this._pictureName;
    }

    get brushMode(){
        return this._brushMode;
    }

    get colors(){
        return this._colors;
    }

    get scaleAspect(){
        return this._scaleAspect;
    }

    /**
     * 
     * @param {number} n номер цвета
     */
    getColor(n){
        return this._colors[n];
    }

    /**
     * 
     * @param {number} n номер цвета
     * @param {string} color #000000 нарпимер
     */
    setColor(n, color){
        this._colors[n] = color;
    }

    setDrawMode(){
        this._brushMode = "draw";
    }

    setClearMode(){
        this._brushMode = "clear";
    }

    swapColors(){
        [this._colors[0], this._colors[1]] = [this._colors[1], this._colors[0]];
    }
    
    /**
     * 
     * @param {number} canvasSize кэнвас должен быть квадратом, поэтому требуется только один параметр
     * @param {number} pictureSize на выходе картинка квадратная, поэтому один параметр
     * @param {string} pictureName 
     * @param {string} color1 #000000 нарпимер
     * @param {string} color2 #000000 нарпимер
     */
    constructor(canvasSize, pictureSize, pictureName, color1, color2){
        this._canvasSize = canvasSize ?? 320;
        this._pictureSize = pictureSize ?? 32;
        this._pixelSize = Math.round(this._canvasSize / this._pictureSize);
        this._scaleAspect = (this._pictureSize / this._canvasSize).toFixed(1);
        this._pictureName = pictureName ?? "EasyPixelPicture";
        this._brushMode = "draw";
        this._colors = [color1 ?? "#000000", color2 ?? "#ffffff"];
    }
}
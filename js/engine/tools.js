export class Tools{
    
    /**
     * 
     * @param {Element} canvas 
     * @param {Config} cfg 
     */
    static save(canvas, cfg){
        let smallCanvas = document.createElement('canvas');
        smallCanvas.height = cfg.pictureSize;
        smallCanvas.width = cfg.pictureSize;
        let smallCtx = smallCanvas.getContext('2d');
        smallCtx.scale(cfg.scaleAspect, cfg.scaleAspect);
        smallCtx.drawImage(canvas, 0, 0);

        smallCanvas.toBlob(function(blob) {
            // после того, как Blob создан, загружаем его
            let link = document.createElement('a');
            link.download = cfg.pictureName;
        
            link.href = URL.createObjectURL(blob);
            link.click();
        
            // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
            URL.revokeObjectURL(link.href);
        }, 'image/png');
    }

    /**
     * 
     * @param {Canvas} canvas
     * @param {Config} cfg 
     * @param {Mouse event}  Номер кнопки мыши
     */
    static brush(canvas, cfg, e){
        if (cfg.brushMode == "draw"){
            this._draw(canvas, cfg, e);
        } 
        else {
            this._clear(canvas, cfg, e);
        }
    }

    static _draw(canvas, cfg, e){
        let ctx = canvas.getContext('2d');

        if (e.altKey)
            ctx.fillStyle = cfg.getColor(1);
        else
            ctx.fillStyle = cfg.getColor(0);
        
        let rect = canvas.getBoundingClientRect();
        let position = {
            x: Math.floor((e.x - rect.x) / cfg.pixelSize) * cfg.pixelSize,
            y: Math.floor((e.y - rect.y) / cfg.pixelSize) * cfg.pixelSize
        }   
        ctx.fillRect(position.x, position.y, cfg.pixelSize, cfg.pixelSize);
    }

    static _clear(canvas, cfg, e){
        let ctx = canvas.getContext('2d');
        let rect = canvas.getBoundingClientRect();
        let position = {
            x: Math.floor((e.x - rect.x) / cfg.pixelSize) * cfg.pixelSize,
            y: Math.floor((e.y - rect.y) / cfg.pixelSize) * cfg.pixelSize
        } 
        ctx.clearRect(position.x, position.y, cfg.pixelSize, cfg.pixelSize); 
    }
}
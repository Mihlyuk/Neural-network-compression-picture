export default class Block {

    width: number;
    height: number;
    startPixelX: number;
    startPixelY: number;
    buffer: number[][];

    /**
     * @param {number} startPixelX
     * @param {number} startPixelY
     * @param {number} width
     * @param {number} height
     */
    constructor(startPixelX: number, startPixelY: number, width: number, height: number) {
        this.width = width;
        this.height = height;
        this.startPixelX = startPixelX;
        this.startPixelY = startPixelY;

        this.buffer = [];
    }

    /**
     * @param {number[][]} pixels
     */
    add(pixels: number[][]) {
        this.buffer = pixels;
    }

    getMatrix() {
        return this.buffer;
    }

    stringify() {
        return JSON.stringify(this);
    }
}
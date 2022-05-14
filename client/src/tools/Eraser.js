import Tool from './Tool';

export default class Eraser extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseUpHandler() {
        this.mouseDown = false
    }
    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.ctx.globalCompositeOperation="destination-out";
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
        this.ctx.globalCompositeOperation="source-over";
    }

    draw(x, y) {
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }
}

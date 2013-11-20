
'use strict';

var SVGGLSL = this.SVGGLSL = function SVGGLSL(canvas) {
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 600;
    }
    this.canvas = canvas;
    this.gl2d = WebGL2D.enable(canvas); // adds new context "webgl-2d" to canvas
};

SVGGLSL.prototype.convert = function (svg) {
    canvg(this.canvas, svg, {
        ignoreMouse: true,
        ignoreAnimation: true,
        ignoreDimensions: true,
        ignoreClear: true,
        offsetX: 0,
        offsetY: 0,
        scaleWidth: this.canvas.width,
        scaleHeight: this.canvas.height
    });
};

SVGGLSL.prototype.getVertexShaderSource = function () {
    return this.gl2d.getVertexShaderSource();
};

SVGGLSL.prototype.getFragmentShaderSource = function () {
    return this.gl2d.getFragmentShaderSource();
};

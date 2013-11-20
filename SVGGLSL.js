
'use strict';

var SVGGLSL = this.SVGGLSL = function SVGGLSL(canvas) {
    if (!canvas) {
        canvas = document.createElement('canvas');
    }
    this.canvas = canvas;
    this.gl2d = WebGL2D.enable(canvas); // adds new context "webgl-2d" to canvas
};

SVGGLSL.prototype.convert = function (svg, callback) {
    canvg(this.canvas, svg, {
        ignoreMouse: true,
        ignoreAnimation: true,
        ignoreDimensions: true,
        ignoreClear: true,
        renderCallback: callback
    });
};

SVGGLSL.prototype.getVertexShaderSource = function () {
    return this.gl2d.getVertexShaderSource();
};

SVGGLSL.prototype.getFragmentShaderSource = function () {
    return this.gl2d.getFragmentShaderSource();
};

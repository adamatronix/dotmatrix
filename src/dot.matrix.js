var dotMatrix = (function(p5) {

    dotMatrix = function() {
        this.boids = [];
        this.xGap = 100;
        this.yGap = 100;
        this.mouseX;
        this.mouseY;
        this.init();
    };

    dotMatrix.prototype = {
        init: function() {
            var context = this;
            new p5(function(p5) {
                p5.setup = function() {
                    p5.createCanvas(p5.windowWidth, p5.windowHeight);
                    p5.frameRate(30);

                    var cols = p5.windowWidth / context.xGap;
                    var rows = p5.windowHeight / context.yGap;

                    for(var r = 0; r < rows + 1; r++) {
                        var y = r * context.yGap;

                        for(var c = 0; c < cols + 1; c++) {
                            var x = c * context.xGap;
                            context.boids.push(new dotBoid(x,y));
                        }
                    }
                }

                p5.draw = function() {
                    p5.background(24);

                    for(var i = 0; i < context.boids.length; i++) {
                        var boid = context.boids[i];
                        if(context.mouseX && context.mouseY) {

                            var newX = context.mouseX + ((boid.x - context.mouseX) * 0.9);
                            var newY = context.mouseY + ((boid.y - context.mouseY) * 0.9);

                            p5.strokeWeight(1);
                            var strokeColour;
                            var d = context.distanceBetweenTwoPoints({x: boid.x, y: boid.y }, {x: context.mouseX, y: context.mouseY});
                            var alpha = d.dist / 1000;

                            if(alpha > 1) {
                                alpha = 1;
                            }
                            alpha = 1 - alpha;

                            var blueColour = p5.color('rgba(0, 1, 255, ' + alpha + ')');
                            p5.stroke(blueColour);
                            
                            p5.line(boid.x + 2, boid.y + 2, newX + 2, newY + 2);

                            var redColour = p5.color('rgba(255, 0, 61, ' + alpha + ')');
                            p5.stroke(redColour);
                            
                            p5.line(boid.x - 2, boid.y - 2, newX - 2, newY - 2);

                            strokeColour = p5.color('rgba(255, 255, 255, ' + alpha + ')');
                            p5.stroke(strokeColour);
                            
                            
                            p5.line(boid.x, boid.y, newX, newY);

                            

                            
                        }

                        /*p5.noStroke();
                        p5.fill(255);
                        p5.circle(boid.x, boid.y, 2);*/

                        

                    }
                }

                p5.mouseMoved = function() {
                    context.mouseX = p5.mouseX;
                    context.mouseY = p5.mouseY;
                    return false;
                }
            })
        },

        distanceBetweenTwoPoints: function(p1,p2) {
            var xDist = p2.x - p1.x;
            var yDist = p2.y - p1.y;
            var distance = Math.sqrt(xDist * xDist + yDist * yDist);
            return {
                xDist: xDist,
                yDist: yDist,
                dist: distance
            };
        }
    };

    return dotMatrix;
})(p5);

export default dotMatrix;
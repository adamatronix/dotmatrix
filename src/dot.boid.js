var dotBoid = (function() {

    dotBoid = function(x,y) {
        this.x = x;
        this.y = y;
        this.init();
    };

    dotBoid.prototype = {
        init: function() {
        },
    };

    return dotBoid;
})();

export default dotBoid;
function dessiner() {
    var canevas = document.querySelector('div canvas');
    if (canevas.getContext) {
        var ctx = canevas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}
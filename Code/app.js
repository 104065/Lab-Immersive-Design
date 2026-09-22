AFRAME.registerComponent('interactief-object', {
    init: function () {
        let element = this.el; 

        element.addEventListener('click', function () {

            let kleuren = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
            let randomKleur = kleuren[Math.floor(Math.random() *
kleuren.length)];
            element.setAttribute('color', randomKleur);

            element.setAttribute('scale', '1.2 1.2 1.2');
            });
        }
});
class Model {
    constructor() {
        // Traer servicios
        this.servicios = [];
        fetch('./models/servicios.json').then(response => {
            return response.json();
        }).then(data => {
            for (let servicio of data) {
                this.servicios.push(servicio);
            }
        }).catch(err => {
            console.log(err);
        });

        // Traer proyectos
        this.proyectos = [];
        fetch('./models/proyectos.json').then(response => {
            return response.json();
        }).then(data => {
            for (let proyecto of data) {
                this.proyectos.push(proyecto);
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
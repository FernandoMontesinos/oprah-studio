class Controller {
    constructor(Model, View) {
        this.Model = Model;
        this.View = View;
    }
    Inicio(app) {
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        this.View.renderInicio(app, this.Model.servicios, this.Model.proyectos);
        this.View.renderFooter(app);
    }
    About(app) {
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        this.View.renderAbout(app);
        this.View.renderFooter(app);
    }
    Servicios(app) {
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        this.View.renderServicios(app, this.Model.servicios, this.Model.proyectos);
        this.View.renderFooter(app);
    }
    Contacto(app) {
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        this.View.renderFooter(app);
    }
    Proyecto(app, idProyecto) {
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        this.View.renderFooter(app);
    }
}
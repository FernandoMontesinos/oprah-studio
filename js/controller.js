class Controller {
    constructor(View) {
        /* this.Model = Model; */
        this.View = View;
        this.baseUrl = "http://sd-1328509-h00036.ferozo.net/";
    }
    Inicio(app) {
        $('meta[property=og\\:url]').attr('content', this.baseUrl);
        $('meta[property=og\\:type]').attr('content', "website");
        $('meta[property=og\\:title]').attr('content', "Oprah Studio");
        $('meta[property=og\\:description]').attr('content', "Somos un Estudio Creativo que ofrece servicios de Community Manager, Branding, Creación de Contenido y Desarrollo de Páginas Web.");
        $('meta[property=og\\:image]').attr('content', `${this.baseUrl}assets/img/oprah-compartir.jpeg`);
        async function fetchModel() {
            const [serviciosResp, proyectosResp] = await Promise.all([
                fetch('./models/servicios.json'),
                fetch('./models/proyectos.json')
            ]);
            const servicios = await serviciosResp.json();
            const proyectos = await proyectosResp.json();
            return [servicios, proyectos];
        }

        document.title = `Oprah Studio - Bienvenid@`;
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        fetchModel().then(([servicios, proyectos]) => {
            this.View.renderInicio(app, servicios, proyectos);
            this.View.renderFooter(app);
        }).catch(error => {
            alert('Disculpas. Hubo un error al cargar la página. Por favor actualiza la página.');
            this.View.renderFooter(app);
        });
    }
    About(app) {
        $('meta[property=og\\:url]').attr('content', this.baseUrl);
        $('meta[property=og\\:type]').attr('content', "website");
        $('meta[property=og\\:title]').attr('content', "Oprah Studio");
        $('meta[property=og\\:description]').attr('content', "Somos un Estudio Creativo que ofrece servicios de Community Manager, Branding, Creación de Contenido y Desarrollo de Páginas Web.");
        $('meta[property=og\\:image]').attr('content', `${this.baseUrl}assets/img/oprah-compartir.jpeg`);
        document.title = `OSP - About`;
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        this.View.renderAbout(app);
        this.View.renderFooter(app);
    }
    Servicios(app) {
        $('meta[property=og\\:url]').attr('content', this.baseUrl);
        $('meta[property=og\\:type]').attr('content', "website");
        $('meta[property=og\\:title]').attr('content', "Oprah Studio");
        $('meta[property=og\\:description]').attr('content', "Somos un Estudio Creativo que ofrece servicios de Community Manager, Branding, Creación de Contenido y Desarrollo de Páginas Web.");
        $('meta[property=og\\:image]').attr('content', `${this.baseUrl}assets/img/oprah-compartir.jpeg`);
        async function fetchModel() {
            const [serviciosResp, proyectosResp] = await Promise.all([
                fetch('./models/servicios.json'),
                fetch('./models/proyectos.json')
            ]);
            const servicios = await serviciosResp.json();
            const proyectos = await proyectosResp.json();
            return [servicios, proyectos];
        }

        document.title = `OSP - Servicios`;
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        fetchModel().then(([servicios, proyectos]) => {
            this.View.renderServicios(app, servicios, proyectos);
            this.View.renderFooter(app);
        }).catch(error => {
            alert('Disculpas. Hubo un error al cargar la página. Por favor actualiza la página.');
            this.View.renderFooter(app);
        });
    }
    Contacto(app) {
        $('meta[property=og\\:url]').attr('content', this.baseUrl);
        $('meta[property=og\\:type]').attr('content', "website");
        $('meta[property=og\\:title]').attr('content', "Oprah Studio");
        $('meta[property=og\\:description]').attr('content', "Somos un Estudio Creativo que ofrece servicios de Community Manager, Branding, Creación de Contenido y Desarrollo de Páginas Web.");
        $('meta[property=og\\:image]').attr('content', `${this.baseUrl}assets/img/oprah-compartir.jpeg`);
        document.title = `OSP - Contacto`;
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        this.View.renderContacto(app);
        this.View.renderFooter(app);

        // Form Contacto
        const formContacto = document.getElementById('form-contacto');
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(formContacto);
            let body = '';
            let confirm = 0;
            for (var [key, value] of formData) {
                if (value === '') { confirm = 1; }
                body += `
                ${key}: ${value}.<br>
                `;
            }
    
            if (confirm === 0) {
                $('.contact-button').prop('disabled', true);
                $('.respuesta-form').html('Enviando, esperá un momento...');
                $.ajax({
                    url: 'php/enviar-email.php',
                    data: { "mensaje": body, "subject": "Nuevo Mensaje desde oprahstudio.cu.ma" },
                    type: 'POST',
                    success: function (data) {
                        $('#gracias').css('display', 'block');
                        $('.mensaje').html(`<h5 style="text-align: center; color: var(--natural);">${data.message}</h5>`);
                        document.getElementById("form-contacto").reset();
                        $('.contact-button').prop('disabled', false);
                        $('.respuesta-form').html('');
                        $('.respuesta-form').fadeOut('fast');
                    },
                    error: function (data) {
                        $('.respuesta-form').html(data.message);
                    },
                });
            } else {
                $('.respuesta-form').html('Por favor completá el formulario.');
            }
        });

    }
    Trabajo(app, idTrabajo) {
        this.View.vaciarApp(app);
        this.View.renderHeader(app);
        async function fetchModel() {
            const [proyectosResp] = await Promise.all([
                fetch('./models/proyectos.json')
            ]);
            const proyectos = await proyectosResp.json();
            return [proyectos];
        }

        fetchModel().then(([proyectos]) => {
            const buscId = parseInt(idTrabajo);
            const envTrabajo = proyectos.find((element) => element.id === buscId);
            // Cambiar data
            document.title = `OSP - ${envTrabajo.nombre}`;
            $('meta[property=og\\:url]').attr('content', `${this.baseUrl}#/trabajo?id=${envTrabajo.id}`);
            $('meta[property=og\\:type]').attr('content', "website");
            $('meta[property=og\\:title]').attr('content', `${envTrabajo.nombre}`);
            $('meta[property=og\\:description]').attr('content', `${envTrabajo.detalle}`);
            $('meta[property=og\\:image]').attr('content', `${this.baseUrl}assets/img/${envTrabajo.imagen}`);
            this.View.renderTrabajo(app, envTrabajo);
            this.View.renderFooter(app);
        }).catch(error => {
            alert('Disculpas. Hubo un error al cargar la página. Por favor actualiza la página.');
            this.View.renderFooter(app);
        });
    }
}
//COMPONENTE A EMPLEAR CUANDO NO SE ENCUENTRA LA PAGINA SOLICITADA
const ErrorComponent = (padre) => {
    $(padre).html("<div class='error404'><div><h1>Error 404</h1><br><span>La página que estás buscando no existe :(</span></div></div>");
}

const app = new Controller(new View());

//ROUTER
const routes = [
    { path: '/', action: 'Inicio' },
    { path: '/inicio', action: 'Inicio' },
    { path: '/about-us', action: 'About Us' },
    { path: '/servicios', action: 'Servicios' },
    { path: '/contacto', action: 'Contacto' },
    { path: '/trabajo', action: 'Trabajo' },
]

//OBTENER URL
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//OBTENER ACCIÓN
const findActionByTag = (path) => routes.find(r => r.path == path) || 'default';

const router = () => {
    //OBTENER RUTA ACTUAL
    const path = parseLocation().split('?');
    const route = findActionByTag(path[0]);
    //OBTENER PRIMER GET -> ID DE PROYECTO
    let varData;
    if (path[1]) {
        varData = path[1].split('=')[1];
    }
    
    //OBTENER ACCIÓN ACTUAL
    switch (route.action) {
        case 'Inicio':
            app.Inicio("#app");
            break;
        case 'About Us':
            app.About("#app");
            break;
        case 'Servicios':
            app.Servicios("#app");
            break;
        case 'Contacto':
            app.Contacto("#app");
            break;
        case 'Trabajo':
            app.Trabajo("#app", varData);
            break;
        default:
            ErrorComponent("#app");
            break;
    }
};

// LANZAR ROUTER
$(window).on('load', () => { router(); $('#cargador').fadeOut('fast') });
$(window).on('hashchange', () => router());

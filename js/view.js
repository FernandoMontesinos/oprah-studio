// VISTA
class View {
    vaciarApp(app) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        $('body').css('overflow', 'auto');
        $(app).html('');
    }
    renderHeader(app) {
        $(app).prepend(render('header'));
    }
    renderFooter(app) {
        $(app).append(render('footer'));
    }
    renderAbout(app) {
        $(app).append(render('about us'));
    }
    renderServicios(app, servicios, proyectos) {
        $(app).append(render('servicios', servicios));
        $(app).append(render('trabajos', proyectos));
        $('.owl-carousel.servicios').owlCarousel({
            nav: false,
            dots: false,
            autoplay:false,
            margin: 60,
            loop: false,
            responsive:{
                0:{
                    items: 1,
                    nav: true
                },
                576:{
                    items: 2,
                    margin: 30,
                },
                1000:{
                    items: 3,
                    margin: 40,
                },
                1200:{
                    items:5
                }
            }
        });
        $('.owl-carousel.proyectos').owlCarousel({
            nav: false,
            dots: false,
            autoplay:false,
            margin: 80,
            loop: true,
            responsive:{
                0:{
                    items: 1,
                    nav: true
                },
                576:{
                    items: 2,
                    margin: 60,
                },
                1100:{
                    items:3
                }
            }
        });
    }
    renderInicio(app, servicios, proyectos) {
        $(app).append(render('presentacion'));
        $(app).append(render('about us'));
        $(app).append(render('servicios', servicios));
        $(app).append(render('trabajos', proyectos));
        $('.owl-carousel.servicios').owlCarousel({
            nav: false,
            dots: false,
            autoplay:false,
            margin: 60,
            loop: false,
            responsive:{
                0:{
                    items: 1,
                    nav: true
                },
                576:{
                    items: 2,
                    margin: 30,
                },
                1000:{
                    items: 3,
                    margin: 40,
                },
                1200:{
                    items:5
                }
            }
        });
        $('.owl-carousel.proyectos').owlCarousel({
            nav: false,
            dots: false,
            autoplay:false,
            margin: 80,
            loop: true,
            responsive:{
                0:{
                    items: 1,
                    nav: true
                },
                576:{
                    items: 2,
                    margin: 60,
                },
                1100:{
                    items:3
                }
            }
        });
        $(app).append(render('listo'));
    }
}
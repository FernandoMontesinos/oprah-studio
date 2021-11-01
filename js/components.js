const render = (tipo, data) => {
    switch (tipo) {
        //COMPONENTE HEADER
        case 'header':
            return `
            <nav class="navbar navbar-light navbar-expand-md px-4 border-lines d-flex justify-content-center">
                <div class="container" style="max-width: 1140px;">
                    <a class="navbar-brand" href="#"><img src="assets/img/LOGO.png" /></a>
                    <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                    <span class="visually-hidden">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="navbar-nav ms-auto text-uppercase">
                        <li class="nav-item">
                        <a class="nav-link" href="#/about-us">about us</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#/servicios">servicios</a></li>
                        <li class="nav-item">
                        <a class="nav-link" href="#/contacto">contactanos</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            `;
            break;
        
        // COMPONENTE PRESENTACIÓN
        case 'presentacion':
            return `
            <section class="bg-natural">
                <div class="row g-0 bg-natural">
                <div class="col-12 col-md-5 notop"></div>
                <div class="col-12 col-md-7">
                    <div class="row g-0" style="max-width: 100%">
                    <div class="col-12 pad-desc border-bottom-0">
                        <h3 class="oprah-description">
                        SOMOS un estudio&nbsp;
                        <span class="circle-text">creativo</span>
                        que ofrece&nbsp;&nbsp;<span class="separator"></span>
                        &nbsp; servicios de community manager, branding, creación de
                        contenido y desarrollo de páginas web.&nbsp;&nbsp;
                        <span class="separator"></span>
                        </h3>
                    </div>
                    <div class="col-12">
                        <a class="text-uppercase contact-button d-flex justify-content-center align-items-center border-bottom-0" href="#/contacto">¡contactanos!</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            `;
            break;
        // COMPONENTE CONTACTO
        case 'contacto': 
            return `
           <section id="contacto bg-natural">
           <div class="row g-0 bg-natural">
           <div class="col-12 col-md-5 notop-2">
           <h3 style="font-family: Georgia; font-style: italic; color: #384751; font-size: 93px; text-align:center; margin-right: 7vw; margin-top: 2rem" >Let’s</h3>
           <h3 style="font-family: Georgia; font-style: italic; color: #384751; font-size: 93px; text-align: center; margin-left: 8vw; margin-top: -2.3rem;">talk!</h3>
           </div>
           <div class="col-12 col-md-7">
               <div class="row g-0" style="max-width: 100%">
                    <form id="form-contacto" type="POST">
                    <div class="col-12 pad-desc border-bottom-0">
                        <div class="contenedor-input">
                            <input type="text" name="nombre" class="input-contacto" id="nombre-contacto" placeholder="Nombre completo - un gusto conocerte!">
                            <label class="label-contacto" for="nombre-contacto">NOMBRE</label>
                            <input type="text" name="proyecto" class="input-contacto" id="proyecto-contacto" placeholder="El nombre de tu proyecto a realizar">
                            <label class="label-contacto" for="proyecto-contacto">TU PROYECTO</label>
                            <input type="email" name="email" class="input-contacto" id="mail-contacto" placeholder="El mail al que recibirás la respuesta">
                            <label class="label-contacto" for="mail-contacto">MAIL</label>
                            <input type="text" name="mensaje" class="input-contacto" id="servicio-contacto" placeholder="Servicio en el que estes interesad@ y detalles del proyecto.">
                            <label class="label-contacto" for="servicio-contacto">MENSAJE</label>
                        </div>    
                    </div>
                    <div class="col-12">
                        <h5 class="respuesta-form" style="color: var(--gris); text-align:center; height: 1.8rem;"></h5>
                        <button type="submit" class="text-uppercase contact-button d-flex justify-content-center align-items-center">Enviar</button>
                    </div>
                    </form>
               </div>
           </div>
           </div>
           </section>
        `;
        break;
        case 'gracias': 
           return `
           <section id="gracias" class="bg-grey" style="display: none;">
           <div class="container-fluid" style="padding: 0;">
               <div class="col-12 d-flex justify-content-center contenedor-gracias">
                    <div style="width: 100%;">
                    <h3 style="font-family: Georgia; font-style: italic; color: #f1efe2; font-size: 68px; text-align: center; ">
                    ¡Gracias!</h3>
                    <div class="mensaje"></div>
                    </div>
               </div>
               </div>
           </div>
       </section>
        `;
        break;
        
        // COMPONENTE ABOUT US
        case 'about us':
            return `
            <section id="about-us" class="bg-grey">
                <div class="container-fluid" style="padding: 0;">
                    <div class="row g-0 border-top-0">
                    <div class="col-12 col-xl-7 border-right position-relative d-flex flex-column justify-content-center align-items-center about-container">
                        <div class="d-flex flex-column parrafo-behind">
                            <h3 class="mobile text-uppercase mb-3" style=" color: #f1efe2; font-family: 'Avenir-Book'; font-size: 27px; display: none;">
                                ABOUT US<br />
                            </h3>
                            <h2 class="mb-0" style="color: #f1efe2; font-size: 70px; font-family: NewYork">
                                Behind Oprah
                            </h2>
                            <h3 class="text-uppercase mb-3" style=" color: #f1efe2; font-family: 'Avenir-Book'; font-size: 27px;">
                                ABOUT US<br />
                            </h3>
                            <p style="font-size: 18px; color: #f1efe2; font-family: 'Avenir-Book'; line-height: 29px;">
                                Somos dos hermanos
                                <strong style="font-family: 'Avenir-Black';">apasionados por el mundo digital y el diseño.</strong>
                                Creamos este estudio para brindar soporte a quienes quieran ser
                                parte de este universo digital.Creamos marcas con identidad, con
                                una misión, desarrollando conceptos y experiencias.<br />
                            </p>
                        </div>
                        <div class="w-75">
                        <p style="font-size: 28px; font-family: 'Georgia-Italic'; font-style: italic; color: #d5e3ef;">
                            <strong style="font-family: 'Georgia-ItalicBold'">Creamos marcas que inspiran</strong> a través de la
                            creatividad y el detalle.
                        </p>
                        </div>
                        <img class="position-absolute image-star1" src="assets/img/estrella-about%20us.png" style="bottom: 13%; left: 2%" />
                    </div>
                    <div class="col-xl-5 imagenes-behind">
                        <div class="row g-0" style="height: 100%;">
                        <div class="col-12 p-3 border-bottom" style="border-left: 1px solid var(--natural); padding-right: 0 !important;">
                            <img class="img-fluid" src="assets/img/img-02-about%20us.png" />
                        </div>
                        <div class="col-12 p-3" style="border-left: 1px solid var(--natural); padding-right: 0 !important;">
                            <img class="img-fluid" src="assets/img/img-03-about%20us.png" />
                        </div>
                        <div class="col-12 p-3 border-top" style="border-left: 1px solid var(--natural); padding-right: 0 !important;">
                            <img class="img-fluid" src="assets/img/img-04-about%20us.png" />
                        </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex position-relative justify-content-center border-top bg-stars trabajemos-container">
                        <div class="py-5 text-center d-flex flex-column align-items-center">
                        <h2 class="m-0 text-uppercase" style="color: #f1efe2; font-size: 60px; font-family: 'Avenir-Book';">
                            dejalo todo en
                        </h2>
                        <h3 style="font-family: Georgia; font-style: italic; color: #f1efe2; font-size: 73px; margin-top: -2rem; margin-bottom: 1rem;">
                            nuestras manos
                        </h3>
                        <a class="btn-trabajemos d-flex justify-content-center align-items-center text-decoration-none text-uppercase" href="/#/servicios">
                        trabajemos junt@s
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            `;
            break;
        
        // COMPONENTE SERVICIOS
        case 'servicios':
            const inicioServicios = `
            <section id="servicios" class="pt-5">
                <div class="container" style="max-width: 1200px; padding: 0 2rem;">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <h3 class="titulo" style="font-family: NewYork; font-size: 70px; line-height: 68px;">
                                    Servicios
                                    </h3>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end align-items-center img-flecha">
                                    <img src="./assets/img/flecha-servicios.png" alt="servicios" />
                                </div>
                            </div>
                        </div>
                        <div class="owl-carousel servicios owl-theme services-cards">`;

            let listaServicios = '';
            data.map(item => {
                listaServicios = ` ${ listaServicios }
                            <div class="item">
                                <div class="col-12">
                                    <img
                                        src="./assets/img/${item.imagen}"
                                        alt="${item.nombre}"
                                        class="img-fluid"
                                    />
                                </div>
                                <div class="col-12"><hr /></div>
                                <div class="col-12 pad-serv">
                                    <h3>${item.id}.</h3>
                                </div>
                                <div class="col-12"><hr /></div>
                                <div class="col-12 pad-serv">
                                    <h4>${item.nombre}</h4>
                                </div>
                            </div>`;
            })
            const finalServicios = `
                        </div>
                    </div>
                </div>
            </section>`;
            return `${inicioServicios} ${listaServicios} ${finalServicios}`;
            break;
        
        // COMPONENTE TRABAJOS
        case 'trabajos':
            const inicioTrabajos = `
            <section id="trabajos">
                <div class="container-fluid">
                    <div class="col-md-12 pt-5">
                        <div class="row pt-3">
                            <div class="col hr1" style="padding: 0 !important;"><hr /></div>
                            <div class="col"><h2 class="titulo-intermedio">ALGUNOS TRABAJOS QUE HICIMOS</h2></div>
                            <div class="col" style="padding: 0 !important;""><hr /></div>
                        </div>
                    </div>
                </div>
                <div class="container" style="max-width: 1200px; padding: 0 2rem;">
                    <div class="col-md-12 py-5">
                        <div class="row pt-3 justify-content-between portfolio">
                            <div class="owl-carousel proyectos owl-theme">
                    `;
            let listaTrabajos = '';
            data.map(item => {
                listaTrabajos = ` ${ listaTrabajos }
                                <div class="item">
                                    <div class="row">
                                        <div class="col-12">
                                        <h4 style="text-transform: uppercase;">
                                            <b>${item.nombre}</b> || ${item.detalle}
                                        </h4>
                                        </div>
                                        <div class="col-12"><hr /></div>
                                        <div class="col-12">
                                        <img
                                            src="./assets/img/${item.imagen}"
                                            alt="porfolio"
                                            class="img-fluid"
                                        />
                                        </div>
                                        <div class="col-12">
                                        <div class="row" style="margin-top: .5rem">
                                            <div class="col-6"><span>${item.fecha}</span></div>
                                            <a class="col-6 text-end" href="/#/trabajo?id=${item.id}"><b>VER MÁS</b></a>
                                        </div>
                                        </div>
                                    </div>
                                </div>`;
            })
            const finalTrabajos = `
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;
            return `${inicioTrabajos} ${listaTrabajos} ${finalTrabajos}`;
            break;
        case 'listo':
            return `
            <section id="listo" class="bg-grey">
                <div class="container-fluid" style="padding: 0;">
                    <div class="col-12 d-flex position-relative justify-content-center border-top bg-stars trabajemos-container">
                        <div class="py-5 text-center d-flex flex-column align-items-center">
                        <h2 class="m-0 text-uppercase" style="color: #f1efe2; font-size: 60px; font-family: 'Avenir-Book';">
                            ¿LIST@ PARA COMENZAR A
                        </h2>
                        <h3 style="font-family: Georgia; font-style: italic; color: #f1efe2; font-size: 73px; margin-top: -2rem; margin-bottom: 1rem;">
                            planear tu proyecto?
                        </h3>
                        </div>
                    </div>
                    </div>
                </div>
                <a class="btn-trabajemos contacto d-flex justify-content-center align-items-center text-decoration-none text-uppercase" href="#/contacto">
                ¡CONTACTANOS!
                </a>
            </section>
            `;
            break;           
        case 'footer':
            return `
                <section id="footer-pc" class="bg-grey">
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 col-lg-4 d-flex justify-content-center align-items-center container-fredes">
                            <div>
                                <a class="btn-fredes mail" href="mailto:theoprahstudio@gmail.com" target="_blank">theoprahstudio@gmail.com</a>
                                <br />
                                <a class="btn-fredes tel" href="tel:+54 1159734835" target="_blank">+54 1159734835</a>
                                <br />
                                <a class="btn-fredes insta" href="https://instagram.com/theoprahstudio" target="_blank">theoprahstudio</a>
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-4 d-flex justify-content-center align-items-center container-fcontact">
                            <div>
                                <h2 class="mb-0" style="color: #f1efe2; font-size: 70px; font-family: NewYork">
                                Contact
                                </h2>
                                <h3 class="text-uppercase mb-3" style=" color: #f1efe2; font-family: 'Avenir-Book'; font-size: 27px;">
                                GET IN TOUCH<br>
                                </h3>
                                <div>
                                    <button onClick="window.open('https://instagram.com/theoprahstudio', '_blank')" class="boton-icon instagram">&nbsp</button>
                                    <button onClick="window.open('https://facebook.com/theoprahstudio', '_blank')" class="boton-icon facebook">&nbsp</button>
                                    <button onClick="window.open('https://pinterest.com/theoprahstudio', '_blank')" class="boton-icon pinterest">&nbsp</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-4 d-flex justify-content-center align-items-center container-flogo">
                            <div>
                            <img src="assets/img/logo-oprah-alt.png" style="width: 160px; height: 174px;" />
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section id="footer-mobile" class="bg-grey">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-8 d-flex justify-content-center align-items-center" style="height: 138px; border-right: 1px solid var(--natural); border-bottom: 1px solid var(--natural);">
                                <div>
                                    <h2 class="mb-0" style="color: #f1efe2; font-size: 50px; font-family: NewYork">
                                    Contact
                                    </h2>
                                    <h3 class="text-uppercase mb-3" style=" color: #f1efe2; font-family: 'Avenir-Book'; font-size: 20px;">
                                    GET IN TOUCH<br>
                                    </h3>
                                </div>
                            </div>

                            <div class="col-4 d-flex justify-content-center align-items-center" style="border-bottom: 1px solid var(--natural);">
                                <div>
                                <img src="assets/img/logo-oprah-alt.png" style="width: 88px; height: 96px;" />
                                </div>
                            </div>

                            <div class="col-4 d-flex justify-content-center align-items-center" style="height: 85px; border-right: 1px solid var(--natural);">
                                <div>
                                    <button style="width: 25px; height: 25px; margin: 0 .10rem;" onClick="window.open('https://instagram.com/theoprahstudio', '_blank')" class="boton-icon instagram">&nbsp</button>
                                    <button style="width: 25px; height: 25px; margin: 0 .10rem;" onClick="window.open('https://facebook.com/theoprahstudio', '_blank')" class="boton-icon facebook">&nbsp</button>
                                    <button style="width: 25px; height: 25px; margin: 0 .10rem;" onClick="window.open('https://pinterest.com/theoprahstudio', '_blank')" class="boton-icon pinterest">&nbsp</button>
                                </div>
                            </div>

                            <div class="col-8 d-flex justify-content-center align-items-center">
                                <div>
                                    <a class="btn-fredes mail" style="height: 25px; font-size: 12px; background-size: 16px auto; padding-left: 2rem;" href="mailto:theoprahstudio@gmail.com" target="_blank">theoprahstudio@gmail.com</a>
                                    <a class="btn-fredes tel" style="height: 25px; font-size: 12px; background-size: 16px auto; padding-left: 2rem;" href="tel:+54 1159734835" target="_blank">+54 1159734835</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'trabajo':
            const trabajos = `
                <div class="container-md" style="max-width: 960px; padding: 0; width: 100%; height: 300px; object-fit: contain; object-position: center;">
                    <img src="assets/img/${data.imagen}" alt="${data.nombre}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
                </div>
                <div class="container-md" style="max-width: 960px;">
                    <h5 style="margin-top: 3rem;"><i>${data.fecha}</i></h5>
                    <h3 class="titulo" style="margin-top: 2rem; font-family: NewYork; font-size: 70px; line-height: 68px;">${data.nombre}</h3>
                    <h4 style="margin-top: 1rem;">${data.detalle}</h4>
                    <p style="margin-top: 3rem;">${data.descripcion}</p>

                    <p style="margin-top: 5rem; text-align: center;"><i>Compartilo</i></p>
                    <div class="sharethis-inline-share-buttons"></div>
                </div>
            `;
            return `
                <section id="trabajos" style="padding-bottom: 5rem;">
                    ${trabajos}
                </section>
            `;
                break;
    }
}
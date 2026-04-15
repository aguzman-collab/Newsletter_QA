class Home{
    obtenerBotonCerrar = () => cy.get('div[id="elementor-popup-modal-30467"] a i'); 
    obtenerTextoBienvenidos = () => cy.get('div[data-id="0364d7c"] h1'); 
    obtenerParrafoBienvenidos = () => cy.get('div[data-id="239185e"] p'); 
    obtenerTextoInteres = () => cy.get('div[data-id="34132a4"] h3');
    obtenerTextoInvitamos = () => cy.get('div[data-id="d67c4bd"] h2');
    obtenerVideoCompensar1 = () => cy.get('iframe[src*="youtube"]'); 
    obtenerTextoDiversidad0 = () => cy.get('div[data-id="7d20c5c"] h2')
    obtenerParrafoDiversidad1 = () => cy.get('div[data-id="d43cc82"] p') 
    obtenerTextoEventos = () => cy.get('div[data-id="442e366"] h2') 
    obtenerBotonCarrusel = () => cy.get('div[data-id="3f3f7ae"] i')
}

class Header{
    obtenerLogoNutraNews = () => cy.get('div[data-id="5fe3722"] img ');
    obtenerBotonHome = () => cy.get('li[id="menu-item-19108"] a') 
    obtenerBotonTribu = () => cy.get('li[id="menu-item-24516"] a') 
    obtenerBotonBienestar = () => cy.get('li[id="menu-item-24549"] a') 
    obtenerBotonBuzon = () => cy.get('li[id="menu-item-17412"] a') 
}

class Footer{
    obtenerLogoNutraNewsFooter = () => cy.get('div[data-id="f7b8088"] img '); 
    obtenerTextoSiguenos = () => cy.get('div[data-id="cd064a8"] h4');
    obtenerBotonRedes = () => cy.get('[data-id="83f52ac"] [class="elementor-icon-list-item"] a'); 
    obtenerTextoOtros = () => cy.get('div[data-id="2cb916a"] h4'); 
    obtenerBotonRedesNutra = () => cy.get('[data-id="d109196"] [class="elementor-icon-list-item"] a') 
    obtenerLogoIcontec = () => cy.get('div[data-id="e2b3939"] img') 
    obtenerBotonTYC = () => cy.get('div[data-id="edd4c23"] a') 
    obtenerTextoPioneros = () => cy.get('div[data-id="135ae40"] h5') 
} 


class Tribu{
    obtenerBotonCerrarTribu1 = () => cy.get('div[id="elementor-popup-modal-31397"] a i')
    obtenerBotonCerrarTribu2 = () => cy.get('div[id="elementor-popup-modal-32265"] a i')
    obtenerTextoTri = () => cy.get('div[data-id="6b18926b"] h2')
    obtenerParrafoTri = () => cy.get('div[data-id="53870b1"] p')
    ///Ingresos
    obtenerTextoIngresos = () => cy.get('div[data-id="5a13117"] h2')
    obtenerTextoEnero = () => cy.get('div[data-id="9852a01"] h3')
    obtenerImgEne = () => cy.get('div[data-id="5702aac"] img')
    obtenerTextoNoviem = () => cy.get('div[data-id="baa6843"] h3')
    obtenerImgNoviem = () => cy.get('div[data-id="128762d"] img')
    obtenerTextoOctub = () => cy.get('div[data-id="4467e6b"] h3')
    obtenerImgOctub = () => cy.get('div[data-id="b8789cb"] img')
    obtenerTextoSepti = () => cy.get('div[data-id="aa5afe2"] h3')
    obtenerImgSepti = () => cy.get('div[data-id="00912bb"] img')
    obtenerTextoAgost = () => cy.get('div[data-id="0929008"] h3')
    obtenerImgAgost = () => cy.get('div[data-id="35887d3"] img')
    obtenerTextoJulio = () => cy.get('div[data-id="6507637"] h3')
    obtenerImgJulio = () => cy.get('div[data-id="595512b"] img')
    obtenerTextoJunio = () => cy.get('div[data-id="f21beab"] h3')
    obtenerImgJunio = () => cy.get('div[data-id="c74dc2c"] img')
    obtenerTextoMayo = () => cy.get('div[data-id="182f9d1"] h3')
    obtenerImgMayo = () => cy.get('div[data-id="42d30b1"] img')
    ///Retiros
    obtenerBotonRetiros = () => cy.get('div[data-id="3e32baa"] [id="retiros"]')
    obtenerTextoRetiros = () => cy.get('div[data-id="75acc94"] h2')
    obtenerTextoEneRe = () => cy.get('div[data-id="e02d9ef"] h3')
    obtenerImgEneRe = () => cy.get('div[data-id="95d1bb6"] img')
    obtenerTextoNoviRe = () => cy.get('div[data-id="2b1e1af"] h3')
    obtenerImgNoviRe = () => cy.get('div[data-id="03c43e7"] img')
    obtenerTextoOctuRe = () => cy.get('div[data-id="69503f5"] h3')
    obtenerImgOctuRe = () => cy.get('div[data-id="ae2e9e9"] img')
    obtenerTextoSeptiRe = () => cy.get('div[data-id="fbc3d67"] h3')
    obtenerImgSeptiRe = () => cy.get('div[data-id="1f49e40"] img')
    obtenerTextoAgostRe = () => cy.get('div[data-id="f4df2e6"] h3')
    obtenerImgAgostRe = () => cy.get('div[data-id="c45e4f1"] img')
    obtenerTextoJulioRe = () => cy.get('div[data-id="c8ca300"] h3')
    obtenerImgJulioRe = () => cy.get('div[data-id="85cb199"] img')
    obtenerTextoJunioRe = () => cy.get('div[data-id="30c873a"] h3')
    obtenerImgJunioRe = () => cy.get('div[data-id="b07b90a"] img')
    obtenerTextoMayoRe = () => cy.get('div[data-id="e0d7fd4"] h3')
    obtenerImgMayoRe = () => cy.get('div[data-id="2db3c27"] img')
    obtenerTextoAbrilRe = () => cy.get('div[data-id="73f889b"] h3')
    obtenerImgAbrilRe = () => cy.get('div[data-id="02711ef"] img')
    obtenerTextoMarzoRe = () => cy.get('div[data-id="9803c01"] h3')
    obtenerImgMarzoRe = () => cy.get('div[data-id="f1c248c"] img')
    obtenerTextoFebreroRe = () => cy.get('div[data-id="14e02c1"] h3')
    obtenerImgFebreroRe = () => cy.get('div[data-id="bda2579"] img')
    obtenerTextoEneroRe = () => cy.get('div[data-id="80cffd9"] h3')
    obtenerImgEneroRe = () => cy.get('div[data-id="81b4973"] img')
    ///Convocatorias
    obtenerBotonConvoca = () => cy.get('div[data-id="3e32baa"] [id="convocatorias"]')
    obtenerTextoConvoca = () => cy.get('div[data-id="5abef02"] h2')
    obtenerBotonFleCarru = () => cy.get('div[class="wpcp-prev-button swiper-button-prev"] i')
    obtenerBotonMasInfo = () => cy.get('div[data-id="5afea3d"] a')
    obtenerTextoInter = () => cy.get('div[data-id="f26bb19"] h2')
    obtenerImgInter = () => cy.get('div[data-id="7fc28d6"] img')
    obtenerTextoTips = () => cy.get('div[data-id="b8ee613"] h2')
    obtenerImgTips = () => cy.get('div[data-id="29523e6"] img')
    ///obtenerBotonSubir = () => cy.get('a[class="trx_addons_scroll_to_top trx_addons_icon-up scroll_to_top_style_default inited show"]')
    ///SST
    obtenerBotonSST = () => cy.contains('SST')
    obtenerTextoSST = () => cy.get('div[data-id="a814b00"] h2')
    obtenerTextoSeguIndu = () => cy.get('div[data-id="14e597ab"] h6')
    obtenerTextoDescu = () => cy.get('div[data-id="2f327ef4"] h2')
    obtenerParrafoDescu = () => cy.get('div[data-id="339cae80"] p')
    obtenerBotonVermas1 = () => cy.get('div[data-id="7907ac67"] a')
    obtenerTextoHigiOcupa = () => cy.get('div[data-id="dbb88d9"] h6')
    obtenerTextoPierdas = () => cy.get('div[data-id="3c2b8d2"] h2')
    obtenerParrafoPierdas = () => cy.get('div[data-id="b91e96b"] p')
    obtenerBotonVermas2 = () => cy.get('div[data-id="bff0007"] a')
    obtenerTextoHigiOcupa2 = () => cy.get('div[data-id="7e85960"] h6')
    obtenerTextoComprom = () => cy.get('div[data-id="2e43ce7"] h2')
    obtenerParrafoComprom = () => cy.get('div[data-id="846eb5a"] p')
    obtenerBotonVermas3 = () => cy.get('div[data-id="d6838cf"] a')
    obtenerTextoSeguIndu2 = () => cy.get('div[data-id="c656990"] h6')
    obtenerTextoPostu = () => cy.get('div[data-id="ca892f5"] h2')
    obtenerParrafoPostu= () => cy.get('div[data-id="6550a2d"] p')
    obtenerBotonVermas4 = () => cy.get('div[data-id="473e7bd"] a')
    obtenerTextoHigiOcupa3 = () => cy.get('div[data-id="0e51dc4"] h6')
    obtenerTextoPausas = () => cy.get('div[data-id="c79c2f2"] h2')
    obtenerParrafoPausas = () => cy.get('div[data-id="559a373"] p')
    obtenerBotonVermas5 = () => cy.get('div[data-id="5f67ff9"] a')

    ///NOVEDADES
    obtenerBotonNoved = () => cy.contains('Novedades')
    obtenerTextoNoved = () => cy.get('div[data-id="286e7bfc"] h2')
    obtenerPaginas = () => cy.get('div[data-id="993ac09"] a')
    obtenerTextoPaginas = () => cy.get('div[data-id="993ac09"] h3')
} 


class HeaderMovil{
    obtenerLogoNutraNewsMov = () => cy.get('div[data-id="5fe3722"] img');
    obtenerTextoNutraNews = () => cy.get('div[class="menu_mobile_header_wrap"] [class="logo_text"]')
    obtenerLinkLogoNutraNews = () => cy.get('a[class="sc_layouts_logo"]')
    obtenerBotonMenu = () => cy.get('div[data-id="8bb2417"] [class="sc_layouts_item_link sc_layouts_iconed_text_link inited_click"]')
    obtenerBotonesMov = () => cy.get('ul[id="menu_mobile"] a')
    obtenerBotonesRedes = () => cy.get('div[class="socials_mobile"] a')
    obtenerBotonClose = () => cy.get('[class="menu_mobile_close menu_button_close inited_click"] [class="menu_button_close_icon"]')
    
}

class FooterMovil{
    obtenerLogoNutraNewsMovFooter = () => cy.get('div[data-id="f7b8088"] img ');
    obtenerTextoSiguenosFooter = () => cy.get('div[data-id="cd064a8"] h4');
    obtenerBotonRedesMovFooter = () => cy.get('[data-id="83f52ac"] [class="elementor-icon-list-item"] a'); 
    obtenerTextoOtrosMovFooter = () => cy.get('div[data-id="2cb916a"] h4');
    obtenerbotonRedesNutraMovFooter = () => cy.get('[data-id="d109196"] [class="elementor-icon-list-item"] a') 
    obtenerLogoicontecMovFooter = () => cy.get('div[data-id="e2b3939"] img') 
    obtenerLogoIqnetMovFooter = () => cy.get('div[data-id="ea98bf2"] img')
    obtenerbotonTYCMovFooter = () => cy.get('div[data-id="edd4c23"] a') 
    obtenerTextoPionerosMovFooter = () => cy.get('div[data-id="135ae40"] h5') 
    obtenerLogo2011MovFooter = () => cy.get('div[data-id="c1ddb63"] img')
}

class Novedades{
    ///Calamidades Domesticas 
    obtenerTextoCalaDome = () => cy.get('h1[class="post_title entry-title"]')
    obtenerBotonVolver1 = () => cy.get('div[data-id="48bf25b"] a')
    obtenerParrafoCalaDome = () => cy.get('div[data-id="6dad8cae"] p')
    obtenerTextoPasos = () => cy.get('div[data-id="6dad8cae"] h3')
    obtenerParrafoPasos = () => cy.get('div[data-id="6dad8cae"] ul li')
    obtenerBotonRegisCalami = () => cy.get('div[data-id="ab6d285"] [class="elementor-button-wrapper"]')

    ///Licencias por Luto
    obtenerTextoLicenLuto = () => cy.get('h1[class="post_title entry-title"]')
    obtenerBotonVolver2 = () => cy.get('div[data-id="7d1707a"] a')
    obtenerParrafoLicenLuto = () => cy.get('div[data-id="6dad8cae"] p')
    obtenerTextoPasosLicenLuto = () => cy.get('div[data-id="6dad8cae"] h3')
    obtenerParrafoPasosLicenLuto = () => cy.get('div[data-id="6dad8cae"] ul li')
    obtenerBotonLicenLuto = () => cy.get('div[data-id="0486e14"] a')

    ///Licencias DE PATERNIDAD
    obtenerTextoLicenPater = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolver3 = () => cy.get('div[data-id="7f3a863"] [class="elementor-button-text"]')
    obtenerTextoPreguntas = () => cy.get('div[data-id="6dad8cae"] h3')
    obtenerParrafosLicenPater = () => cy.get('div[data-id="6dad8cae"] p')
    obteneritemsLicenPater = () => cy.get('div[data-id="6dad8cae"] ul li')
    obtenerBotonLicenPater = () => cy.get('div[data-id="0486e14"] a')

    ///Licencias DE MATERNIDAD
    obtenerTextoLicenMater = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolver4 = () => cy.get('div[data-id="89d6b9d"] a')
    obtenerTextoPreguntasMater = () => cy.get('div[data-id="6dad8cae"] h3')
    obtenerParrafosLicenMATER = () => cy.get('div[data-id="6dad8cae"] p')
    obteneritemsLicenMATER = () => cy.get('div[data-id="6dad8cae"] ul li')
    obtenerBotonLicenMATER  = () => cy.get('div[data-id="0486e14"] a')

    ///Accidentes de Trabajo
    obtenerTextoAccidenTraba = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolver5 = () => cy.get('div[data-id="be6c886"] a')
    obtenerParrafosAccidenTraba = () => cy.get('div[data-id="6dad8cae"] p')
    obtenerTextoPreguntaAccidenTraba = () => cy.get('div[data-id="6dad8cae"] h3')
    obteneritemsAccidenTraba = () => cy.get('div[data-id="6dad8cae"] ul li')
    obtenerParrafoAdvertAccidenTraba = () => cy.get('div[data-id="6dad8cae"] em')

    ///Vacaiones
    obtenerTextoVacaciones = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolver6 = () => cy.get('div[data-id="f571cba"] a ')
    obtenerTextoMiniVacaciones = () => cy.get('div[class="content_wrap"] h6')
    obtenerParrafosVacaciones = () => cy.get('div[data-id="6dad8cae"] p')
    obtenerPreguntaVacaciones = () => cy.get('div[class="content_wrap"] h3')
    obteneritemsVacaciones = () => cy.get('div[data-id="6dad8cae"] ul li')
    obtenerBotonVacaciones  = () => cy.get('div[data-id="8d7dcae"] a')

    ///Permisos Laborales
    obtenerTextoPermiLabora = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolver7 = () => cy.get('div[data-id="dd9add4"] a')
    obtenerParrafosPermiLabora = () => cy.get('div[data-id="6dad8cae"] p')
    obtenerPreguntaPermiLabora = () => cy.get('div[data-id="6dad8cae"] h3')
    obteneritemsPermiLabora = () => cy.get('div[data-id="6dad8cae"] ul li')

    ///Incapacidad de Origen Común
    obtenerTextoIncaOrigComu = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolver8 = () => cy.get('div[data-id="034841e"] a')
    obtenerParrafosIncaOrigComu = () => cy.get('div[data-id="6dad8cae"] p')
    obtenerPreguntaIncaOrigComu = () => cy.get('div[data-id="6dad8cae"] h3')
    obteneritemsIncaOrigComu  = () => cy.get('div[data-id="6dad8cae"] ul li')
    obtenerBotonIncaOrigComu  = () => cy.get('div[data-id="4ba03f3"] a')

    ///Citas Médicas Programadas
    obtenerTextoCitaMediProgra = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolver9 = () => cy.get('div[data-id="8dbe8ff"] a ')
    obtenerParrafosCitaMediProgra = () => cy.get('div[data-id="6dad8cae"] p')
    obtenerPreguntaCitaMediProgra = () => cy.get('div[data-id="6dad8cae"] h3')
}


class Bienestar{
    obtenerTextoBienes1 = () => cy.get('div[data-id="ea6da2c"] h2')
    obtenerParrafoBienes1 = () => cy.get('div[data-id="a367511"] p')
    obtenerImgBienes = () => cy.get('div[data-id="76e7091a"] img')

    ///Parchando
    obtenerTextoMini = () => cy.get('div[data-id="e7d01d9"] h6')
    obtenerTituloCumbre = () => cy.get('div[data-id="0ba7394"] h2')
    obtenerParrafoCumbre = () => cy.get('div[data-id="2b25478"] p')
    obtenerVermas1 = () => cy.get('div[data-id="0d1e285"] span')

    obtenerTextoMini2 = () => cy.get('div[data-id="5f6ead4"] h6')
    obtenerTituloPedaleando = () => cy.get('div[data-id="5811c0b"] h2')
    obtenerParrafoPedaleando = () => cy.get('div[data-id="af43635"] p')
    obtenerVermas2 = () => cy.get('div[data-id="f752c60"] span')
    
    obtenerTextoMini3 = () => cy.get('div[data-id="07198bb"] h6')
    obtenerTituloBastidas = () => cy.get('div[data-id="d2819a0"] h2')
    obtenerParrafoBastidas = () => cy.get('div[data-id="3b310fd"] p')
    obtenerVermas3 = () => cy.get('div[data-id="121979f"] span')

    obtenerTextoMini4 = () => cy.get('div[data-id="14e597ab"] h6')
    obtenerTituloGarcía = () => cy.get('div[data-id="2f327ef4"] h2')
    obtenerParrafoGarcía = () => cy.get('div[data-id="339cae80"] p')
    obtenerVermas4 = () => cy.get('div[data-id="7907ac67"] span')
    
    obtenerTextoMini5 = () => cy.get('div[data-id="78c64a6"] h6')
    obtenerTituloAcuña = () => cy.get('div[data-id="6a4f55c"] h2')
    obtenerParrafoAcuña = () => cy.get('div[data-id="f8d8bdd"] p')
    obtenerVermas5 = () => cy.get('div[data-id="b64f684"] span')
    
    obtenerTextoMini6 = () => cy.get('div[data-id="302346a"] h6')
    obtenerTituloCopa = () => cy.get('div[data-id="f7244df"] h2')
    obtenerParrafoCopa = () => cy.get('div[data-id="c9d5021"] p')
    obtenerVermas6 = () => cy.get('div[data-id="ce2fdbe"] span')

    obtenerTextoMini7 = () => cy.get('div[data-id="59a6f10"] h6')
    obtenerTituloLokochon = () => cy.get('div[data-id="85b5bae"] h2')
    obtenerParrafoLokochon = () => cy.get('div[data-id="3aec29c"] p')
    obtenerVermas7 = () => cy.get('div[data-id="ae5a8a2"] span')

    obtenerTextoMini8 = () => cy.get('div[data-id="1ee89f6"] h6')
    obtenerTituloJuntos = () => cy.get('div[data-id="3cb8d53"] h2')
    obtenerParrafoJuntos = () => cy.get('div[data-id="1425c26"] p')
    obtenerVermas8 = () => cy.get('div[data-id="6354e69"] span')

    ///La tribu ayuda 
    obtenerBotonTribuAyu = () => cy.get('li[id="la-tribu-ayuda"]')
    obtenerTituloPrinTribu = () => cy.get('div[data-id="a814b00"] h2')
    obtenerTituloMiniEmpre1 = () => cy.get('div[data-id="964515b"] h6')
    obtenerTituloPrin1 = () => cy.get('div[data-id="6b6d5b5"] h2')
    obtenerParrafo1 = () => cy.get('div[data-id="73e3951"] p')
    obtenerVermas1 = () => cy.get('div[data-id="833f613"] a')
    
    obtenerTituloMiniVolu1 = () => cy.get('div[data-id="552c61c"] h6')
    obtenerTituloPrin2 = () => cy.get('div[data-id="b05693e"] h2')
    obtenerParrafo2 = () => cy.get('div[data-id="40af354"] p')
    obtenerVermas2 = () => cy.get('div[data-id="25027fa"] a')

    obtenerTituloMiniVolu2 = () => cy.get('div[data-id="35afeb23"] h6')
    obtenerTituloPrin3 = () => cy.get('div[data-id="78ee755c"] h2')
    obtenerParrafo3 = () => cy.get('div[data-id="547f00fd"] p')
    obtenerVermas3 = () => cy.get('div[data-id="65c21c69"] a')

    obtenerTituloMiniVolu3 = () => cy.get('div[data-id="7716f5c"] h6')
    obtenerTituloPrin4 = () => cy.get('div[data-id="08f485b"] h2')
    obtenerParrafo4 = () => cy.get('div[data-id="0f247ce"] p')
    obtenerVermas4 = () => cy.get('div[data-id="5a7118b"] a')

    obtenerTituloMiniVolu4 = () => cy.get('div[data-id="2320df5"] h6')
    obtenerTituloPrin5 = () => cy.get('div[data-id="688ee71"] h2')
    obtenerParrafo5 = () => cy.get('div[data-id="10bb60b"] p')
    obtenerVermas5 = () => cy.get('div[data-id="6c3b5e2"] a')

    obtenerTituloMiniCamp = () => cy.get('div[data-id="c1d9f4d"] h6')
    obtenerTituloPrin6 = () => cy.get('div[data-id="eb1be75"] h2')
    obtenerParrafo6 = () => cy.get('div[data-id="5e19d0e"] p')
    obtenerVermas6 = () => cy.get('div[data-id="9768164"] a')
    
    obtenerTituloMiniCamp1 = () => cy.get('div[data-id="8c2f00e"] h6')
    obtenerTituloPrin7 = () => cy.get('div[data-id="b5c0fb5"] h2')
    obtenerParrafo7 = () => cy.get('div[data-id="fee0a58"] p')
    obtenerVermas7 = () => cy.get('div[data-id="2505a6d"] a')

    obtenerTituloMiniVolu5 = () => cy.get('div[data-id="0bfa1a8"] h6')
    obtenerTituloPrin8 = () => cy.get('div[data-id="5f30842"] h2')
    obtenerParrafo8 = () => cy.get('div[data-id="5927721"] p')
    obtenerVermas8 = () => cy.get('div[data-id="bfeab57"] a')

    obtenerTituloMiniVolu6 = () => cy.get('div[data-id="39845c8"] h6')
    obtenerTituloPrin9 = () => cy.get('div[data-id="d6c95cc"] h2')
    obtenerParrafo9 = () => cy.get('div[data-id="ccc3164"] p')
    obtenerVermas9 = () => cy.get('div[data-id="d579d99"] a')

    ///La tribu ayuda 
    obtenerBotonNoti = () => cy.get('li[id="SST"]')
    obtenerTituloPrinNoti = () => cy.get('div[data-id="818255c"] h2') 

    obtenerTituloMiniCumpl1 = () => cy.get('div[data-id="d1cd1a8"] h6')
    obtenerTituloNoti1 = () => cy.get('div[data-id="832ef80"] h2')
    obtenerParrafoNoti1 = () => cy.get('div[data-id="54d3920"] p')
    obtenerVermasNoti1 = () => cy.get('div[data-id="cd646c3"] a')
    
    obtenerTituloMiniCumpl2 = () => cy.get('div[data-id="a7f5453"] h6')
    obtenerTituloNoti2 = () => cy.get('div[data-id="d79d740"] h2')
    obtenerParrafoNoti2 = () => cy.get('div[data-id="3c73e89"] p')
    obtenerVermasNoti2 = () => cy.get('div[data-id="fdb3e82"] a')
    
    obtenerTituloMiniCumpl3 = () => cy.get('div[data-id="88bcdf5"] h6')
    obtenerTituloNoti3 = () => cy.get('div[data-id="7d98be1"] h2')
    obtenerParrafoNoti3 = () => cy.get('div[data-id="61adfb2"] p')
    obtenerVermasNoti3 = () => cy.get('div[data-id="f02067d"] a')
    
    obtenerTituloMiniCumpl4 = () => cy.get('div[data-id="2e8197f"] h6')
    obtenerTituloNoti4 = () => cy.get('div[data-id="5512bf5"] h2')
    obtenerParrafoNoti4 = () => cy.get('div[data-id="baefef8"] p')
    obtenerVermasNoti4 = () => cy.get('div[data-id="7c900b2"] a')
    
    obtenerTituloMiniCumpl5 = () => cy.get('div[data-id="3dc3c9c"] h6')
    obtenerTituloNoti5 = () => cy.get('div[data-id="060c5b8"] h2')
    obtenerParrafoNoti5 = () => cy.get('div[data-id="4d8a8ee"] p')
    obtenerVermasNoti5 = () => cy.get('div[data-id="d740b33"] a')
    
    obtenerTituloMiniCumpl6 = () => cy.get('div[data-id="a5e3d62"] h6')
    obtenerTituloNoti6 = () => cy.get('div[data-id="ac6ebfa"] h2')
    obtenerParrafoNoti6 = () => cy.get('div[data-id="329b1c7"] p')
    obtenerVermasNoti6 = () => cy.get('div[data-id="e9e8eee"] a')
    
    obtenerTituloMiniCumpl7 = () => cy.get('div[data-id="6fb509c"] h6')
    obtenerTituloNoti7 = () => cy.get('div[data-id="b6bbada"] h2')
    obtenerParrafoNoti7 = () => cy.get('div[data-id="bae628c"] p')
    obtenerVermasNoti7 = () => cy.get('div[data-id="28a51c4"] a')
    
    obtenerTituloMiniCumpl8 = () => cy.get('div[data-id="380d955"] h6')
    obtenerTituloNoti8 = () => cy.get('div[data-id="4d64662"] h2')
    obtenerParrafoNoti8 = () => cy.get('div[data-id="a3a64da"] p')
    obtenerVermasNoti8 = () => cy.get('div[data-id="c135645"] a')
    
    obtenerTituloMiniVan9 = () => cy.get('div[data-id="5467244"] h6')
    obtenerTituloNoti9 = () => cy.get('div[data-id="b72db11"] h2')
    obtenerParrafoNoti9 = () => cy.get('div[data-id="a508688"] p')
    obtenerVermasNoti9 = () => cy.get('div[data-id="c76d4fa"] a')
    
    obtenerTituloMiniCumpl10 = () => cy.get('div[data-id="fefe97f"] h6')
    obtenerTituloNoti10 = () => cy.get('div[data-id="aa6e383"] h2')
    obtenerParrafoNoti10 = () => cy.get('div[data-id="da5a8b1"] p')
    obtenerVermasNoti10 = () => cy.get('div[data-id="650bc42"] a')
    
    obtenerTituloMiniCumpl11 = () => cy.get('div[data-id="422c682"] h6')
    obtenerTituloNoti11 = () => cy.get('div[data-id="71676a3"] h2')
    obtenerParrafoNoti11 = () => cy.get('div[data-id="809d2d6"] p')
    obtenerVermasNoti11 = () => cy.get('div[data-id="c2229a6"] a')
    
    obtenerTituloMiniCumpl12 = () => cy.get('div[data-id="97a5c3f"] h6')
    obtenerTituloNoti12 = () => cy.get('div[data-id="43eb8c9"] h2')
    obtenerParrafoNoti12 = () => cy.get('div[data-id="4dd44f3"] p')
    obtenerVermasNoti12 = () => cy.get('div[data-id="0e59cc0"] a')
    
    obtenerTituloMiniAltr13 = () => cy.get('div[data-id="2344354"] h6')
    obtenerTituloNoti13 = () => cy.get('div[data-id="26631c3"] h2')
    obtenerParrafoNoti13 = () => cy.get('div[data-id="df9609b"] p')
    obtenerVermasNoti13= () => cy.get('div[data-id="5842494"] a')
    
    obtenerTituloMiniAltr14 = () => cy.get('div[data-id="3903b43"] h6')
    obtenerTituloNoti14 = () => cy.get('div[data-id="d16926d"] h2')
    obtenerParrafoNoti14 = () => cy.get('div[data-id="51cf837"] p')
    obtenerVermasNoti14 = () => cy.get('div[data-id="542a03a"] a')
    
    obtenerTituloMiniEntu15 = () => cy.get('div[data-id="322c913"] h6')
    obtenerTituloNoti15 = () => cy.get('div[data-id="7d9bac6"] h2')
    obtenerParrafoNoti15 = () => cy.get('div[data-id="ee74174"] p')
    obtenerVermasNoti15 = () => cy.get('div[data-id="f16f72c"] a')
    
    obtenerTituloMiniCumpl16 = () => cy.get('div[data-id="b962f59"] h6')
    obtenerTituloNoti16 = () => cy.get('div[data-id="21188b5"] h2')
    obtenerParrafoNoti16 = () => cy.get('div[data-id="910d561"] p')
    obtenerVermasNoti16 = () => cy.get('div[data-id="82a2aa6"] a')

    obtenerTituloMiniCumpl17 = () => cy.get('div[data-id="6610c7b"] h6')
    obtenerTituloNoti17 = () => cy.get('div[data-id="229d451"] h2')
    obtenerParrafoNoti17 = () => cy.get('div[data-id="867a898"] p')
    obtenerVermasNoti17 = () => cy.get('div[data-id="3d1f1b3"] a')
    
    obtenerTituloMiniAltr18 = () => cy.get('div[data-id="5c6236d"] h6')
    obtenerTituloNoti18 = () => cy.get('div[data-id="eb6d996"] h2')
    obtenerParrafoNoti18 = () => cy.get('div[data-id="ab3f083"] p')
    obtenerVermasNoti18 = () => cy.get('div[data-id="00ac92a"] a')
    
    obtenerTituloMiniEspi19 = () => cy.get('div[data-id="7291678"] h6')
    obtenerTituloNoti19 = () => cy.get('div[data-id="b795316"] h2')
    obtenerParrafoNoti19 = () => cy.get('div[data-id="1ac03fb"] p')
    obtenerVermasNoti19 = () => cy.get('div[data-id="9f88686"] a')

    obtenerTituloMiniCumpl20 = () => cy.get('div[data-id="b6064f9"] h6')
    obtenerTituloNoti20 = () => cy.get('div[data-id="bc194d9"] h2')
    obtenerParrafoNoti20 = () => cy.get('div[data-id="7d342ae"] p')
    obtenerVermasNoti20 = () => cy.get('div[data-id="37b005e"] a')


    ///Fechas Especiales
    obtenerBotonFechaEspe = () => cy.get('li[id="NOVED"]')
    obtenerTituloPrinFechaEspe = () => cy.get('div[data-id="3fefe1f1"] h2') 

    obtenerTituloMiniEntuFecha1 = () => cy.get('div[data-id="6f944efb"] h6')
    obtenerTituloFecha1 = () => cy.get('div[data-id="57c385eb"] h2')
    obtenerParrafoFecha1 = () => cy.get('div[data-id="367094c2"] [class="elementor-widget-container"]')
    obtenerVermasFecha1 = () => cy.get('div[data-id="a368374"] a')
    
    obtenerTituloMiniEntuFecha2 = () => cy.get('div[data-id="7ee60eb"] h6')
    obtenerTituloFecha2 = () => cy.get('div[data-id="35ddd35"] h2')
    obtenerParrafoFecha2 = () => cy.get('div[data-id="a965e20"] [class="elementor-widget-container"]')
    obtenerVermasFecha2 = () => cy.get('div[data-id="82e3589"] a')
    
    obtenerTituloMiniEntuFecha3 = () => cy.get('div[data-id="6d212d1"] h6')
    obtenerTituloFecha3 = () => cy.get('div[data-id="3f5a77b9"] h2')
    obtenerParrafoFecha3 = () => cy.get('div[data-id="7295a01d"]')
    obtenerVermasFecha3 = () => cy.get('div[data-id="7c100ea3"] a')

    
    ///Herramientas
    obtenerBotonHerra = () => cy.get('li[id="NOVED"]')
    obtenerTituloPrinHerra = () => cy.get('div[data-id="a814b00"] h2') 

    
    ///Reconocimientos
    obtenerBotonRecono = () => cy.get('li[id="NOVED"]')
    obtenerTituloPrinRecono = () => cy.get('div[data-id="a814b00"] h2') 
    obtenerTituloPrinCumplea = () => cy.get('div[data-id="3e75d3f"] h2') 
    obtenerImgDici1 = () => cy.get('div[data-id="db0c4e6"] img')
    obtenerImgDici2 = () => cy.get('div[data-id="752cd01"] img')
    obtenerImgDici3 = () => cy.get('div[data-id="bdd54e8"] img')
}

class Buzon{
    obtenerTituloPrinBuzon = () => cy.get('div[data-id="4baa974"] h2') 
    obtenerParrafoBuzon = () => cy.get('div[data-id="ecd0891"]')
    obtenerTituloBuz2 = () => cy.get('div[data-id="ecd0891"] h5')
    obtenerTituloBuz3 = () => cy.get('div[data-id="1ce9dab"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenerImgBuzon = () => cy.get('div[data-id="bb65cd9"] img')
}

class noticiasSST{
    obtenerBotonSST = () => cy.contains('SST')

    ///Noticia 1
    obtenerBotonVermasSST1 = () => cy.get('div[data-id="7907ac67"] a')
    obtenerTituloNotici1_1 = () => cy.get('div[class="content_wrap"] h1') 
    obtenerBotonVolverNotici1_1 = () => cy.get('div[data-id="8437c04"] a')
    obtenerParrafoNotici1_1 = () => cy.get('div[data-id="2ac2093"] h6')
    obtenerTituloNotici1_2 = () => cy.get('div[data-id="f19dc37"] h2')  
    obtenerTituloNotici1_3 = () => cy.get('div[data-id="4e25338"] h3') 
    obtenerImgNotici1_1 = () => cy.get('div[data-id="71df1f3"] img')
    obtenerTituloNotici1_4 = () => cy.get('div[data-id="0637e00"] h3')
    obtenerImgNotici1_2 = () => cy.get('div[data-id="51c15ad"] img')
    obtenerTituloNotici1_5 = () => cy.get('div[data-id="3a6f3e5"] h2')
    obtenerTituloNotici1_6 = () => cy.get('div[data-id="6aa899f"] h3')
    obtenerImgNotici1_3 = () => cy.get('div[data-id="6522694"] img')
    obtenerTituloNotici1_7 = () => cy.get('div[data-id="cfc70ba"] h3')
    obtenerImgNotici1_4 = () => cy.get('div[data-id="4876498"] img')
    obtenerParrafoNotici1_2 = () => cy.get('div[data-id="1d1a71e"] h6')
    obtenerParrafoNotici1_3 = () => cy.get('div[data-id="6cad976"] h3')

    ///Noticia 2
    obtenerBotonVermasSST2 = () => cy.get('div[data-id="bff0007"] a')
    obtenerTituloNotici2_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolverNotici2_1 = () => cy.get('div[data-id="143b2cf"] a  ')
    obtenerParrafoNotici2_1 = () => cy.get('div[data-id="22e331b"] h6')
    obtenerTituloNotici2_2= () => cy.get('div[data-id="29aa344"] h3') 
    obtenerTituloNotici2_3= () => cy.get('div[data-id="f7e01c0"] h5') 
    obtenerBotonIngresaSST2 = () => cy.get('div[data-id="fc27810"] a')
    obtenerTituloNotici2_4= () => cy.get('div[data-id="28db0e6"]') 
    obtenerTituloNotici2_5= () => cy.get('div[data-id="9948daa"]') 
    obtenerTituloNotici2_6= () => cy.get('div[data-id="ccb5eb9"]') 
    obtenerTituloNotici2_7= () => cy.get('div[data-id="fa8e31d"]') 
    obtenerTituloNotici2_8= () => cy.get('div[data-id="25ecc9d"]') 
    obtenerTituloNotici2_9= () => cy.get('div[data-id="5813d5a"]') 
    obtenerTituloNotici2_10= () => cy.get('div[data-id="12c28fc"]') 
    obtenerTituloNotici2_11= () => cy.get('div[data-id="48e4e56"]') 
    obtenerTituloNotici2_12= () => cy.get('div[data-id="0bbb284"]') 
    obtenerTituloNotici2_13= () => cy.get('div[data-id="2d4b01f"]') 
    obtenerTituloNotici2_14= () => cy.get('div[data-id="51c44c5"]') 
    obtenerTituloNotici2_15= () => cy.get('div[data-id="8ab8a96"]') 
    obtenerTituloNotici2_16= () => cy.get('div[data-id="694fbb4"]')

    ///Noticia 3
    obtenerBotonVermasSST3 = () => cy.get('div[data-id="d6838cf" ] a')
    obtenerParrafoNotici3_1 = () => cy.get('div[data-id="fff1287"] [class="elementor-widget-container"]')
    obtenerTituloNotici3_2= () => cy.get('div[data-id="ee21a09"]')

    ///Noticia 4
    obtenerBotonVermasSST4 = () => cy.get('div[data-id="473e7bd"] a')
    obtenerTituloNotici4_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolverNotici4_1 = () => cy.get('div[data-id="b634778"] a')
    obtenerParrafoNotici4_1= () => cy.get('div[data-id="545b954"]')
    obtenerTituloNotici4_2 = () => cy.get('div[data-id="235ef68"]')
    obtenerParrafoNotici4_2 = () => cy.get('div[data-id="17ad5ef"]')
    obtenerTituloNotici4_3 = () => cy.get('div[data-id="e481d43"]')
    obtenerParrafoNotici4_3 = () => cy.get('div[data-id="6ce9f5c"]')
    obtenerTituloNotici4_4 = () => cy.get('div[data-id="187129b"]')
    obtenerParrafoNotici4_4 = () => cy.get('div[data-id="e3933ae"]')
    obtenerTituloNotici4_5 = () => cy.get('div[data-id="4bb77aa"]')
    obtenerTituloNotici4_6 = () => cy.get('div[data-id="44bdc1f"]')

    ///Noticia 5
    obtenerBotonVermasSST5 = () => cy.get('div[data-id="5f67ff9"] a')
    obtenerTituloNotici5_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerBotonVolverNotici5_1 = () => cy.get('div[data-id="2b4fbdd"] a')
    obtenerParrafosNotici5_1 = () => cy.get('div[data-id="d938fb5"] p')
    obtenerTituloNotici5_2 = () => cy.get('div[data-id="d938fb5"] h5')
    obtenerVideoNotici5 = () => cy.get('iframe[src*="youtube"]'); 
}

class noticiaBiene{

    ///Noticia 1
    ///obtenerBotonSST = () => cy.contains('SST')
    obtenerBotonVermasParcha1 = () => cy.get('div[data-id="0d1e285"] a')
    obtenerTituloParcha1_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafosParcha1_1 = () => cy.get('div[data-id="dd6f100"] p')
    obtenerParrafosParcha1_2 = () => cy.get('div[data-id="5b0df64"] p')

    ///Noticia 2 
    obtenerBotonVermasParcha2 = () => cy.get('div[data-id="f752c60"] a')
    obtenerTituloParcha2_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafosParcha2_1 = () => cy.get('div[data-id="5b0df64"] p')
    obtenerTituloParcha2_2 = () => cy.get('div[data-id="a738c35"] h3')
    
    ///Noticia 3 
    obtenerBotonVermasParcha3 = () => cy.get('div[data-id="121979f"] a')
    obtenerTituloParcha3_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafosParcha3_1 = () => cy.get('div[data-id="8534c8a"] p')
    obtenerTituloParcha3_2 = () => cy.get('div[data-id="8534c8a"] h3')

    ///Noticia 4
    obtenerBotonVermasParcha4 = () => cy.get('div[data-id="7907ac67"] a')
    obtenerTituloParcha4_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafosParcha4_1 = () => cy.get('div[data-id="e8ffb25"] p')
    obtenerTituloParcha4_2 = () => cy.get('div[data-id="e8ffb25"] h3')
    obtenerTituloParcha4_3 = () => cy.get('div[data-id="e8ffb25"] h2')
    
    ///Noticia 5
    obtenerBotonVermasParcha5 = () => cy.get('div[data-id="b64f684"] a')
    obtenerTituloParcha5_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafosParcha5_1 = () => cy.get('div[data-id="8534c8a"] p ')
    obtenerTituloParcha5_2 = () => cy.get('div[data-id="8534c8a"] h3 ')
    
    ///Noticia 6
    obtenerBotonVermasParcha6 = () => cy.get('div[data-id="ce2fdbe"] a')
    obtenerTituloParcha6_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafosParcha6_1 = () => cy.get('div[data-id="7601080"] p')
    obtenerParrafoParcha6_2 = () => cy.get('div[data-id="13318ff"] p')

    ///Noticia 7
    obtenerBotonVermasParcha7 = () => cy.get('div[data-id="ae5a8a2"] a')
    obtenerTituloParcha7_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafosParcha7_1 = () => cy.get('div[data-id="7601080"] p')
    obtenerParrafoParcha7_2 = () => cy.get('div[data-id="13318ff"] p')

    ///Noticia 8 PARCHANDO 
    obtenerBotonVermasParcha8 = () => cy.get('div[data-id="6354e69"] a')
    obtenerTituloParcha8_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerTituloParcha8_2 = () => cy.get('div[data-id="cd3f40b"] h3')
    obtenerTituloParcha8_3 = () => cy.get('div[data-id="b23742c"] h4')
    obtenerParrafoParcha8_1 = () => cy.get('div[data-id="c58703d"] p ')
    obtenerParrafoParcha8_2 = () => cy.get('div[data-id="7312dda"] p')
    obtenerParrafoParcha8_3 = () => cy.get('div[data-id="730b16e"] p ')
    obtenerTituloParcha8_4 = () => cy.get('div[data-id="600d65f"] h4')
    obtenerParrafoParcha8_4 = () => cy.get('div[data-id="c87b5d9"] p')
    obtenerParrafoParcha8_5 = () => cy.get('div[data-id="2ce64ed"] p')
    obtenerParrafoParcha8_6 = () => cy.get('div[data-id="2ce64ed"] ul li')
    obtenerParrafoParcha8_7 = () => cy.get('div[data-id="9d426a7"] p ')
    obtenerImgComida1 = () => cy.get('div[data-id="0163110"] img')
    obtenerParrafoParcha8_8 = () => cy.get('div[data-id="b9e3cbd"] p')
    obtenerImgLugares1 = () => cy.get('div[data-id="3a95eda"] img')
    obtenerParrafoParcha8_9 = () => cy.get('div[data-id="607eb88"] p ')
    obtenerBotonInmuTocanci = () => cy.get('div[data-id="3d205e8"] a ')
    obtenerBotonInmuZipaqui = () => cy.get('div[data-id="95d5d5e"] a')

    ///LA TRIBU AYUDA 
    obtenerBotonTriAyu = () => cy.get('li[id="la-tribu-ayuda"]')
    obtenerBotonVermasTriAyu1 = () => cy.get('div[data-id="833f613"] a ')
    obtenerTituloTriAyu1_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerTituloTriAyu1_2 = () => cy.get('div[data-id="4c1244e"] p')
    obtenerParrafoTriAyu1_1 = () => cy.get('div[data-id="e84a8cc"] p')
    obtenerParrafoTriAyu1_2 = () => cy.get('div[data-id="5e85311"] p')
    obtenerTituloTriAyu1_3 = () => cy.get('div[data-id="2f51372"] p ')
    obtenerParrafoTriAyu1_3 = () => cy.get('div[data-id="e3caf38"] p')
    obtenerTituloTriAyu1_4 = () => cy.get('div[data-id="8f6a7df"] p ')
    obtenerParrafoTriAyu1_4 = () => cy.get('div[data-id="2d91f43"] p ')
    obtenerTituloTriAyu1_5 = () => cy.get('div[data-id="8470c2f"] h2')
    obtenerParrafoTriAyu1_5 = () => cy.get('div[data-id="d86e3fe"] p')
    obtenerParrafoTriAyu1_6 = () => cy.get('div[data-id="c872f21"] p')
    obtenerParrafoTriAyu1_7 = () => cy.get('div[data-id="9e722ed"] p')
    obtenerTituloTriAyu1_7 = () => cy.get('div[data-id="ea0c765"] p')
    obtenerParrafoTriAyu1_8 = () => cy.get('div[data-id="467a931"] p')
    obtenerParrafoTriAyu1_9 = () => cy.get('div[data-id="76c7ca5"] p')
    obtenerParrafoTriAyu1_10 = () => cy.get('div[data-id="546346c"] p')
    obtenerParrafoTriAyu1_11 = () => cy.get('div[data-id="f40c5e5"] p')
    obtenerParrafoTriAyu1_12 = () => cy.get('div[data-id="f846b5e"] p ')
    obtenerParrafoTriAyu1_13 = () => cy.get('div[data-id="d834b79"] p')
    obtenerParrafoTriAyu1_14 = () => cy.get('div[data-id="1ad1e69"] p')
    obtenerParrafoTriAyu1_15 = () => cy.get('div[data-id="82c7ab0"] p')
    obtenerParrafoTriAyu1_16 = () => cy.get('div[data-id="e4e81c7"]  ')
    obtenerParrafoTriAyu1_17 = () => cy.get('div[data-id="0bb5f9b"]  p')
    obtenerParrafoTriAyu1_18 = () => cy.get('div[data-id="03dcc11"] p')
    obtenerParrafoTriAyu1_19 = () => cy.get('div[data-id="0bc5c08"] ')
    obtenerParrafoTriAyu1_20 = () => cy.get('div[data-id="6e8f2b7"] p')
    obtenerParrafoTriAyu1_21 = () => cy.get('div[data-id="0dcec61"]')
    obtenerParrafoTriAyu1_22 = () => cy.get('div[data-id="1371ccd"] p')
    obtenerParrafoTriAyu1_23 = () => cy.get('div[data-id="75c01c9"] p')
    obtenerParrafoTriAyu1_24 = () => cy.get('div[data-id="fea5f03"]')
    obtenerParrafoTriAyu1_25 = () => cy.get('div[data-id="f746548"] p')
    obtenerParrafoTriAyu1_26 = () => cy.get('div[data-id="29350f8"] p')
    obtenerParrafoTriAyu1_27 = () => cy.get('div[data-id="6c54be5"]')
    obtenerParrafoTriAyu1_28 = () => cy.get('div[data-id="270d816"] p')
    obtenerParrafoTriAyu1_29 = () => cy.get('div[data-id="1b0681f"] p')
    obtenerParrafoTriAyu1_30 = () => cy.get('div[data-id="695e21b"]')
    obtenerParrafoTriAyu1_31 = () => cy.get('div[data-id="37ee594"] p')
    obtenerParrafoTriAyu1_32 = () => cy.get('div[data-id="d3de8e7"] p')
    obtenerParrafoTriAyu1_33 = () => cy.get('div[data-id="b45d950"]')
    obtenerParrafoTriAyu1_34 = () => cy.get('div[data-id="d96b269"] p')
    obtenerParrafoTriAyu1_35 = () => cy.get('div[data-id="5129156"] p')
    obtenerParrafoTriAyu1_36 = () => cy.get('div[data-id="450d4f9"]')
    obtenerParrafoTriAyu1_37 = () => cy.get('div[data-id="5fe4e02"] p')
    obtenerParrafoTriAyu1_38 = () => cy.get('div[data-id="41282e1"] p')
    obtenerParrafoTriAyu1_39 = () => cy.get('div[data-id="77cf93e"]')
    obtenerParrafoTriAyu1_40 = () => cy.get('div[data-id="f47fb77"] p')
    obtenerParrafoTriAyu1_41 = () => cy.get('div[data-id="afaf805"] p')
    obtenerParrafoTriAyu1_42 = () => cy.get('div[data-id="d381fc4"]')
    obtenerParrafoTriAyu1_43 = () => cy.get('div[data-id="a1a5a07"] p')
    
    ///Noticia 2
    obtenerBotonVermasTriAyu2 = () => cy.get('div[data-id="25027fa"] a ')
    obtenerTituloTriAyu2_1 = () => cy.get('div[class="content_wrap"] h1') 
    obtenerParrafoTriAyu2_1 = () => cy.get('div[data-id="4c1244e"]')
    obtenerParrafoTriAyu2_2 = () => cy.get('div[data-id="2bcd53c"] p')
    obtenerParrafoTriAyu2_3 = () => cy.get('div[data-id="ffc0d71"] p')
    obtenerParrafoTriAyu2_4 = () => cy.get('div[data-id="993eb93"] p')
    obtenerParrafoTriAyu2_5 = () => cy.get('div[data-id="8e610f3"]')
    obtenerParrafoTriAyu2_6 = () => cy.get('div[data-id="013ba22"]')
    obtenerParrafoTriAyu2_7 = () => cy.get('div[data-id="f788c5e"]')
    obtenerParrafoTriAyu2_8 = () => cy.get('div[data-id="77a9463"]')
    obtenerParrafoTriAyu2_9 = () => cy.get('div[data-id="d18c05d"]')
    obtenerParrafoTriAyu2_10 = () => cy.get('div[data-id="f227066"]')
    obtenerTituloTriAyu2_2 = () => cy.get('div[data-id="48907ff"] p')
    obtenerParrafoTriAyu2_11 = () => cy.get('div[data-id="7b29671"] p')
    obtenerParrafoTriAyu2_12 = () => cy.get('div[data-id="0ffceb1"] p')
    obtenerParrafoTriAyu2_13 = () => cy.get('div[data-id="4242673"] p')
    obtenerTituloTriAyu2_3 = () => cy.get('div[data-id="7207bda"] p')
    obtenerParrafoTriAyu2_14 = () => cy.get('div[data-id="9962aef"] p') 
    obtenerParrafoTriAyu2_15 = () => cy.get('div[data-id="6b2a2c5"] p') 
    obtenerTituloTriAyu2_4 = () => cy.get('div[data-id="0a52080"] p')
    obtenerImgAgradeci1 = () => cy.get('div[data-id="3025069"] img') 
    obtenerParrafoTriAyu2_16 = () => cy.get('div[data-id="c96b5b7"] p')


    ///Noticia 3
    obtenerBotonVermasTriAyu3 = () => cy.get('div[data-id="65c21c69"] a')
    obtenerTituloTriAyu3_1 = () => cy.get('div[class="content_wrap"] h1') 
    obtenerParrafoTriAyu3_1 = () => cy.get('div[data-id="da7de72"] p')


    ///Noticia 4
    obtenerBotonVermasTriAyu4 = () => cy.get('div[data-id="5a7118b"] a')
    obtenerTituloTriAyu4_1 = () => cy.get('div[class="content_wrap"] h1') 
    obtenerParrafoTriAyu4_1 = () => cy.get('[id="post-28904"] p')
    obtenerTitulosTriAyu4_2 = () => cy.get('[id="post-28904"] h5')
    obtenerTituloTriAyu4_3 = () => cy.get('div[data-id="728340c"] h3')
    obtenerParrafoTriAyu4_2 = () => cy.get('ol li')


    ///Noticias 5 
    obtenerBotonVermasTriAyu5 = () => cy.get('div[data-id="6c3b5e2"] a')
    obtenerTituloTriAyu5_1 = () => cy.get('div[class="content_wrap"] h1') 
    obtenerParrafoTriAyu5_1 = () => cy.get('div[data-id="6b63d9c"] p')
    obtenerTituloTriAyu5_2 = () => cy.get('div[data-id="6b63d9c"] h5')


    ///Noticias 6 
    obtenerBotonVermasTriAyu6 = () => cy.get('div[data-id="9768164"] a')
    obtenerTituloTriAyu6_1 = () => cy.get('div[class="content_wrap"] h1') 
    obtenerParrafoTriAyu6_1 = () => cy.get('div[data-id="890f2b6"] p')
    obtenerTituloTriAyu6_2 = () => cy.get('div[data-id="e9a9290"] h5')
    obtenerTituloTriAyu6_3 = () => cy.get('div[data-id="657cd23"] h5')
    obtenerTituloTriAyu6_4 = () => cy.get('div[data-id="6113185"] h5')
    obtenerTitulosTriAyu6_5 = () => cy.get('div[data-id="194e1e7"] h5 ')
    obtenerTituloTriAyu6_6 = () => cy.get('div[data-id="8d234b8"] h5')
    obtenerParrafoTriAyu6_2 = () => cy.get('div[data-id="4aabb17"]')
    obtenerParrafoTriAyu6_3 = () => cy.get('div[data-id="194e1e7"] p')
    obtenerParrafoTriAyu6_4 = () => cy.get('div[data-id="8d234b8"] p')  



    ///Noticias 7 
    obtenerBotonVermasTriAyu7 = () => cy.get('div[data-id="2505a6d"] a')
    obtenerTituloTriAyu7_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerTituloTriAyu7_2 = () => cy.get('div[data-id="e84366d"] h2')
    obtenerParrafoTriAyu7_1 = () => cy.get('div[data-id="96fb7db"] p')
    obtenerTituloTriAyu7_3 = () => cy.get('div[data-id="96fb7db"] h6')
    obtenerTituloTriAyu7_4 = () => cy.get('div[data-id="96fb7db"] h4')



    ///Noticias 8 
    obtenerBotonVermasTriAyu8 = () => cy.get('div[data-id="bfeab57"] a')
    obtenerTituloTriAyu8_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafoTriAyu8_1 = () => cy.get('div[data-id="2bea31c"] p')  
    
    
    ///Noticias 9
    obtenerBotonVermasTriAyu9 = () => cy.get('div[data-id="d579d99"] a')
    obtenerTituloTriAyu9_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerParrafoTriAyu9_1 = () => cy.get('div[data-id="2bea31c"] p')  


    ///NOTICIAS
    ///Noticia 1
    obtenerBotonNotici = () => cy.get('[id="SST"]')
    obtenerBotonVermasNotici1 = () => cy.get('div[data-id="cd646c3"] a')
    obtenerTituloNotici1_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerTituloNotici1_2 = () => cy.get('div[data-id="34bbdd7"]')
    obtenerParrafoNotici1_1 = () => cy.get('div[data-id="be8f76a"]')
    obtenerTituloNotici1_3 = () => cy.get('div[data-id="ec6eee4"] p')
    obtenerParrafoNotici1_2 = () => cy.get('div[data-id="ec6eee4"] ul')
    obtenerParrafoNotici1_3 = () => cy.get('[data-id="3f701b9"]')
    obtenerParrafoNotici1_4 = () => cy.get('div[data-id="a346520"] p')


    ///Noticia 2 
    obtenerBotonVermasNotici2 = () => cy.get('div[data-id="fdb3e82"] a')
    obtenerTituloNotici2_1 = () => cy.get('div[class="content_wrap"] h1')
    obtenerTituloNotici2_2 = () => cy.get('div[data-id="3c5e048"] h2')
    obtenerParrafoNotici2_1 = () => cy.get('div[data-id="be8f76a"] p')
    obtenerParrafoNotici2_2 = () => cy.get('div[data-id="9b07e96"] p ')
    obtenerTituloNotici2_3 = () => cy.get('div[data-id="9e3c655"] h2')
    obtenerParrafoNotici2_3 = () => cy.get('div[data-id="939d91c"] p')
    obtenerTituloNotici2_4 = () => cy.get('div[data-id="ecb8329"] h2')
    obtenerParrafoNotici2_4 = () => cy.get('div[data-id="51883b7"] p')
    obtenerParrafoNotici2_5 = () => cy.get('div[data-id="8f9058f"] p')
    obtenerTituloNotici2_5 = () => cy.get('div[data-id="9b1470a"] h2')
    obtenerParrafoNotici2_6 = () => cy.get('div[data-id="f258f4f"] p')
    obtenerParrafoNotici2_7 = () => cy.get('div[data-id="a101200"]')
    obtenerParrafoNotici2_8 = () => cy.get('div[data-id="18d0518"]')
    obtenerParrafoNotici2_9 = () => cy.get('div[data-id="0c3bb4c"] p')
    obtenerTituloNotici2_6 = () => cy.get('div[data-id="9c6bf09"] h2')
    obtenerParrafoNotici2_10 = () => cy.get('div[data-id="4300240"] p')
    obtenerTituloNotici2_7 = () => cy.get('div[data-id="93e47b2"] h2')
    obtenerParrafoNotici2_11 = () => cy.get('div[data-id="7204c25"] p')
    obtenerTituloNotici2_8 = () => cy.get('div[data-id="a64d420"] h2')
    obtenerParrafoNotici2_12 = () => cy.get('div[data-id="754db42"] p')
}

module.exports = {
    Home: new Home(),
    Header: new Header(),
    Footer: new Footer(),
    Tribu: new Tribu(), 
    HeaderMovil: new HeaderMovil(), 
    FooterMovil: new FooterMovil(), 
    Novedades: new Novedades(), 
    Bienestar: new Bienestar(),
    Buzon: new Buzon(), 
    noticiasSST: new noticiasSST(),
    noticiaBiene: new noticiaBiene(), 
};
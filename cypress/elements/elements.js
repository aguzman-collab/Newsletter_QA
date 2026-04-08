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
module.exports = {
    Home: new Home(),
    Header: new Header(),
    Footer: new Footer(),
    Tribu: new Tribu(), 
    HeaderMovil: new HeaderMovil(), 
    FooterMovil: new FooterMovil(), 
    Novedades: new Novedades(), 
    Bienestar: new Bienestar(),
};
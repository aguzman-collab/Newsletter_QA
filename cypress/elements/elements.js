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

module.exports = {
    Home: new Home(),
    Header: new Header(),
    Footer: new Footer(),
    Tribu: new Tribu(), 
    HeaderMovil: new HeaderMovil(), 
    FooterMovil: new FooterMovil(), 
};
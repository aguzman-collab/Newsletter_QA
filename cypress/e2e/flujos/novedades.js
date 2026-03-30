import tribuNewsActions from "../../actions/TribuActions";
import novedadesNewsActions from "../../actions/NovedadesActions";
import url from "../../url/url";

export function novedadesSuites(){

    context('Automatizacion - Novedades', () => {

        it("Section - Calamidades Domésticas", () =>{
        cy.viewport(1200,800)
        url.urlCalamiDomes()
        novedadesNewsActions.ValidarTextoCalaDome(); 
        novedadesNewsActions.clickBotonVolver1(); 
        novedadesNewsActions.ValidarParrafoCalaDome(); 
        novedadesNewsActions.ValidarTextoPasos(); 
        novedadesNewsActions.validarParrafoPasos(); 
        novedadesNewsActions.clickBotonRegisCalami(); 
        });

        it("Section - Licencias por Luto", () =>{
        cy.viewport(1200,800)
        url.urlLicenLuto()
        novedadesNewsActions.ValidarTextoLicenLuto(); 
        novedadesNewsActions.clickBotonVolver2(); 
        novedadesNewsActions.validarParrafoLicenLuto();
        novedadesNewsActions.ValidarTituloPasosLicenLuto();
        novedadesNewsActions.validarParrafoPasosLicenLuto1();
        novedadesNewsActions.validarParrafoPasosLicenLuto2(); 
        novedadesNewsActions.validarParrafoPasosLicenLuto3(); 
        novedadesNewsActions.clickBotonLicenLuto();
        });

        it("Section - Licencias de Paternidad", () =>{
        cy.viewport(1200,800)
        url.urlLicenPater()
        novedadesNewsActions.ValidarTextoLicenPater(); 
        novedadesNewsActions.clickBotonVolver3(); 
        novedadesNewsActions.validarTextoPregunta1();
        novedadesNewsActions.validarParrafosLicenPater1(); 
        novedadesNewsActions.validaritems1LicenLuto(); 
        novedadesNewsActions.validarTextoPregunta2();
        novedadesNewsActions.validarParrafosLicenPater2();
        novedadesNewsActions.validarTextoPregunta3();
        novedadesNewsActions.validarParrafosLicenPater3();
        novedadesNewsActions.validarParrafosLicenPater4(); 
        novedadesNewsActions.validarParrafosLicenPater5(); 
        novedadesNewsActions.validarParrafosLicenPater6(); 
        novedadesNewsActions.clickBotonLicenPater(); 
        });


        it("Section - Licencias de Maternidad", () =>{
        cy.viewport(1200,800)
        url.urlLicenMater()
        novedadesNewsActions.ValidarTextoLicenMater();
        novedadesNewsActions.clickBotonVolver4(); 
        novedadesNewsActions.validarTextoPregunta1MATER(); 
        novedadesNewsActions.validarParrafosLicenMATER1(); 
        novedadesNewsActions.validaritemsLicenMATER(); 
        novedadesNewsActions.validarTextoPregunta2MATER(); 
        novedadesNewsActions.validarParrafosLicenMATER2
        novedadesNewsActions.validarTextoPregunta3MATER(); 
        novedadesNewsActions.validarParrafosLicenMATER3(); 
        novedadesNewsActions.validarParrafosLicenMATER4(); 
        novedadesNewsActions.validarParrafosLicenMATER5(); 
        novedadesNewsActions.validarParrafosLicenMATER6();
        novedadesNewsActions.clickBotonLicenMATER();
        });

        it("Section - Accidentes de Trabajo", () =>{
        cy.viewport(1200,800)
        url.urlLicenAccidenTraba()
        novedadesNewsActions.ValidarTextoAccidenTraba();
        novedadesNewsActions.clickBotonVolver5(); 
        novedadesNewsActions.validarParrafosAccidenTraba_1();
        novedadesNewsActions.validarPreguntaAccidenTraba();
        novedadesNewsActions.validarParrafosAccidenTraba_2(); 
        novedadesNewsActions.validaritemsAccidenTraba1();
        novedadesNewsActions.validarParrafosAccidenTraba_3(); 
        novedadesNewsActions.validarParrafosAccidenTraba_4(); 
        novedadesNewsActions.validarParrafosAccidenTraba_5(); 
        novedadesNewsActions.validarParrafosAccidenTraba_6(); 
        novedadesNewsActions.validarParrafosAccidenTraba_7(); 
        novedadesNewsActions.validarParrafosAccidenTraba_8(); 
        });

        it("Section - Vacaciones", () =>{
        cy.viewport(1200,800)
        url.urlVacaciones()
        novedadesNewsActions.ValidarTextoVacaciones();
        novedadesNewsActions.clickBotonVolver6(); 
        novedadesNewsActions.validarParrafosVacaciones_1();
        novedadesNewsActions.validarTextoMiniVacaciones(); 
        novedadesNewsActions.validarParrafosVacaciones_2();
        novedadesNewsActions.validarTextoMiniVacaciones2();
        novedadesNewsActions.validarParrafosVacaciones_3();
        novedadesNewsActions.validarParrafosVacaciones_4();
        novedadesNewsActions.validarPreguntaVacaciones(); 
        novedadesNewsActions.validarItemsVacaciones_1();
        novedadesNewsActions.validarItemsVacaciones_2(); 
        novedadesNewsActions.validarParrafosVacaciones_5();
        novedadesNewsActions.validarParrafosVacaciones_6(); 
        novedadesNewsActions.clickBotonBotonVacaciones(); 
        });

        it("Section - Permisos Laborales", () =>{
        cy.viewport(1200,800)
        url.urlPermiLabora()
        novedadesNewsActions.ValidarTextoPermiLabora();
        novedadesNewsActions.clickBotonVolver7();
        novedadesNewsActions.validarParrafosPermiLabora_1(); 
        novedadesNewsActions.validarPreguntaPermiLabora(); 
        novedadesNewsActions.validarParrafosPermiLabora_2(); 
        novedadesNewsActions.validarParrafosPermiLabora_3(); 
        novedadesNewsActions.validaritemsPermiLabora_1(); 
        });

        it("Section - Incapacidad de Origen Común", () =>{
        cy.viewport(1200,800)
        url.urlIncaOrigComu()
        novedadesNewsActions.ValidarTituloIncaOrigComu();
        novedadesNewsActions.clickBotonVolver8();
        novedadesNewsActions.validarParrafosIncaOrigComu_1(); 
        novedadesNewsActions.validarParrafosIncaOrigComu_2(); 
        novedadesNewsActions.validarPreguntaIncaOrigComu();
        novedadesNewsActions.validarParrafosIncaOrigComu_3(); 
        novedadesNewsActions.validaritemsIncaOrigComu_1();
        novedadesNewsActions.validarParrafosIncaOrigComu_4(); 
        novedadesNewsActions.validarParrafosIncaOrigComu_5(); 
        novedadesNewsActions.validarParrafosIncaOrigComu_6(); 
        novedadesNewsActions.clickBotonIncaOrigComu();
        });


        it("Section - Citas Médicas Programadas", () =>{
        cy.viewport(1200,800)
        url.urlCitaMediProgra()
        novedadesNewsActions.ValidarTituloCitaMediProgr();
        novedadesNewsActions.clickBotonVolver9();
        novedadesNewsActions.validarParrafosCitaMediProgra_1(); 
        novedadesNewsActions.validarPreguntaCitaMediProgra();
        novedadesNewsActions.validarParrafosCitaMediProgra_2(); 
        novedadesNewsActions.validarParrafosCitaMediProgra_3(); 
        novedadesNewsActions.validarParrafosCitaMediProgra_4(); 
        });
    });
        
}
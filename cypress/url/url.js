class url {
    urlhome = () => cy.visit('https://newsletter.nutrabiotics.com.co/')
    urltribu = () => cy.visit('https://newsletter.nutrabiotics.com.co/tribu/')
    urlCalamiDomes = () => cy.visit('https://newsletter.nutrabiotics.com.co/calamidades-domesticas/')
    urlLicenLuto = () => cy.visit('https://newsletter.nutrabiotics.com.co/licencias-por-luto/')
    urlLicenPater = () => cy.visit('https://newsletter.nutrabiotics.com.co/licencias-de-paternidad/')
    urlLicenMater = () => cy.visit('https://newsletter.nutrabiotics.com.co/licencias-de-maternidad/')
    urlLicenAccidenTraba = () => cy.visit('https://newsletter.nutrabiotics.com.co/accidentes-de-trabajo/')
    urlVacaciones = () => cy.visit('https://newsletter.nutrabiotics.com.co/vacaciones/')
    urlPermiLabora = () => cy.visit('https://newsletter.nutrabiotics.com.co/permisos-laborales/')
    urlIncaOrigComu= () => cy.visit('https://newsletter.nutrabiotics.com.co/incapacidad-de-origen-comun/')
    urlCitaMediProgra= () => cy.visit('https://newsletter.nutrabiotics.com.co/citas-medicas-programadas/')
    urlbienestar = () =>  cy.visit('https://newsletter.nutrabiotics.com.co/bienestar/')
}

module.exports = new url();
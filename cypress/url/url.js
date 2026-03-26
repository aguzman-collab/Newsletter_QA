class url {
    urlhome = () => cy.visit('https://newsletter.nutrabiotics.com.co/')
    urltribu = () => cy.visit('https://newsletter.nutrabiotics.com.co/tribu/')
}

module.exports = new url();
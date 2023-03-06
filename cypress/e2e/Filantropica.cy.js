describe('test_name', function() {
    it('what_it_does', function() {
       cy.viewport(1920, 579)
       cy.visit('https://lotteriafilantropicaitalia.it/')
       
       cy.contains('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(1)',/come si partecipa/)
       cy.contains('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(2)',/vincita/)
       cy.contains('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(3)',/filantropo/)
       cy.contains('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(4)',/chi siamo/)
       cy.contains('.dropdown > span',/accedi/)
       cy.contains('#dropdown-basic',/registrati/)
       
       cy.get('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(1)').click()
       cy.get('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(2)').click()
       cy.get('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(3)').click()
       cy.get('.navbar > .container-fluid > #navLotteria > .navbar-nav > .nav-link:nth-child(4)').click()
       
   //    cy.get('.container-fluid > #navLotteria > .navbar-nav > .cta-nav > .nav-link').click()
   //    cy.get('.container > .container > .cta > a:nth-child(1) > .icon-arrow').click({force: true})
       cy.get('div.cta-nav > .nav-link').click()
       cy.get('.cta > :nth-child(1)').click({force: true})
       cy.visit('https://prodlotfilwebappb2c.b2clogin.com/prodlotfilwebappb2c.onmicrosoft.com/b2c_1_signup/oauth2/v2.0/authorize?client_id=7bff6bf9-6172-44c4-bc8e-aff0061822bf&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Flotteriafilantropicaitalia.it%2F&client-request-id=d23402ba-5cf8-43d9-9610-227939965a55&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.29.0&client_info=1&code_challenge=b_NnaoipykSW8aMM5yp-pls7Xppt9ydnu8EIZBWG6To&code_challenge_method=S256&nonce=5c99ae3d-7d35-465b-8a29-aefe36b496fd&state=eyJpZCI6ImMxYTEwNjQ2LTNlMGQtNDc2MC1hYmQwLWQxMjVhODQ1NWI0ZCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&ui_locales=it-IT')
    })
   })
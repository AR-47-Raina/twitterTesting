describe("1",()=>{
    const messages = Math.random().toString(36).substring(2) + "@gmail.com"
     
    it("2",()=>{
        
        cy.fixture('user').then((user) => {
        cy.visit("https://x.com/")

        cy.get('[data-testid="loginButton"] > .css-146c3p1').click()

        cy.get('.r-1ets6dv > :nth-child(1) > .r-16y2uox').type(user.UserID)//userid
       
      cy.get('[class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"]').eq(6).click()
        
      /* cy.get('[data-testid="ocfEnterTextTextInput"]').type(user.Email)//email

      cy.get('[data-testid="ocfEnterTextNextButton"] > .css-146c3p1').click()
    */
      cy.get("input[name='password']").type(user.Password)//password


      cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click()


      ///////
       cy.get('[class="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci"]').eq(3).click()
     // cy.get("div[class='css-175oi2r r-1h8ys4a r-slzeqm r-ly4kne'] div div[class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']").type("hi this side ayush")
     cy.get("div[class='css-175oi2r r-1h8ys4a r-slzeqm r-ly4kne'] div div[class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']").type(messages)
     
      cy.get("button[class='css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1cwvpvk r-2yi16 r-1qi8awa r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l'] span[class='css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3']").click()
        })
    })
})
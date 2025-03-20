describe('Login with multiple users using fixture', () => {
    const messages = Math.random().toString(36).substring(2)
    beforeEach(() => {
      cy.visit("https://x.com/"); 
    });
  
    it('Logs in multiple users from fixture', function () {
        cy.fixture("user1").then((user1) => {
        user1.forEach((user1) => {
          
            cy.get('[data-testid="loginButton"] > .css-146c3p1').click();
  
            // Enter UserID
            cy.get("input[name='text']").type(user1.UserID);
            cy.get('[class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"]').eq(6).click();
      
            // Check if the email input field is present
            cy.get(".r-1dqxon3 > :nth-child(1)").then(($body) => {
              if ($body.find('.r-1ets6dv > :nth-child(1) > .r-16y2uox').length > 0) {
                cy.log("Email field is present");
                cy.get('.r-1ets6dv > :nth-child(1) > .r-16y2uox').type(user1.Email);
                cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(6) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)').click();
              } 
            
              else {
                cy.log("Email field is not shown, skipping to password...");
              }
            })
    
            // Wait for password field and enter password
           cy.get("input[name='password']").should("be.visible").type(user1.Password);
            cy.get('[data-testid="LoginForm_Login_Button"] > .css-146c3p1').click();
    
            cy.wait(5000)
      
            // Post a Message
            /* cy.get('[class="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci"]')
            .eq(3).click(); */
            cy.get('[data-testid="SideNav_NewTweet_Button"] > .css-146c3p1').click()//1
      
            cy.get("div[class='css-175oi2r r-1h8ys4a r-slzeqm r-ly4kne'] div div[class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']").type(messages)
     
            cy.get('[class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"]').eq(4).click();

            cy.wait(10000)

            cy.get('[class="css-175oi2r r-12181gd r-1pi2tsx r-13qz1uu r-1ny4l3l"]').click({force:true})

         //cy.get('[class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"]').eq(3).click()
cy.get('[class="css-175oi2r r-12181gd r-1pi2tsx r-13qz1uu r-1ny4l3l"]').dblclick()
cy.wait(10000)
    
         cy.get('[data-testid="AccountSwitcher_Logout_Button"]').click({force:true})

         cy.get('[role="button"]').eq(0).click()

        })
      })
    })
  })
  
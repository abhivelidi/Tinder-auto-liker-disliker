describe('testing cypress',function(){
    before(function(){
        cy.visit("https://tinder.com")
        cy.wait(6000)
        cy.get(':nth-child(4) > :nth-child(1) > .button > .button__text > span').click()
        cy.wait(4000)
    })
    it('Function to Like posts till all posts in the feed are over or tinder limits the likes',function(){
        cy.get('.recsGamepad__button--like').click()
    })

    it.only('Function to dislike all the posts in the feed',function(){
        var genArr = Array.from({length:100},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
            cy.get('.recsGamepad__button--dislike').click()
            cy.wait(2000)
        })
    })
})
describe("Test One", () => {
    it('Group-Project', () => {
        cy.visit('http://localhost:3000/#/')
    })
})

describe("Test Two", () => {
    it('Group-Project', () => {
        cy.contains('Amazing Restaurant')
    })
})

describe("Test Three", () => {
    it('Group-Project', () => {
        cy.get('.footer_button')
    })
})

describe("Test Four", () => {
    it('Group-Project', () => {
        cy.contains("Peaceful Paradise")
    })
})

describe("Test Five", () => {
    it('Group-Project', () => {
        cy.contains("Ready to book your stay?")
    })
})


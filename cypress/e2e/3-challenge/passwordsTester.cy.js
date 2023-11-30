describe('Desafio Senhas tester', () => {
    beforeEach(() => {
        cy.visit('https://nicolecarvalh0.github.io/senhastester/')
      })

      it('Verifica se os elementos iniciais estão presentes', () => {
        cy.get('[data-cy=logo]').should('exist')
        
      })
    
      
})
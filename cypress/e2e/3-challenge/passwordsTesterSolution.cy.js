describe('Desafio Senhas tester', () => {
    beforeEach(() => {
        cy.visit('https://nicolecarvalh0.github.io/senhastester/')
      })

      it('Verifica se os elementos iniciais estão presentes', () => {
        cy.get('[data-cy=logo]').should('exist')
        cy.get('[data-cy=generate-title]').should('exist')
        cy.get('[data-cy=range-slider]').should('exist')
        cy.get('[data-cy=char-count]').should('exist')
        cy.get('[data-cy=generate-button]').should('exist')
        cy.get('[data-cy=generated-password-div]').should('exist')
        cy.get('[data-cy=description-generated-password]').should('exist')
        cy.get('[data-cy=generated-password]').should('exist')
        cy.get('[data-cy=verify-title]').should('exist')
        cy.get('[data-cy=description-verify]').should('exist')
        cy.get('[data-cy=input-checkPassword]').should('exist')
        cy.get('[data-cy=verify-button]').should('exist')
        cy.get('[data-cy=verified-password]').should('exist')
      })
    
      it('Gera uma senha quando o botão é clicado', () => {
        cy.get('[data-cy=generate-button]').click()
        cy.get('[data-cy=generated-password]').should('not.be.empty')
      })
    
      it('Verifica se a senha é considerada segura', () => {
        // Digite uma senha segura no input para testar
        const senhaSegura = 'SenhaSegura@123'
        cy.get('[data-cy=input-checkPassword]').type(senhaSegura)
        cy.get('[data-cy=verify-button]').click()
        cy.get('[data-cy=verified-password]').should('contain.text', 'Sua senha é segura!')
      })
    
      it('Verifica se a senha é considerada insegura', () => {
        // Digite uma senha insegura no input para testar
        const senhaInsegura = 'senha123'
        cy.get('[data-cy=input-checkPassword]').type(senhaInsegura)
        cy.get('[data-cy=verify-button]').click()
        cy.get('[data-cy=verified-password]').should('contain.text', 'Sua senha não é tão segura...')
      })
})
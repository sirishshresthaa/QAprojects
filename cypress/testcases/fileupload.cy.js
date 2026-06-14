describe('File Upload', () => {
  it('uploads', () => {
    cy.visit('https://www.ilovepdf.com/')
    cy.get("a[title='Compress PDF']").click()
    cy.get('input[type="file"]').selectFile(
  'C:/Users/OMEN/Desktop/Maths.pdf', {force: true}
)
    
  })
})
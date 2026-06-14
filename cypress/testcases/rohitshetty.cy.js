/// <reference types="cypress" />

describe('Rahul Shetty Academy - Automation Practice Page', () => {
  const BASE_URL = 'https://rahulshettyacademy.com/AutomationPractice/';

  beforeEach(() => {
    cy.visit(BASE_URL);
  });


  describe('Radio Button Example', () => {
    it('should select Radio1 and verify it is checked', () => {
      cy.get('input[value="radio1"]').check().should('be.checked');
    });

    it('should select Radio2 and verify Radio1 is no longer checked', () => {
      cy.get('input[value="radio1"]').check();
      cy.get('input[value="radio2"]').check().should('be.checked');
      cy.get('input[value="radio1"]').should('not.be.checked');
    });

    it('should select Radio3', () => {
      cy.get('input[value="radio3"]').check().should('be.checked');
    });

    it('should only allow one radio button to be selected at a time', () => {
      cy.get('input[value="radio1"]').check();
      cy.get('input[value="radio2"]').check();
      cy.get('input[value="radio3"]').check();

      cy.get('.radioButton:checked').should('have.length', 1);
      cy.get('input[value="radio3"]').should('be.checked');
    });
  });

 
  describe('Suggestion Class (Autocomplete) Example', () => {
    it('should show suggestions when typing a country name', () => {
      cy.get('#autocomplete').type('In');
      cy.get('.ui-autocomplete').should('be.visible');
      cy.get('.ui-menu-item').should('have.length.greaterThan', 0);
    });

    it('should select "India" from suggestions', () => {
      cy.get('#autocomplete').type('Ind');
      cy.get('.ui-menu-item').contains(/^India$/).click();
      cy.get('#autocomplete').should('have.value', 'India');
    });

    it('should not show suggestions for less than 2 characters', () => {
      cy.get('#autocomplete').type('I');
      cy.get('.ui-autocomplete').should('not.be.visible');
    });

    it('should clear the field and type a new country', () => {
      cy.get('#autocomplete').type('Ind');
      cy.get('.ui-menu-item').contains('India').click();
      cy.get('#autocomplete').clear().type('Ne');
      cy.get('.ui-menu-item').contains('Nepal').click();
      cy.get('#autocomplete').should('have.value', 'Nepal');
    });
  });


  describe('Dropdown Example', () => {
    it('should have "Select" as the default option', () => {
      cy.get('#dropdown-class-example').should('have.value', '');
    });

    it('should select Option1', () => {
      cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1');
    });

    it('should select Option2', () => {
      cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2');
    });

    it('should select Option3', () => {
      cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3');
    });

    it('should select by value', () => {
      cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
    });
  });


  describe('Checkbox Example', () => {
    it('should check Option1', () => {
      cy.get('#checkBoxOption1').check().should('be.checked');
    });

    it('should uncheck Option1 after checking it', () => {
      cy.get('#checkBoxOption1').check().should('be.checked');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    });

    it('should check all checkboxes simultaneously', () => {
      cy.get('#checkBoxOption1').check();
      cy.get('#checkBoxOption2').check();
      cy.get('#checkBoxOption3').check();

      cy.get('#checkBoxOption1').should('be.checked');
      cy.get('#checkBoxOption2').should('be.checked');
      cy.get('#checkBoxOption3').should('be.checked');
    });

    it('should check Option2 and Option3 while Option1 remains unchecked', () => {
      cy.get('#checkBoxOption2').check();
      cy.get('#checkBoxOption3').check();

      cy.get('#checkBoxOption1').should('not.be.checked');
      cy.get('#checkBoxOption2').should('be.checked');
      cy.get('#checkBoxOption3').should('be.checked');
    });
  });


  describe('Switch Window Example', () => {
    it('should open a new window when clicking Open Window', () => {
      // Cypress handles new windows by stubbing window.open
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });
      cy.get('#openwindow').click();
      cy.get('@windowOpen').should('have.been.calledOnce');
      cy.get('@windowOpen').should(
        'have.been.calledWith',
        'http://www.qaclickacademy.com/',
        'myWin',
        'width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes'
      );
    });
  });


  describe('Switch Tab Example', () => {
    it('should have Open Tab link pointing to qaclickacademy.com with target _blank', () => {
      cy.get('#opentab')
        .should('have.attr', 'href', 'https://www.qaclickacademy.com')
        .and('have.attr', 'target', '_blank');
    });

    it('should open the URL in a new tab by removing target attribute and visiting', () => {
      cy.get('#opentab').invoke('removeAttr', 'target').click();
      cy.url().should('include', 'qaclickacademy.com');
    });
  });


  describe('Switch To Alert Example', () => {
    it('should show an alert with the entered name', () => {
      const testName = 'CypressUser';
      cy.get('#name').type(testName);

      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(
          `Hello ${testName}, share this practice page and share your knowledge`
        );
      });

      cy.get('#alertbtn').click();
    });

    it('should clear the name field after clicking Alert', () => {
      cy.get('#name').type('TestUser');
      cy.on('window:alert', () => {});
      cy.get('#alertbtn').click();
      cy.get('#name').should('have.value', '');
    });

    it('should show a confirm dialog with the entered name', () => {
      const testName = 'ConfirmUser';
      cy.get('#name').type(testName);

      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.equal(
          `Hello ${testName}, Are you sure you want to confirm?`
        );
        return true; // accept the confirm dialog
      });

      cy.get('#confirmbtn').click();
    });

    it('should dismiss the confirm dialog', () => {
      cy.get('#name').type('DismissUser');

      cy.on('window:confirm', () => false); // dismiss

      cy.get('#confirmbtn').click();
      cy.get('#name').should('have.value', '');
    });
  });


  describe('Web Table Example', () => {
    it('should display 10 course rows (excluding header)', () => {
      cy.get('#product').first().find('tbody tr').should('have.length', 11); // 1 header + 10 data rows
    });

    it('should contain "Selenium Webdriver" course with price 30', () => {
      cy.get('#product tbody tr').eq(1).within(() => {
        cy.get('td').eq(1).should('contain', 'Selenium Webdriver');
        cy.get('td').eq(2).should('have.text', '30');
      });
    });

    it('should have correct headers: Instructor, Course, Price', () => {
      cy.get('#product th').eq(0).should('have.text', 'Instructor');
      cy.get('#product th').eq(1).should('have.text', 'Course');
      cy.get('#product th').eq(2).should('have.text', 'Price');
    });

    it('should find the course with price 0 (free course)', () => {
      cy.get('#product tbody tr td').filter(':contains("0")').should('exist');
    });

    it('should retrieve all prices and compute the total', () => {
      let total = 0;
      cy.get('#product tbody tr').each(($row, index) => {
        if (index === 0) return; // skip header row
        cy.wrap($row).find('td').eq(2).invoke('text').then((price) => {
          total += parseInt(price.trim(), 10);
        });
      }).then(() => {
        expect(total).to.equal(235);
      });
    });
  });

  
  describe('Element Displayed Example', () => {
    it('should display the text box by default', () => {
      cy.get('#displayed-text').should('be.visible');
    });

    it('should hide the text box when clicking Hide', () => {
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');
    });

    it('should show the text box again after clicking Show', () => {
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');
      cy.get('#show-textbox').click();
      cy.get('#displayed-text').should('be.visible');
    });
  });

 
  describe('Web Table Fixed Header Example', () => {
    it('should display total amount as 296', () => {
      cy.get('.totalAmount').should('contain', '296');
    });

    it('should contain sticky headers: Name, Position, City, Amount', () => {
      cy.get('.tableFixHead th').eq(0).should('have.text', 'Name');
      cy.get('.tableFixHead th').eq(1).should('have.text', 'Position');
      cy.get('.tableFixHead th').eq(2).should('have.text', 'City');
      cy.get('.tableFixHead th').eq(3).should('have.text', 'Amount');
    });

    it('should show 9 data rows in the fixed table', () => {
      cy.get('.tableFixHead tbody tr').should('have.length', 9);
    });

    it('should find employees from Chennai', () => {
      const chennaiEmployees = [];
      cy.get('.tableFixHead tbody tr').each(($row) => {
        cy.wrap($row).find('td').eq(2).invoke('text').then((city) => {
          if (city.trim() === 'Chennai') {
            cy.wrap($row).find('td').eq(0).invoke('text').then((name) => {
              chennaiEmployees.push(name.trim());
            });
          }
        });
      }).then(() => {
        expect(chennaiEmployees.length).to.be.greaterThan(0);
      });
    });

    it('should compute and verify total amount from fixed table equals 296', () => {
      let total = 0;
      cy.get('.tableFixHead tbody tr').each(($row) => {
        cy.wrap($row).find('td').eq(3).invoke('text').then((amount) => {
          total += parseInt(amount.trim(), 10);
        });
      }).then(() => {
        expect(total).to.equal(296);
      });
    });
  });


  describe('Mouse Hover Example', () => {
    it('should reveal Top and Reload links on hover', () => {
      cy.get('#mousehover').trigger('mouseover');
      cy.get('.mouse-hover-content').should('be.visible');
      cy.get('.mouse-hover-content a').should('have.length', 2);
      cy.get('.mouse-hover-content a').eq(0).should('contain', 'Top');
      cy.get('.mouse-hover-content a').eq(1).should('contain', 'Reload');
    });

    it('should scroll to top when clicking Top link in hover menu', () => {
      cy.get('#mousehover').trigger('mouseover');
      cy.get('.mouse-hover-content a').contains('Top').click();
      cy.window().its('scrollY').should('equal', 0);
    });
  });

 
  describe('iFrame Example', () => {
    it('should contain an iframe with the correct src', () => {
      cy.get('#courses-iframe')
        .should('have.attr', 'src', 'https://legacy.rahulshettyacademy.com/');
    });

    it('should interact with elements inside the iframe', () => {
      cy.get('#courses-iframe').then(($iframe) => {
        const iframeDoc = $iframe.contents();
        cy.wrap(iframeDoc).find('body').should('exist');
      });
    });
  });
});
/// <reference types="cypress" />
import { } from 'cypress';
import 'cypress-mochawesome-reporter/register';

describe('Google Homepage', () => {
  it('should open Google in the browser', () => {
    cy.visit('https://www.google.com');
    cy.contains('Google'); // Assert that "Google" is visible on the page
  });
});

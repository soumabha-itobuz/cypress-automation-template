/// <reference types="cypress" />
import { } from 'cypress';

describe('Google Homepage', () => {
  it('should open Google in the browser', () => {
    cy.visit('https://www.google.com');
  });
});

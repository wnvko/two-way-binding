import { expect } from '@open-wc/testing';
import InputGroup from './input-group.js';

describe('InputGroup', () => {
  it('<app-input-group> is an instance of InputGroup', async () => {
    const element = document.createElement('app-input-group');
    expect(element).to.be.instanceOf(InputGroup);
  });
});

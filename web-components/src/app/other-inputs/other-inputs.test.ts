import { expect } from '@open-wc/testing';
import OtherInputs from './other-inputs.js';

describe('OtherInputs', () => {
  it('<app-other-inputs> is an instance of OtherInputs', async () => {
    const element = document.createElement('app-other-inputs');
    expect(element).to.be.instanceOf(OtherInputs);
  });
});

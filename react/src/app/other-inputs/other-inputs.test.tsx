import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import OtherInputs from './other-inputs';
import 'element-internals-polyfill';

test('renders OtherInputs component', () => {
    const wrapper = render(<OtherInputs />);
    expect(wrapper).toBeTruthy();
});
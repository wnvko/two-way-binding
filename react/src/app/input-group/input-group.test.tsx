import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import InputGroup from './input-group';
import 'element-internals-polyfill';

test('renders InputGroup component', () => {
    const wrapper = render(<InputGroup />);
    expect(wrapper).toBeTruthy();
});
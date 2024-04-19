import { redirect } from 'react-router-dom';
import InputGroup from './input-group/input-group';
import OtherInputs from './other-inputs/other-inputs';
export const routes = [
  { index: true, loader: () => redirect('input-group') },
  { path: 'input-group', element: <InputGroup />, text: 'Input group' },
  { path: 'other-inputs', element: <OtherInputs />, text: 'Other Inputs' }
];

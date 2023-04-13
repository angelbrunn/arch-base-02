import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {render} from '../../test/test-utils';

import {HomeContainer} from './HomeContainer';

describe('Component - HomeContainer', () => {
  test('render', async () => {
    render(<HomeContainer />);
    const headerText = screen.getByText('Home Container');
    expect(headerText).toBeInTheDocument();
  });
});

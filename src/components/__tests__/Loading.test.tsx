import { render } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading Component', () => {
  it('should render a spinning loader', () => {
    const { container } = render(<Loading />);

    const wrapperDiv = container.firstChild;
    expect(wrapperDiv).toBeInTheDocument();

    const spinnerDiv = wrapperDiv?.firstChild;
    expect(spinnerDiv).toHaveClass('animate-spin');
  });
});

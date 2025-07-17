import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  const fn = vi.fn();
  const renderComponent = (props = {}) => {
    render(<Button name="Test Button" onClick={fn} {...props} />);

    return {
      button: screen.getByRole('button'),
    };
  };

  it('should render a button with the correct text', () => {
    const { button } = renderComponent();

    expect(button).toHaveTextContent('Test Button');
  });

  it('should render a button with the primary variant by default', () => {
    const { button } = renderComponent();

    expect(button).toHaveClass('bg-blue-500');
    expect(button).not.toHaveClass('bg-red-500');
  });

  it('should render a button red when variant is not primary', () => {
    const { button } = renderComponent({ variant: 'danger' });

    expect(button).toHaveClass('bg-red-500');
    expect(button).not.toHaveClass('bg-blue-500');
  });
});

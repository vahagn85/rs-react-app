import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination Component', () => {
  const renderComponent = (props = {}) => {
    const onPageChange = vi.fn();
    render(
      <Pagination
        totalCount={30}
        current={1}
        onPageChange={onPageChange}
        {...props}
      />
    );
    return { onPageChange };
  };

  it('should render the correct number of page buttons', () => {
    renderComponent();
    const pageButtons = screen.getAllByRole('button', { name: /^[1-3]$/ });
    expect(pageButtons).toHaveLength(3);
  });

  it('should disables Prev button on the first page', () => {
    renderComponent();

    const prevBtn = screen.getByRole('button', { name: /prev/i });
    expect(prevBtn).toBeDisabled();
  });

  it('should disable Next button on the last page', () => {
    renderComponent({ current: 3 });

    const nextBtn = screen.getByRole('button', { name: /next/i });
    expect(nextBtn).toBeDisabled();
  });

  it('should calls onPageChange when a page number is clicked', async () => {
    const user = userEvent.setup();
    const { onPageChange } = renderComponent({ current: 1 });

    const btn = screen.getByRole('button', { name: '2' });
    await user.click(btn);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});

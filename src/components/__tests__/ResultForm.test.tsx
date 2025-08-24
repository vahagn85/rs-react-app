import { render, screen } from '@testing-library/react';
import ResultForm from '../ResultForm';
import { formFields } from '../../utils/formFields';
import type { FormValues } from '../../types/formTypes';
import { mockData } from '../../test-utils/mockData';

describe('ResultForm component', () => {
  const mockBtn = () => <button>Mock Button</button>;

  it('should render title', () => {
    render(
      <ResultForm
        title="Results"
        updated={false}
        data={{} as FormValues}
        renderBtn={mockBtn}
      />
    );
    expect(
      screen.getByRole('heading', { name: /results/i })
    ).toBeInTheDocument();
  });

  it('should render no data message when has not data', () => {
    render(
      <ResultForm
        title="Results"
        updated={false}
        data={undefined as unknown as FormValues}
        renderBtn={mockBtn}
      />
    );
    expect(screen.getByText(/please fill the form/i)).toBeInTheDocument();
  });

  it('should render fields when has data', () => {
    render(
      <ResultForm
        title="Results"
        updated={false}
        data={mockData}
        renderBtn={mockBtn}
      />
    );

    formFields.forEach((field) => {
      expect(screen.getByText(`${field.label}:`)).toBeInTheDocument();
    });
  });

  it('should updated styles when updated is true', () => {
    const { container } = render(
      <ResultForm
        title="Form Results"
        updated={true}
        data={mockData}
        renderBtn={mockBtn}
      />
    );
    expect(container.firstChild).toHaveClass('!border-green-600');
    expect(container.firstChild).toHaveClass('bg-green-100');
  });

  it('should render the button from renderBtn', () => {
    render(
      <ResultForm
        title="Results"
        updated={false}
        data={{} as FormValues}
        renderBtn={mockBtn}
      />
    );
    expect(
      screen.getByRole('button', { name: /mock button/i })
    ).toBeInTheDocument();
  });
});

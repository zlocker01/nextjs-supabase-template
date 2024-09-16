import { render, screen } from '@testing-library/react';
import { Title } from '@/components/Title';

describe('Title component', () => {
  it('should render the title with the correct text', () => {
    const titleText = 'Hello World';

    render(<Title text={titleText} />);

    // Verifica que el componente muestre el texto pasado como prop
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  it('should have the correct class names for styling', () => {
    const titleText = 'Styling Test';

    render(<Title text={titleText} />);

    // Verifica que el componente tenga las clases correctas
    const titleElement = screen.getByText(titleText);
    expect(titleElement).toHaveClass('font-bold', 'my-2', 'text-2xl');
  });
});

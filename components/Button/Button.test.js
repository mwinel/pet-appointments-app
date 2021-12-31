import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
    it('renders Button component', () => {
        const buttonText = 'Test title';

        render(<Button>{buttonText}</Button>);

        expect(screen.getByText(/Test title/)).toBeInTheDocument();
    });

    it('onClick is called', () => {
        const buttonText = 'Test title';
        const onClick = jest.fn();

        render(<Button onClick={onClick}>{buttonText}</Button>);

        expect(onClick).toHaveBeenCalledTimes(0);

        userEvent.click(screen.getByText(/Test title/));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

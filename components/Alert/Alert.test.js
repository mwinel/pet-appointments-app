import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Alert from './Alert';

describe('Alert', () => {
    it('renders Alert component', () => {
        const message = 'Test message';

        render(<Alert message={message} />);

        expect(screen.getByText(/Test message/)).toBeInTheDocument();
    });

    it('onXClick is called', () => {
        const message = 'Test message';
        const onXClick = jest.fn();

        render(<Alert message={message} onXClick={onXClick} />);

        expect(onXClick).toHaveBeenCalledTimes(0);

        userEvent.click(screen.getByRole('button'));

        expect(onXClick).toHaveBeenCalledTimes(1);
    });
});

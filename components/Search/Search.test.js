import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
    it('renders Search component', async () => {
        const onQueryChange = jest.fn();

        render(<Search value="" onQueryChange={onQueryChange} />);

        // screen.debug();

        // expect(screen.getByText(/Sort By/)).toBeInTheDocument();

        // screen.getByRole('')

        // expect(screen.getByRole('textbox')).toBeInTheDocument();
        // expect(screen.getByRole('button')).toBeInTheDocument();

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'dacey' },
        });

        // screen.debug();

        expect(onQueryChange).toHaveBeenCalledWith('dacey');
        expect(onQueryChange).toHaveBeenCalledTimes(1);
    });
});

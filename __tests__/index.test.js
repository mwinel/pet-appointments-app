import { render, screen, act } from '@testing-library/react';
import axios from 'axios';
import Home from '../pages/index';

jest.mock('axios');

describe('Home', () => {
    it('renders Home component', () => {
        render(<Home />);
    });

    it('fetches Appointments from API and displays them', async () => {
        const appointments = [
            {
                id: '0',
                petName: 'Pepe',
                ownerName: 'Reggie Tupp',
                aptNotes: 'Test note 1',
                aptDate: '2021-12-28 13:30',
            },
            {
                id: '1',
                petName: 'Dacey',
                ownerName: 'Agatha K',
                aptNotes: 'Test note 2',
                aptDate: '2021-12-28 14:30',
            },
        ];

        const promise = Promise.resolve({ data: appointments });

        axios.get.mockImplementationOnce(() => promise);

        render(<Home />);

        await act(() => promise);

        expect(screen.getByText(/Pepe/)).toBeInTheDocument();
        expect(screen.getByText(/Dacey/)).toBeInTheDocument();
        expect(screen.getByText(/2 appointements found./)).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
});

import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
    it('renders TextArea component', () => {
        const expectedProps = {
            id: 'test-id',
            name: 'test-name',
            label: 'Test label',
        };

        render(<TextArea {...expectedProps} />);

        expect(screen.getByLabelText(/Test label/)).toBeInTheDocument();
    });
});

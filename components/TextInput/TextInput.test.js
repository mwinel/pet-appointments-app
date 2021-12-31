import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
    it('renders TextInput component', () => {
        const expectedProps = {
            id: 'test-id',
            name: 'test-name',
            label: 'Test label',
        };

        render(<TextInput {...expectedProps} />);

        expect(screen.getByLabelText(/Test label/)).toBeInTheDocument();
    });
});

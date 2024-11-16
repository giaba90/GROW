import React from 'react';
import { render } from '@testing-library/react';
import PageDetails from './PageDetails';
import { Page } from '../../types/page';
import '@testing-library/jest-dom';

describe('PageDetails Component', () => {
    const mockPage: Page = {
        title: 'Test Title',
        content: '<p>This is a test content.</p>',
        id: ''
    };

    it('should render the title correctly', () => {
        const { getByText } = render(<PageDetails page={mockPage} />);
        const titleElement = getByText(/Test Title/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('should render the content correctly', () => {
        const { container } = render(<PageDetails page={mockPage} />);
        const contentElement = container.querySelector('.prose');
        expect(contentElement).not.toBeNull();
        expect(contentElement!.innerHTML.trim()).toBe(mockPage.content.trim());
    });

});
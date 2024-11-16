import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { GET_PAGE } from '../graphql/queries';
import Page from './page';

// Mock the components that are imported with @ alias in the Page component
jest.mock('../components/layout/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-footer">Footer</div>,
}));

jest.mock('../components/layout/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-header">Header</div>,
}));

jest.mock('../components/blog/PageDetails', () => ({
  __esModule: true,
  default: ({ page }: { page: any }) => (
    <div data-testid="mock-page-details">
      <h1>{page.title}</h1>
      <div>{page.content}</div>
    </div>
  ),
}));

const mockPageData = {
  pageBy: {
    id: '1',
    title: 'Test Page',
    content: 'Test content',
    slug: 'test-page',
    date: '2024-01-01',
  },
};

const mocks = [
  {
    request: {
      query: GET_PAGE,
      variables: { slug: 'test-page' },
    },
    result: {
      data: mockPageData,
    },
  },
];

const errorMocks = [
  {
    request: {
      query: GET_PAGE,
      variables: { slug: 'test-page' },
    },
    error: new Error('An error occurred'),
  },
];

const renderPage = (mockData: any[]) => {
  render(
    <MockedProvider mocks={mockData} addTypename={false}>
      <MemoryRouter initialEntries={['/pages/test-page']}>
        <Routes>
          <Route path="/pages/:slug" element={<Page />} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  );
};

describe('Page Component', () => {
  it('shows loading state', () => {
    renderPage(mocks);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows error message when query fails', async () => {
    renderPage(errorMocks);
    expect(await screen.findByText('Error: An error occurred')).toBeInTheDocument();
  });

  it('renders page content when query succeeds', async () => {
    renderPage(mocks);

    // Wait for loading to finish
    expect(await screen.findByText('Torna indietro')).toBeInTheDocument();

    // Verify that the mocked components are rendered
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByTestId('mock-page-details')).toBeInTheDocument();

    // Verify page content
    expect(screen.getByText('Test Page')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});







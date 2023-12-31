import '@testing-library/jest-dom';
import { Pagination } from './pagination';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { mockPagination } from '../../mocks/pagination.mock';

jest.mock('../../config', () => ({
  url: '',
}));

describe('Pagination', () => {
  const handleChangePage = jest.fn();

  beforeEach(() => {
    render(
      <Pagination
        pagination={mockPagination}
        handleChangePage={handleChangePage}
      />
    );
  });

  test('should render the pagination component', () => {
    const pagination = screen.getByText('1 of 6');

    expect(pagination).toBeInTheDocument();
  });

  test('should render the previous button disabled', () => {
    const previousButton = screen.getByText('＜');

    expect(previousButton).toHaveClass('button_disabled');
  });

  test('should render the next button enabled', () => {
    const nextButton = screen.getByText('＞');

    expect(nextButton).toHaveClass('button');
  });

  test('And next page button is clicked, then setCurrentPage should be called', () => {
    const nextButton = screen.getByText('＞');
    fireEvent.click(nextButton);

    expect(handleChangePage).toHaveBeenCalled();
  });
});
describe("When it's rendered with current page = 2", () => {
  test('And previous page button is clicked, setCurrentPage should be called', () => {
    const currentPage = 2;
    const nextPage = '3';
    const previousPage = '1';
    const totalPages = 6;
    const handleChangePage = jest.fn();

    render(
      <Pagination
        pagination={{
          currentPage,
          nextPage,
          previousPage,
          totalPages,
        }}
        handleChangePage={handleChangePage}
      />
    );
    const previousButton = screen.getByText('＜');
    fireEvent.click(previousButton);

    expect(handleChangePage).toHaveBeenCalled();
  });

  test('and next page button is clicked, setCurrentPage should be called', () => {
    const currentPage = 2;
    const nextPage = '3';
    const previousPage = '1';
    const totalPages = 6;
    const handleChangePage = jest.fn();

    render(
      <Pagination
        pagination={{
          currentPage,
          nextPage,
          previousPage,
          totalPages,
        }}
        handleChangePage={handleChangePage}
      />
    );
    const nextButton = screen.getByText('＞');
    fireEvent.click(nextButton);

    expect(handleChangePage).toHaveBeenCalled();
  });
});

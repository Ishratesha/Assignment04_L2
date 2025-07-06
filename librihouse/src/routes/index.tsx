import { Route, Routes } from 'react-router-dom';
import BookListPage from '../features/books/pages/BookListPage';
import CreateBookPage from '../features/books/pages/CreateBookPage';
import EditBookPage from '../features/books/pages/EditBookPage';
import BookDetailPage from '../features/books/pages/BookDetailPage';
import BorrowFormPage from '../features/borrow/pages/BorrowFormPage';
import BorrowSummaryPage from '../features/borrow/pages/BorrowSummaryPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BookListPage />} />
      <Route path="/create-book" element={<CreateBookPage />} />
      <Route path="/books/:id" element={<BookDetailPage />} />
      <Route path="/edit-book/:id" element={<EditBookPage />} />
      <Route path="/borrow/:bookId" element={<BorrowFormPage />} />
      <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
    </Routes>
  );
};

export default AppRoutes;
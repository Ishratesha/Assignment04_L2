
import { useNavigate } from 'react-router-dom';
import BookTable from '../components/BookTable';

const BookListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Library Books</h1>
        <button
          onClick={() => navigate('/create-book')}
          className="btn btn-primary"
        >
          Add New Book
        </button>
      </div>
      <BookTable />
    </div>
  );
};

export default BookListPage;

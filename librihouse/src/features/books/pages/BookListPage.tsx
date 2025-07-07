
import { useNavigate } from 'react-router-dom';
import BookTable from '../components/BookTable';
//import LibraryBanner from '../../../components/Banner';

const BookListPage = () => {
  const navigate = useNavigate();

  return (
    <>

     <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Library Books</h1>
        <button
          onClick={() => navigate('/create-book')}
          className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded shadow-md transition-colors duration-200"
        >
          Add New Book
        </button>
      </div>
      <BookTable />
    </div>
    </>
  
  );
};

export default BookListPage;

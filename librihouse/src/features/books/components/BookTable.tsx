import { useNavigate } from 'react-router-dom';
import { useGetBooksQuery, useDeleteBookMutation } from '../booksApi';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

const BookTable = () => {
  const { data, isLoading } = useGetBooksQuery({ filter: '', sortBy: 'title', sort: 'asc', limit: 10 });
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this book?')) {
      await deleteBook(id);
    }
  };

  if (isLoading) return <p className="text-center py-6">Loading books...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">All Books</h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Author</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Genre</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ISBN</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Copies</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Available</th>
              <th className="px-4 py-3 text-sm text-center font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data?.data?.map((book: Book) => (
              <tr key={book._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.copies}</td>
                <td className="px-4 py-2">{book.available ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2 flex gap-2 justify-center">
                  <button
                    onClick={() => navigate(`/edit-book/${book._id}`)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate(`/borrow/${book._id}`)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                  >
                    Borrow
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTable;

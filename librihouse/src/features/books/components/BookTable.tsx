import { Link, useNavigate } from 'react-router-dom';
import { useGetBooksQuery, useDeleteBookMutation } from '../booksApi';
import { BookX, FilePenLine } from 'lucide-react';

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
        <table className="min-w-full divide-y divide-gray-200 bg-gradient-to-r from-amber-50 to-orange-50">
          <thead className="bg-amber-700 hover:bg-amber-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold ">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold ">Author</th>
              <th className="px-4 py-3 text-left text-sm font-semibold ">Genre</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">ISBN</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Copies</th>
              <th className="px-4 py-3 text-left text-sm font-semibold ">Available</th>
              <th className="px-4 py-3 text-sm text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data?.data?.map((book: Book) => (
              <tr key={book._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <Link
                                      to={`/books/${book._id}`}
                                      className="text-amber-700 hover:underline font-medium"
                                    >
                                    {book.title}
                                    </Link>
                  </td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.copies}</td>
                <td className="px-4 py-2">{book.available ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2 flex gap-2 justify-center">
                <button
                    onClick={() => navigate(`/borrow/${book._id}`)}
                    className="px-3 py-1 bg-amber-700 hover:bg-amber-800  text-white rounded  text-sm"
                  >
                    Borrow
                  </button>
                  <button
                    onClick={() => navigate(`/edit-book/${book._id}`)}
                    className="px-3 py-1  text-amber-700 rounded  text-sm"
                  >
                    <FilePenLine />
                  </button>
                
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  >
                    <BookX />
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

// src/pages/BookDetailsPage.tsx

import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookQuery } from '../booksApi';


const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetBookQuery(id!);

  if (isLoading) return <div className="text-center mt-10">Loading book details...</div>;
  if (error || !data?.data) return <div className="text-center mt-10 text-red-500">Book not found.</div>;

  const book = data.data;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl space-y-4">
      <h1 className="text-2xl font-bold text-amber-700">{book.title}</h1>
      <p className="text-gray-700"><span className="font-semibold">Author:</span> {book.author}</p>
      <p className="text-gray-700"><span className="font-semibold">Genre:</span> {book.genre}</p>
      <p className="text-gray-700"><span className="font-semibold">ISBN:</span> {book.isbn}</p>
      <p className="text-gray-700"><span className="font-semibold">Copies:</span> {book.copies}</p>
      <p className="text-gray-700"><span className="font-semibold">Available:</span> {book.available ? 'Yes' : 'No'}</p>
      <p className="text-gray-600 italic"><span className="font-semibold">Description:</span> {book.description}</p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate(`/edit-book/${book._id}`)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => navigate(`/borrow/${book._id}`)}
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
        >
          Borrow
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 ml-auto"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;

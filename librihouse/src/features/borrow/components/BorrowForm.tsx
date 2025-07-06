// src/features/borrow/components/BorrowForm.tsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBorrowBookMutation } from '../borrowApi';
import { useGetBookQuery } from '../../books/booksApi';

const BorrowForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    quantity: 1,
    dueDate: '',
  });

  const { data: bookData, isLoading: bookLoading } = useGetBookQuery(bookId!, { skip: !bookId });
  const [borrowBook] = useBorrowBookMutation();

  const availableCopies = bookData?.data?.copies || 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.quantity > availableCopies) {
      alert('Cannot borrow more copies than available.');
      return;
    }

    try {
      await borrowBook({ book: bookId, ...formData }).unwrap();
      alert('Book borrowed successfully!');
      navigate('/borrow-summary');
    } catch (error) {
      console.error(error);
    }
  };

  if (bookLoading) return <p>Loading book info...</p>;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Borrow "{bookData?.data?.title}"</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            min={1}
            max={availableCopies}
            value={formData.quantity}
            onChange={handleChange}
            className="input w-full"
            required
          />
          <p className="text-xs text-gray-500 mt-1">Available copies: {availableCopies}</p>
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="input w-full"
            required
          />
        </div>

        <button type="submit" className="btn w-full bg-blue-600 hover:bg-blue-700 text-white">
          Borrow Book
        </button>
      </form>
    </div>
  );
};

export default BorrowForm;

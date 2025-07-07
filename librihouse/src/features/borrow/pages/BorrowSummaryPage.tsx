// src/features/borrow/components/BorrowSummary.tsx
import { useGetBorrowSummaryQuery } from '../borrowApi';

interface BorrowEntry {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery({});

  if (isLoading) return <p>Loading summary...</p>;

  return (
    <div>
     
      {/* <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">ISBN</th>
              <th className="p-2">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((entry: BorrowEntry, index: number) => (
              <tr key={index}>
                <td className="p-2">{entry.book?.title}</td>
                <td className="p-2">{entry.book?.isbn}</td>
                <td className="p-2">{entry.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="overflow-x-auto max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center">📚 Borrow Summary</h2>
      <table className="min-w-full bg-amber-50 border border-amber-300 shadow rounded-lg">
        <thead>
          <tr className="bg-amber-200 text-amber-900">
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">ISBN</th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Total Quantity</th>
          </tr>
        </thead>
        <tbody>
        {data?.data?.map((entry: BorrowEntry, index: number) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-amber-100'
              } hover:bg-amber-200 transition duration-200`}
            >
              <td className="px-6 py-4 text-amber-900 font-medium">{entry.book.title}</td>
              <td className="px-6 py-4 text-amber-800">{entry.book.isbn}</td>
              <td className="px-6 py-4 text-amber-700 font-semibold">{entry.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BorrowSummary;

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
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Borrow Summary</h2>
      <div className="overflow-x-auto">
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
      </div>
    </div>
  );
};

export default BorrowSummary;

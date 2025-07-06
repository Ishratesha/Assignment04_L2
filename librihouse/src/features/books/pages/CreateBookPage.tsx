import BookForm from "../components/BookForm";


const CreateBookPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <BookForm />
    </div>
  );
};

export default CreateBookPage;

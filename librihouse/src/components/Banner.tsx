import BookTable from "../features/books/components/BookTable";



export default function LibraryBanner() {
  return (
    <div>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-amber-900">
                Welcome to Our Library
              </h1>
              <p className="max-w-[600px] text-amber-800 md:text-xl">
                Discover a world of knowledge with our extensive collection of books, digital resources, and community
                programs. Your gateway to learning and exploration awaits.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="bg-amber-700 hover:bg-amber-800 text-white rounded p-2 m-2 ">Browse Catalog</button>
              <button className="border-amber-700 text-amber-700 hover:bg-amber-100 bg-transparent">
                Get Library Card
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-amber-700">
              <div className="flex items-center space-x-1">
                <span className="font-semibold">50,000+</span>
                <span>Books</span>
              </div>
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold">24/7</span>
                <span>Digital Access</span>
              </div>
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold">Free</span>
                <span>Membership</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1386193712/photo/knowledge.jpg?s=612x612&w=0&k=20&c=UA_Z9Y_4dDQvh3l5j21JIkyV_SSedaXrmY1HuGyWOIA="
              width={500}
              height={400}
              alt="Library bookshelf filled with books"
              className="mx-auto aspect-[5/4] overflow-hidden rounded-xl object-cover shadow-xl lg:order-last"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
    <BookTable/>
    </div>
  )
}

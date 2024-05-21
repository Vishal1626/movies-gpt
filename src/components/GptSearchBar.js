import { Search } from "lucide-react";

const GptSearchBar = () => {
  return (
    <div className="pt-[7%]  flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-3 border rounded-l-full focus:outline-none focus:ring focus:border-blue-300 col-span-10"
          // className="border rounded-l-md focus:outline-none focus:ring focus:border-blue-300 col-span-9"
          // className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 col-span-3"
        />
        <button className="flex px-4 py-3 items-center bg-blue-500 text-white rounded-r-full text-2xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 col-span-2">
          <Search color="white" className="mr-2" strokeWidth={3} size={20} />
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

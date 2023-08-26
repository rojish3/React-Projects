import React from "react";
interface IProps {
  currentPage: number;
  numPage: number;
  changePage: (value: React.SetStateAction<number>) => void;
}

const Paginate = ({ currentPage, numPage, changePage }: IProps) => {
  const arr = [];
  for (let i = 1; i <= numPage; i++) {
    arr.push(i);
  }
  return (
    <div className="flex h-auto justify-center align-bottom mb-10">
      <button disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)} className="px-4 py-3 border border-black mx-2">&larr;</button>
      {arr.map((item) => (
        <button
          value={item}
          key={item}
          className="px-4 py-3 border border-black mx-2"
          onClick={(e) => changePage(Number(e.currentTarget.value))}
        >
          {item}
        </button>
      ))}
      <button disabled={currentPage === arr.length} onClick={() => changePage(currentPage + 1)} className="px-4 py-3 border border-black mx-2">&rarr;</button>
    </div>
  );
};

export default Paginate;

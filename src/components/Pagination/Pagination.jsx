import usePagination, { DOTS } from "hooks/usePagination";
import { memo } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange = () => {},
  siblingCount = 1,
  className,
}) => {
  /*
        totalCount: nombre total de valeurs 
        currentPage: Page actuelle
        pageSize: Nombre d'élément à afficher
        onPageChange: callback lorsque la page change
        siblingCount: Nombre de voisins de la page courante
    */
  const paginationRange = usePagination({
    totalCount,
    currentPage,
    pageSize,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={`flex justify-center items-center overflow-x-auto scrollbar-hide select-none ${className}`}
    >
      <li
        className={`mr-2 ${
          currentPage === 1
            ? "text-inactive pointer-events-none"
            : "text-primary cursor-pointer"
        }`}
        onClick={onPrevious}
      >
        <MdKeyboardArrowLeft size={25} />
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="px-3 py-1 mr-2 text-primary" key={`dots${index}`}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={`p-${index}`}
            className={`px-3 py-1 rounded-[6px] cursor-pointer mr-2 ${
              pageNumber === currentPage
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={` ${
          currentPage === lastPage
            ? "text-inactive pointer-events-none"
            : "text-primary cursor-pointer"
        }`}
        onClick={onNext}
      >
        <MdKeyboardArrowRight size={25} />
      </li>
    </ul>
  );
};

export default memo(Pagination);

import "./Pagination.css";

interface IPaginationProps {
  postsPerPage: number;
  quotes: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

function Pagination({
  postsPerPage,
  quotes,
  paginate,
  currentPage,
}: IPaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(quotes / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#!"
              className={currentPage === number ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;

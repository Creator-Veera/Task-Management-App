const Pagination = ({ pageNumber, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onPrev}
        disabled={pageNumber <= 0}
        className="px-3 py-1 rounded border"
      >
        Prev
      </button>

      {/* Center Text */}
      <span className="text-lg font-medium">
        {pageNumber + 1}/{totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={pageNumber >= totalPages - 1}
        className="px-3 py-1 rounded border"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

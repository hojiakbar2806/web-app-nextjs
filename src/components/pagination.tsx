"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface YardPaginationProps {
  total: number;
  perpage: number;
}

export function YardPagination({ total, perpage }: YardPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalItems = Number(searchParams.get("limit")) || total;
  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("perpage")) || perpage;
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) pages.push(1);
      if (currentPage > 4) pages.push("...");

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) pages.push("...");
      if (currentPage < totalPages - 2) pages.push(totalPages);
    }

    if (totalPages > 5 && !pages.includes(1)) pages.unshift(1);
    if (totalPages > 5 && !pages.includes(totalPages)) pages.push(totalPages);

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center space-x-2 p-5">
      <MoveToPage
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        isForward={false}
      />
      {pageNumbers.map((page, index) => (
        <PaginationButton
          page={page as number}
          key={index}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      ))}
      <MoveToPage
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        isForward={true}
      />
    </div>
  );
}

interface MoveToPageProps {
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  isForward: boolean;
}

const MoveToPage = ({
  handlePageChange,
  currentPage,
  totalPages,
  isForward,
}: MoveToPageProps) => {
  const newPage = isForward ? currentPage + 1 : currentPage - 1;

  return (
    <button
      className="w-9 h-9 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded disabled:cursor-not-allowed"
      onClick={() => handlePageChange(newPage)}
      disabled={
        (isForward && currentPage === totalPages) ||
        (!isForward && currentPage === 1)
      }
    >
      {isForward ? ">" : "<"}
    </button>
  );
};

interface PaginationButtonProps {
  handlePageChange: (page: number) => void;
  currentPage: number;
  page: number;
}

const PaginationButton = ({
  handlePageChange,
  currentPage,
  page,
}: PaginationButtonProps) => {
  return (
    <button
      className={`w-9 h-9 rounded transition-colors duration-200 ${
        currentPage === page
          ? "bg-blue-500 text-white"
          : "hover:bg-blue-500 hover:text-white"
      }`}
      onClick={() => (String(page) === "..." ? null : handlePageChange(page))}
    >
      {page}
    </button>
  );
};

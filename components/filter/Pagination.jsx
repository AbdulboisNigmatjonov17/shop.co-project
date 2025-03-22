"use client"
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState } from "react";

const Pagination = () => {
    const totalPages = 10; 
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-5 items-center space-x-2 justify-between lg:mb-10 mb-14">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-[#0000001A] rounded-lg flex gap-2 cursor-pointer disabled:opacity-50"
            >
                <ArrowBack /> Previous
            </button>
            <div className="hidden md:flex gap-0.5">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === "number" && handlePageChange(page)}
                        className={`px-4 py-2 rounded cursor-pointer ${currentPage === page
                            ? "bg-[#0000000F]"
                            : "bg-white text-[#00000080] hover:bg-gray-200"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div className="md:hidden flex gap-0.5">
                {[1, 2, "...", 9, 10].map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === "number" && handlePageChange(page)}
                        className={`px-4 py-2 rounded cursor-pointer ${currentPage === page
                            ? "bg-[#0000000F]"
                            : "bg-white text-[#00000080] hover:bg-gray-200"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-[#0000001A] rounded-lg flex gap-2 cursor-pointer disabled:opacity-50"
            >
                Next <ArrowForward />
            </button>
        </div>
    );
};

export default Pagination;

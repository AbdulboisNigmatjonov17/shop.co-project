"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
    const pathname = usePathname(); // Faqat URL yo‘lini olish
    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    let currentPath = "";

    return (
        <div className="max-w-[1200px] mx-auto my-10">
            {pathSegments.map((segment, index) => {
                currentPath += `/${segment}`;

                return (
                    <div className="inline-block mr-2 text-black capitalize" key={index}>
                        <Link href={'/'} className="mr-3 text-black hover:text-gray-400">
                            Home
                        </Link>
                        {'>'}
                        <Link href={currentPath} className="ml-3 hover:text-gray-400 transition">
                            {segment}
                        </Link>
                        {index < pathSegments.length - 1 && <span className="mx-2"> &gt; </span>}
                    </div>
                );
            })}
        </div>
    );
}

export default Breadcrumbs;

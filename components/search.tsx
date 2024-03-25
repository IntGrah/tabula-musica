"use client";

import { handleSearch } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    return (
        <search className="absolute right-4 h-full py-1 max-sm:hidden">
            <form className="h-full" action={handleSearch}>
                <input
                    name="search"
                    className="h-full px-4 w-36 focus:w-48 text-cyan-800 bg-black/5 outline-none rounded-lg border border-transparent transition-all focus:border-gray-400 focus:bg-black/10 placeholder:text-gray-500 focus:placeholder:text-gray-600"
                    placeholder="Search articles..."
                    defaultValue={searchParams.get("q") ?? ""}
                />
            </form>
        </search>
    );
}

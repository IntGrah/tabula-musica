import { redirect } from "next/navigation";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Record<"q", string | undefined>;
}) {
    const { q } = searchParams;
    if (!q) redirect("/");
    return (
        <main>
            <div>{q}</div>
        </main>
    );
}

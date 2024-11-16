import { YardPagination } from "@/components/pagination";
import ProductList from "@/components/product-list";
import Skeleton from "@/components/skeleton";
import { Suspense } from "react";

type SearchParamsType = {
  searchParams: Record<string, string | undefined>;
};

const Home = async ({ searchParams }: SearchParamsType) => {
  const { limit, page, perpage, query } = searchParams;
  const params = new URLSearchParams({
    ...(limit && { _limit: limit.toString() }),
    ...(page && { _page: page.toString() }),
    ...(perpage && { _limit: perpage.toString() }),
    ...(query && { q: query }),
  });

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  ).then((res) => res.json());

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Suspense
        fallback={<Skeleton />}
        key={Number(page) + Number(limit) + Number(perpage)}
      >
        <ProductList data={data} />
      </Suspense>
      <YardPagination total={data.length} perpage={Number(perpage) || 10} />
    </div>
  );
};

export default Home;

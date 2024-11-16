import React from "react";
import ProcuctCard from "../components/product-card";
import { YardPagination } from "./pagination";

type ParamPropsType = {
  limit: number;
  perpage: number;
  page: number;
  query: string;
};

const ProductList = async ({ data }: { data: any[] }) => {
  return (
    <div className="grid w-full gap-x-4 gap-y-8 grid-cols-2 p-5 xl:gap-x-8">
      {data.map((item: any, i: number) => (
        <ProcuctCard key={i} {...item} />
      ))}
    </div>
  );
};

export default ProductList;

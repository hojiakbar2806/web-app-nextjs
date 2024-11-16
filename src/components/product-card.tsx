import React from "react";
import { Button } from "./ui/button";

const ProcuctCard = (item: any): JSX.Element => {
  return (
    <div className="parent w-full h-auto transition-all duration-1000 flex flex-col align-center p-[2%] border rounded-xl">
      <figure className="aspect-video overflow-hidden rounded-lg bg-slate-400">
        <img width="100%" height="100%" src="" alt="" />
      </figure>
      <div className="opacity-1 transition-all duration-1000">
        <div className="w-full">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm">{item.body}</p>
        </div>
        <div className="flex justify-between items-center">
          <span>2000</span>
          <Button size={"sm"} className="h-8">
            Batafsil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProcuctCard;

"use client";

import { ListWithCard } from "@/types";
import { ListForm } from "./list-form";

interface ListContainerProps {
  boardId: string;
  data: ListWithCard[];
}

export const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};

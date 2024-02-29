"use client";

import { updateList } from "@/actions/update-list";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { List } from "@prisma/client";
import { error } from "console";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";

interface ListTitleFormProps {
  data: List;
}

export const ListTitleForm = ({ data }: ListTitleFormProps) => {
  const { execute } = useAction(updateList, {
    onSuccess: (data) => {
      toast.success(`List ${data.title} updated`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({
      title,
      id: data.id,
      boardId: data.boardId,
    });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form action="" ref={formRef} className="flex items-center gap-x-2">
        <FormInput
          id="title"
          ref={inputRef}
          defaultValue={title}
          onBlur={onBlur}
          className="text-sm text-neutral-700 font-bold px-[7px] py-1 h-5 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant={"transparent"}
      className="w-auto h-auto text-neutral-700 font-bold px-2 py-0 text-sm"
    >
      {title}
    </Button>
  );
};

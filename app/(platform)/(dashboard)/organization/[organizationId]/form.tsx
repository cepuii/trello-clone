"use client";

import { createBoard } from "@/actions/create-board";

import { FormInput } from "./form-input";
import { FormButton } from "./form-button";
import { useAction } from "@/hooks/useAction";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data, "SUCCESS!");
    },
    onError(error) {
      console.log(error, "Error!");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex space-x-2">
        <FormInput errors={fieldErrors} />
        <FormButton />
      </div>
    </form>
  );
};

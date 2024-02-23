"use client";

import { createBoard } from "@/actions/create-board";

import { useAction } from "@/hooks/useAction";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

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
        <FormInput id="title" label="Board Title" errors={fieldErrors} />
        <FormSubmit className="justify-self-end">Save</FormSubmit>
      </div>
    </form>
  );
};

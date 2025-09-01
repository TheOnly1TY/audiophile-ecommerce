"use client";

import { createContext, useContext, useState } from "react";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { Inputs } from "../types/Types";
const FormContext = createContext<contextFormType | null>(null);

type contextFormType = UseFormReturn<Inputs> & {
  onSubmit: SubmitHandler<Inputs>;
  isLoading: boolean;
};

function FormProviderCustom({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isConfirmationModal, setIsConfirmationModal] =
    useState<boolean>(false);
  const methods = useForm<Inputs>();
  const { reset } = methods;

  const onSubmit: SubmitHandler<Inputs> = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
      setIsConfirmationModal(true);
    }, 1000);
  };

  return (
    <FormContext.Provider
      value={{
        ...methods,
        onSubmit,
        isLoading,
        isConfirmationModal,
        setIsConfirmationModal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useCheckoutForm() {
  const context = useContext(FormContext);

  if (!context)
    throw new Error("Form Context must be within the Form Provider");

  return context;
}

export { FormProviderCustom, useCheckoutForm };

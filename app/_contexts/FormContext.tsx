"use client";

import { createContext, useContext, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { Inputs } from "@/app/_types/Types";

const FormContext = createContext<contextFormType | null>(null);

type contextFormType = UseFormReturn<Inputs> & {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isConfirmationModal: boolean;
  setIsConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function FormProviderCustom({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isConfirmationModal, setIsConfirmationModal] =
    useState<boolean>(false);
  const methods = useForm<Inputs>();
  const { reset } = methods;

  return (
    <FormContext.Provider
      value={{
        ...methods,
        reset,
        isConfirmationModal,
        setIsConfirmationModal,
        isLoading,
        setIsLoading,
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

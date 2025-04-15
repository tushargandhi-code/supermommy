"use client";

import { create } from "zustand";
import { z } from "zod";
import { toast } from "react-toastify";

const validator = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  email: z.string().trim().toLowerCase().min(1, { message: "Email is required" }).email(),
  checked: z.boolean(),
});

type TState = {
  firstName: string;
  lastName: string;
  email: string;
  checked: boolean;
  isLoading: boolean;
  submit: () => void;
};

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  checked: false,
  isLoading: false,
};

const useStore = create<TState>((set, get) => ({
  ...initial,
  submit: () => {
    if (get().isLoading) return;
    const data = validator.safeParse(useStore.getState());
    if (!data.success) {
      return toast.error(data.error.errors[0].message);
    }
    if (!data.data.checked) {
      return toast.error("You must aggree with our terms");
    }
    set({ isLoading: true });
    const id = toast.loading("Please wait");
    setTimeout(() => {
      set(initial);
      toast.update(id, {
        render: "Successfully subscribed",
        autoClose: 3000,
        isLoading: false,
        type: "success",
      });
    }, 1500);
  },
}));

export default useStore;

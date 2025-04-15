"use client";

import { create } from "zustand";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { toast } from "react-toastify";

const validator = z.object({
  name: z.string().trim().min(1, { message: "Full name is required" }),
  email: z.string().trim().toLowerCase().min(1, { message: "Email is required" }).email(),
  phoneNumber: z
    .string()
    .min(1, { message: "Phonenumber is required" })
    .refine(isValidPhoneNumber, { message: "Invalid Phonenumber" }),
  city: z.string().trim().min(1, { message: "City is required" }),
  message: z.string().trim().min(1, { message: "Message is required" }),
});

type TState = {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
  isLoading: boolean;
  submit: () => void;
  reset: () => void;
};

const initial = {
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
  message: "",
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
    set({ isLoading: true });
    const id = toast.loading("Please wait");
    setTimeout(() => {
      get().reset();
      toast.update(id, {
        render: "Submitted successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    }, 1500);
  },
  reset: () => set(initial),
}));

export default useStore;

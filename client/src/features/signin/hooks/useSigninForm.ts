import { useState } from "react";
import { api } from "@/shared/lib/axios";
import type { SigninProps } from "../types/signin.types";

export default function useSigninForm() {
  const [formData, setFormData] = useState<SigninProps>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", formData);
      console.log(response.data);
    } catch (error) {
      console.error("failed to sign in", error);
      alert("sign in failed");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

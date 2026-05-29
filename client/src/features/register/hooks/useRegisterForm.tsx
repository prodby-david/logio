import { useState } from "react";
import { api } from "@/shared/lib/axios";
import type { RegisterProps } from "../types/register.types";

export default function useRegisterForm() {
  const [formData, setFormData] = useState<RegisterProps>({
    name: "",
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
      const response = await api.post("/register", formData);

      console.log(response.data);
    } catch (error) {
      console.error("failed to register", error);
      alert("register failed");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

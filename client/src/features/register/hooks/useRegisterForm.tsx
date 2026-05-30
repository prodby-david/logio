import { useState } from "react";
import { api } from "@/shared/lib/axios";
import type { RegisterProps } from "../types/register.types";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { capitalize } from "@/shared/utils/capitalize";

export default function useRegisterForm() {
  const [formData, setFormData] = useState<RegisterProps>({
    name: "",
    email: "",
    password: "",
  });
  useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFormData((prev) => ({
        ...prev,
        [name]: capitalize(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const registerPromise = api.post("/register", formData);

    await toast.promise(registerPromise, {
      loading: "Registering...",

      success: (res) => {
        setFormData({
          name: "",
          email: "",
          password: "",
        });

        setTimeout(() => {
          toast.dismiss();
          navigate("/signin");
        }, 1000);

        setIsLoading(false);

        return res.data.message || "Registration successful";
      },

      error: (error) =>
        axios.isAxiosError(error)
          ? error.response?.data?.message
          : "Registration failed",
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
  };
}

import { useState } from "react";
import type { ContactInquiry } from "../types/contacts.types";

export default function useContactsForm() {
  const [formData, setFormData] = useState<ContactInquiry>({
    organization: "",
    contactName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      organization: "",
      contactName: "",
      email: "",
      message: "",
    });
  };

  return {
    formData,
    isSubmitted,
    handleChange,
    handleSubmit,
    setIsSubmitted,
  };
}

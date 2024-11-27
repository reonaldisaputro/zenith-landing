"use client";
import { useTranslations } from "next-intl";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string({ required_error: "Value is required" })
    .min(2, "Must be valid name"),
  phone_number: z
    .string({ required_error: "Phone number is required" })
    .regex(/^[+]?\d+(-\d+)*$/, "Invalid phone number"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  message: z
    .string({ required_error: "Value is required" })
    .min(10, "Message min 10 character"),
});

export default function ContactForm({ baseUrl }) {
  const { toast } = useToast();

  const t = useTranslations("Footer");
  const [isLoading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  async function onSubmit(value) {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", value.name);
      formData.append("email", value.email);
      formData.append("phone_number", value.phone_number);
      formData.append("message", value.message);

      const response = await fetch(`${baseUrl}/api/contact-us`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw await response.json();

      toast({
        title: 'Success',
        description: 'Success send message'
      });
    } catch (error) {
      if (error.meta?.messages?.[0]) {
        toast({
          title: error.meta.messages[0],
          variant: "destructive",
        });
        return;
      }

      if (error.meta?.validations) {
        Object.keys(error.meta.validations).forEach((key) => {
          form.setError(key, {
            type: "server",
            message: error.meta.validations[key][0],
          });
        });
        return
      }

      toast({
        title: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h5 className="mb-[30px] block text-secondary">{t("form.title")}</h5>
      <Form {...form}>
        <form
          className="flex flex-col gap-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={t("form.name")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("form.email")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder={t("form.telephone")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="relative justify-start pr-20 md:pr-[118px]"
            size="lg"
            loading={isLoading}
          >
            {t("form.button")}
            <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black">
              <Image
                src="/icon-buttery-white-arrow-right.svg"
                alt="icon-buttery-white-arrow-right"
                width="34"
                height="28"
              />
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
}

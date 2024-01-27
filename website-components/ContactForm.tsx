"use client";

import React, { useState } from "react";
import Title from "@/website-components/ui/Title";
import SubTitle from "@/website-components/ui/SubTitle";
import Paragraph from "@/website-components/ui/Paragraph";
import Button from "@/website-components/ui/Button";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { config } from "@/constant";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"

type Inputs = {
  fullName: string;
  email: string;
  description: string;
  number: number;
  budget: string;
};

function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json())

    if(response.messageId) {
      toast({
        title: "Success",
        description: "Email send successfully!!!",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Failed",
        description: "Please try again sometime",
      })
    }

    reset();
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col md:text-center md:max-w-xl md:m-auto justify-center gap-10 py-12"
      id="contact"
    >
      <div>
        <Title title={config.contact.title} />
        <SubTitle title={config.contact.subTitle} />
        <Paragraph content={config.contact.content} />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6 flex-col md:flex-row md:justify-between">
            <div className="md:w-full">
              <input
                type="text"
                className={`border border-slate-300 w-full p-3 rounded ${
                  errors.fullName && "border-red-500 bg-red-100"
                }`}
                placeholder="Full Name"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-sm mt-1 text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="md:w-full">
              <input
                type="text"
                className={`border border-slate-300 w-full p-3 rounded ${
                  errors.email && "border-red-500 bg-red-100"
                }`}
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <span className="text-sm mt-1 text-red-500">
                  {errors.email.message && errors.email ? errors.email.message : 'This field is required'}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-6 flex-col mt-6  md:flex-row md:justify-between">
            <div className="md:w-full">
              <input
                type="text"
                className="border border-slate-300 w-full p-3 rounded"
                placeholder="Phone Number"
                {...register("number")}
              />
            </div>
            <div className="md:w-full">
              <input
                type="budget"
                className="border border-slate-300 w-full p-3 rounded"
                placeholder="Budget"
                {...register("budget")}
              />
            </div>
          </div>
          <div className="mt-6">
            <textarea
              rows={6}
              className={`border border-slate-300 w-full p-3 rounded ${
                errors.description && "border-red-500 bg-red-100"
              }`}
              placeholder="Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-sm mt-1 text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-6">
            <Button>
              {
                loading ? (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ): (
                  <PaperPlaneIcon />
                )
              }
              <span className="ml-1">{loading ? 'Sending...' : 'Submit Message'}</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

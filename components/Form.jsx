"use client";

import React from "react";
import Image from "next/image";

import { useForm } from "react-hook-form";

import Arrow from "/public/imgs/icon-arrow.svg";

import Buttom from "./Button";

//--------------------------
function ContactForm() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    const object = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    console.log(object);
  }

  return (
    <div className="w-full ml-5 flex flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5 mx-5 "
      >
        <div className="flex flex-col justify-between space-y-2 relative">
          <div className="p-3 border-b-2  border-gray-400 flex flex-col shrink relative">
            <div className="flex">
              <input
                placeholder="Name"
                className="shrink flex-1 ml-2 placeholder-shown:font-bold placeholder:text-gray-300 py-3"
                type="text"
                id="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Can't be empty.",
                  },
                })}
              />
            </div>
            <p className=" absolute bottom-0 right-0 text-red-500">
              {errors.name?.message}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between space-y-2">
          <div className="p-3 border-b-2  border-gray-400 flex flex-col shrink relative">
            <div className="flex ">
              <input
                placeholder="Email"
                className="shrink flex-1 ml-2 placeholder-shown:font-bold placeholder:text-gray-300 py-3"
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "This address do not resemble an email !",
                  },
                  required: "Can't be empty.",
                })}
              />
            </div>
            <p className=" absolute bottom-0 right-0 text-red-500">
              {errors.email?.message}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="p-3 border-b-2  border-gray-400 flex flex-col shrink relative ">
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              {...register("message", {
                required: "Can't be empty.",
              })}
              className="shrink flex-1 ml-2 placeholder-shown:font-bold placeholder:text-gray-300 py-3"
            />
            <p className="absolute bottom-0 right-0 text-red-500 self-start">
              {errors.message?.message}
            </p>
          </div>

          <div className="self-end">
            <Buttom width="fit" ppxx="8" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

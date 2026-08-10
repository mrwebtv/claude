"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, LocationOn, Call } from "relume-icons";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  button: ButtonProps;
};

export type Contact5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact5 = (props: Contact5Props) => {
  const { tagline, heading, description, email, phone, address, button } = {
    ...Contact5Defaults,
    ...props,
  };

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      nameInput,
      emailInput,
      messageInput,
      acceptTerms,
    });
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <div className="mb-6 md:mb-8">
              <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
              <p className="text-medium">{description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex items-center gap-4">
                <Mail className="size-6 flex-none text-scheme-text" />
                <p>{email}</p>
              </div>
              <div className="flex items-center gap-4">
                <Call className="size-6 flex-none text-scheme-text" />
                <p>{phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <LocationOn className="size-6 flex-none text-scheme-text" />
                <p>{address}</p>
              </div>
            </div>
          </div>

          <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] overflow-auto"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
            </div>

            <div className="mb-3 flex items-center space-x-2 text-small md:mb-4">
              <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
              <Label htmlFor="terms" className="cursor-pointer">
                I accept the{" "}
                <a className="text-scheme-text underline" href="#">
                  Terms
                </a>
              </Label>
            </div>

            <div>
              <Button {...button}>{button.title}</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Contact5Defaults: Props = {
  tagline: "Tagline",
  heading: "Contact us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  email: "email@example.com",
  phone: "+1 (555) 000-0000",
  address: "123 Sample St, Sydney NSW 2000 AU",
  button: { title: "Submit" },
};

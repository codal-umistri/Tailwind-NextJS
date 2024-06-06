"use client"
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Additionally, we also accept payments via PayPal and bank transfers.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and standard shipping within the US takes 3-5 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping times and costs vary depending on the destination. Please refer to our shipping policy or contact customer support for more information.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. If you are not satisfied with your purchase for any reason, you may return it within 30 days of receipt for a full refund or exchange. Please note that certain items may be subject to additional return restrictions.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@example.com or by phone at 1-800-123-4567. Our support hours are Monday to Friday, 9am to 5pm EST. We strive to respond to all inquiries within 24 hours.",
  },
];



export function Qa() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frquently Asked Qutiones
        </h3>
        <h1 className="py-4 text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}

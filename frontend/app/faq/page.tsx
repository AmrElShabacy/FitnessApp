import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FaDropbox } from "react-icons/fa6";
import question from "@/lib/constants/fqaQuestion";
const page = () => {
  return (
    <section
      className="flex flex-col items-center justify-start p-12 h-screen
  w-screen bg-bg-primary space-y-4
    sm:p-10
  "
    >
      <div
        className="
      flex
      flex-row
      justify-between
      px-20
      items-end
      w-full
      sm:px-0
      sm:justify-center
      sm:items-center
    sm:gap-2
    

        "
      >
        <FaDropbox
          className="text-[3rem] text-secondary-primary
        sm:text-[2rem]

        "
        />
        <h1
          className="text-base-primary text-[2rem]
        font-normal
        sm:text-[1rem]
        "
        >
          Frequently Asked Questions ?
          <br />
          <p
            className="
          
          text-[1rem]
          sm:text-[0.8rem]
            "
          >
            can't find what you are looking for ?{" "}
            <Link
              href="/support"
              className="
            text-secondary-primary
            underline
            "
            >
              Contact Us
            </Link>
          </p>
        </h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className="
      w-full
      px-20     
      sm:px-0     
      "
      >
        {question.map((item) => (
          <AccordionItem
            value={`item-${item?.id}`}
            key={item?.id}
            className=" text-white
            border-2
            border-secondary-primary
            rounded-lg
            
            px-5
            mb-5
            "
          >
            <AccordionTrigger className="text-subheading text-left">
              <div
                className="
              flex
              flex-row
              justify-start
              items-center
              gap-5
              tex-[1.5rem]
              sm:text-[1rem]
                  "
              >
                <span
                  className="
                text-[2rem]
                  sm:text-[1.5rem]
                  
                  "
                >
                  {item.icon}
                </span>
                {item.question}
              </div>
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div
        className="
      flex
      flex-row
      justify-end
      px-20
      items-end
      w-full
      sm:px-0
      sm:justify-center
      sm:items-center
        "
      >
        <button
          className="
      bg-secondary-primary
      text-base-primary
     
      px-10
      py-2
      rounded-lg
      text-buttom
        "
        >
          <Link href="/support"> Free Trial </Link>
        </button>
      </div>
    </section>
  );
};

export default page;

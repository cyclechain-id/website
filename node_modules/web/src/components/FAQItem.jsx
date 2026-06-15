import React from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQItem({ value, question, answer }) {
  return (
    <AccordionItem value={value} className="border-b border-border">
      <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors duration-200">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

interface AccordionDataItem {
    title: string;
    text: string;
}

interface AccordionProps {
    data: AccordionDataItem[];
}

export function Accordion({ data }: AccordionProps) {
    const [curOpen, setCurOpen] = useState<number | null>(null);

    return (
        <div className="accordion">
            {data.map((el, i) => (
                <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={el.title} num={i} key={el.title}>
                    {el.text}
                </AccordionItem>
            ))}
        </div>
    );
}

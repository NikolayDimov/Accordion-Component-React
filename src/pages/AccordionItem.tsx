import { Dispatch, SetStateAction } from "react";

interface AccordionItemProps {
    num: number;
    title: string;
    text: string;
    curOpen: number | null;
    onOpen: Dispatch<SetStateAction<number | null>>;
}

export function AccordionItem({ num, title, text, curOpen, onOpen }: AccordionItemProps) {
    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>

            {isOpen && <div className="content-box">{text}</div>}
        </div>
    );
}

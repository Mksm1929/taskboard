import { useEffect, useState } from "react";
import "./Textarea.css";


type Props = {
    value: string,
    onChange: (value: string) => void,
};

export const Textarea = (props: Props) => {
    const [value, setValue] = useState(props.value);
    useEffect(() => {
        props.onChange(value);
    }, [value]);

    const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.scrollTop > 0) {
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.height = (e.currentTarget.scrollHeight - 4) + "px";
        }
    }

    return <textarea value={value} onChange={(e) => setValue(e.target.value)} className="textarea" onInput={onKeyUp} />
}

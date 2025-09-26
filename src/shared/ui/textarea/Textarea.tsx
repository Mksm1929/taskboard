import "./Textarea.css";


export const Textarea = () => {

    const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.scrollTop > 0) {
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.height = (e.currentTarget.scrollHeight - 4) + "px";
        }
    }

    return <textarea className="textarea" onInput={onKeyUp} />
}

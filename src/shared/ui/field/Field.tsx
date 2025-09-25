import type React from "react";
import "./Field.css";

type Props = {
    children: React.ReactNode;
    title: string;
}

export const Field = (props: Props) => {
    return <div>
        <div>{props.title}</div>
        <div>{props.children}</div>
    </div>
}


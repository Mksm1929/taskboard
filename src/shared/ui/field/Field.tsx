import type React from "react";
import "./Field.css";


type Props = {
    children: React.ReactNode;
    title: string;
    isRequiredField?: boolean;
}

export const Field = (props: Props) => {
    return <div className="container">
        <div>{props.title}</div>
        <div>{props.children}</div>
        {props.isRequiredField && <div className="container-required">Обязательное поле.</div>}
    </div>
}

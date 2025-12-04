import { useState, type ReactNode } from "react";

type Props = {
    type?: string;
    heading: string;
    children: ReactNode;
    closable?: boolean;
    onClose?: () => void;
};

export function Alert({
    type = "information",
    heading,
    children,
    closable,
    onClose,
}: Props) {

    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className={`alert alert-${type}`}>
            <strong>{heading}</strong>
            <div>{children}</div>

            {closable && (
                <button
                onClick={() => {
                    setVisible(false);
                    onClose?.();
                }}
                >
                Close
                </button>
            )}
            </div>
        );
    }






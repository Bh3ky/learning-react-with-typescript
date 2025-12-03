// Using state

import { useState } from 'react';

export function Alert({ type = 'information', heading, children, closable }) {
    const [visisble, setVisible] = useState(true);
    if (!visisble) {
        return null;
    }
    return (
        <div>
            <div>
                {/* here the props type is either information or warning which determines the icon in alert. */}
                <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
                    {type === 'warning' ? '⚠️' : 'ℹ️'}
                </span>
                <span>{heading}</span>
            </div>
            {closable && (
                <button aria-label="Close">
                    <span role="img" aria-label="Close">
                        ❌
                    </span>
                </button>
            )}
            <div>{children}</div>
        </div>
    );
}

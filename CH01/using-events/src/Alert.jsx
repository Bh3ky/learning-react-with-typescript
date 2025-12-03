// Using events
/* 
Note: the handleCloseClick function is inside another function Alert.
the handler needs to be inside the Alert function so that it has access
to props and state.

Also arrow function syntax can be used for event handlers.
        const handleCloseClick = () => {}
        return (
            ...
        )
*/

import { useState } from 'react';

export function Alert({ type = 'information', heading, children, closable, onClose }) {
    const [visisble, setVisible] = useState(true);
    if (!visisble) {
        return null;
    }

    function handleCloseClick() {
        setVisible(false);
        if (onClose) {
            onClose();
        }
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
                <button aria-label="Close" onClick={handleCloseClick}>
                    <span role="img" aria-label="Close">
                        ❌
                    </span>
                </button>
            )}
            <div>{children}</div>
        </div>
    );
}

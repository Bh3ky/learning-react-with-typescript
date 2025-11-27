// Using Props
// the heading determines the heading of the alert.
// children determine the content of the alert.
// Note: children prop is a special prop used for the main context of a component

// applied destructuring the props
export function Alert({ type = 'information', heading, children }) {
    return (
        <div>
            <div>
                {/* here the props type is either information or warning which determines the icon in alert. */}
                <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
                    {type === 'warning' ? '⚠️' : 'ℹ️'}
                </span>
                <span>{heading}</span>
            </div>
            <div>{children}</div>
        </div>
    );
}

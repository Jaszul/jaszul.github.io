import { useState, useEffect } from 'react';

export const AwaitHydration = (WrappedComponent) => (props) => {
    const [showChild, setShowChild] = useState(false);

    // Wait until after client-side hydration to show
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        // You can show some kind of placeholder UI here
        return null;
    }

    return (
        <WrappedComponent {...props} />
    );
};

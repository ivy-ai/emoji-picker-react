import * as React from 'react';
export default class ErrorBoundary extends React.Component<{
    children: React.ReactNode;
}, {
    hasError: boolean;
}> {
    constructor(props: {
        children: React.ReactNode;
    });
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: any): void;
    render(): number | boolean | React.ReactElement<any, string | ((props: any, deprecatedLegacyContext?: any) => React.ReactElement<any, any> | null) | (new (props: any, deprecatedLegacyContext?: any) => React.Component<any, any, any>)> | Iterable<React.ReactNode> | null | undefined;
}

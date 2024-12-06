import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { useCallback } from 'react';

export interface LinkProps {
    href: string;
    className?: string;
}

export const Link = (props: PropsWithChildren<LinkProps>) => {
    const { className, href, children } = props;

    const linkClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback((evt) => {
        evt.preventDefault();

        if (href) {
            chrome.tabs.create({ url: href });
        }
    }, [href]);

    return <a className={clsx('ml-1.5 text-blue-500 hover:underline', className)} href={href} onClick={linkClick}>{children}</a>;
};

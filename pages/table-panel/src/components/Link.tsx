import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { useCallback } from 'react';
import './link.css';
import { Tooltip } from '@univer-clipsheet-core/ui';

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

    return (
        <Tooltip
            align={{
                autoArrow: false,
            }}
            overlayClassName="max-w-[500px]"
            placement="top"
            overlay={<span className="break-all">{href}</span>}
        >
            <div>
                <a className={clsx('ml-1.5 text-blue-500 hover:underline text-clamp', className)} href={href} onClick={linkClick}>{children}</a>
            </div>
        </Tooltip>
    );
};

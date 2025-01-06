'use client';

import { Space } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AppBreadcrumbs = () => {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(part => part !== '');

    const breadcrumbs = pathParts.map((part, index) => {
        const href = `/${pathParts.slice(0, index + 1).join('/')}`;
        const displayName = part.toUpperCase().replace('-', ' ');

        return (
            <span key={href}>
                {displayName}
                {index < pathParts.length - 1 && <span className="mx-1">/</span>}
            </span>
        );
    });

    return (
        <nav className="flex items-end">
            {pathname === "/" ? <span>Aapp</span> : <Link href="/" className="text-2xl text-gray-800">Aapp</Link>}
            {pathParts.length > 0 && <Space className="mx-2 text-gray-500" />}
            <span className='text-gray-600'>{breadcrumbs}</span>
        </nav>
    );
};

export default AppBreadcrumbs;

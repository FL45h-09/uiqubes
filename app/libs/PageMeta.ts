import { usePathname } from 'next/navigation';
import { menuItems } from '@/_components/atoms/navbar/Navbar';

export function usePageMeta() {
  const pathname = usePathname();

  const isHome = pathname === '/';

  const matchedItem =
    menuItems.find(
      (item) => pathname.startsWith(item.navLink) && item.navLink !== '/'
    ) ?? menuItems.find((item) => item.navLink === pathname);

  const title = matchedItem?.pageTitle || 'Page';

  const isBrick = pathname.startsWith('/bricks/') && pathname !== '/bricks';

  const slug = pathname.split('/').filter(Boolean).pop() || '';

  return { isHome, title, isBrick, slug };
}


import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_PAGE } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, replace } = useRouter();

  useEffect(() => {
    if (pathname === PATH_PAGE.community.root) {
      replace(PATH_PAGE.community.chat);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return null;
}

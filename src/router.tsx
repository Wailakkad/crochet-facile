import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const normalizePath = (value: string): string => {
  const withoutQuery = value.split('?')[0].split('#')[0];
  const trimmed = withoutQuery.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

interface RouterValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterValue>({
  path: '/',
  navigate: () => {},
});

/**
 * Minimal history-API router (no extra dependency).
 * `initialPath` is used during static prerendering where window is unavailable.
 */
export const Router: React.FC<{
  initialPath?: string;
  children: React.ReactNode;
}> = ({ initialPath, children }) => {
  const [path, setPath] = useState(() =>
    normalizePath(
      initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/')
    )
  );

  useEffect(() => {
    const handlePop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const navigate = useCallback((to: string) => {
    const nextPath = normalizePath(to);
    if (nextPath === normalizePath(window.location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    window.history.pushState({}, '', to);

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0 });
    window.setTimeout(() => {
      root.style.scrollBehavior = previousBehavior;
    }, 0);

    setPath(nextPath);
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const usePath = (): string => useContext(RouterContext).path;
export const useNavigate = (): ((to: string) => void) =>
  useContext(RouterContext).navigate;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

/** Client-side link that still renders a real <a href> for crawlers. */
export const Link: React.FC<LinkProps> = ({ to, onClick, children, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(event);
    if (event.defaultPrevented) return;
    if (to.includes('#')) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

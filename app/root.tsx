import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import type { MetaFunction } from '@remix-run/node';
import styles from './styles/global.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
});

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function App() {
  return (
    <html lang="en" className="tabular-nums antialiased">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

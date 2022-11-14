import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { setCookie } from 'cookies-next';
import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en-US">
      <head>
        <title>Evol Dateplanner</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <RootStyleRegistry>
          <main>
            <div className="root-layout">
              {children}
            </div>
          </main>
        </RootStyleRegistry>
      </body>
    </html>
  );
}

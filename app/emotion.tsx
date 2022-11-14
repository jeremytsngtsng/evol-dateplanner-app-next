'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { useState } from 'react';
import { NotificationsProvider } from '@mantine/notifications';

export default function RootStyleRegistry({ children }: { children: React.ReactNode; }) {
  const cache = useEmotionCache();
  cache.compat = true;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(nextColorScheme);
    setCookie('color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 365 });
  }

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS
          theme={{
            colorScheme: colorScheme,
            fontFamily: 'Roboto, sans-serif',
            fontSizes: {
              xs: 10,
              sm: 12,
              md: 14,
              lg: 16,
              xl: 18,
              xxl: 20,
              xxxl: 24,
            },
            globalStyles: (theme) => {
              console.log(theme.colorScheme);
              return ({
                '*, *::before, *::after': {
                  boxSizing: 'border-box',
                },
                html: {
                  overflowY: 'scroll',
                  overscrollBehaviorY: 'none',
                  display: 'flex',
                  flexDirection: 'row',
                  minHeight: '100vh',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                },
                body: {
                  margin: 0,
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                    width: '100%',
                  },
                },

                main: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },

                '.root-layout': {
                  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                    width: '100%',
                  },
                }
              });
            },
          }}
        >
          <NotificationsProvider>
            {children}
          </NotificationsProvider>
      </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
};

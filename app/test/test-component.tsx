'use client';

import { createStyles, Select, TextInput, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useEffect } from 'react';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import { LogoBar } from '../../components/LogoBar/LogoBar';


const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export function Test() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <>
      <LogoBar links={
        [
          {
            "link": "/about",
            "label": "Features"
          },
          {
            "link": "/pricing",
            "label": "Pricing"
          },
          {
            "link": "/learn",
            "label": "Learn"
          },
          {
            "link": "/community",
            "label": "Community"
          }
        ]
      } />
      <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />

      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />

      <ColorSchemeToggle />
    </>
  );
}

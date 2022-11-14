import React from 'react';

export default function Layout({ children }: { children: React.ReactNode; }) {

  return (
    <div>
      <h1>TEST</h1>
      <div>{children}</div>
    </div>
  );
}

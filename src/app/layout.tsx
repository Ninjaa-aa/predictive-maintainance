import React from 'react';
import '@/styles/global.css';  // Make sure to import your global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">  {/* Add a light background color */}
        {children}
      </body>
    </html>
  );
}
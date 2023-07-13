import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Link href="/about">About</Link>
        {children}
      </body>
    </html>
  );
}

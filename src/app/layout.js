import './globals.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sushanth Nandeti Blog</title>
      </head>
      <body>
        <header>
          <h1>Sushanth Nandeti Blog </h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Sushanth Nandeti Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
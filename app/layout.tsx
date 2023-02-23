import "./components/config/globalStyles";
import GlobalStyles from "./components/config/globalStyles";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>RVLMOVIES</title>
      </head>
      <GlobalStyles />
      <body>{children}</body>
    </html>
  );
}

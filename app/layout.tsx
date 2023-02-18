import '../styles/globals.css'
import '../styles/utils.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
<head><title>RVL</title></head>

      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
     
      <body>
        
        {children}</body>
    </html>
  )
}

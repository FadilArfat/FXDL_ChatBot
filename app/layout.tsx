import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-800  min-h-screen'>{children}</body>
      <footer className='text-center mt-auto'>
        <h1 className='text-gray-200'>Made by <a href='https://github.com/FadilArfat' className='text-blue-300'>@FXDL</a> Powered with OpenAI</h1>
      </footer>
    </html>
  )
}

import './globals.css'
import Header from './ui/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <div className="bg-gradient-radial from-violet-200/70 to-black/50 min-h-screen">
        <Header/>
        {children}
      </div>
    </body>
  );
}

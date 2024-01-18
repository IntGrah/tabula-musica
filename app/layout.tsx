import './globals.css'
import Navigation from './ui/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <div className="text-white bg-gradient-to-b from-black from-10% via-indigo-950 via-70% to-purple-950 to-95% min-h-screen items-center justify-between">
        <Navigation></Navigation>
        {children}
      </div>
    </body>
  );
}

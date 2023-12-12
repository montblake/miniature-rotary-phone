import { Inter, Lusitana } from 'next/font/google';

// added as class in layout.tsx, used throughout
export const inter = Inter({ subsets: ['latin'] });


// added to specific files to override
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] })
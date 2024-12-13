// 'use client';

// import { usePathname } from 'next/navigation';
// import AdUnit from './AdUnit';

// export default function ConditionalAds() {
//   const pathname = usePathname();
//   const isHomePage = pathname === '/';



//   if (isHomePage) return null;

//   return (
//     <div className="container mx-auto px-4">
//       <AdUnit
//         adSlot={process.env.NEXT_PUBLIC_ADSENSE_TOP_SLOT || ''}
//         className="my-4"
//       />
//     </div>
//   );
// } 
export default function ConditionalAds() {
  return null;
}
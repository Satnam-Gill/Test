'use client'
import Link from 'next/link';
import { useState } from 'react';

export const Navbar1 = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-[#d4d5d9] p-3 px-20 '>
        <Link href='/'>
          <div className='inline-flex items-center p-2 mr-4 '>
           
            <span className='text-xl text-orange-600 font-bold uppercase tracking-wide'>
             Logo
            </span>
          </div>
        </Link>
        <button
          className='inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                Home
              </div>
            </Link>
            <Link href='/'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Services
              </div>
            </Link>
            <Link href='/'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                About us
              </div>
            </Link>
            <Link href='/'>
              <div className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Contact us
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};








// 'use client'
// // Import React and other dependencies
// import React, { useState } from 'react';
// import { useRouter } from 'next/router'; // Use useRouter from Next.js

// // import AccountHover from './UserHover/AccountHover'; // Import your components here
// // import ForBuilders from './ForBuilders/ForBuilders';

// const Navbar1: React.FC = () => {
//   const [accountHover, setAccountHover] = useState(false);
//   const [builderHover, setBuilderHover] = useState(false);
//   const [ownerHover, setOwnerHover] = useState(false);
//   const [tenantHover, setTenantHover] = useState(false);
//   const [insightsHover, setInsightsHover] = useState(false);
//   const [menuHandler, setMenuHandler] = useState(true);

// //   const router = useRouter(); // Use useRouter to get the current route

//   const OpenDialogBox = () => {
//     setAccountHover(!false);
//   };

//   const CloseDialogBox = () => {
//     setAccountHover(!true);
//   };

//   const OpenBuilderBox = () => {
//     setBuilderHover(true);
//   };

//   const CloseBuilderBox = () => {
//     setBuilderHover(false);
//   };

//   const OpenOwnerBox = () => {
//     setOwnerHover(true);
//   };

//   const CloseOwnerBox = () => {
//     setOwnerHover(false);
//   };

//   const OpenTenantBox = () => {
//     setTenantHover(true);
//   };

//   const CloseTenantBox = () => {
//     setTenantHover(false);
//   };

//   const OpenInsightBox = () => {
//     setInsightsHover(true);
//   };

//   const CloseInsightBox = () => {
//     setInsightsHover(false);
//   };

//   const OpenMenu = () => {
//     setMenuHandler(!menuHandler);
//   };

//   return (
//     <div
//       className={`${
//         router.pathname === '/' ? 'navbar-container' : 'navbar-container nav-bg'
//       }`}
//     >
//       <div className="navbar-section">
//         <div className="nav-left">
//           <p onClick={OpenMenu}>
//             <i className="fa-solid fa-bars"></i>
//           </p>

//           <div className="logo">hello</div>
//         </div>
//         <div className="nav-right">
//           <ul className={`${menuHandler ? 'ul' : 'ul ul-list'}`}>
//             <div className="nav-list">
//               <li>
//                 <a href="#">For Buyers</a>
//               </li>
//             </div>
//             <div
//               className="nav-list"
//               onMouseEnter={OpenTenantBox}
//               onMouseLeave={CloseTenantBox}
//             >
//               <li>
//                 <a href="#">For Tenants</a>
//               </li>
//               <div className={`${tenantHover ? 'nav-tenant' : 'nav-tenant nav-hide'}`}>
//                 {/* <ForBuilders /> */}
//               </div>
//             </div>
//             <div
//               className="nav-list"
//               onMouseEnter={OpenOwnerBox}
//               onMouseLeave={CloseOwnerBox}
//             >
//               <li>
//                 <a href="#">For Owners</a>
//               </li>
//               <div className={`${ownerHover ? 'nav-owner' : 'nav-owner nav-hide'}`}>
//                 {/* <ForBuilders /> */}
//               </div>
//             </div>
//             <div
//               className="nav-list"
//               onMouseEnter={OpenBuilderBox}
//               onMouseLeave={CloseBuilderBox}
//             >
//               <li>
//                 <a href="#">For Dealer/Builders</a>
//               </li>

//               <div className={`${builderHover ? 'nav-builder' : 'nav-builder nav-hide'}`}>
//                 {/* <ForBuilders /> */}
//               </div>
//             </div>
//             <div
//               className="nav-list"
//               onMouseEnter={OpenInsightBox}
//               onMouseLeave={CloseInsightBox}
//             >
//               <li>
//                 <a href="#">Insights</a>
//               </li>
//               <div className={`${insightsHover ? 'nav-insight' : 'nav-insight nav-hide'}`}>
//                 {/* <ForBuilders /> */}
//               </div>
//             </div>
//           </ul>
//           <div className="nav-btn">
//             <button onClick={() => router.push('/search/123')}>Post property</button>
//           </div>
//           <div
//             className="user-hover"
//             onMouseEnter={OpenDialogBox}
//             onMouseLeave={CloseDialogBox}
//           >
//             <div className="user-account">
//               <p>
//                 <i className="fa-solid fa-user"></i>
//               </p>
//               <span>
//                 <i className="fa-solid fa-chevron-down"></i>
//               </span>
//             </div>
//             <div className={`${accountHover ? 'user-show' : 'user-show hide'}`}>
//               {/* <AccountHover /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar1;
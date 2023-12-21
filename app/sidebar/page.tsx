'use client';
import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Products from '../component/Product';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fruits');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <Sidebar selectedCategory={selectedCategory} onSelectCategory={handleCategoryChange}  />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;

// import React from 'react';
// import Sidebar from '../component/Sidebar';
// import Products from '../component/Product';

// const Home: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = React.useState('Fruits');

//   return (
//     <div className="flex">
//       <Sidebar setSelectedCategory={setSelectedCategory} />
//       <Products selectedCategory={selectedCategory} />
//     </div>
//   );
// };

// export default Home;
















// // pages/index.tsx
// 'use client';
// import React, { useState } from 'react';
// import DynamicSidebar from '../component/Sidebar';
// import ProductSection from '../component/Product';

// const Home: React.FC = () => {
//   const [currentCategory, setCurrentCategory] = useState<string | null>(null);

//   const categories = ['Fruits', 'Vegetables']; // Add more categories as needed

//   const handleCategoryClick = (category: string) => {
//     setCurrentCategory(category);
//   };

//   return (
//     <div className="container flex">
//       <DynamicSidebar categories={categories} onCategoryClick={handleCategoryClick} />
//       <div className="main-content flex-1">
//         {categories.map((category) => (
//           <ProductSection key={category} categoryName={category} isVisible={category === currentCategory}>
//             {/* Add your products for each category */}
//             {category === 'Fruits' && (
//               <div className='text-5xl text-red-500'>
//                 <p>Apple</p>
//                 <p>Banana</p>
//               </div>
//             )}
//             {category === 'Vegetables' && (
//               <>
//                 <p>Potato</p>
//                 <p>Onion</p>
//               </>
//             )}
//             {/* Add more products as needed */}
//           </ProductSection>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

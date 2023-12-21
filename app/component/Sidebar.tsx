'use client'; 
// // components/DynamicSidebar.tsx
// import React from 'react';

// interface DynamicSidebarProps {
//   categories: string[];
//   onCategoryClick: (category: string) => void;
// }

// const DynamicSidebar: React.FC<DynamicSidebarProps> = ({ categories, onCategoryClick }) => {
//   return (
//     <aside className="sidebar">
//       <ul>
//         {categories.map((category) => (
//           <li key={category} className="category border border-black p-10 ease-in-out duration-150" onClick={() => onCategoryClick(category)}>
//             {category}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default DynamicSidebar;


import React, { useState } from 'react';
import categoriesData from '@/public/products.json';
interface Category {
  name: string;
  products: string[];
}

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className=" bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {categoriesData.categories.map((category: Category) => (
          <li
            key={category.name}
            className={`cursor-pointer ${
              category.name === selectedCategory ? 'font-bold' : ''
            }`}
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

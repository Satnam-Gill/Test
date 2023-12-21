// // components/ProductSection.tsx
// import React from 'react';

// interface ProductSectionProps {
//   categoryName: string;
//   isVisible: boolean;
//   children: React.ReactNode;
// }

// const ProductSection: React.FC<ProductSectionProps> = ({ categoryName, isVisible, children }) => {
//   return <div id={categoryName} className="product-section" style={{ display: isVisible ? 'block' : 'none' }}>{children}</div>;
// };

// export default ProductSection;

import React from 'react';
import categoriesData from '@/public/products.json';

interface Category {
  name: string;
  products: string[];
}

const Products: React.FC<{ selectedCategory: string }> = ({ selectedCategory }) => {
  const selectedCategoryData = categoriesData.categories.find(
    (category: Category) => category.name === selectedCategory
  );

  if (!selectedCategoryData) {
    return null;
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">{selectedCategory}</h2>
      <ul>
        {selectedCategoryData.products.map((product: string) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

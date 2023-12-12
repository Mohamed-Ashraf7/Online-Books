
import  { useEffect } from 'react';
const Helmet = ({ title, imageUrls }) => {
  useEffect(() => {
    if (title) {
      document.title = `Book Store - ${title}`;
    }
    if (imageUrls && Array.isArray(imageUrls)) {
      imageUrls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        link.type = 'image/webp';
        document.head.appendChild(link);
      });
    }  
  }, [title, imageUrls]);
  
  return null;
};
export default Helmet;

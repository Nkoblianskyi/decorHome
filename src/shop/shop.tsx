import { useState } from 'react';
import { Card } from "../elements/card";

interface Item {
    id: number;
    src: string;
    name: string;
    price: string;
}

export const Shop = () => {
    const items: Item[] = [
        { id: 1, src: '/image1.jpg', name: 'Cammile', price: '$65' },
        { id: 2, src: '/image2.jpg', name: 'Cammile', price: '$100' },
        { id: 3, src: '/image3.jpg', name: 'Cammile', price: '$85' },
        { id: 4, src: '/image1.jpg', name: 'Cammile', price: '$75' },
        { id: 5, src: '/image2.jpg', name: 'Cammile', price: '$90' },
        { id: 6, src: '/image3.jpg', name: 'Cammile', price: '$80' },
        { id: 7, src: '/image1.jpg', name: 'Cammile', price: '$75' },
        { id: 8, src: '/image2.jpg', name: 'Cammile', price: '$90' },
        { id: 9, src: '/image3.jpg', name: 'Cammile', price: '$80' },
        // { id: 10, src: '/image3.jpg', name: 'Cammile', price: '$80' },
        // { id: 11, src: '/image3.jpg', name: 'Cammile', price: '$80' },
        // { id: 12, src: '/image3.jpg', name: 'Cammile', price: '$80' },
    ];

    const itemsPerPage = 9; // Кількість товарів на сторінці
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="shop-list">
                {/* Відображення товарів на поточній сторінці */}
                {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            {/* Навігація між сторінками */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            )}
        </div>
    );
};

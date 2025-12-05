
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Layout';
import { useApp } from '../App';

const ProductReviewPage: React.FC = () => {
    const { id } = useParams();
    const { products } = useApp();
    const navigate = useNavigate();
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');

    const product = products.find(p => p.id === id);

    if (!product) return <div>Không tìm thấy sản phẩm</div>;

    const handleSubmit = () => {
        // Simulate submission
        navigate('/orders');
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark animate-fade-in flex flex-col">
            <Header title="Đánh giá sản phẩm" showBack />

            <div className="flex-1 p-4 space-y-6">
                {/* Product Summary */}
                <div className="flex gap-4 items-center">
                    <div className="size-16 rounded-xl bg-white dark:bg-white/5 overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex flex-col items-center justify-center py-6 border-y border-gray-100 dark:border-white/5">
                    <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wide">Chất lượng sản phẩm</p>
                    <div className="flex gap-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button 
                                key={star}
                                onClick={() => setRating(star)}
                                className="transition-transform active:scale-90"
                            >
                                <span className={`material-symbols-outlined text-4xl ${star <= rating ? 'text-yellow-400 fill-1' : 'text-gray-300 dark:text-gray-600'}`}>star</span>
                            </button>
                        ))}
                    </div>
                    <p className="mt-3 font-bold text-primary">
                        {rating === 5 ? 'Tuyệt vời' : rating === 4 ? 'Hài lòng' : rating === 3 ? 'Bình thường' : rating === 2 ? 'Không hài lòng' : 'Tệ'}
                    </p>
                </div>

                {/* Comment */}
                <div className="space-y-4">
                    <div className="relative">
                        <textarea 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Hãy chia sẻ cảm nhận của bạn về mùi hương, độ lưu hương..."
                            className="w-full h-32 p-4 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 resize-none focus:ring-primary focus:border-primary text-gray-900 dark:text-white placeholder:text-gray-400"
                        ></textarea>
                        <div className="absolute bottom-3 right-3 text-xs text-gray-400 font-medium">
                            {comment.length}/200
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="size-20 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl mb-1">add_a_photo</span>
                            <span className="text-[10px] font-bold">Thêm ảnh</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/5 pb-safe">
                <button 
                    onClick={handleSubmit}
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                >
                    Gửi đánh giá
                </button>
            </div>
        </div>
    );
};

export default ProductReviewPage;

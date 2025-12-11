
'use client';
import React, { useEffect, useRef } from 'react';

// Reusable BentoItem component
const BentoItem = ({ className, children, imageUrl }: { className?: string, children: React.ReactNode, imageUrl?: string }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const style = imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

    return (
        <div ref={itemRef} className={`bento-item ${className}`} style={style}>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = () => {
    return (
        <div className="w-full">
            <div className="w-full max-w-6xl z-10 mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">Explore Our Offerings</h1>
                <div className="bento-grid">
                    <BentoItem 
                        className="col-span-2 row-span-2 flex flex-col justify-between"
                        imageUrl="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc2NDc0MzE3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white">Real-time Analytics</h2>
                            <p className="mt-2 text-gray-300">Monitor your application's performance with up-to-the-second data streams and visualizations.</p>
                        </div>
                    </BentoItem>
                    <BentoItem imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBjb25uZWN0aW9ufGVufDB8fHx8MTc1OTc4MTUyNnww&ixlib=rb-4.1.0&q=80&w=1080">
                        <h2 className="text-xl font-bold text-white">Global CDN</h2>
                        <p className="mt-2 text-gray-300 text-sm">Deliver content at lightning speed, no matter where your users are.</p>
                    </BentoItem>
                    <BentoItem imageUrl="https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTc2NDgwODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080">
                        <h2 className="text-xl font-bold text-white">Secure Auth</h2>
                        <p className="mt-2 text-gray-300 text-sm">Enterprise-grade authentication and user management built-in.</p>
                    </BentoItem>
                    <BentoItem 
                        className="row-span-2"
                        imageUrl="https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NjQ3MzA4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    >
                        <h2 className="text-xl font-bold text-white">Automated Backups</h2>
                        <p className="mt-2 text-gray-300 text-sm">Your data is always safe with automated, redundant backups.</p>
                    </BentoItem>
                    <BentoItem imageUrl="https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxuZXR3b3JraW5nJTIwZXZlbnR8ZW58MHx8fHwxNzU5NzgxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080">
                        <h2 className="text-xl font-bold text-white">24/7 Support</h2>
                        <p className="mt-2 text-gray-300 text-sm">Our team is always here to help you with any issue.</p>
                    </BentoItem>
                    <BentoItem 
                        className="col-span-2"
                        imageUrl="https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzZXJ2ZXJsZXNzfGVufDB8fHx8MTc2NDg3NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    >
                        <h2 className="text-xl font-bold text-white">Serverless Functions</h2>
                        <p className="mt-2 text-gray-300 text-sm">Run your backend code without managing servers. Scale infinitely with ease.</p>
                    </BentoItem>
                    <BentoItem imageUrl="https://images.unsplash.com/photo-1517694712202-1428bc3cd405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbnwwfHx8fDE3NjAxOTU1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080">
                        <h2 className="text-xl font-bold text-white">CLI Tool</h2>
                        <p className="mt-2 text-gray-300 text-sm">Manage your entire infrastructure from the command line.</p>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};

"use client";

import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Camera, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const stories = [
    { id: 1, user: "Tufttex", image: "/images/course_thumb_organic_arch.png", active: true },
    { id: 2, user: "LauraDeco", image: "/images/decor_boho_chic.png", active: true },
    { id: 3, user: "BalloonGuy", image: "/images/community_post_1.png", active: false },
    { id: 4, user: "NeonArt", image: "/images/decor_neon_party.png", active: true },
    { id: 5, user: "EventsPro", image: "/images/decor_elegant_wedding.png", active: false },
];

const posts = [
    {
        id: 1,
        user: "AlexTheArtist",
        avatar: "/images/community_post_1.png",
        image: "/images/community_post_2.png",
        likes: 1240,
        caption: "¡Miren este dragón que acabo de terminar! 🐉 Usé técnicas de distorsión del curso de @AcademyPro. ¿Qué les parece el color neon?",
        comments: 45,
        time: "2h"
    },
    {
        id: 2,
        user: "PartyVibes_Official",
        avatar: "/images/decor_neon_party.png",
        image: "/images/community_post_3.png",
        likes: 856,
        caption: "Setup completo para los 15 años de Sofía. La columna neon fue la protagonista de la noche ✨ #NeonParty #Balloons",
        comments: 28,
        time: "5h"
    },
    {
        id: 3,
        user: "SarahCreations",
        avatar: "/images/decor_boho_chic.png",
        image: "/images/decor_kids_pastel.png",
        likes: 2100,
        caption: "Probando la nueva paleta pastel mate de Sempertex. ¡La textura es increíble! 🌈",
        comments: 112,
        time: "1d"
    }
];

export default function CommunityPage() {
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        if (likedPosts.includes(id)) {
            setLikedPosts(prev => prev.filter(p => p !== id));
        } else {
            setLikedPosts(prev => [...prev, id]);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] pb-24 md:pl-0"> {/* Padding bottom for mobile nav space if we had one */}

            {/* Mobile Header */}
            <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3 flex justify-between items-center md:hidden">
                <h1 className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">Social Walls</h1>
                <div className="flex space-x-4">
                    <Plus className="text-white" />
                    <MessageCircle className="text-white" />
                </div>
            </div>

            <div className="max-w-xl mx-auto pt-4 md:pt-10">

                {/* Stories Bar */}
                <div className="flex space-x-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
                    <div className="flex flex-col items-center space-y-1 min-w-[70px]">
                        <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-gray-800 flex items-center justify-center relative">
                            <Plus className="text-white" />
                            <div className="absolute bottom-0 right-0 w-5 h-5 bg-neon-cyan rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold text-black">+</div>
                        </div>
                        <span className="text-xs text-gray-400">Tu Historia</span>
                    </div>

                    {stories.map(story => (
                        <div key={story.id} className="flex flex-col items-center space-y-1 min-w-[70px] cursor-pointer">
                            <div className={`w-16 h-16 rounded-full p-[2px] ${story.active ? 'bg-gradient-to-tr from-neon-pink to-neon-yellow' : 'bg-gray-700'}`}>
                                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-black">
                                    <Image src={story.image} alt={story.user} fill className="object-cover" />
                                </div>
                            </div>
                            <span className="text-xs text-white truncate w-16 text-center">{story.user}</span>
                        </div>
                    ))}
                </div>

                {/* Feed */}
                <div className="space-y-6 mt-4">
                    {posts.map(post => (
                        <div key={post.id} className="bg-black border-y border-white/10 md:border md:rounded-2xl overflow-hidden">

                            {/* Post Header */}
                            <div className="p-3 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden relative bg-gray-700">
                                        <Image src={post.avatar} alt={post.user} fill className="object-cover" />
                                    </div>
                                    <span className="text-white font-bold text-sm">{post.user}</span>
                                </div>
                                <MoreHorizontal className="text-gray-400" size={20} />
                            </div>

                            {/* Post Image */}
                            <div className="relative aspect-[4/5] bg-gray-900 w-full">
                                <Image src={post.image} alt="Post content" fill className="object-cover" />
                            </div>

                            {/* Actions */}
                            <div className="p-3">
                                <div className="flex justify-between mb-3">
                                    <div className="flex space-x-4">
                                        <button onClick={() => toggleLike(post.id)}>
                                            <Heart
                                                size={24}
                                                className={`transition-colors ${likedPosts.includes(post.id) ? 'fill-neon-pink text-neon-pink' : 'text-white hover:text-gray-300'}`}
                                            />
                                        </button>
                                        <MessageCircle size={24} className="text-white hover:text-gray-300 transform -rotate-90" />
                                        <Send size={24} className="text-white hover:text-gray-300 transform -rotate-12" />
                                    </div>
                                    <Bookmark size={24} className="text-white hover:text-gray-300" />
                                </div>

                                <div className="text-white font-bold text-sm mb-1">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)} Me gusta</div>

                                <div className="text-sm text-gray-300 mb-2">
                                    <span className="font-bold text-white mr-2">{post.user}</span>
                                    {post.caption}
                                </div>

                                <div className="text-gray-500 text-sm cursor-pointer">Ver los {post.comments} comentarios</div>
                                <div className="text-gray-600 text-[10px] uppercase mt-1">{post.time}</div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Floating Action Button for Mobile */}
                <button className="fixed bottom-24 right-4 md:hidden w-14 h-14 bg-gradient-to-tr from-neon-pink to-neon-purple rounded-full flex items-center justify-center shadow-[0_0_20px_var(--neon-pink)] z-50">
                    <Camera className="text-white" />
                </button>

            </div>
        </div>
    );
}

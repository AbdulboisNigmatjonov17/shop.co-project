"use client";
import { db } from "@/firebase";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { KeyboardArrowDown, Tune } from "@mui/icons-material";

export default function Comment() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [showInput, setShowInput] = useState(false)

    // 🔹 Firestore’dan commentlarni real-time olish
    useEffect(() => {
        const q = query(collection(db, "comments"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedComments = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setComments(fetchedComments);
        });

        return () => unsubscribe();
    }, []);

    // 🔹 Firestore’ga yangi comment qo‘shish
    const addComment = async () => {
        if (!newComment.trim()) return;

        const newCommentData = {
            comment: newComment,
        };

        await addDoc(collection(db, "comments"), newCommentData);
        setNewComment(""); // Inputni tozalash
    };

    const handleShowInput = () => {
        setShowInput(!showInput)
    }
    return (
        <div className="mt-5 w-full">
            <div className="w-full flex justify-between">
                <h3 className="text-bold text-2xl">All Reviews <span className="text-[#00000099] font-normal text-[16px]">{`(${comments.length})`}</span></h3>
                <div className="flex gap-2.5 items-center">
                    <div className="bg-[#F0F0F0] rounded-full py-4 px-5">
                        <Tune />
                    </div>
                    <h3 className="bg-[#F0F0F0] rounded-full py-4 px-5">Latest <KeyboardArrowDown /></h3>
                    <button onClick={handleShowInput} className="border border-[#0000001A] bg-black hover:bg-white text-white hover:text-black w-[165px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition duration-300 ease-in-out">Write Review</button>
                </div>
            </div>

            {/* Yangi comment qo‘shish */}
            {
                showInput ?
                    <div className="flex gap-3 mt-3">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="border p-2 flex-1 rounded-md"
                        />
                        <button onClick={addComment} className="bg-black text-white px-4 py-2 rounded-md">
                            Send
                        </button>
                    </div>
                    : null
            }

            {/* Commentlar ro‘yxati */}
            <div className="w-full mt-5 grid grid-cols-2 gap-5">
                {(showAll ? comments : comments.slice(0, 4)).map((comment) => (
                    <CommentCard key={comment.id} text={comment} />
                ))}
            </div>

            {/* Show all / Show less tugmalari */}
            <div className="w-full flex justify-center my-5">
                {comments.length > 3 && (
                    <button onClick={() => setShowAll(!showAll)} className="border border-[#0000001A] hover:bg-black hover:text-white w-[230px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition duration-300 ease-in-out">
                        {showAll ? "Load less Reviews" : "Load More Reviews"}
                    </button>
                )}
            </div>
        </div>
    );
}

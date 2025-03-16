"use client";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { db } from "@/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import CommentCard from "../comment/CommentCard";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
};

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const q = query(collection(db, "comments"));
            const querySnapshot = await getDocs(q);
            const commentsArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(commentsArray);
        };

        getComments();
    }, []);

    return (
        <div className="w-full mx-10 mt-10 mb-32 flex flex-col gap-10 ">
            <div className="Container flex justify-start">
                <h2 className="font-bold text-5xl">OUR HAPPY CUSTOMERS</h2>
            </div>
            <Carousel
                responsive={responsive}
                infinite={true}
            >
                {comments.map((comment) => (
                    <CommentCard comment={comment} key={comment.id} />
                ))}
            </Carousel>
        </div>
    );
}

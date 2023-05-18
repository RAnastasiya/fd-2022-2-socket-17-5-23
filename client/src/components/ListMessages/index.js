import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllMessages } from "../../store/chatSlice";

const ListMessage = () => {
    const { messages, error, isFetching } = useSelector((state) => state.chat);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllMessages());
    }, [dispatch]);

    return (
        <section>
            {isFetching && <p>Loading</p>}
            {error && <p>Error!!!{error.errors.contant.message}</p>}
            {messages.length === 0 ? (
                <p>List messages is empty</p>
            ) :  (
                messages.map((message) => (
                    <article key={message._id}>{message.content} ({message.createdAt})</article>
                ))
            )}
        </section>
    )
}
export default ListMessage;
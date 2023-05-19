import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessages } from '../../store/chatSlice';

const ListMessages = () => {
  const { messages, error, isFetching } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);
  return (
    <section>
      {isFetching && <p>Loading...</p>}
      {error && <p>Error: {error.errors.content.message}</p>}
      {messages.length === 0 ? (
        <p>list messages is empty</p>
      ) : (
        messages.map((message) => (
          <article key={message._id}>
            {message.content} ({message.createdAt})
          </article>
        ))
      )}
    </section>
  );
};

export default ListMessages;

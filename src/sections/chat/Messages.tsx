import MessageItem from './MessageItem';

export default function Messages() {
  return (
    <>
      {Array.from(Array(3)).map((_, index) => (
        <MessageItem key={index} active />
      ))}
      <MessageItem active={false} />
    </>
  );
}

"use client";

export const Message = () => {
  // Only NEXT_PUBLIC_MESSAGE available here because we are in a client component
  const message = process.env.NEXT_PUBLIC_MESSAGE;

  return <p>{message}</p>;
};

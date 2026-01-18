import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <button {...props} />;
}

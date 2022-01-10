import React from "react";
import Menu from "./Menu";

type UnregisteredPageProps = {
  children: React.ReactNode;
};

export default function UnregisteredPage({ children }: UnregisteredPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Menu />
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

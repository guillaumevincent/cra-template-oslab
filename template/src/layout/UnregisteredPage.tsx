import React from "react";

type UnregisteredPageProps = {
  children: React.ReactNode;
};

export default function UnregisteredPage({ children }: UnregisteredPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

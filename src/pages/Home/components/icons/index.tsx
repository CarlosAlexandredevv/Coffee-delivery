import React from "react";

type IconsProps = {
  content: string;
  bg: string;
  icon: React.ReactNode;
};

export function Icons({ content, icon, bg }: IconsProps) {
  return (
    <div className="mr-4 flex items-center gap-3">
      <div
        className={`flex justify-center rounded-full ${bg} size-8 py-2 text-white`}
      >
        {icon}
      </div>
      <p className="whitespace-nowrap font-roboto leading-line text-base-text dark:text-zinc-200">
        {content}
      </p>
    </div>
  );
}

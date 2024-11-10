import React from 'react';

type IconsIntroProps = {
  content: string;
  bg: string;
  icon: React.ReactNode;
};

export function IconsIntro({ content, icon, bg }: IconsIntroProps) {
  return (
    <div className="flex items-center gap-3 mr-4">
      <div
        className={`flex justify-center rounded-full ${bg} size-8 py-2 text-white`}
      >
        {icon}
      </div>
      <p className="text-base-text font-roboto leading-line whitespace-nowrap dark:text-zinc-200">
        {content}
      </p>
    </div>
  );
}

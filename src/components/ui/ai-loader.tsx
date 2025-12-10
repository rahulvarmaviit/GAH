
import * as React from "react";

interface LoaderProps {
  size?: number; 
  text?: string;
}

export const AiLoader: React.FC<LoaderProps> = ({ size = 290, text = "Global Acknowledgement Hub" }) => {
  const letters = text.split("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
       <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div
        className="relative flex items-center justify-center font-sans select-none"
        style={{ width: size, height: size }}
      >
       
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-white opacity-40 animate-loaderLetter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}

        <div
          className="absolute inset-0 rounded-full animate-loaderCircle"
        ></div>
      </div>

      <style jsx>{`
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 #e9d5ff inset,
              0 12px 18px 0 #c084fc inset,
              0 36px 36px 0 #a855f7 inset,
              0 0 3px 1.2px rgba(233, 213, 255, 0.3),
              0 0 6px 1.8px rgba(192, 132, 252, 0.2);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 #c084fc inset,
              0 12px 6px 0 #a855f7 inset,
              0 24px 36px 0 #9333ea inset,
              0 0 3px 1.2px rgba(192, 132, 252, 0.3),
              0 0 6px 1.8px rgba(168, 85, 247, 0.2);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 #a855f7 inset,
              0 12px 18px 0 #9333ea inset,
              0 36px 36px 0 #6119aa inset,
              0 0 3px 1.2px rgba(168, 85, 247, 0.3),
              0 0 6px 1.8px rgba(147, 51, 234, 0.2);
          }
        }

        @keyframes loaderLetter {
          0%,
          100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        .animate-loaderCircle {
          animation: loaderCircle 5s linear infinite;
        }

        .animate-loaderLetter {
          animation: loaderLetter 3s infinite;
        }

       
        @media (prefers-color-scheme: dark) {
          .animate-loaderCircle {
            box-shadow:
              0 6px 12px 0 #e9d5ff inset,
              0 12px 18px 0 #c084fc inset,
              0 36px 36px 0 #a855f7 inset,
              0 0 3px 1.2px rgba(233, 213, 255, 0.3),
              0 0 6px 1.8px rgba(192, 132, 252, 0.2);
          }
        }
      `}</style>
    </div>
  );
};

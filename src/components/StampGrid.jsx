import React from 'react';

export default function StampGrid({ total = 10, current = 0, interactive = false, onStampClick }) {
  return (
    <div className="grid grid-cols-5 gap-2.5 sm:gap-3 p-4 bg-zinc-950/80 rounded-2xl border border-zinc-800/80">
      {Array.from({ length: total }).map((_, index) => {
        const isStamped = index < current;
        const isReward = index === total - 1;

        return (
          <button
            key={index}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onStampClick && onStampClick(index)}
            className={`aspect-square rounded-xl flex items-center justify-center font-bold text-sm border transition-all ${
              isStamped
                ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-sm shadow-amber-500/20 scale-[1.02]'
                : isReward
                ? 'border-dashed border-amber-500/40 bg-amber-500/5 text-amber-300'
                : 'border-zinc-800 bg-zinc-900/40 text-zinc-600'
            } ${interactive ? 'cursor-pointer hover:border-amber-400' : 'cursor-default'}`}
          >
            {isStamped ? '✂' : isReward ? '🎁' : index + 1}
          </button>
        );
      })}
    </div>
  );
}

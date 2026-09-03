import React from 'react';
import LeaderboardRow from './LeaderboardRow';

export default function LeaderboardTable({
  entries,
  userVotes,
  onVote
}) {
  if (!entries || entries.length === 0) {
    return (
      <div className="py-12 text-center text-zinc-400 text-sm font-medium">
        No additional entries in this category yet.
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto mb-16 divide-y divide-zinc-100">
      {entries.map((entry) => (
        <LeaderboardRow
          key={entry.id}
          entry={entry}
          hasVoted={userVotes.has(entry.id)}
          onVote={onVote}
        />
      ))}
    </section>
  );
}

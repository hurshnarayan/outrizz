import React from 'react';
import EntryCard from './EntryCard';

export default function FeaturedPodium({
  topEntries,
  userVotes,
  onVote
}) {
  if (!topEntries || topEntries.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {topEntries.map((entry) => (
          <EntryCard
            key={entry.id}
            entry={entry}
            hasVoted={userVotes.has(entry.id)}
            onVote={onVote}
          />
        ))}
      </div>
    </section>
  );
}

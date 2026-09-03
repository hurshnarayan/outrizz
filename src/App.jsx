import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPodium from './components/FeaturedPodium';
import LeaderboardTable from './components/LeaderboardTable';
import PostPaymentModal from './components/PostPaymentModal';
import AboutModal from './components/AboutModal';
import Toast from './components/Toast';
import { TODAY_ENTRIES, ALL_TIME_ENTRIES } from './data/mockEntries';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('today');
  const [activeCategory, setActiveCategory] = useState('All');

  const [todayEntries, setTodayEntries] = useState(TODAY_ENTRIES);
  const [allTimeEntries, setAllTimeEntries] = useState(ALL_TIME_ENTRIES);

  // User voting tracking (1 vote per entry, direct on card/row)
  const [userVotes, setUserVotes] = useState(() => {
    try {
      const saved = localStorage.getItem('outrizz_user_votes');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Modal states
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('outrizz_user_votes', JSON.stringify(Array.from(userVotes)));
    } catch {
      // ignore
    }
  }, [userVotes]);

  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Direct 1-click voting on the card or row (No drawer!)
  const handleVote = (entryId) => {
    if (userVotes.has(entryId)) {
      showToast('Already Voted', 'You have already used your free vote for this entry.');
      return;
    }

    const nextVotes = new Set(userVotes);
    nextVotes.add(entryId);
    setUserVotes(nextVotes);

    const updater = (list) =>
      list.map((item) => {
        if (item.id === entryId) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      });

    if (activeTab === 'today') {
      setTodayEntries((prev) => updater(prev));
    } else {
      setAllTimeEntries((prev) => updater(prev));
    }

    const currentList = activeTab === 'today' ? todayEntries : allTimeEntries;
    const target = currentList.find((e) => e.id === entryId);
    showToast('Vote Recorded! 🔥', `1 vote added for ${target?.handle || 'entry'}.`);
  };

  const handlePostSuccess = (newEntryData) => {
    const newEntry = {
      id: `today-${Date.now()}`,
      rank: todayEntries.length + 1,
      name: newEntryData.name || 'New Creator',
      handle: newEntryData.handle,
      photo: newEntryData.photo,
      caption: newEntryData.caption,
      category: 'New',
      votes: 1,
      views: 1,
      badge: null,
      postedAt: 'Just now'
    };

    setTodayEntries((prev) => [newEntry, ...prev]);
    showToast('Rizz Entry Live! 🎉', `Payment verified and your entry ${newEntry.handle} is now on the board!`);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentList = activeTab === 'today' ? todayEntries : allTimeEntries;

  const filteredEntries = useMemo(() => {
    if (activeCategory === 'All') return currentList;
    return currentList.filter((item) => item.category === activeCategory);
  }, [currentList, activeCategory]);

  // Top 3 for the cards, rest for the list
  const top3 = filteredEntries.slice(0, 3);
  const restEntries = filteredEntries.slice(3);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-red-500 selection:text-white flex flex-col font-sans">
      {/* Clean Navbar */}
      <Navbar
        onOpenPostModal={() => setIsPostModalOpen(true)}
        onOpenAboutModal={() => setIsAboutModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6">
        {/* Centered Minimal Hero: Title, Pills, Today vs All-time */}
        <Hero
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Featured Top 3 Cards Row */}
        <div id="leaderboard">
          <FeaturedPodium
            topEntries={top3}
            userVotes={userVotes}
            onVote={handleVote}
          />
        </div>

        {/* Leaderboard Numbered List (#4+) */}
        <LeaderboardTable
          entries={restEntries}
          userVotes={userVotes}
          onVote={handleVote}
        />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-100 text-center text-xs text-zinc-400 font-medium">
        © {new Date().getFullYear()} outrizz.lol • Social Leaderboard
      </footer>

      {/* Post & Payment Modal with Horizontal Sliding Animation */}
      <PostPaymentModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onSubmitSuccess={handlePostSuccess}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenPostModal={() => setIsPostModalOpen(true)}
      />

      {/* Notification Toast */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}

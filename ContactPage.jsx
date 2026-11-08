import { useState } from 'react';

function ContactPage() {
  const [category, setCategory] = useState('Joining & learning');

  const topics = [
    {
      icon: '↗',
      title: 'Joining & learning',
      description: 'Getting started, learning tracks, and participation',
    },
    {
      icon: '+',
      title: 'Collaboration',
      description: 'Community activities and shared ideas',
    },
    {
      icon: '◇',
      title: 'Speaking & sharing',
      description: 'Workshops, knowledge sharing, and mentorship',
    },
    {
      icon: '?',
      title: 'General inquiry',
      description: "Anything else you'd like to ask",
    },
  ];

  return (
    <main className="bg-white">

      {/* CONTACT HEADER */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-10">

        <p className="text-xs text-gray-500 mb-5">
          <span className="text-blue-600">●</span>
          &nbsp; CONTACT • LET'S CONNECT
        </p>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Good things start with <span className="text-blue-600">hello.</span>
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl leading-relaxed">
          A question, a collaboration, or an idea for the community?
          Tell us what's on your mind.
        </p>

        {/* TWO COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 mt-10">

          {/* LEFT COLUMN */}
          <div>

            <h2 className="text-xl font-bold text-gray-900">
              What brings you here?
            </h2>

            <p className="text-xs text-gray-500 mt-2 mb-5">
              Pick the closest topic in the form. We'll take it from there.
            </p>

            <div className="space-y-3">

              {topics.map((topic) => (
                <button
                  key={topic.title}
                  type="button"
                  onClick={() => setCategory(topic.title)}
                  className={`w-full flex items-start gap-4 text-left p-4 rounded-xl border transition ${
                    category === topic.title
                      ? 'bg-blue-50 border-blue-100'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl text-blue-600 font-bold">
                    {topic.icon}
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {topic.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      {topic.description}
                    </p>
                  </div>
                </button>
              ))}

            </div>

            {/* COMMUNITY CARD */}
            <div className="bg-amber-50 rounded-2xl p-5 mt-5">

              <p className="text-xs text-gray-500 mb-3">
                <span className="text-blue-600">●</span>
                &nbsp; STAY CURIOUS, STAY CONNECTED
              </p>

              <h3 className="text-lg font-bold text-gray-900">
                Looking for community updates?
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Follow <b>@gdgoc.ugm</b> for learning opportunities
                and what's happening in the community.
              </p>

              <a
                href="https://www.instagram.com/gdgoc.ugm/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-600 text-sm font-medium mt-3"
              >
                Find @gdgoc.ugm →
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8">

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Send us a message
              </h2>

              <span className="text-blue-600 text-2xl">↗</span>
            </div>

            <p className="text-xs text-gray-500 mt-3 mb-5">
              Fields marked * are required.
            </p>

            <form className="space-y-4">

              {/* FIRST NAME & LAST NAME */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs font-semibold mb-2">
                    First name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your first name"
                    required
                    className="w-full p-3 rounded-md border border-gray-200 text-xs outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2">
                    Last name
                  </label>

                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full p-3 rounded-md border border-gray-200 text-xs outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs font-semibold mb-2">
                  Email address *
                </label>

                <input
                  type="email"
                  placeholder="Where we can reply to you"
                  required
                  className="w-full p-3 rounded-md border border-gray-200 text-xs outline-none focus:border-blue-500"
                />
              </div>

              {/* ORGANIZATION */}
              <div>
                <label className="block text-xs font-semibold mb-2">
                  University / organization
                </label>

                <input
                  type="text"
                  placeholder="Where you study or work (optional)"
                  className="w-full p-3 rounded-md border border-gray-200 text-xs outline-none focus:border-blue-500"
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="block text-xs font-semibold mb-2">
                  Inquiry category *
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 rounded-md border border-gray-200 text-xs bg-white outline-none focus:border-blue-500"
                >
                  {topics.map((topic) => (
                    <option key={topic.title} value={topic.title}>
                      {topic.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-xs font-semibold mb-2">
                  Subject *
                </label>

                <input
                  type="text"
                  placeholder="A short introduction to your question"
                  required
                  className="w-full p-3 rounded-md border border-gray-200 text-xs outline-none focus:border-blue-500"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs font-semibold mb-2">
                  Your message *
                </label>

                <textarea
                  placeholder="Tell us a little about your question or idea..."
                  required
                  rows="5"
                  className="w-full p-3 rounded-md border border-gray-200 text-xs outline-none focus:border-blue-500 resize-none"
                />
              </div>

              {/* AGREEMENT */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />

                <p className="text-xs text-gray-500">
                  I agree that the information I share can be used
                  to respond to this inquiry.
                </p>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-3 rounded-md transition"
              >
                Send message&nbsp; →
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

export default ContactPage;
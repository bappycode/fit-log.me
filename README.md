# FitLog — Workout Library

A dark, no-nonsense gym companion built with **Next.js (App Router)**. Browse twelve lifts from the FitLog API, open any lift for full details, lock it into today's plan or save it for later, and watch your exercises, minutes and calories add up.


## Features

- **Workout library** — all workouts are fetched from the FitLog API and shown in a responsive grid (3 → 2 → 1 columns) with image, muscle-group tags, equipment, duration, calories and rating. A skeleton loader shows while data loads.

- **Workout details** (`/workouts/[id]`) — two-column layout with a large image, a 7-row key specs panel, numbered instructions and two actions: **Add to today's plan** and **Save for later**. Unknown ids show a custom 404 page.

- **Today's Plan & Saved** — managed with the Context API. The navbar **Plan** and **Saved** badges update instantly and every action shows a toast.

- **Five-lift cap** — today's plan holds at most five lifts; finishing one (**Mark as Done**) frees a slot.

- **My Plan dashboard** (`/my-plan`) — live Exercises / Minutes / Calories totals, Today's Plan / Saved tabs, **Sort By** (Duration, Calories, Rating), **Mark as Done**, remove (✕) and a friendly empty state.

- **Persistence** — the plan and saved list are stored in `localStorage`, so they survive a page refresh.

- **Fully responsive** — mobile, tablet and desktop.

## Tech stack

Next.js 16 · React 19 · Tailwind CSS v4 · react-hot-toast · lucide-react · next/font (Oswald + Inter)
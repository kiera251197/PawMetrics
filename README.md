# 🐾 PawMetrics

![PawMetrics Banner](./src/PawMetrics%20footer%20logo.png)

### Kiera Poley 251197

Find the right dog, backed by data.

## Table of Contents

- [About the Project](#about-the-project)
  - [App Description](#app-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to Install](#how-to-install)
  - [File Structure](#file-structure)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
  - [Ideation](#ideation)
  - [Figma File](#figma-file)
- [Future Implementation](#future-implementation)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Demo Video](#demo-video)
- [Conclusion](#conclusion)
- [Acknowledgements](#acknowledgements)

---

## About the Project

### App Description

PawMetrics is a data visualisation app built for fur baby lovers who want to explore and compare dog breeds beyond a simple photo and a paragraph. Instead of scrolling through walls of text, every breed's temperament, maintenance needs and life expectancy are turned into clear, glanceable charts.

The app is built around three core views:

- **Dashboard** — a daily landing page featuring a "Dog of the Week", a snapshot of that breed's social & behaviour traits, its maintenance stats and its min vs max life expectancy
- **Comparison** — select any two breeds (or hit "Select Random" for a surprise) and see them side by side: core stats, maintenance, trainability & energy and social & behaviour, each broken down into its own chart
- **Timeline** — pick a single breed and see its full trait profile plotted across one comparative line chart, making it easy to spot patterns at a glance

All breed data is pulled live from the [Dogs by API Ninjas](https://api-ninjas.com/api/dogs) endpoint via RapidAPI.

### Built With

This project is built as a client-side React single page app:

- **Frontend:** React & React Router DOM
- **UI Components:** React Bootstrap
- **Data Visualisation:** Chart.js & react-chartjs-2
- **Icons:** FontAwesome
- **Data Source:** Dogs by API Ninjas (via RapidAPI)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A [RapidAPI](https://rapidapi.com/) account subscribed to the **Dogs by API Ninjas** API, with your own API key

### How to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/pawmetrics.git
   cd pawmetrics
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your own RapidAPI key. Each fetch call currently lives inline in its component (`Dashboard.js`, `DogDropdown.js`, `RandomDogButton.js`) — replace the placeholder `x-rapidapi-key` value with your own key from RapidAPI.
4. Start the development server:
   ```bash
   npm start
   ```
5. Visit [http://localhost:3000](http://localhost:3000) in your browser.

### File Structure

```
pawmetrics/
├── public/
│   ├── index.html
│   └── manifest.json
│
└── src/
    ├── App.js
    ├── App.css
    ├── Dashboard.js
    ├── Compare.js
    ├── Timeline.js
    ├── index.js
    └── components/
        ├── Navbar.js
        ├── Footer.js
        ├── DogDropdown.js
        ├── RandomDogButton.js
        ├── PieChartDashboard.js
        ├── PolarAreaDashboard.js
        ├── LineChatDashboard.js
        ├── PieChartCompare.js
        ├── BarGraphCompare.js
        ├── PolarAreaCompare.js
        └── LineChartTimeline.js
```

---

## Features and Functionality

Users land on the Dashboard and are greeted with a hero section introducing PawMetrics and quick links into Comparison and Timeline. Below that, a "Dog of the Week" card pulls a breed image, paired with a Social & Behaviour pie chart, a Maintenance Stats polar area chart and a Min vs Max Life Expectancy line chart which are all populated straight from the API on load.

On the Comparison page, users pick a breed from a dropdown (or click _Select Random_ for a random pick) on each side of the screen. Every selection populates a full panel highlighting a main info card with life expectancy and weight/height ranges, a Maintenance pie chart (shedding, drooling, coat length & grooming), a Trainability & Energy bar chart and finally a Social & Behaviour polar area chart, so two breeds can be scanned side by side.

On the Timeline page, users select a single breed and see its traits (life expectancy, trainability, barking, playfulness and how it gets on with children and other dogs) plotted together on one comparative line chart, useful for spotting a breed's overall shape at a glance.

---

## Concept Process

### Ideation

Choosing a dog breed is usually an emotional decision made from a handful of photos and a short list of adjectives. PawMetrics reframes that decision around data by pulling structured attributes (temperament scores, maintenance needs, life expectancy) into visuals that are far quicker to compare than paragraphs of breed descriptions, without losing the fun of browsing.

### Figma File

Want to view my wireframes? [Figma Document](https://www.figma.com/design/MNwdM3xiyc5NWE8zU0yWPv/DV-200-Designs?node-id=0-1&t=AZclXYzqhNCo3AW1-0)

---

## Future Implementation

### Securing the API Key

API requests currently call RapidAPI directly from the client with the key inline. The next step is moving these calls behind a small backend and storing the key in an environment variable, so it isn't exposed in the frontend code.

### Saved Breeds / Favourites

Letting users save breeds they've looked at to either to a shortlist for later comparison or shared as a link so a session's research doesn't disappear on refresh.

### Expanded Breed List

The dropdown currently pulls from a curated list of 15 breeds. Pulling the full breed list dynamically from the API would let users search and compare far more broadly.

---

## Final Outcome

### Mockups

Mockups to be added shortly

### Demo Video

[PawMetrics Walkthrough](https://drive.google.com/file/d/1guclv9WooAtRBBnxTp3FNliekpV_B-fS/view?usp=sharing)

---

## Conclusion

PawMetrics turns breed research into something visual and comparative rather than a list of facts to read through. Having these three different chart types (pie, bar, polar area, line) to show live API data across three separate pages surfaced real challenges around conditional rendering when no breed is selected yet, keeping chart colour palettes consistent and structuring reusable chart components that could accept different data shapes across the Dashboard, Comparison and Timeline views.

## Acknowledgements

[Dogs by API Ninjas](https://api-ninjas.com/api/dogs) (via RapidAPI), Chart.js, React Bootstrap, and my lecturer, Tsungai Katsuro for guidance throughout the project.

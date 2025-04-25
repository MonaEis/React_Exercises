# Character Class Synergy Calculator

A React application built with Vite and TypeScript that calculates the synergy between two video game character classes.

## Features

- Select character classes from four different playstyles (Melee, Ranged, Magic, Support)
- Check the synergy/compatibility between selected classes
- View detailed results with percentage score and descriptive text
- Color-coded results based on synergy level
- Responsive design for all devices

## Character Classes

The app includes 12 different character classes across 4 playstyles:

- **Melee**: Barbarian, Knight, Samurai
- **Ranged**: Archer, Gunslinger, Ninja
- **Magic**: Mage, Warlock, Priest
- **Support**: Paladin, Druid, Shaman

## Synergy Rules

The synergy calculation is based on the following rules:

- Melee + Ranged: 80-100% (Perfect synergy)
- Melee + Magic: 20-40% (Poor synergy)
- Ranged + Magic: 65-85% (Good synergy)
- Support + Any: 70-90% (Great synergy)
- Same playstyle: 60-79% (Decent synergy)
- Other combinations: 41-59% (Average synergy)

## Project Structure

- `src/types.ts` - TypeScript type definitions
- `src/data/classes.ts` - Character class data
- `src/utils/synergyCalculator.ts` - Synergy calculation logic
- `src/components/` - React components
- `src/styles.css` - CSS styling

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173 (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React
- TypeScript
- Vite
- CSS

## License

This project is open source and available under the MIT License.
# Infinite Scroll Image Gallery

## Project Overview
The **Infinite Scroll Image Gallery** is a web application built with React and TypeScript that displays images from the Unsplash API using an infinite scroll feature. The images are arranged in a Masonry layout, and clicking on an image opens it in a popup modal for full-screen viewing. The gallery dynamically loads 25 images at a time, fetching more images as the user scrolls.

## Features
- **Infinite Scroll**: Loads 25 new images from Unsplash when you scroll down.
- **Masonry Layout**: Displays images in a clean and responsive grid using the `react-responsive-masonry` package.
- **Image Popup**: When an image is clicked, it opens in a full-screen popup.
- **TypeScript**: The project uses TypeScript for improved type safety and maintainability.
- **Responsiveness**: The gallery is fully responsive and adjusts to different screen sizes.

## Demo
You can view the live demo of the project [here](https://your-vercel-link-here).

## How to Run This Project Locally

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (v14 or above)
- npm or yarn

### Unsplash API Key
1. To fetch images from the Unsplash API, you need an API key. Follow [this guide](https://unsplash.com/developers) to get your API key.
2. Create a `.env` file in the root of the project and add your API key:
   ```bash
   REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key_here


You can customize the links and contact details based on your preferences. Let me know if you'd like any changes!

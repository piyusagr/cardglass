#  Card Slider

A simple and responsive vertical card slider featuring user profiles, built using HTML, CSS, and JavaScript. The project is designed to create an interactive experience with smooth animations and a clean layout for displaying profile cards.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Technology Choices and Rationale](#technology-choices-and-rationale)
- [Known Limitations/Trade-offs](#known-limitationstrade-offs)
- [Future Improvements](#future-improvements)
- [Live Demo](#live-demo)
- [Time Spent on the Project](#time-spent-on-the-project)

## Setup Instructions

To get started with this project on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/piyusgar/cardglass.git
   cd cardglass
   ```
2. **Install dependencies**:
   This project uses basic HTML, CSS, and JavaScript, so no external dependencies are required. Just open the `index.html` file in your preferred web browser.

3. **Open in browser**:
   - Double-click the `index.html` file or open it with your browser to view the card slider in action.

## Technology Choices and Rationale

- **HTML**: Used for creating the basic structure of the page and the layout of the card slider.
- **CSS**: Employed to style the cards, animations, and overall layout. Flexbox is used for layout management, and CSS animations are used to animate the cards.
- **JavaScript**: Handles the animation reset logic to make sure the card animations continue smoothly even after completing a cycle.

### Rationale:
- **CSS Animations**: For smooth transitions between card states without needing heavy JavaScript, reducing performance overhead.
- **Flexbox**: A flexible layout system that makes it easier to align and distribute the cards on different screen sizes.
- **No external libraries**: The project does not rely on third-party libraries, keeping it lightweight and easy to understand.

## Known Limitations/Trade-offs

- **Mobile Experience**: On smaller devices, the animations may be slower, as they rely on CSS animations which are dependent on the browser's performance. Testing on lower-end devices may show slight performance degradation.
- **Image Aspect Ratio**: The images used in the slider are expected to be square. Non-square images may look distorted or be cropped unexpectedly.
- **No Touch Support**: The card slider is not optimized for touch swipe gestures on mobile devices. It works solely by animation and does not allow the user to manually scroll through the cards via touch events.
- **Limited Animation Customization**: The card animation timing and transition are set statically in the CSS. Users would need to modify the CSS if they wish to change the animation behavior (e.g., duration, delay).

## Future Improvements

- **Touch and Swipe Support**: Implement touch support on mobile devices for a better user experience, allowing users to swipe through the cards.
- **Enhanced Accessibility**: Add keyboard navigation support to allow users to navigate through the cards with arrow keys or other accessibility features.
- **Dynamic Content**: Integrate with a backend to load dynamic profile information and images instead of using static data.
- **Performance Optimization**: Optimize the animations for better performance on lower-end devices, potentially using requestAnimationFrame for smoother transitions.
- **Interactive Features**: Implement features such as liking or following users directly from the cards, integrating with APIs to update user data.

## Live Demo

You can view a live demo of the project [https://cardglass.vercel.app](https://cardglass.vercel.app).


## Time Spent on the Project

- **Total time**: Approximately **6.5 hours**.
- **Task Breakdown**:
  - Research and planning: 1 hour
  - Setting up the HTML structure: 1 hour
  - Designing the layout with CSS: 2 hours
  - Implementing JavaScript animation logic: 1.5 hours
  - Testing for responsiveness and fine-tuning: 1 hours


# Voice for Change - Open Letter Forum

A platform where students can write open letters to policymakers, CEOs, and industry leaders to bring about positive change in society.

## Features

- Write and submit open letters to various leaders
- Learn from historically impactful open letters
- Connect with policymakers, CEOs, and industry leaders
- Track the impact of your letters

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/openletter-frontend.git
cd openletter-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Building for Production

To create a production build:
```bash
npm run build
```

## Technologies Used

- React
- TypeScript
- EmailJS for email functionality
- TailwindCSS for styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries, please reach out to leadership@openletter.co.in

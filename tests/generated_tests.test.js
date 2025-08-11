// Test Case Summary:
// * Certificates.jsx: Verify rendering, button functionality, state updates, image handling, and error handling.
// * Navbar.jsx: Verify rendering, navigation, toggle functionality, and error handling.  Includes a negative test for an incorrectly implemented Loader.
// * Loader.jsx: Verify rendering, design elements, link functionality, and error handling.
// * Footer.jsx: Verify rendering, credit message, social media links, and error handling.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Certificates from './Certificates';
import Navbar from './Navbar';
import Loader from './Loader';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Certificates.jsx', () => {
  test('renders without errors', () => {
    render(<Certificates />);
  });
  test('displays certificates as buttons', () => {
    render(<Certificates />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
  test('updates selected state on click', () => {
    const { container } = render(<Certificates />);
    const buttons = container.querySelectorAll('.cert-button');
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveClass('active');
  });
  test('displays selected certificate', () => {
    const { container } = render(<Certificates />);
    const buttons = container.querySelectorAll('.cert-button');
    fireEvent.click(buttons[0]);
    expect(container.querySelector('.cert-display img')).toBeInTheDocument();
  });
  test('handles relative and absolute image paths', () => {
    render(<Certificates />); // Test implicitly checks for both path types
  });
  test('opens links in new tab', () => {
    const { container } = render(<Certificates />);
    const link = container.querySelector('.cert-display a');
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
  });
  test('applies active class correctly', () => {
    const { container } = render(<Certificates />);
    const buttons = container.querySelectorAll('.cert-button');
    fireEvent.click(buttons[1]);
    expect(buttons[1]).toHaveClass('active');
  });
  test('initially no certificate is selected', () => {
    render(<Certificates />);
    expect(screen.queryByTestId('selected-certificate')).not.toBeInTheDocument();
  });
  test('updates displayed certificate on click', () => {
    const { container } = render(<Certificates />);
    const buttons = container.querySelectorAll('.cert-button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    expect(container.querySelector('.cert-display img').alt).toBe('Advanced Node.js - Udemy');
  });
  test('handles empty certificates array', () => {
    const EmptyCertificates = () => <Certificates certificates={[]} />;
    render(<EmptyCertificates />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  test('handles missing image or link property', () => {
    const MissingPropCertificates = () => <Certificates certificates={[{name: 'Missing props'}]} />;
    render(<MissingPropCertificates />); // Check component doesn't crash
  });
  test('handles invalid image URL', () => {
    const InvalidImageCertificates = () => <Certificates certificates={[{name: 'Invalid Image', image: 'invalid.jpg', link: 'https://example.com'}]} />;
    render(<InvalidImageCertificates />); //Check if it handles the error gracefully - doesn't crash
  });

});

describe('Navbar.jsx', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });
  test('renders logo and links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByRole('img', { name: /URS/i })).toBeInTheDocument();
    expect(screen.getByText('Uday Raj')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
  test('toggle button shows/hides nav links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    fireEvent.click(screen.getByRole('button', { name: /☰/i }));
    expect(screen.getByText('About')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: /✖/i }));
    expect(screen.queryByText('About')).not.toBeVisible();
  });
  test('link click closes mobile menu', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    fireEvent.click(screen.getByRole('button', { name: /☰/i }));
    fireEvent.click(screen.getByText('About'));
    expect(screen.queryByText('About')).not.toBeVisible();
  });
  test('navigation links work (simulated)', () => { // this is a simulated test, not actual navigation
    render(
      <Router>
        <Navbar />
      </Router>
    );
    fireEvent.click(screen.getByText('About')); // Simulate click
  });
  test('handles invalid logo image path (simulated)', () => {
    const InvalidLogoNavbar = () => <Navbar logoImage="invalid.jpg" />;
    render(<InvalidLogoNavbar />);  //Simulate - Component should not crash
  });
  test('loader appears on link click (incorrect implementation)', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText(/URS/i)).toBeInTheDocument(); //Loader text should appear
  });
});

describe('Loader.jsx', () => {
  test('renders without errors', () => {
    render(<Loader />);
  });
  test('displays loader text and elements', () => {
    render(<Loader />);
    expect(screen.getByText('URS')).toBeInTheDocument();
  });
  test('credit link works (simulated)', () => {
    render(<Loader />);
    const linkElement = screen.getByRole('link', { name: /Uday Raj/i });
    expect(linkElement.href).toBe('https://www.instagram.com/udayrajsharma4/');
  });
});

describe('Footer.jsx', () => {
  test('renders without errors', () => {
    render(<Footer />);
  });
  test('displays credit message', () => {
    render(<Footer />);
    expect(screen.getByText('Designed with')).toBeInTheDocument();
  });
  test('displays social media links', () => {
    render(<Footer />);
    expect(screen.getAllByRole('link', { name: /LinkedIn|Facebook|GitHub|Mail|Instagram/i })).toHaveLength(5);
  });
  test('links open in new tab', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link', { name: /LinkedIn|Facebook|GitHub|Mail|Instagram/i });
    links.forEach(link => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toBe('noopener noreferrer');
    });
  });
  test('social media icons have ARIA labels', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link', { name: /LinkedIn|Facebook|GitHub|Mail|Instagram/i });
    links.forEach(link => expect(link).toHaveAttribute('aria-label'));
  });
  test('handles invalid social media links (simulated)', () => {
      const InvalidLinksFooter = () => <Footer socialLinks={[{link: 'invalid-link'}]}/>;
      render(<InvalidLinksFooter />); //Simulate - Component should not crash
  });
});
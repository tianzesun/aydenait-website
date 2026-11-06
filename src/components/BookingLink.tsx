import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "../data/booking";

// "Book a consultation" button: opens Calendly in a new tab once BOOKING_URL is set, otherwise goes to /contact
const BookingLink = ({ className, arrow = false, children }: { className: string; arrow?: boolean; children: ReactNode }) =>
  BOOKING_URL ? (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens Calendly in a new tab)</span>
    </a>
  ) : (
    <Link to="/contact" className={className}>
      {children}
      {arrow && <> <span aria-hidden="true">→</span></>}
    </Link>
  );

export default BookingLink;

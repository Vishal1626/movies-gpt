import { useState, useEffect } from "react";

export default function NotificationPopup({ NotificationText }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <div
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-yellow-900 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition-opacity duration-500 z-50`}
      >
        <span className="font-bold">⚠</span>
        <span className="font-bold">{NotificationText}</span>
      </div>
    )
  );
}

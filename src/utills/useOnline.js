import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    const handleonline = () => {
      window.addEventListener("online", () => {
        setOnline(true);
      });
    };
    const handleoffline = () => {
      window.addEventListener("offline", () => {
        setOnline(false);
      });
    };
    return () => {
      window.removeEventListener("online", handleonline);
      window.removeEventListener("offline", handleoffline);
    };
  }, []);

  return isOnline;
};
export default useOnline;

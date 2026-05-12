import { useState } from "react";
import { SearchCheck, Globe } from "lucide-react";

import Button from "../Button";
import Input from "../../Input";
import ThreeIcon from "../ThreeIcon";

function InputUrl({ onScan, loading }) {

  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  // URL VALIDATION
  const validateUrl = (value) => {

    const pattern =
      /^(https?:\/\/)?(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|localhost)(:\d+)?(\/.*)?$/;

    return pattern.test(value);
  };

  const handleSubmit = () => {

    // EMPTY VALIDATION
    if (!url.trim()) {

      setError("Website URL is required");

      return;
    }

    let formattedUrl = url.trim();

    // VALIDATE URL
    const isValidUrl = validateUrl(formattedUrl);

    if (!isValidUrl) {

      setError("Please enter a valid website URL");

      return;
    }

    // AUTO ADD HTTPS
    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://")
    ) {
      formattedUrl = `https://${formattedUrl}`;
    }

    // CLEAR ERROR
    setError("");

    // START SCAN
    onScan(formattedUrl);
  };

  return (
    <>
      <ThreeIcon />

      <div className="max-w-[750px] mx-auto mb-10 relative px-2">

        <div className="input-wrap flex justify-center items-center space-x-4 mt-10 md:p-5 p-2 rounded-lg bg-white">

          {/* ICON */}
          <div className="bg-gray-100 p-3 border border-gray-300 rounded-lg hidden sm:block">
            <Globe size={28} color="#155dfc" />
          </div>

          {/* LABEL */}
          <label
            htmlFor="auditInput"
            className="sr-only"
          >
            Website URL:
          </label>

          {/* INPUT */}
          <Input
            value={url}
            onChange={(e) => {

              setUrl(e.target.value);

              // CLEAR ERROR WHILE TYPING
              if (error) {
                setError("");
              }
            }}
            placeholder="https://example.com"
          />

          {/* BUTTON */}
          <Button
            onClick={handleSubmit}
            disabled={loading}
          >

            <SearchCheck size={18} />

            <span className="pl-1">
              {loading
                ? "Scanning..."
                : "Scan Website"}
            </span>

          </Button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-600 text-[12px] mt-4 text-center absolute left-[100px] bottom-0">
            {error}
          </p>
        )}

      </div>
    </>
  );
}

export default InputUrl;
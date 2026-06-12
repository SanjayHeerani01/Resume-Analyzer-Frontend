import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Resume Analyzer" },
      { name: "description", content: "AI-powered resume analyzer with ATS scoring, job matching, and interview prep." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/resume-ai.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#05030d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
      Loading Resume Analyzer…
    </div>
  );
}

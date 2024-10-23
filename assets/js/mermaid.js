import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.3.0/dist/mermaid.esm.min.mjs";
const config = {
  startOnLoad: false,
  theme: "dark",
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
  },
};
mermaid.initialize(config);
await mermaid.run({
  querySelector: ".language-mermaid",
});

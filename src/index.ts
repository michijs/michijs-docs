import mermaid from "mermaid";
const aside = document.createElement("aside");
const ol = document.createElement("ol");
aside.appendChild(ol);

const li = document.createElement("li");
const a = document.createElement("a");
li.appendChild(a);

document.querySelectorAll("[id]").forEach((x) => {
  if (["H2", "H3"].includes(x.tagName)) {
    const liClone = li.cloneNode(true);
    const linkClone = liClone.firstChild as HTMLLinkElement;
    linkClone.href = `#${x.id}`;
    if (x.tagName === "H3") linkClone.textContent = x.textContent;
    else {
      const strong = document.createElement("strong");
      linkClone.append(strong);
      strong.textContent = x.textContent;
    }
    x.textContent = "";
    x.append(linkClone.cloneNode(true));
    ol.append(liClone);
  }
});

document.getElementsByTagName("header")[0].after(aside);

// Mermaid config
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
  },
});
await mermaid.run({
  querySelector: ".language-mermaid",
});

import mermaid from "mermaid";
const aside = document.createElement('aside');
const ol = document.createElement("ol");
aside.appendChild(ol);

const li = document.createElement("li");
ol.appendChild(li);
const a = document.createElement("a");
li.appendChild(a);

document.querySelectorAll("[id]").forEach((x) => {
  if (["H2", "H3"].includes(x.tagName)) {
    const linkClone = a.cloneNode(true) as HTMLLinkElement;
    linkClone.href = `#${x.id}`;
    linkClone.textContent = x.textContent;
    x.textContent = '';
    x.append(linkClone)
    if (x.tagName === "H3") a.textContent = x.textContent;
    else {
      const strong = document.createElement("strong");
      a.append(strong);
      strong.textContent = x.textContent;
    }
  }
});

document.getElementsByTagName('header')[0].after(aside);

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

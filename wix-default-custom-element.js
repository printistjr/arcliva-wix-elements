// Arcliva Gradient Background Custom Element (no text)

const createStyle = () => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
    wix-default-custom-element {
      display: block;
      width: 100%;
      height: 100%;
    }

    #arcliva-bg {
      width: 100%;
      height: 100%;
      background:
        linear-gradient(
          135deg,
          rgba(255,255,255,0.05) 0%,
          rgba(255,255,255,0.02) 40%,
          rgba(255,255,255,0) 70%
        ),
        linear-gradient(
          315deg,
          rgba(255,255,255,0.04) 0%,
          rgba(255,255,255,0.015) 50%,
          rgba(255,255,255,0) 80%
        ),
        linear-gradient(
          135deg,
          #1A2F31 0%,
          #223A3C 45%,
          #2F4F4A 100%
        );
      background-repeat: no-repeat;
      background-size: cover;
    }
  `;
  return styleElement;
};

const createBackground = () => {
  const bg = document.createElement("div");
  bg.id = "arcliva-bg";
  return bg;
};

class WixDefaultCustomElement extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.width = "100%";
    this.style.height = "100%";
    this.appendChild(createStyle());
    this.appendChild(createBackground());
  }
}

customElements.define("wix-default-custom-element", WixDefaultCustomElement);
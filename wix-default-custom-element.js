// Arcliva Gradient Background Custom Element (Wix-safe)

const GRADIENT = `
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
)
`;

class ArclivaBackground extends HTMLElement {
  connectedCallback() {
    // Ensure the host actually renders and can be painted
    this.style.display = "block";
    this.style.width = "100%";
    this.style.height = "100%";
    this.style.position = "relative";
    this.style.overflow = "hidden";

    // Paint the background on the host itself (most reliable in Wix)
    this.style.backgroundImage = GRADIENT;
    this.style.backgroundRepeat = "no-repeat";
    this.style.backgroundSize = "cover";

    // Also add an internal fill div (helps in some Wix layout cases)
    const bg = document.createElement("div");
    bg.style.position = "absolute";
    bg.style.inset = "0";
    bg.style.backgroundImage = GRADIENT;
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    this.appendChild(bg);
  }
}

// IMPORTANT: this string must match the Tag Name in Wix settings
customElements.define("arcliva-bg", ArclivaBackground);

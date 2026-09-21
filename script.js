const apps = [
  { name: "Animal Sounds", bundleId: "com.smartbabyapps.animalsounds", version: "2.0", minimumOS: "iOS 3.1" },
  { name: "SoundTouch", bundleId: "com.yourcompany.SoundTouch", version: "1.4", minimumOS: "iOS 3.0" },
  { name: "Tozzle", bundleId: "com.nodeflexion.Tozzle", version: "3.7", minimumOS: "iOS 3.1.3" },
  { name: "AutismXpress", bundleId: "X7WS995LSR.com.StudioEmotion.AutismXpress", version: "1.0", minimumOS: "iOS 3.1.2" },
  { name: "Lunchbox", bundleId: "com.thup.MonkeyPreschool", version: "1.4", minimumOS: "iOS 3.0" },
  { name: "Peek-a-Zoo", bundleId: "com.duckduckmoosedesign.peekazoo", version: "1.1.1", minimumOS: "iOS 3.0" },
  { name: "Michigan Nature Sounds", bundleId: "com.yourcompany.MichiganNatureSounds", version: "1.0", minimumOS: "iOS 3.0" },
  { name: "Peek-a-Zoo (CLL)", bundleId: "com.tbd.pazCLL", version: "1.0", minimumOS: "iOS 3.0" },
  { name: "Artsee", bundleId: "com.britejar.artsee", version: "1.1", minimumOS: "iOS 2.2" },
  { name: "Angry Birds", bundleId: "com.rovio.AngryBirdsHalloween", version: "1.5.3", minimumOS: "iOS 3.0" },
  { name: "Farm Flip Fun", bundleId: "lv.yapp.farmflipfun", version: "1.0", minimumOS: "iOS 3.0" },
  { name: "Farm Story", bundleId: "com.teamlava.farmstory", version: "1.2", minimumOS: "iOS 3.0" },
  { name: "Stickers", bundleId: "com.nightanddaystudios.ericcarlestickers", version: "1.0", minimumOS: "iOS 5.0" },
  { name: "Forest", bundleId: "com.nightanddaystudios.peekabooforest", version: "1.1.0", minimumOS: "iOS 3.1.3" },
  { name: "Virtuoso", bundleId: "com.peterb.virtuosopianofree", version: "3.1.2", minimumOS: "iOS 4.0" },
  { name: "ABC Tracer", bundleId: "com.appzoo.ABCTracer", version: "1.8", minimumOS: "iOS 2.2.1" },
  { name: "Peek Wild", bundleId: "com.nightanddaystudios.peekaboowild", version: "2.0.1", minimumOS: "iOS 3.1.3" },
  { name: "Peekaboo", bundleId: "com.nightanddaystudios.peekaboobarn", version: "2.0", minimumOS: "iOS 2.2" },
  { name: "Finding Sight", bundleId: "my.finding3", version: "2.1", minimumOS: "iOS 3.2" },
  { name: "ArtikPix", bundleId: "com.rinnapps.artikpix.iap", version: "1.2.4", minimumOS: "iOS 3.1" }
];

const appGrid = document.getElementById("appGrid");
const searchInput = document.getElementById("searchInput");
const appCount = document.getElementById("appCount");
const oldestMinOS = document.getElementById("oldestMinOS");
const resultsMeta = document.getElementById("resultsMeta");

const parseVersion = (value) => {
  const parts = value.replace(/[^\d.]/g, "").split(".").map(Number).filter((part) => !Number.isNaN(part));
  return parts.length ? parts : [0];
};

const minOSValue = (value) => {
  const match = value.match(/(\d+)(?:\.(\d+))?(?:\.(\d+))?/);
  if (!match) return [0, 0, 0];
  return match.slice(1, 4).map((part) => Number(part || 0));
};

const renderApps = (query = "") => {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredApps = apps.filter((app) => {
    const haystack = `${app.name} ${app.bundleId} ${app.version} ${app.minimumOS}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  appGrid.innerHTML = "";

  if (!filteredApps.length) {
    appGrid.innerHTML = '<div class="empty-state">No matching apps found.</div>';
    resultsMeta.textContent = "0 results";
    return;
  }

  filteredApps.forEach((app) => {
    const card = document.createElement("article");
    card.className = "app-card";
    card.innerHTML = `
      <div class="app-header">
        <h4 class="app-name">${app.name}</h4>
        <span class="platform-badge">iOS</span>
      </div>
      <div class="meta-list">
        <div class="meta-row">
          <span class="meta-label">Bundle ID</span>
          <span class="meta-value">${app.bundleId}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Version</span>
          <span class="meta-value">${app.version}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">Minimum OS</span>
          <span class="meta-value">${app.minimumOS}</span>
        </div>
      </div>
    `;
    appGrid.appendChild(card);
  });

  resultsMeta.textContent = `${filteredApps.length} result${filteredApps.length === 1 ? "" : "s"}`;
};

const setStats = () => {
  appCount.textContent = String(apps.length);
  const oldest = [...apps].sort((a, b) => {
    const aParts = minOSValue(a.minimumOS);
    const bParts = minOSValue(b.minimumOS);
    return aParts[0] - bParts[0] || aParts[1] - bParts[1] || aParts[2] - bParts[2];
  })[0];
  oldestMinOS.textContent = oldest ? oldest.minimumOS : "N/A";
};

searchInput.addEventListener("input", (event) => {
  renderApps(event.target.value);
});

setStats();
renderApps();

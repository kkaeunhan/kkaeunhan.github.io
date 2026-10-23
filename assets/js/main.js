/* data/content.js 의 window.SITE 내용을 페이지에 그려 넣습니다. */
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const icon = (name) => `<span class="icon">${(window.ICONS || {})[name] || ""}</span>`;

  // 로고 파일이 없을 때 보여줄 이니셜 배지
  window.logoFallback = function (img, text) {
    const div = document.createElement("div");
    div.className = "logo logo-fallback";
    div.textContent = text;
    img.replaceWith(div);
  };
  const initials = (org) => {
    const m = org.match(/\(([^)]+)\)/);
    if (m) return m[1].replace(/^HD\s*/, "HD");
    return org.split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  };

  // ----- 프로필 -----
  document.title = S.name;
  $("name").textContent = S.name;
  $("affiliations").innerHTML = S.affiliations.map((a) => `<div>${esc(a)}</div>`).join("");
  $("photo").src = S.photo;
  $("photo").alt = S.name;
  $("bio").innerHTML = S.bio.map((p) => `<p>${p}</p>`).join("");
  $("links").innerHTML = S.links
    .map((l) => {
      const ext = l.url.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"';
      return `<a class="link" href="${l.url}"${ext}>${icon(l.icon)}<span>${esc(l.label)}</span></a>`;
    })
    .join("");

  // ----- Experience -----
  $("experience").innerHTML = S.experience
    .map(
      (e) => `
      <li class="exp-item">
        <div class="logo-wrap">
          <img class="logo" src="${e.logo}" alt="${esc(e.org)}"
               onerror="logoFallback(this, '${(e.logoText || initials(e.org)).replace(/'/g, "").replace(/\n/g, "\\n")}')">
        </div>
        <div class="exp-body">
          <div class="exp-org">${esc(e.org)}</div>
          <div class="exp-role">${esc(e.role)}</div>
          <div class="exp-date">${esc(e.period)}</div>
        </div>
      </li>`
    )
    .join("");

  // ----- Publications (있을 때만 표시) -----
  if (S.publications && S.publications.length) {
    $("publications-section").hidden = false;
    $("publications").innerHTML = S.publications
      .map((p) => {
        const links = Object.entries(p.links || {})
          .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" title="${k}">${icon(k)}</a>`)
          .join("");
        return `
        <article class="pub">
          <img class="pub-img" src="${p.image}" alt="teaser ${esc(p.title)}">
          <div class="pub-body">
            <div class="pub-links">${links}</div>
            <h3>${esc(p.title)}</h3>
            <div class="pub-authors">${p.authors}</div>
            <div class="meta">${esc(p.venue)}</div>
          </div>
        </article>`;
      })
      .join("");
  }

  // ----- Education / Honors / Activities 공통 -----
  const renderItems = (items) =>
    items
      .map(
        (it) => `
      <li>
        <div class="item-title"><b>${esc(it.title)}</b>${it.date ? ` <span class="meta">· ${esc(it.date)}</span>` : ""}</div>
        ${it.details && it.details.length ? `<ul class="sub">${it.details.map((d) => `<li>${d}</li>`).join("")}</ul>` : ""}
      </li>`
      )
      .join("");

  $("education").innerHTML = renderItems(S.education);
  $("honors").innerHTML = renderItems(S.honors);
  $("activities").innerHTML = renderItems(S.activities);

  $("footer-text").textContent = `© ${new Date().getFullYear()} ${S.name}`;
})();

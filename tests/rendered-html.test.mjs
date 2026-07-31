import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Video Assessment Coach landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Video Assessment Coach<\/title>/i);
  assert.match(html, /See the moment\./);
  assert.match(html, /Shape what’s next\./);
  assert.match(html, /Video feedback, made actionable/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("includes the five GitHub organization owners and researched profiles", async () => {
  const page = await readFile(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );
  const packageJson = await readFile(
    new URL("../package.json", import.meta.url),
    "utf8",
  );

  for (const handle of [
    "haroldsoh",
    "knmnyn",
    "liuanji",
    "WenqiJiang",
    "xkxiao",
  ]) {
    assert.match(page, new RegExp(`github\\.com/${handle}`));
  }

  assert.match(page, /role="tablist"/);
  assert.match(page, /aria-controls="demo-panel"/);
  assert.match(page, /aria-controls="team-panel"/);
  assert.match(
    page,
    /src="https:\/\/jiafei1224\.github\.io\/presentation-coach\/"/,
  );
  assert.match(page, /title="Presentation Coach live demo"/);
  assert.match(packageJson, /"name": "video-assessment-coach"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

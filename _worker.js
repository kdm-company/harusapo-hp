// 公開してはいけないパスを 404 にする。静的配信は env.ASSETS に任せる。
const BLOCK = [/^\/\.git(\/|$)/, /^\/\.wrangler(\/|$)/, /^\/\.github(\/|$)/, /^\/node_modules(\/|$)/, /^\/wrangler\.(jsonc?|toml)$/, /^\/_worker\.js$/, /^\/\.(gitignore|assetsignore|env.*)$/, /\.md$/, /^\/harusapo-hp-[^/]*\//, /^\/review(\/|$)/];
export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname;
    if (BLOCK.some((re) => re.test(path))) return new Response("Not Found", { status: 404 });
    return env.ASSETS.fetch(request);
  },
};

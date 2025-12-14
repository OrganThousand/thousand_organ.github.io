// data/comic.js
window.COMICS = [
  {
    id: "work-a",
    title: "作品タイトルA",
    description: "ここにあらすじを2〜3行で書きます。世界観やフックが分かる程度で十分です。",
    worldId: "mythland",
    cover: "comic/covers/2loras_test__00038_.png",
    link: "comic/work-a/index.html",
    status: "連載中",
    episodes: 12,          // 数字（不明ならnullでもOK）
    kind: "series"         // "series" / "oneshot" とか自由
  },
  {
    id: "work-b",
    title: "作品タイトルB",
    description: "読切作品や短期連載はこちら。ジャンルや雰囲気が伝わる説明を書くと親切です。",
    worldId: "mechforest",
    cover: "comic/covers/work-b.jpg",
    link: "comic/work-b/index.html",
    status: "完結",
    kind: "oneshot"
  }
];


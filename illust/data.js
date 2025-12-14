// illust/data.js
// ここに作品を追加していく（idは一意）
window.ILLUSTS = [
    {
      id: "illust_001",
      title: "神話世界の旅人",
      year: "2025",
      date: "2025-12-14",
      caption: "神話ベースの世界を旅する人物。風と砂の匂いがする感じを目指しました。",
      image: "images/2loras_test__00037_.png",
      tags: ["fantasy", "myth", "original"],
      worldLabel: "神話世界",
      links: {
        manga: "../manga/work1/index.html",
        game: "../games/game1.html"
      }
    },
    {
      id: "illust_002",
      title: "森と機械",
      year: "2025",
      date: "2025-12-15",
      caption: "自然と機械の境目が溶ける場所。",
      image: "images/illust_02.jpg",
      tags: ["fantasy", "original"],
      worldLabel: "自然×機械",
      links: {
        manga: "../manga/work1/index.html",
        game: "../games/game1.html"
      }
    },
    {
      id: "illust_003",
      title: "風の神",
      year: "2025",
      date: "2025-12-16",
      caption: "風の気配そのものを神格化した存在。",
      image: "images/illust_03.jpg",
      tags: ["myth", "original"],
      worldLabel: "神話世界",
      links: {
        manga: "../manga/work1/index.html",
        game: "../games/game1.html"
      }
    }
  ];
  
  // 表示用のタグ名（必要なら増やす）
  window.TAG_LABELS = {
    all: "すべて",
    fantasy: "ファンタジー",
    myth: "神話",
    original: "オリジナル"
  };
  
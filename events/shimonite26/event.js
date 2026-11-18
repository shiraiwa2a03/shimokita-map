// イベント情報。timetable.js(必須)・profiles.js・images.js(任意)と同じフォルダに置く
const EVENT = {
  id: "shimonite26",
  title: "下北沢にて'26",
  date: "2026-12-05",            // 当日(JST)。この日だけ「今/次」を表示
  dateLabel: "2026.12.5 SAT",
  site: "https://www.shimonite.com",
  storageKey: "shimonite",       // 端末保存のキー(イベントごとに変える)
  comedyLabel: "芸人",            // timetable の c:1 の表示名
  imageCredit: "下北沢にて'26 公式サイト",
  // 台帳にない、このイベントだけの会場(仮設ステージなど)
  extraVenues: [
    { name: "下北線路街空き地", addr: "世田谷区北沢2丁目(下北線路街)", lat: 35.662768, lon: 139.668989, approx: true },
    { name: "下北沢駅前広場", addr: "下北沢駅前", lat: 35.6618, lon: 139.6672, approx: true },
  ],
};

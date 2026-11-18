// 会場台帳(イベントをまたいで使い回す)
// - aliases: タイムテーブルでの表記ゆれ(大文字小文字・全角半角・空白は無視して照合)
// - bldg: 同じ建物にある会場は同じ値にすると、地図上で1つのピンにまとまる
// - 座標は国土地理院ジオコーダで住所(番地)から取得
const VENUE_DB = [
  // ---- 下北沢 ----
  { id: "shimokita-shangrila", name: "下北沢シャングリラ", aliases: ["シャングリラ", "SHANGRI-LA", "下北沢SHANGRI-LA"], addr: "東京都世田谷区北沢2-4-5", lat: 35.660599, lon: 139.668442 },
  { id: "shimokita-club251", name: "下北沢CLUB251", aliases: ["CLUB251", "251", "下北沢251"], bldg: "daizawa5-29-15", addr: "東京都世田谷区代沢5-29-15", lat: 35.65826, lon: 139.66748 },
  { id: "shimokita-440", name: "下北沢440", aliases: ["440", "four forty", "下北沢440"], bldg: "daizawa5-29-15", addr: "東京都世田谷区代沢5-29-15", lat: 35.65826, lon: 139.66748 },
  { id: "shimokita-basementbar", name: "下北沢BASEMENTBAR", aliases: ["BASEMENTBAR", "BASEMENT BAR"], bldg: "daizawa5-18-1", addr: "東京都世田谷区代沢5-18-1", lat: 35.6567, lon: 139.667465 },
  { id: "shimokita-three", name: "下北沢THREE", aliases: ["THREE", "下北沢THREE"], bldg: "daizawa5-18-1", addr: "東京都世田谷区代沢5-18-1", lat: 35.6567, lon: 139.667465 },
  { id: "shimokita-liveholic", name: "下北沢LIVEHOLIC", aliases: ["LIVE HOLIC", "LIVEHOLIC"], addr: "東京都世田谷区北沢2-6-5", lat: 35.661591, lon: 139.669006 },
  { id: "shimokita-flowersloft", name: "下北沢Flowers Loft", aliases: ["Flowers Loft", "FLOWERS LOFT", "フラワーズロフト"], addr: "東京都世田谷区北沢2-24-5", lat: 35.662239, lon: 139.667572 },
  { id: "shimokita-monarecords", name: "mona records", aliases: ["mona records", "モナレコード"], addr: "東京都世田谷区北沢2-13-5", lat: 35.660446, lon: 139.667465 },
  { id: "shimokita-cream", name: "下北沢CREAM", aliases: ["CREAM"], addr: "東京都世田谷区北沢2-33-7", lat: 35.663261, lon: 139.668655 },
  { id: "shimokita-reg", name: "下北沢ReG", aliases: ["ReG", "REG"], addr: "東京都世田谷区代沢5-30-10", lat: 35.658104, lon: 139.667984 },
  { id: "shimokita-shelter", name: "下北沢SHELTER", aliases: ["SHELTER", "シェルター"], addr: "東京都世田谷区北沢2-6-10", lat: 35.661472, lon: 139.66954 },
  { id: "shimokita-spread", name: "下北沢SPREAD", aliases: ["SPREAD"], addr: "東京都世田谷区北沢2-12-6", lat: 35.660881, lon: 139.667587 },
  { id: "shimokita-livehaus", name: "下北沢LIVE HAUS", aliases: ["LIVE HAUS", "LIVEHAUS"], addr: "東京都世田谷区北沢2-14-2", lat: 35.659477, lon: 139.66745 },
  { id: "shimokita-mosaic", name: "下北沢MOSAiC", aliases: ["MOSAiC", "MOSAIC"], addr: "東京都世田谷区北沢2-2-14", lat: 35.659756, lon: 139.668625 },
  { id: "shimokita-daisybar", name: "下北沢DaisyBar", aliases: ["DaisyBar", "Daisy Bar"], bldg: "kitazawa2-2-3", addr: "東京都世田谷区北沢2-2-3", lat: 35.659512, lon: 139.668137 },
  { id: "shimokita-laguna", name: "下北沢Laguna", aliases: ["Laguna"], bldg: "kitazawa2-2-3", addr: "東京都世田谷区北沢2-2-3", lat: 35.659512, lon: 139.668137 },
  { id: "shimokita-era", name: "下北沢ERA", aliases: ["ERA"], addr: "東京都世田谷区北沢2-34-5", lat: 35.663372, lon: 139.668243 },
  { id: "shimokita-waver", name: "下北沢WAVER", aliases: ["WAVER"], addr: "東京都世田谷区北沢2-14-13", lat: 35.66013, lon: 139.667969 },
  { id: "shimokita-chikamatsu", name: "下北沢 近松", aliases: ["近松"], addr: "東京都世田谷区北沢2-14-16", lat: 35.65979, lon: 139.667725 },
  { id: "shimokita-chikamichi", name: "下北沢 近道", aliases: ["近道"], bldg: "kitazawa3-31-15", addr: "東京都世田谷区北沢3-31-15", lat: 35.664639, lon: 139.667053 },
  { id: "shimokita-otemae", name: "下北沢 おてまえ", aliases: ["おてまえ"], bldg: "kitazawa3-31-15", addr: "東京都世田谷区北沢3-31-15", lat: 35.664639, lon: 139.667053 },
];

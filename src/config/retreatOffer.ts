export type RetreatEdition = {
  id: string;
  label: string;
  sublabel: string;
};

/** Din 5 noiembrie 2026 (ora României) se afișează edițiile 2027 și prețurile +200€. */
const SWITCH_AT = Date.parse("2026-11-05T00:00:00+02:00");

const edition2026: RetreatEdition[] = [
  { id: "editia-5", label: "5-8 noiembrie 2026", sublabel: "Ediția a V-a" },
];

const editions2027: RetreatEdition[] = [
  { id: "editia-6", label: "2-5 iulie 2027", sublabel: "Ediția a VI-a" },
  { id: "editia-7", label: "1-4 octombrie 2027", sublabel: "Ediția a VII-a" },
  { id: "editia-8", label: "5-8 noiembrie 2027", sublabel: "Ediția a VIII-a" },
];

export function getRetreatOffer(now = new Date()) {
  const nextYear = now.getTime() >= SWITCH_AT;

  return {
    editions: nextYear ? editions2027 : edition2026,
    singlePrice: nextYear ? "1499€" : "1299€",
    doublePrice: nextYear ? "1299€" : "1099€",
    chooseEdition: nextYear,
  };
}

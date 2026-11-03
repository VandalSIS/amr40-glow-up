export type RetreatEdition = {
  id: string;
  label: string;
  sublabel: string;
  /** Level 1 = rezervare cameră; Level 2 = doar contact direct */
  level: 1 | 2;
};

/** Calendar 2027 — activ acum (înlocuiește 5-8 noiembrie 2026). Prețuri +200€ față de 2026. */
export const editions2027: RetreatEdition[] = [
  {
    id: "level1-martie",
    label: "25-28 martie 2027",
    sublabel: "Level 1",
    level: 1,
  },
  {
    id: "level2-mai",
    label: "9-15 mai 2027",
    sublabel: "Level 2",
    level: 2,
  },
  {
    id: "level1-octombrie",
    label: "7-10 octombrie 2027",
    sublabel: "Level 1",
    level: 1,
  },
];

export function getRetreatOffer() {
  return {
    editions: editions2027,
    singlePrice: "1499€",
    doublePrice: "1299€",
    chooseEdition: true,
  };
}

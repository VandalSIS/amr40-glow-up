export type RetreatEdition = {
  id: string;
  label: string;
  sublabel: string;
  /** Level 1 = rezervare cameră; Level 2 = doar contact direct */
  level: 1 | 2;
  singlePrice: string;
  doublePrice: string;
};

/**
 * Calendar 2027.
 * Ediția a V-a (5-8 noiembrie 2026) a trecut — scoasă din rezervări.
 * Level 1 = rezervare; Level 2 = contact direct.
 */
const editions: RetreatEdition[] = [
  {
    id: "level1-martie-2027",
    label: "25-28 martie 2027",
    sublabel: "Level 1",
    level: 1,
    singlePrice: "1499€",
    doublePrice: "1299€",
  },
  {
    id: "level2-mai-2027",
    label: "9-15 mai 2027",
    sublabel: "Level 2",
    level: 2,
    singlePrice: "1499€",
    doublePrice: "1299€",
  },
  {
    id: "level1-octombrie-2027",
    label: "7-10 octombrie 2027",
    sublabel: "Level 1",
    level: 1,
    singlePrice: "1499€",
    doublePrice: "1299€",
  },
];

export function getRetreatOffer() {
  return {
    editions,
    chooseEdition: true,
  };
}

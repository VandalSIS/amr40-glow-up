export type RetreatEdition = {
  id: string;
  label: string;
  sublabel: string;
  /** Level 1 = rezervare cameră; Level 2 = doar contact direct */
  level: 1 | 2;
  /** Prețuri pe ediție (noiembrie 2026 rămâne la vechiul tarif) */
  singlePrice: string;
  doublePrice: string;
  /** Dacă e setat, ediția dispare după această dată (inclusiv) */
  hideAfter?: string;
};

/**
 * Ediția recentă (noiembrie 2026) + calendar 2027.
 * Level 1 = rezervare; Level 2 = contact direct.
 */
const allEditions: RetreatEdition[] = [
  {
    id: "editia-5-noiembrie-2026",
    label: "5-8 noiembrie 2026",
    sublabel: "Ediția a V-a",
    level: 1,
    singlePrice: "1299€",
    doublePrice: "1099€",
    // Dispare după ultima zi a retreatului (ora României)
    hideAfter: "2026-11-08T23:59:59+02:00",
  },
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

export function getRetreatOffer(now = new Date()) {
  const editions = allEditions.filter((edition) => {
    if (!edition.hideAfter) return true;
    return now.getTime() <= Date.parse(edition.hideAfter);
  });

  return {
    editions,
    chooseEdition: true,
  };
}

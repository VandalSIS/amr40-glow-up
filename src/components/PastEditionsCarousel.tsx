import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  pastEdition1Media,
  pastEdition2Media,
  type PastEditionMedia,
} from "@/lib/pastEditionsMedia";
import { cn } from "@/lib/utils";

function pauseVideosIn(root: HTMLElement | null) {
  root?.querySelectorAll("video").forEach((el) => {
    (el as HTMLVideoElement).pause();
  });
}

function EditionCarousel({ items, editionKey }: { items: PastEditionMedia[]; editionKey: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();

  const onSelect = useCallback(() => {
    pauseVideosIn(wrapRef.current);
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  if (items.length === 0) {
    return (
      <p className="font-sans text-center text-muted-foreground py-12 px-4 max-w-xl mx-auto">
        Adaugă fișiere (poze sau video mp4/webm) în folderul{" "}
        <code className="text-sm bg-muted px-1.5 py-0.5 rounded">src/assets/{editionKey}</code>{" "}
        și fă un nou build — apar automat aici.
      </p>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative max-w-4xl mx-auto w-full px-1 sm:px-6 md:px-14"
    >
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={item.key}>
              <div
                className={cn(
                  "relative rounded-2xl overflow-hidden shadow-elegant bg-black/5",
                  "flex items-center justify-center w-full",
                  // Mobil: înălțime mare ca pozele să fie lizibile; desktop: raport 4/3
                  "h-[min(72vh,620px)] min-h-[280px] sm:min-h-0 sm:h-auto sm:aspect-[4/3] sm:max-h-[min(85vh,720px)]",
                )}
              >
                {item.kind === "image" ? (
                  <img
                    src={item.src}
                    alt={`Momente retreat — ${editionKey}, ${index + 1}`}
                    className="h-full w-full max-h-full object-contain object-center"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
                  />
                ) : (
                  <video
                    className="h-full w-full max-h-full object-contain object-center sm:max-h-[min(75vh,680px)]"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.src} />
                    Browserul tău nu redă acest video.
                  </video>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={cn(
            "left-0 sm:left-1 h-11 w-11 min-h-[44px] min-w-[44px] sm:h-8 sm:w-8 sm:min-h-8 sm:min-w-8 border-2 border-primary/25 bg-white/95 shadow-md",
            // outline: hover:text-primary-foreground + fundal alb = săgeată invizibilă — forțăm culoarea iconului
            "text-primary hover:!bg-white hover:!text-primary focus-visible:!text-primary active:!text-primary",
            "[&_svg]:text-inherit",
            "disabled:opacity-40",
          )}
        />
        <CarouselNext
          className={cn(
            "right-0 sm:right-1 h-11 w-11 min-h-[44px] min-w-[44px] sm:h-8 sm:w-8 sm:min-h-8 sm:min-w-8 border-2 border-primary/25 bg-white/95 shadow-md",
            "text-primary hover:!bg-white hover:!text-primary focus-visible:!text-primary active:!text-primary",
            "[&_svg]:text-inherit",
            "disabled:opacity-40",
          )}
        />
      </Carousel>
      <p className="text-center font-sans text-xs text-muted-foreground mt-3">
        {items.length} {items.length === 1 ? "element" : "elemente"}
      </p>
    </div>
  );
}

const PastEditionsCarousel = () => {
  const hasAny = pastEdition1Media.length > 0 || pastEdition2Media.length > 0;
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 md:py-20 bg-white border-y border-border/40" aria-labelledby="past-editions-heading">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2
            id="past-editions-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4"
          >
            Din edițiile I și II
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            Câteva imagini și clipuri de la retreaturile anterioare — aceeași experiență, același loc.
          </p>
        </div>

        <Tabs
          defaultValue="editia-1"
          className="w-full max-w-4xl mx-auto"
          onValueChange={() => pauseVideosIn(tabsRef.current)}
        >
          <div ref={tabsRef}>
          <TabsList
            className={cn(
              "grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-11",
              "bg-section-bg border border-border",
            )}
          >
            <TabsTrigger
              value="editia-1"
              className="font-accent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Ediția I
            </TabsTrigger>
            <TabsTrigger
              value="editia-2"
              className="font-accent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Ediția II
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editia-1" className="mt-0 outline-none">
            <EditionCarousel items={pastEdition1Media} editionKey="editia-1" />
          </TabsContent>
          <TabsContent value="editia-2" className="mt-0 outline-none">
            <EditionCarousel items={pastEdition2Media} editionKey="editia-2" />
          </TabsContent>
          </div>
        </Tabs>

        {!hasAny && (
          <p className="font-sans text-sm text-center text-muted-foreground mt-6">
            Folderele <code className="text-xs bg-muted px-1 rounded">editia-1</code> și{" "}
            <code className="text-xs bg-muted px-1 rounded">editia-2</code> sunt în{" "}
            <code className="text-xs bg-muted px-1 rounded">src/assets/</code>.
          </p>
        )}
      </div>
    </section>
  );
};

export default PastEditionsCarousel;

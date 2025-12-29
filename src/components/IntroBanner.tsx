const IntroBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/90 to-primary">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <p className="font-sans text-white text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-5xl mx-auto font-medium">
            Alătură-te programului de coaching one-to-many din România dedicat 
            <span className="font-bold"> EXCLUSIV femeilor</span>, 
            unde te învăț cum să îți recuperezi controlul asupra corpului, folosind exact ceea ce 
            funcționează <span className="font-bold">DUPĂ vârsta de 35 de ani</span>.
          </p>
          <p className="font-accent text-white text-2xl lg:text-3xl font-bold">
            Te învăț cum să trăiești la 40 de ani și după ca la 20!
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroBanner;

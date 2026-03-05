export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white"
      style={{
        backgroundColor: "#888C50",
        fontFamily: "Helvetica, Arial, sans-serif"
      }}
    >
      <div className="text-center space-y-10">

        <h1 className="text-4xl md:text-6xl tracking-[0.25em] font-light">
          INDEGO STUDIO
        </h1>

        <p className="text-sm tracking-[0.5em] opacity-80">
          UNDER CONSTRUCTION
        </p>

        <div className="pt-12">
          <p className="text-lg tracking-[0.4em]">
            DROP 1
          </p>

          <p className="text-sm tracking-[0.5em] opacity-80 mt-2">
            COMING SOON
          </p>
        </div>

      </div>
    </main>
  );
}
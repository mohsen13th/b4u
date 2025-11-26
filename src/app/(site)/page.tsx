import LandingPage from "@/features/landing/landingPage";

export default function Home() {
  return (
    <div className="flex justify-center pb-20 sm:pb-0">
      <main className="flex flex-col text-3xl relative ">
        <LandingPage/>
      </main>
    </div>
  );
}

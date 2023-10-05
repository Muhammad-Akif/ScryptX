import BookDemoBanner from "@/components/landingPage/BookDemoBanner";
import MainView from "@/components/landingPage/MainView";

export default function Home() {
  return (
    <main>
      <div className="h-full bg-[url('/background.svg')] flex flex-col bg-no-repeat bg-cover text-center">
        <MainView />
        <BookDemoBanner />
      </div>
    </main>
  )
}

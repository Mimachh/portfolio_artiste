import { api } from "@/utils/api";
import Layout from "./layout";
import EventsPage from "../components/events/Events";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
import Albums from "@/components/albums/Albums";
import PlayerGlobal from "@/components/PlayerGlobal";
import Blog from "@/components/blog/Blog";
import Newsletter from "@/components/Newsletter";


export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
      <Hero />
      <Player />
      <EventsPage />
      {/* <PlayerGlobal /> */}
      <Albums />
      <Blog />
      <Newsletter />
    </Layout>
  );
}

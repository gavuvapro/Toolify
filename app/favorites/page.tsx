import { FavoritesView } from "@/components/favorites-view";
import { tools } from "@/lib/data/tools";
export const metadata={title:"Favorites"};
export default function FavoritesPage(){ return <section className="mx-auto max-w-7xl px-4 py-14"><h1 className="text-4xl font-bold">Favorites</h1><p className="mb-8 mt-2 text-muted-foreground">Bookmarks are saved locally in your browser. Authentication can be connected with Clerk for cloud sync.</p><FavoritesView tools={tools}/></section> }

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex h-16 min-h-fit items-center bg-gray-700 text-white">
			<Image
				src="/oilchecker-logo.png"
				width={350}
				height={400}
				alt="Picture of the author"
				className="ml-5"
			/>
			<div className="ml-auto mr-5 flex">
				<Button variant="ghost" asChild>
					<Link href="/">Oils</Link>
				</Button>
				<Button variant="ghost" asChild>
					<Link href="/recipes">Recipes</Link>
				</Button>
			</div>
		</div>
	);
}

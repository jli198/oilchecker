import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex h-16 min-h-fit items-center bg-gray-700 text-white">
			<Link href="/" className="ml-5">
				<Image
					src="/oilchecker-logo.png"
					width={350}
					height={400}
					alt="Picture of the author"
				/>
			</Link>
			<div className="ml-auto mr-5 flex">
				<Button variant="ghost" asChild>
					<Link href="/login">Oils</Link>
				</Button>
				<Button variant="ghost" asChild>
					<Link href="/login">Recipes</Link>
				</Button>
			</div>
		</div>
	);
}

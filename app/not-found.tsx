import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link
				href="/"
				className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
			>
				Return Home
			</Link>
		</div>
	);
}

"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function CopyButton({ url }: { url: string }) {
	const { toast } = useToast();

	return (
		<Button
			variant="outline"
			onClick={() => {
				navigator.clipboard.writeText(url);
				toast({
					title: "Copied Recipe URL",
					description: url,
				});
			}}
		>
			Copy Recipe URL
		</Button>
	);
}

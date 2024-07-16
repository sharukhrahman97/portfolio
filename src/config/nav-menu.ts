import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
	infoNav: [
		{
			title: "Info",
			items: [
				{
					title: "Blog",
					href: "/blog",
					description:
						"A Markdown/MDX blog built using Content Collections.",
					disabled: true,
				},
				{
					title: "Docs",
					href: "/docs/getting-started",
					description:
						"A Markdown/MDX documentation site built using Content Collections.",
					disabled: true,
				},
			],
		},
	],
};

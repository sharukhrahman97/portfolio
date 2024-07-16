import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import cookieconsent from "@jop-software/astro-cookieconsent";
import robotsTxt from "astro-robots-txt";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	site: "https://sharukhrahman.vercel.app",
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				theme: "github-dark-dimmed",
			},
			gfm: true,
		}),
		sitemap(),
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		cookieconsent({
			guiOptions: {
				consentModal: {
					layout: "box",
					position: "bottom left",
					flipButtons: false,
					equalWeightButtons: true,
				},
				preferencesModal: {
					layout: "box",
					flipButtons: false,
					equalWeightButtons: true,
				},
			},
			categories: {
				necessary: {
					enabled: true,
					readOnly: true,
				},
				analytics: {
					enabled: true,
				},
			},
			language: {
				default: "en",
				translations: {
					en: {
						consentModal: {
							title: "This page use cookies",
							description:
								"Just basic analytics, and youll always remain anonymized!",
							acceptAllBtn: "Accept all",
						},
					},
				},
			},
		}),
		robotsTxt(),
		compress(),
	],
	adapter: vercel({
		analytics: true,
	}),
});

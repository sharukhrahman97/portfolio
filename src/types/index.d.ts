// import { User } from "@prisma/client"

export type NavItem = {
	title: string;
	href: string;
	disabled?: boolean;
};
export type MenuItem = NavItem & {
	description?: string;
	launched?: boolean;
	external?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
	title: string;
	disabled?: boolean;
	external?: boolean;
} & (
	| {
			href: string;
			items?: never;
	  }
	| {
			href?: string;
			items: MenuItem[];
	  }
);

export type SiteConfig = {
	name: string;
	description: string;
	url: string;
};

export type DocsConfig = {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
	mainNav: MainNavItem[];
};

export type NavMenuConfig = {
	infoNav: SidebarNavItem[];
};

export type DashboardConfig = {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
	name: string;
	description: string;
	stripePriceId: string;
};

export type ContactConfig = {
	title: string;
	icon: string;
	url: string;
};
export type SkillsConfig = {
	name: string;
	desc?: string;
	icon: string;
	url?: string[];
};
export type DetailConfig = {
	title: string;
	subtitle?: string;
	duration?: string;
	desc?: string;
	list?: string[];
	url?: string;
	place?:string;
};

export type HomeConfig = {
	avatar: string;
	name: string;
	title: string;
	summary: string;
	place: string;
	dob: string;
	gender: string;
	mail: string;
	url: string;
	contacts: ContactConfig[];
	backend: SkillsConfig[];
	frontend: SkillsConfig[];
	devops: SkillsConfig[];
	works: DetailConfig[];
	personalWorks: DetailConfig[];
	education: DetailConfig[];
	languages: string[];
};

// export type UserSubscriptionPlan = SubscriptionPlan &
//   Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
//     stripeCurrentPeriodEnd: number
//     isPro: boolean
//   }

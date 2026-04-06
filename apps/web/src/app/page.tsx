"use client";

import Sidebar from "@/components/sidebar";

export default function Home() {
	return (
		<div className="bg-background text-foreground p-2 md:p-4 lg:p-8 ">
			<div className="max-w-6xl mx-auto bg-card border border-border rounded-lg shadow-lg overflow-hidden">
				<div className="flex flex-col md:flex-row">
					<Sidebar />

					{/* Main Content */}
					<main className="w-full md:w-2/3 p-6 md:p-8">
						{/* Professional Summary Section */}
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
								Professional Summary
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Senior front-end and React Native engineer with 10+ years of
								experience building scalable web and mobile products across
								fintech, retail, and education. Proven track record in
								architecture modernization, performance optimization, and CI/CD
								improvements that reduce delivery friction and increase
								reliability. Best suited for senior individual contributor roles
								on product teams shipping at scale.
							</p>
						</section>

						{/* Experience Section */}
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
								Experience
							</h2>
							<div className="space-y-6">
								<article>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium">Inclusion Cloud</h3>
											<p className="text-sm text-muted-foreground">
												React Native Developer
											</p>
										</div>
										<span className="text-sm text-muted-foreground whitespace-nowrap">
											Mar 2024–Present
										</span>
									</div>
									<ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground pl-5">
										<li>
											Led evolution of CVS's digital rewards wallet, improving
											app maintainability and scalability while raising quality
											standards for critical user journeys.
										</li>
										<li>
											Automated mobile build and release workflows with
											Bitrise/Fastlane, reducing manual steps and improving
											delivery consistency across releases.
										</li>
										<li>
											Led an architectural refactor with modularization and
											Clean Architecture/DDD, reducing technical debt and
											shortening onboarding for new contributors.
										</li>
										<li>
											Integrated third-party authentication with CVS's login,
											including passkey-based access, to improve sign-in
											reliability and user experience.
										</li>
										<li className="font-medium text-foreground">
											Reduced mobile CI build time by 2 hours through pipeline
											optimization, accelerating release readiness.
										</li>
									</ul>
								</article>
								<article>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium">
												Questrade Financial Group
											</h3>
											<p className="text-sm text-muted-foreground">
												React Native Developer
											</p>
										</div>
										<span className="text-sm text-muted-foreground whitespace-nowrap">
											May 2022–Mar 2024
										</span>
									</div>
									<ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground pl-5">
										<li>
											Built a high-yield savings mobile app from scratch for
											Canada's largest brokerage, using modular architecture to
											isolate features and reduce cross-domain conflicts.
										</li>
										<li>
											Applied Clean Architecture and Ports & Adapters to
											decouple API integrations, improving maintainability
											across services and domains.
										</li>
										<li>
											Partnered with backend and UX teams to optimize APIs and
											key user flows, sustaining high stability under production
											load.
										</li>
										<li className="font-medium text-foreground">
											Reduced feature lead time by 4 hours per delivery cycle
											through workflow and implementation improvements.
										</li>
									</ul>
								</article>
								<article>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium">
												Vizir Software Studio
											</h3>
											<p className="text-sm text-muted-foreground">
												React Native Developer
											</p>
										</div>
										<span className="text-sm text-muted-foreground whitespace-nowrap">
											Jul 2021–May 2022
										</span>
									</div>
									<ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground pl-5">
										<li>
											Contributed to BanQi (Casas Bahia digital wallet),
											delivering direct consumer credit capabilities for
											underbanked retail customers with compliant, seamless
											e-commerce integration.
										</li>
										<li>
											Optimized performance on key screens and responsiveness
											across common device profiles in high-value purchase
											flows.
										</li>
										<li className="font-medium text-foreground">
											Increased credit-flow conversion by 30% through targeted
											performance and UX improvements.
										</li>
									</ul>
								</article>
								<article>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium">
												Join Tecnologia & Design
											</h3>
											<p className="text-sm text-muted-foreground">
												Full Stack Developer
											</p>
										</div>
										<span className="text-sm text-muted-foreground whitespace-nowrap">
											Mar 2020–Jul 2021
										</span>
									</div>
									<ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground pl-5">
										<li>
											Led front-end initiatives and mentored newer developers on
											architecture and engineering practices to improve code
											quality and delivery consistency.
										</li>
										<li>
											Built an education management platform with .NET Core and
											SQL Server, handling complex business rules with reliable
											performance.
										</li>
										<li className="font-medium text-foreground">
											Improved SQL query performance by 10% on critical
											workflows, reducing response times for end users.
										</li>
									</ul>
								</article>
								<article>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium">
												Trinto | Digital Performance
											</h3>
											<p className="text-sm text-muted-foreground">
												Front‑end Developer
											</p>
										</div>
										<span className="text-sm text-muted-foreground whitespace-nowrap">
											Sep 2019–Mar 2020
										</span>
									</div>
									<ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground pl-5">
										<li>
											Built an educational streaming platform for PUCRS using
											Vue.js and Bootstrap with UX collaboration to enhance
											usability and engagement.
										</li>
									</ul>
								</article>
								<article>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium">Freelancer</h3>
											<p className="text-sm text-muted-foreground">
												Full Stack Developer
											</p>
										</div>
										<span className="text-sm text-muted-foreground whitespace-nowrap">
											Sep 2018–Sep 2019
										</span>
									</div>
									<ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground pl-5">
										<li>
											Delivered multiple client web products end-to-end with
											React, Node.js, Express, MySQL, and MongoDB, from
											discovery through deployment and maintenance.
										</li>
									</ul>
								</article>
								<article>
									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium">OrthoMundi</h3>
											<p className="text-sm text-muted-foreground">
												Full Stack Developer
											</p>
										</div>
										<span className="text-sm text-muted-foreground whitespace-nowrap">
											Oct 2014–Sep 2018
										</span>
									</div>
									<ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground pl-5">
										<li>
											Owned long-term evolution of internal and client-facing
											web applications, improving codebase maintainability and
											establishing stable delivery practices across projects.
										</li>
									</ul>
								</article>
							</div>
						</section>

						{/* Selected Achievements Section */}
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
								Selected Achievements
							</h2>
							<ul className="space-y-1 list-disc list-inside text-muted-foreground pl-5">
								<li>
									Delivered architecture modernization initiatives in enterprise
									mobile products, improving maintainability and reducing
									onboarding friction.
								</li>
								<li>
									Scaled CI/CD practices with Bitrise and Fastlane to accelerate
									release readiness and reduce operational overhead.
								</li>
								<li>
									Implemented passkey-based and third-party authentication
									integrations to strengthen security and streamline user
									access.
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
								Additional Information
							</h2>
							<ul className="space-y-1 list-disc list-inside text-muted-foreground pl-5">
								<li>
									Languages: Portuguese (native), English (working proficiency).
								</li>
								<li>
									Work model: International remote contractor and independent
									roles paid in USD.
								</li>
								<li>
									Time zone: GMT-3 with overlap across North American teams.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
								Availability
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Available for senior front-end and React Native roles in
								international remote teams.
							</p>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

"use client";

import ContactSection from "@/components/contact-section";

export default function Home() {
	return (
		<div className="bg-background text-foreground p-2 md:p-4 lg:p-8 ">
			<div className="max-w-6xl mx-auto bg-card border border-border rounded-lg shadow-lg overflow-hidden">
				<div className="flex flex-col md:flex-row">
					{/* Sidebar */}
					<aside className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-muted p-2 md:p-4 lg:p-6">
						<div className="sticky top-8">
							{/* Name and Title */}
							<div className="mb-8">
								<h1 className="text-3xl lg:text-4xl font-bold">EBER CAMARGO</h1>
								<p className="mt-2 text-lg text-muted-foreground">
									Front-end Specialist
								</p>
							</div>

							<ContactSection />

							{/* Skills Section */}
							<section>
								<h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
									Skills & Tools
								</h2>
								<ul className="space-y-3 text-sm">
									<li>
										<h3 className="font-medium">Languages/Frameworks</h3>
										<p className="text-muted-foreground">
											React, React Native, Next.js, Expo, TypeScript,
											JavaScript, Node.js
										</p>
									</li>
									<li>
										<h3 className="font-medium">Architectures/Patterns</h3>
										<p className="text-muted-foreground">
											Clean Architecture, DDD, Ports & Adapters, modularization,
											feature isolation
										</p>
									</li>
									<li>
										<h3 className="font-medium">Mobile/Release</h3>
										<p className="text-muted-foreground">
											Bitrise, Fastlane, store delivery workflows
										</p>
									</li>
									<li>
										<h3 className="font-medium">Backend/Data</h3>
										<p className="text-muted-foreground">
											Express, .NET Core, SQL Server, MySQL, MongoDB
										</p>
									</li>
									<li>
										<h3 className="font-medium">UI & Performance</h3>
										<p className="text-muted-foreground">
											Vue.js, Bootstrap, performance profiling and optimization
										</p>
									</li>
								</ul>
							</section>
						</div>
					</aside>

					{/* Main Content */}
					<main className="w-full md:w-2/3 p-6 md:p-8">
						{/* Professional Summary Section */}
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
								Professional Summary
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Front‑end specialist with 10+ years building scalable,
								maintainable web and mobile applications with React, React
								Native, and TypeScript across finance, retail, and education
								domains. Strong focus on clean architecture, performance, and
								developer experience, with a track record leading
								modularization, DDD, and CI/CD improvements using Bitrise to
								accelerate delivery and reliability. Adept at partnering with
								backend and UX to optimize APIs, flows, and time‑to‑market while
								improving maintainability for long‑lived products.
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
											Evolved and optimized CVS's digital rewards wallet to
											improve maintainability, scalability, and user experience
											through targeted performance and quality initiatives.
										</li>
										<li>
											Automated build and release workflows with
											Bitrise/Fastlane to streamline delivery and reduce manual
											overhead in mobile pipelines.
										</li>
										<li>
											Led architectural refactor with modularization, improved
											folder strategy, and Clean Architecture/DDD to reduce tech
											debt and improve onboarding.
										</li>
										<li>
											Integrated third‑party authentication with CVS's login,
											including passkey‑based login, enhancing reliability and
											usability.
										</li>
										<li className="font-medium text-foreground">
											Improved the CI/CD flow by reducing the build time by 2
											hours.
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
											Built a high‑yield savings mobile app from scratch for
											Canada's largest brokerage with a modular architecture to
											isolate features and prevent context conflicts.
										</li>
										<li>
											Applied Clean Architecture and Ports & Adapters to
											decouple API integrations and improve maintainability
											across services and domains.
										</li>
										<li>
											Partnered with backend and UX to optimize APIs and flows,
											sustaining high stability and smooth performance under
											production load.
										</li>
										<li className="font-medium text-foreground">
											Drove feature lead time down by 4 hours.
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
											implementing direct consumer credit for underbanked retail
											scenarios with compliance and seamless e‑commerce
											integration.
										</li>
										<li>
											Optimized performance on key screens and responsiveness
											across common device profiles in critical purchase flows.
										</li>
										<li className="font-medium text-foreground">
											Increased conversion in credit flow by 30%.
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
											Led front‑end initiatives and mentored newcomers on
											architecture and best practices to improve code quality
											and delivery consistency.
										</li>
										<li>
											Built an education management system with .NET Core and
											SQL Server handling complex business rules for reliability
											and performance.
										</li>
										<li className="font-medium text-foreground">
											Improved query performance by 10%.
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
											Delivered and maintained multiple web projects end‑to‑end
											with React, Node.js, Express, MySQL, and MongoDB in
											iterative release cycles.
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
											Delivered and maintained multiple web projects end‑to‑end
											with React, Node.js, Express, MySQL, and MongoDB,
											establishing stable delivery rhythms and maintainable
											codebases.
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
									Led modularization and Clean Architecture adoption on
									enterprise mobile apps, reducing tech debt and onboarding time
									while improving delivery consistency.
								</li>
								<li>
									Automated CI/CD with Bitrise and Fastlane to increase release
									frequency and lower manual errors in mobile pipelines.
								</li>
								<li>
									Implemented passkey‑based authentication and third‑party auth
									integrations to strengthen security and streamline access in
									production apps.
								</li>
							</ul>
						</section>

						{/* Availability Section */}
						<section>
							<h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">
								Availability
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Open to international remote contractor/independent roles paid
								in USD, operating in GMT‑3 and overlapping North American time
								zones as needed.
							</p>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

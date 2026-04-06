import ContactSection from "./contact-section";

export default function Sidebar() {
	return (
		<aside className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-muted p-2 md:p-4 lg:p-6">
			<div className="sticky top-8">
				{/* Name and Title */}
				<div className="mb-8">
					<h1 className="text-3xl lg:text-4xl font-bold">EBER CAMARGO</h1>
					<p className="mt-2 text-lg text-muted-foreground">
						Senior Front-end / React Native Engineer
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
							<h3 className="font-medium">Frontend & Mobile</h3>
							<p className="text-muted-foreground">
								React, React Native, Next.js, Expo, TypeScript, JavaScript
							</p>
						</li>
						<li>
							<h3 className="font-medium">Architecture</h3>
							<p className="text-muted-foreground">
								Clean Architecture, Domain-Driven Design (DDD), Ports &
								Adapters, modular feature design
							</p>
						</li>
						<li>
							<h3 className="font-medium">Delivery & Quality</h3>
							<p className="text-muted-foreground">
								CI/CD, Bitrise, Fastlane, release automation, performance
								optimization
							</p>
						</li>
						<li>
							<h3 className="font-medium">Backend Familiarity</h3>
							<p className="text-muted-foreground">
								Node.js/Express, .NET Core, SQL Server, MySQL, MongoDB
							</p>
						</li>
					</ul>
				</section>
			</div>
		</aside>
	);
}

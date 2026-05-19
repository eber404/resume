import ContactSection from "./contact-section";

export default function Sidebar() {
	return (
		<aside className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-muted p-2 md:p-4 lg:p-6 print:w-full print:bg-white print:p-4">
			<div className="sticky top-8">
				{/* Name and Title */}
				<div className="mb-8 print:mb-5">
					<h1 className="text-3xl lg:text-4xl font-bold">EBER CAMARGO</h1>
					<p className="mt-2 text-lg text-muted-foreground">
						Senior React Native / React Engineer | TypeScript | AI Agentic Coding | CI/CD
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
								React Native, React, Next.js, TypeScript, JavaScript
							</p>
						</li>
						<li>
							<h3 className="font-medium">Testing & Quality Gates</h3>
							<p className="text-muted-foreground">
								Jest, React Testing Library, TDD, type checks
							</p>
						</li>
						<li>
							<h3 className="font-medium">Backend & APIs</h3>
							<p className="text-muted-foreground">
								Go, Node.js/Express, .NET Core, REST API
							</p>
						</li>
						<li>
							<h3 className="font-medium">Architecture</h3>
							<p className="text-muted-foreground">
								Clean Architecture, Domain-Driven Design, modular feature design
							</p>
						</li>
						<li>
							<h3 className="font-medium">Delivery & Quality</h3>
							<p className="text-muted-foreground">
								CI/CD, GitHub Actions, Git, Bitrise, Fastlane, release
								automation, performance optimization
							</p>
						</li>
						<li>
							<h3 className="font-medium">Data Layer</h3>
							<p className="text-muted-foreground">
								PostgreSQL, SQL Server, MySQL, MongoDB
							</p>
						</li>
						<li>
							<h3 className="font-medium">AI-Accelerated Delivery</h3>
							<p className="text-muted-foreground">
								Claude Code, Codex, skills, MCP servers for faster
								engineering workflows
							</p>
						</li>
					</ul>
				</section>
			</div>
		</aside>
	);
}

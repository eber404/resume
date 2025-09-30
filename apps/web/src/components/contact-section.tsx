import { ExternalLink, Github, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
	return (
		<section className="mb-8">
			<h2 className="text-xl font-semibold mb-4 border-b border-border pb-2">
				Contact
			</h2>
			<ul className="space-y-2 text-sm">
				<li className="flex items-center gap-2">
					<Mail className="h-4 w-4 text-muted-foreground" />
					<span className="font-medium">Email:</span>
					<a
						href="mailto:bodacamargo@gmail.com"
						className="text-primary hover:underline"
					>
						bodacamargo@gmail.com
					</a>
				</li>
				<li className="flex items-center gap-2">
					<Phone className="h-4 w-4 text-muted-foreground" />
					<span className="font-medium">Phone:</span>
					<span>+55 51 98249‑2739</span>
				</li>
				<li className="flex items-center gap-2">
					<MapPin className="h-4 w-4 text-muted-foreground" />
					<span className="font-medium">Location:</span>
					<span>Remote from Brazil (GMT‑3)</span>
				</li>
				<li className="flex items-center gap-2">
					<ExternalLink className="h-4 w-4 text-muted-foreground" />
					<span className="font-medium">LinkedIn:</span>
					<a
						href="https://linkedin.com/in/eberc"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						eberc
					</a>
				</li>
				<li className="flex items-center gap-2">
					<Github className="h-4 w-4 text-muted-foreground" />
					<span className="font-medium">GitHub:</span>
					<a
						href="https://www.github.com/eber404"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						eber404
					</a>
				</li>
			</ul>
		</section>
	);
}

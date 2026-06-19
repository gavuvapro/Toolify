import { appName } from "@/lib/utils";
export const metadata = { title: "Code of Conduct" };
export default function CodeOfConductPage() {
  return <section className="mx-auto max-w-4xl px-6 py-14 prose prose-neutral"><h1>Code of Conduct</h1><p>Last updated: {new Date().toLocaleDateString()}</p><h2>Our Pledge</h2><p>{appName} is committed to providing a welcoming, safe space for all contributors and users.</p><h2>Standards</h2><p>Contributions should be respectful, constructive, and focused on improving the tool directory for everyone.</p><h2>Enforcement</h2><p>Unacceptable behavior includes harassment, discrimination, and spam. Maintainers may remove content or restrict access.</p><h2>Attribution</h2><p>This Code of Conduct is adapted from the Contributor Covenant.</p></section>;
}
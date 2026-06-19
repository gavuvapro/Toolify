import { appName } from "@/lib/utils";
export const metadata = { title: "Terms of Service" };
export default function TermsPage() {
  return <section className="mx-auto max-w-4xl px-6 py-14 prose prose-neutral"><h1>Terms of Service</h1><p>Last updated: {new Date().toLocaleDateString()}</p><h2>Use of Service</h2><p>{appName} is provided as-is for informational purposes. No warranties are expressed or implied.</p><h2>Intellectual Property</h2><p>Tool data and content belong to their respective authors. {appName} is open-source under MIT license.</p><h2>Liability</h2><p>We are not liable for any damages arising from use of this service.</p><h2>Changes to Terms</h2><p>Terms may be updated. Continued use constitutes acceptance of changes.</p></section>;
}
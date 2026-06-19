import { ContributionForm } from "@/components/contribution-form";
export const metadata={title:"Contribute"};
export default function ContributePage(){ return <section className="mx-auto max-w-3xl px-4 py-14"><h1 className="text-4xl font-bold">Contribute a tool</h1><p className="mb-8 mt-2 text-muted-foreground">Submit suggestions through this form or open a pull request editing lib/data/tools.ts.</p><ContributionForm/></section> }

const contactSections = [
  {
    title: "Registered Office",
    lines: [
      "18th KM Stone, Chittorgarh Road, Hamirgarh, Bhilwara, Rajasthan, India – 311025",
      "Phone: 01482-286043",
      "Email: info@sonaselection.com",
      "Website: https://www.sonaselection.com/",
    ],
  },
  {
    title: "Registrar & Transfer Agent",
    lines: [
      "M/s KFin Technologies Limited",
      "301, The Centrium, 3rd Floor, 57, Lal Bahadur Shastri Road, Nav Pada, Kurla (West), Mumbai – 400070, Maharashtra, India",
      "Selenium Tower-B, Plot Nos. 31 and 32, Financial District, Nanakramguda, Serilingampally, Hyderabad – 500032, Telangana, India",
      "Phone: +91 40 6716 2222 / 1800 309 4001",
      "Email: sona.ipo@kfintech.com",
      "Website: https://www.kfintech.com/",
    ],
  },
  {
    title: "Compliance Officer",
    lines: [
      "Mr. Harish Sharma, Company Secretary & Compliance Officer",
      "18th KM Stone, Chittorgarh Road, Hamirgarh, Bhilwara, Rajasthan, India – 311025",
      "Phone: +91 8386090831",
      "Email: cs@sonaselection.com",
      "Email for grievance redressal: cs@sonaselection.com",
    ],
  },
];

export default function InvestorsGrievancesPage() {
  return (
    <section className="bg-[#FFFBF0] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto max-w-5xl px-6 lg:px-12">
        <h1 className="mb-10 text-3xl font-semibold md:text-4xl">
          Investors Grievances &amp; Contact Details
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {contactSections.map((section) => (
            <article key={section.title} className="rounded-lg border border-orange-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-[#022050]">{section.title}</h2>
              <div className="space-y-2 text-[#1C140D]">
                {section.lines.map((line) => <p key={line}>{line}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

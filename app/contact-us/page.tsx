import { companyInfo } from '@/lib/constants/company';

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Contact Us
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
        Get in touch with our team. We're here to help and answer any questions you may have.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p>{companyInfo.email}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <p>{companyInfo.phone}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <p>{companyInfo.address}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <p className="text-muted-foreground">Contact form coming soon...</p>
        </div>
      </div>
    </div>
  );
}

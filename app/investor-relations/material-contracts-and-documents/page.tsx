import type { Metadata } from "next";
import MaterialDocuments from "@/components/sections/investor/MaterialDocuments";
import {
  getMaterialContracts,
  getMaterialDocuments,
} from "@/lib/material-documents";

export const metadata: Metadata = {
  title: "Material Contracts and Documents",
  description:
    "Access material contracts and documents relating to the offer by Sona Selection India Limited.",
};

export default function MaterialContractsAndDocumentsPage() {
  const contracts = getMaterialContracts();
  const documents = getMaterialDocuments();

  return (
    <main className="bg-[#FFFBF0]">
      <section className="bg-[#022050] py-14 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6333]">
            Investor Relations
          </p>
          <h1 className="max-w-4xl text-4xl font-normal leading-tight text-[#FFFBF0] md:text-5xl">
            Material Contracts and Documents
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#FFFBF0]/75 md:text-lg">
            Review the material contracts, corporate records and supporting
            documents relating to the offer.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <MaterialDocuments contracts={contracts} documents={documents} />
        </div>
      </section>
    </main>
  );
}

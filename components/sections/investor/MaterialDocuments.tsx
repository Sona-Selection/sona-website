"use client";

import { ExternalLink, FileText, FolderOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface MaterialDocumentFile {
  title: string;
  href: string;
}

export interface MaterialDocumentGroup {
  title: string;
  files: MaterialDocumentFile[];
  groups: MaterialDocumentGroup[];
}

interface MaterialDocumentsProps {
  contracts: MaterialDocumentFile[];
  documents: MaterialDocumentGroup;
}

function DocumentLink({ document }: { document: MaterialDocumentFile }) {
  return (
    <a
      href={document.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-center justify-between gap-4 border-b border-[#022050]/10 px-4 py-4 transition-colors last:border-b-0 hover:bg-[#FF6333]/5 sm:px-5"
    >
      <span className="flex min-w-0 items-start gap-3">
        <FileText aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#FF6333]" />
        <span className="break-words text-sm leading-6 text-[#022050] sm:text-base">
          {document.title}
        </span>
      </span>
      <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[#FF6333]">
        <span className="hidden sm:inline">View File</span>
        <ExternalLink aria-hidden="true" className="size-4" />
      </span>
    </a>
  );
}

function DocumentGroup({ group, path }: { group: MaterialDocumentGroup; path: string }) {
  return (
    <Accordion type="multiple" className="border-t border-[#022050]/10 first:border-t-0">
      <AccordionItem value={path} className="border-0">
        <AccordionTrigger className="px-4 py-4 text-base font-semibold text-[#022050] hover:no-underline sm:px-5">
          <span className="flex items-center gap-3">
            <FolderOpen aria-hidden="true" className="size-5 shrink-0 text-[#FF6333]" />
            <span>{group.title}</span>
            <span className="text-xs font-normal text-black/45">
              ({group.files.length + group.groups.length})
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-0 pl-3 sm:pl-5">
          <div className="overflow-hidden border-l border-[#FF6333]/25 bg-white/60">
            {group.files.map((document) => (
              <DocumentLink key={document.href} document={document} />
            ))}
            {group.groups.map((child) => (
              <DocumentGroup key={child.title} group={child} path={`${path}/${child.title}`} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function MaterialDocuments({ contracts, documents }: MaterialDocumentsProps) {
  return (
    <Accordion type="multiple" className="space-y-5">
      <AccordionItem
        value="contracts"
        className="overflow-hidden rounded-xl border border-[#FF6333]/20 bg-white shadow-[0_8px_28px_rgba(2,32,80,0.05)]"
      >
        <AccordionTrigger className="px-5 py-6 text-left text-xl font-semibold text-[#022050] hover:no-underline md:px-7 md:text-2xl">
          <span>
            Material Contracts to the Offer
            <span className="mt-1 block text-sm font-normal text-black/50">
              {contracts.length} documents
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="border-t border-[#FF6333]/15 p-0">
          {contracts.map((document) => (
            <DocumentLink key={document.href} document={document} />
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="documents"
        className="overflow-hidden rounded-xl border border-[#FF6333]/20 bg-white shadow-[0_8px_28px_rgba(2,32,80,0.05)]"
      >
        <AccordionTrigger className="px-5 py-6 text-left text-xl font-semibold text-[#022050] hover:no-underline md:px-7 md:text-2xl">
          <span>
            Material Documents to the Offer
            <span className="mt-1 block text-sm font-normal text-black/50">
              Documents and supporting records
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="border-t border-[#FF6333]/15 p-0">
          <div className="px-2 py-2 sm:px-4">
            {documents.files.map((document) => (
              <DocumentLink key={document.href} document={document} />
            ))}
            {documents.groups.map((group) => (
              <DocumentGroup key={group.title} group={group} path={group.title} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

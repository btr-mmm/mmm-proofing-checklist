import type { Checklist } from "../types/types";

const grammar: Checklist = {
  title: "Spelling, Grammar, & Content",
  listItems: [
    {
      title: "Text Check",
      description:
        "Proofread all text content for spelling errors, grammatical issues, and typographical mistakes.",
    },
    {
      title: "Punctuation",
      description: "Verify correct use of punctuation (commas, periods, etc.).",
    },
    {
      title: "Consistent Language",
      description:
        "Ensure consistent tone, language, and terminology across the document.",
    },
    {
      title: "Contact Information",
      description:
        "Double-check phone numbers, email addresses, and URLs for accuracy.",
    },
    {
      title: "Offer Details",
      description:
        "Double-check all promotional details (dates, discounts, terms and conditions).",
    },
    {
      title: "Legal Disclaimers",
      description:
        "Verify the inclusion and accuracy of any necessary legal disclaimers or fine print.",
    },
  ],
};

const design: Checklist = {
  title: "Design & Layout",
  listItems: [
    {
      title: "Alignment & Spacing",
      description:
        "Confirm that all text and images are properly aligned, with consistent spacing and margins.",
    },
    {
      title: "Font Consistency",
      description:
        "Ensure that font styles, sizes, and colors are consistent throughout the piece.",
    },
    {
      title: "Image Quality",
      description:
        "Check that all images are high resolution (300 DPI) and correctly positioned.",
    },
    {
      title: "Color Profiles",
      description:
        "Verify that the correct color profile (CMYK) is used for print, and that all colors match the brand guidelines.",
    },
  ],
};

const printProduction: Checklist = {
  title: "Print Production",
  listItems: [
    {
      title: "Bleed & Crop Marks",
      description:
        'Verify that all files include the correct bleed (typically 1/8" or 3mm) and crop marks as requested by the client.',
    },
    {
      title: "Safe Area",
      description:
        "Ensure no critical content (text, logos) is within the bleed area to prevent trimming errors.",
    },
    {
      title: "File Format",
      description:
        "Export the final file in the correct format (usually PDF/X-1a for print). Package files for vendors as requested.",
    },
    {
      title: "Proof Review",
      description:
        "Print a test proof and review it for any issues that may not be visible on-screen. Check that QR codes scan correctly and nothing disappears.",
    },
    {
      title: "Upload and Confirm",
      description:
        "Once uploaded, email the vendor, client, and accounts team to confirm upload of files.",
    },
  ],
};

const organization: Checklist = {
  title: "File Organization & Naming",
  listItems: [
    {
      title: "Consistency",
      description:
        "Ensure all files are named consistently, using the agreed-upon naming conventions.",
    },
    {
      title: "Versioning",
      description:
        "Ensure your files are named correctly and versions are clearly discernible. Create additional version files as needed for production.",
    },
    {
      title: "Final Files",
      description: "Place your final package in the 04 FINAL FILES Folder.",
    },
    {
      title: "Folder Structure",
      description:
        "Ensure files are stored in the correct folders, following the approved structure. Please see folder structure documentation for reference.",
    },
    {
      title: "Asset Organization",
      description:
        "Keep all images, fonts, and supporting files in a dedicated folder within the project directory. Package any video projects for ease of access in the future",
    },
  ],
};

export const checklists: Checklist[] = [
  grammar,
  design,
  printProduction,
  organization,
];

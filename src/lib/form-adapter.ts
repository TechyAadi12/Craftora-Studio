import { QuoteFormData } from "./validation";

export interface SubmissionResponse {
  success: boolean;
  referenceId: string;
  timestamp: string;
  message: string;
  data: QuoteFormData;
}

const STORAGE_KEY = "craftora_quote_submissions";

export async function submitQuoteForm(data: QuoteFormData): Promise<SubmissionResponse> {
  // Simulate network latency for a realistic interactive experience
  await new Promise((resolve) => setTimeout(resolve, 800));

  const referenceId = `CRF-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

  const record: SubmissionResponse = {
    success: true,
    referenceId,
    timestamp,
    message: "Thank you for reaching out! Your enquiry has been recorded in client demo mode. In a production deployment, this triggers an automated email notification and syncs with our CRM.",
    data,
  };

  try {
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem(STORAGE_KEY);
      const parsed: SubmissionResponse[] = existing ? JSON.parse(existing) : [];
      parsed.unshift(record);
      // Keep recent 10
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed.slice(0, 10)));
    }
  } catch (err) {
    console.error("Local storage error in form adapter:", err);
  }

  return record;
}

export function getSavedQuotes(): SubmissionResponse[] {
  if (typeof window === "undefined") return [];
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    return existing ? JSON.parse(existing) : [];
  } catch {
    return [];
  }
}

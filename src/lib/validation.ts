export interface QuoteFormData {
  fullName: string;
  email: string;
  organization?: string;
  serviceType: string;
  projectDescription: string;
  budgetRange?: string;
  timeline?: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  organization?: string;
  serviceType?: string;
  projectDescription?: string;
  budgetRange?: string;
  timeline?: string;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validateQuoteForm(data: QuoteFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (minimum 2 characters).";
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.serviceType || data.serviceType.trim() === "") {
    errors.serviceType = "Please select a service type.";
  }

  if (!data.projectDescription || data.projectDescription.trim().length < 15) {
    errors.projectDescription = "Please provide at least 15 characters describing your project goals.";
  }

  return errors;
}

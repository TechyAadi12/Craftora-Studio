"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { validateQuoteForm, QuoteFormData, ValidationErrors } from "@/lib/validation";
import { submitQuoteForm, SubmissionResponse } from "@/lib/form-adapter";
import { Send, CheckCircle2, Sparkles, RefreshCw } from "lucide-react";

interface QuoteFormProps {
  initialService?: string;
}

export function QuoteForm({ initialService }: QuoteFormProps) {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service") || initialService || "";

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    email: "",
    organization: "",
    serviceType: queryService,
    projectDescription: "",
    budgetRange: "$10k - $25k",
    timeline: "1 - 2 Months",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);

  const handleChange = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    const errorKey = field as keyof ValidationErrors;
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateQuoteForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitQuoteForm(formData);
      setSubmissionResult(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      serviceType: "",
      projectDescription: "",
      budgetRange: "$10k - $25k",
      timeline: "1 - 2 Months",
    });
    setErrors({});
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Demo Mode Notice */}
      <div className="flex items-center gap-2 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs mb-8">
        <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
        <span>
          <strong>Interactive Demo Mode:</strong> Submissions validate client-side and store to local state. No real CRM is currently dispatched.
        </span>
      </div>

      {submissionResult ? (
        /* Success State */
        <div className="py-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Reference: {submissionResult.referenceId}
            </span>
            <h3 className="text-2xl font-bold text-white pt-2">Quote Request Received!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {submissionResult.message}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
            <div className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              Submission Summary
            </div>
            <div className="text-slate-300">
              <span className="text-slate-500">Contact:</span> {submissionResult.data.fullName} ({submissionResult.data.email})
            </div>
            <div className="text-slate-300">
              <span className="text-slate-500">Service:</span> {submissionResult.data.serviceType}
            </div>
            <div className="text-slate-300">
              <span className="text-slate-500">Budget / Timeline:</span> {submissionResult.data.budgetRange} • {submissionResult.data.timeline}
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      ) : (
        /* Interactive Form */
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="text-xs font-medium text-slate-300">
                Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={e => handleChange("fullName", e.target.value)}
                placeholder="Jane Doe"
                className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                  errors.fullName ? "border-red-500 ring-1 ring-red-500" : "border-slate-800 focus:border-blue-500"
                }`}
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-300">
                Work Email <span className="text-blue-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => handleChange("email", e.target.value)}
                placeholder="jane@company.com"
                className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                  errors.email ? "border-red-500 ring-1 ring-red-500" : "border-slate-800 focus:border-blue-500"
                }`}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-[11px] text-red-400">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Organization */}
            <div className="space-y-1.5">
              <label htmlFor="organization" className="text-xs font-medium text-slate-300">
                Organization / Company <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={e => handleChange("organization", e.target.value)}
                placeholder="Acme Corp"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Service Type */}
            <div className="space-y-1.5">
              <label htmlFor="serviceType" className="text-xs font-medium text-slate-300">
                Service Focus <span className="text-blue-400">*</span>
              </label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={e => handleChange("serviceType", e.target.value)}
                className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                  errors.serviceType ? "border-red-500 ring-1 ring-red-500" : "border-slate-800 focus:border-blue-500"
                }`}
                aria-invalid={!!errors.serviceType}
              >
                <option value="">Select a service category...</option>
                <option value="website-development">Website Development</option>
                <option value="custom-software">Custom Software & APIs</option>
                <option value="saas-dashboards">SaaS & Analytical Dashboards</option>
                <option value="business-automation">Business Process Automation</option>
                <option value="general-consulting">Technical Architecture Advisory</option>
              </select>
              {errors.serviceType && (
                <p className="text-[11px] text-red-400">{errors.serviceType}</p>
              )}
            </div>
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="budgetRange" className="text-xs font-medium text-slate-300">
                Target Budget Range
              </label>
              <select
                id="budgetRange"
                value={formData.budgetRange}
                onChange={e => handleChange("budgetRange", e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="<$5,000">&lt; $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="timeline" className="text-xs font-medium text-slate-300">
                Desired Launch Timeline
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={e => handleChange("timeline", e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Immediate / ASAP">Immediate / ASAP</option>
                <option value="1 - 2 Months">1 - 2 Months</option>
                <option value="3 - 6 Months">3 - 6 Months</option>
                <option value="Flexible / Exploration">Flexible / Exploration</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-1.5">
            <label htmlFor="projectDescription" className="text-xs font-medium text-slate-300">
              Project Scope & Objectives <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={e => handleChange("projectDescription", e.target.value)}
              placeholder="Tell us about the business problem, target audience, technical bottlenecks, or key deliverables you are looking to build..."
              className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                errors.projectDescription ? "border-red-500 ring-1 ring-red-500" : "border-slate-800 focus:border-blue-500"
              }`}
              aria-invalid={!!errors.projectDescription}
            />
            {errors.projectDescription && (
              <p className="text-[11px] text-red-400">{errors.projectDescription}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 disabled:opacity-50 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Recording Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Request Custom Proposal & Quote</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

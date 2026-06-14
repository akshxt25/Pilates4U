import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, viewportOnce, staggerContainer, staggerItem } from "@/lib/animations";
import { BUSINESS, WHATSAPP_URL, GOOGLE_SHEETS_URL } from "@/lib/constants";
import {
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  User,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ── Session types ──────────────────────────────────────────────────────────── */

const SESSION_TYPES = [
  { key: "group", label: "Group Session", fee: 499 },
  { key: "personal", label: "Personal Training", fee: 999 },
] as const;

type SessionKey = (typeof SESSION_TYPES)[number]["key"];

/* ── Time slots ─────────────────────────────────────────────────────────────── */

const MORNING_SLOTS = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM"];
const EVENING_SLOTS = ["4 PM", "5 PM", "6 PM", "7 PM", "8 PM"];

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function getNextNDates(n: number): string[] {
  const dates: string[] = [];
  const today = new Date();
  let d = new Date(today);
  while (dates.length < n) {
    if (d.getDay() !== 0) {
      // Skip Sundays
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      dates.push(`${yyyy}-${mm}-${dd}`);
    }
    d = new Date(d.getTime() + 86_400_000);
  }
  return dates;
}

function formatDateLabel(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86_400_000);

  const isSame = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  if (isSame(d, today)) return "Today";
  if (isSame(d, tomorrow)) return "Tomorrow";

  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function formatDateCompact(dateStr: string): string {
  const label = formatDateLabel(dateStr);
  if (label === "Today" || label === "Tomorrow") return label;
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    weekday: "short",
  });
}

function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (/^91[6-9]\d{9}$/.test(digits)) return digits.slice(2);
  if (/^[6-9]\d{9}$/.test(digits)) return digits;
  return "";
}

/* ── Component ──────────────────────────────────────────────────────────────── */

export function BookTrial() {
  const formRef = useRef<HTMLFormElement>(null);

  /* ── State ──────────────────────────────────────────────────────────── */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionType, setSessionType] = useState<SessionKey>("group");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableDates = useMemo(() => getNextNDates(14), []);

  /* ── Validation ─────────────────────────────────────────────────────── */

  function validate(): Record<string, string> {
    const err: Record<string, string> = {};
    if (!name.trim()) err.name = "Please enter your name";
    if (!normalizePhone(phone)) err.phone = "Enter a valid 10-digit mobile number";
    if (!selectedDate) err.date = "Please select a date";
    if (!selectedSlot) err.slot = "Please choose a time slot";
    return err;
  }

  /* ── Submit ─────────────────────────────────────────────────────────── */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setIsSubmitting(true);
    const session = SESSION_TYPES.find((s) => s.key === sessionType)!;

    try {
      const formParams = new URLSearchParams();
      formParams.append("Name", name.trim());
      formParams.append("Phone", normalizePhone(phone));
      formParams.append("SessionType", session.label);
      formParams.append("Fee", session.fee.toString());
      formParams.append("Date", selectedDate);
      formParams.append("Time", selectedSlot);

      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formParams.toString(),
        mode: "no-cors",
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  /* ── Fee display ────────────────────────────────────────────────────── */
  const activeSession = SESSION_TYPES.find((s) => s.key === sessionType)!;

  /* ────────────────────────────────────────────────────────────────────── */

  return (
    <section
      id="book"
      className="relative py-16 sm:py-24 lg:py-32 bg-ivory overflow-x-clip"
    >
      {/* Subtle decorative accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-champagne/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-champagne/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 min-w-0 w-full">
        {/* ── Header ──────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-8 sm:mb-14"
        >
          <p className="type-eyebrow text-[10px] sm:text-xs text-champagne mb-3 sm:mb-4">
            Book a Trial Session
          </p>
          <h2 className="type-section-title text-2xl sm:text-4xl lg:text-5xl text-charcoal mb-3 sm:mb-5">
            Reserve Your Preferred Slot
          </h2>
          <p className="text-warm-gray text-base sm:text-lg max-w-xl mx-auto">
            Experience the transformative power of Pilates firsthand. Fill in
            your details below and our team will confirm your booking shortly.
          </p>
        </motion.div>

        {/* ── Two-column layout ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-10 items-start min-w-0 w-full">
          {/* ── Form Card (3 cols) ────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3 min-w-0 w-full"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card-light rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-10 shadow-lg min-w-0 w-full max-w-full box-border"
                >
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5 sm:space-y-6 min-w-0 w-full"
                  >
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 min-w-0">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-charcoal mb-2">
                          <User className="w-4 h-4 text-champagne" />
                          Name
                        </label>
                        <input
                          type="text"
                          id="booking-name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setErrors((p) => ({ ...p, name: "" }));
                          }}
                          placeholder="Your full name"
                          className="w-full min-w-0 rounded-xl border border-sand bg-ivory px-4 py-3 text-base sm:text-sm text-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-champagne/40 focus:border-champagne transition-all"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1.5">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-charcoal mb-2">
                          <Phone className="w-4 h-4 text-champagne" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="booking-phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value.replace(/\D/g, "").slice(0, 12));
                            setErrors((p) => ({ ...p, phone: "" }));
                          }}
                          inputMode="numeric"
                          placeholder="9876543210"
                          maxLength={12}
                          className="w-full min-w-0 rounded-xl border border-sand bg-ivory px-4 py-3 text-base sm:text-sm text-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-champagne/40 focus:border-champagne transition-all"
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1.5">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Session Type */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-charcoal mb-3">
                        <Sparkles className="w-4 h-4 text-champagne" />
                        Session Type
                      </label>
                      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-2 sm:gap-3">
                        {SESSION_TYPES.map((s) => (
                          <button
                            key={s.key}
                            type="button"
                            onClick={() => setSessionType(s.key)}
                            className={`relative rounded-xl border px-3 sm:px-4 py-3 sm:py-3.5 text-left transition-all duration-300 min-w-0 w-full ${
                              sessionType === s.key
                                ? "border-champagne bg-champagne/10 shadow-sm"
                                : "border-sand bg-ivory hover:border-champagne/50"
                            }`}
                          >
                            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                              <span className="text-sm font-medium text-charcoal leading-snug">
                                {s.label}
                              </span>
                              <span className="text-champagne font-semibold text-sm shrink-0">
                                ₹{s.fee}
                              </span>
                            </div>
                            {sessionType === s.key && (
                              <motion.div
                                layoutId="session-indicator"
                                className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-champagne"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-warm-gray mt-2">
                        {activeSession.label} trial fee: ₹{activeSession.fee}.
                        If you enrol on the same day, the trial fee will be
                        adjusted in your membership.
                      </p>
                    </div>

                    {/* Date Selection */}
                    <div className="min-w-0 w-full">
                      <label className="flex items-center gap-2 text-sm font-medium text-charcoal mb-3">
                        <Calendar className="w-4 h-4 text-champagne shrink-0" />
                        Preferred Date
                      </label>
                      <div className="relative min-w-0 w-full">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory touch-pan-x overscroll-x-contain -mx-1 px-1 sm:mx-0 sm:px-0">
                          {availableDates.map((d) => {
                            const label = formatDateCompact(d);
                            const isLongLabel = label.length > 6;
                            return (
                              <button
                                key={d}
                                type="button"
                                onClick={() => {
                                  setSelectedDate(d);
                                  setSelectedSlot("");
                                  setErrors((p) => ({ ...p, date: "" }));
                                }}
                                className={`shrink-0 snap-start rounded-xl border px-3 py-2.5 text-center transition-all duration-300 w-[4.5rem] sm:w-20 ${
                                  selectedDate === d
                                    ? "border-champagne bg-champagne/10 shadow-sm"
                                    : "border-sand bg-ivory hover:border-champagne/50"
                                }`}
                              >
                                <span className={`text-warm-gray block leading-tight truncate ${isLongLabel ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-xs"}`}>
                                  {label}
                                </span>
                                <span className="text-sm font-semibold text-charcoal block mt-0.5">
                                  {new Date(d + "T00:00:00").getDate()}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {errors.date && (
                        <p className="text-xs text-red-500 mt-1.5">
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Time Slots */}
                    <div className="min-w-0 w-full">
                      <label className="flex items-center gap-2 text-sm font-medium text-charcoal mb-3">
                        <Clock className="w-4 h-4 text-champagne shrink-0" />
                        Preferred Time Slot
                      </label>

                      {/* Morning */}
                      <p className="text-xs uppercase tracking-wider text-warm-gray mb-2">
                        Morning
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4 w-full">
                        {MORNING_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => {
                              setSelectedSlot(slot);
                              setErrors((p) => ({ ...p, slot: "" }));
                            }}
                            className={`w-full min-w-0 rounded-lg border px-2 py-2.5 sm:px-3 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 text-center ${
                              selectedSlot === slot
                                ? "border-champagne bg-champagne text-charcoal shadow-sm"
                                : "border-sand bg-ivory text-warm-gray hover:border-champagne/50 hover:text-charcoal"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      {/* Evening */}
                      <p className="text-xs uppercase tracking-wider text-warm-gray mb-2">
                        Evening
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 w-full">
                        {EVENING_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => {
                              setSelectedSlot(slot);
                              setErrors((p) => ({ ...p, slot: "" }));
                            }}
                            className={`w-full min-w-0 rounded-lg border px-2 py-2.5 sm:px-3 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 text-center ${
                              selectedSlot === slot
                                ? "border-champagne bg-champagne text-charcoal shadow-sm"
                                : "border-sand bg-ivory text-warm-gray hover:border-champagne/50 hover:text-charcoal"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                      {errors.slot && (
                        <p className="text-xs text-red-500 mt-1.5">
                          {errors.slot}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group flex items-center justify-center gap-2 rounded-full bg-charcoal text-ivory px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold tracking-wide hover:bg-charcoal/90 transition-all hover:shadow-lg hover:shadow-charcoal/10 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Book My Trial Session"}
                      {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* ── Success State ───────────────────────────────────── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card-light rounded-xl sm:rounded-2xl p-6 sm:p-10 md:p-14 text-center shadow-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-8 h-8 text-[#25D366]" />
                  </motion.div>
                  <p className="type-eyebrow text-champagne mb-3">
                    Booking Request Sent
                  </p>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-4">
                    We've received your request!
                  </h3>
                  <p className="text-warm-gray max-w-md mx-auto mb-8">
                    We have received your booking request! Our team
                    will contact you shortly to confirm your slot. You can also reach us
                    directly for any queries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-[#22c55e] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Sidebar (2 cols) ──────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 flex flex-col gap-3 sm:gap-4 lg:gap-6 min-w-0 w-full"
          >
            {/* WhatsApp Card */}
            {!submitted && (
              <motion.a
                variants={staggerItem}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl sm:rounded-2xl border border-[#25D366]/20 bg-[#25D366]/5 p-4 sm:p-6 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-md flex-shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Chat on WhatsApp
                    </h4>
                    <p className="text-[10px] sm:text-xs text-warm-gray">Instant replies</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed hidden lg:block">
                  Have questions? Reach us instantly on WhatsApp for quick
                  assistance and booking help.
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#25D366] text-xs sm:text-sm font-medium mt-2 sm:mt-3 group-hover:gap-2.5 transition-all">
                  Start Chat
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </span>
              </motion.a>
            )}

            {/* Call Card */}
            <motion.a
              variants={staggerItem}
              href={`tel:${BUSINESS.phone}`}
              className="group block rounded-xl sm:rounded-2xl border border-sand bg-cream/50 p-4 sm:p-6 hover:border-champagne/40 hover:bg-cream transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-champagne/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-champagne" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal">
                    Call Us
                  </h4>
                  <p className="text-[10px] sm:text-xs text-warm-gray">Mon-Sat, 7 AM – 9 PM</p>
                </div>
              </div>
              <p className="text-charcoal font-semibold text-sm sm:text-lg">
                {BUSINESS.phone}
              </p>
              <span className="inline-flex items-center gap-1.5 text-champagne text-xs sm:text-sm font-medium mt-2 group-hover:gap-2.5 transition-all">
                Call Now
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
            </motion.a>

            {/* Info Card */}
            <motion.div
              variants={staggerItem}
              className="rounded-xl sm:rounded-2xl border border-sand bg-ivory p-4 sm:p-6"
            >
              <h4 className="text-xs sm:text-sm font-semibold text-charcoal mb-2 sm:mb-3">
                What to Expect
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Complimentary body assessment",
                  "One-on-one guidance from certified trainers",
                  "Trial fee adjusted if you enrol same day",
                  "No prior experience needed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 sm:gap-2.5 text-xs sm:text-sm text-warm-gray">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

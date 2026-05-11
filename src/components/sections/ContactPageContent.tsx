"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import CRMForm from "@/components/ui/CRMForm";

export const ContactPageContent = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A76C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Container>
          <div className="max-w-3xl">
            <p className="text-[10px] font-sans font-bold text-bronze tracking-[0.3em] uppercase mb-4">
              Free Consultation
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Contact an El Paso{" "}
              <span className="text-bronze">Personal Injury Lawyer</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-sans">
              If you or a loved one has been injured, don&apos;t wait. The Carter Law
              Firm, P.C. offers free consultations and is available 24/7 for
              emergencies. There is no fee unless we win.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content: Form + Info */}
      <section className="relative bg-navy pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8">
                  Reach Us Directly
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-bronze/30 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold text-bronze uppercase tracking-widest mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:9156211818"
                        className="text-xl font-serif text-white hover:text-bronze transition-colors"
                      >
                        (915) 621-1818
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-bronze/30 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold text-bronze uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:office@carterlawwins.com"
                        className="text-lg font-sans text-white/80 hover:text-bronze transition-colors"
                      >
                        office@carterlawwins.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-bronze/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold text-bronze uppercase tracking-widest mb-1">
                        Office
                      </p>
                      <address className="not-italic text-lg font-sans text-white/80 leading-relaxed">
                        124 W. Castellano Drive, UNIT 103<br />
                        El Paso, TX 79912
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-bronze/30 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-bronze" />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold text-bronze uppercase tracking-widest mb-1">
                        Availability
                      </p>
                      <p className="text-lg font-sans text-white/80">
                        Available 24/7 for Emergency Consultations
                      </p>
                      <p className="text-sm font-sans text-white/50 mt-1">
                        Hablamos Español
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-10">
                <h2 className="text-2xl font-serif font-bold text-white mb-4">
                  What to Expect
                </h2>
                <ul className="space-y-3 text-white/70 font-sans">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
                    We review your case at no cost and no obligation.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
                    You pay nothing unless we recover compensation for you.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
                    Thomas Carter personally reviews every new case inquiry.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
                    Serving El Paso and all of Texas, Arizona, and New Mexico.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: CRM Form */}
            <div className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-sm">
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-white/60 font-sans text-sm mb-6">
                Tell us about your situation. We&apos;ll get back to you within 24 hours.
              </p>
              <CRMForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

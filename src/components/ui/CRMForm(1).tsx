import Script from "next/script";

/**
 * CRMForm — legacy GoHighLevel iframe form, kept in place for non-homepage
 * pages (ContactPageContent, ThePath/about, services/ConsultationCTA) until
 * those surfaces are migrated.
 *
 * The homepage no longer uses this component. The Hero modal
 * (CaseReviewForm) and the HeroCTA band both render the new
 * NativeCaseReviewForm instead. When the non-homepage pages are migrated,
 * delete this file and the iframe goes with it.
 */
export default function CRMForm({ className }: { className?: string }) {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/6wNw6u81ALfekVKiIo7b"
        className={className}
        style={{ width: "100%", height: "546px", border: "none", borderRadius: "8px", display: "block" }}
        id="inline-6wNw6u81ALfekVKiIo7b"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Contact Form"
        data-height="546"
        data-layout-iframe-id="inline-6wNw6u81ALfekVKiIo7b"
        data-form-id="6wNw6u81ALfekVKiIo7b"
        title="Contact Form"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}

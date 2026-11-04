export const metadata = { title: "Privacy Policy | World Mosaic" };

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 prose prose-neutral">
        <h1 className="font-display text-3xl font-bold text-[var(--color-deep)]">Privacy Policy</h1>
        <p className="text-[var(--color-deep)]/70">Last updated: November 2026</p>
        <p>World Mosaic collects personal information (name, email, mobile, etc.) solely for event registration, communication, and check-in purposes. We do not sell your data. Data is stored securely and retained only as long as necessary for the event and legal requirements. You may request access or deletion by contacting the organizers. QR codes contain only a verification token, not personal data.</p>
        <p>For questions: privacy@worldmosaic.events</p>
      </div>
    </div>
  );
}

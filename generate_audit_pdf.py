"""
Generate the Carter Law Firm design audit PDF for the marketing/design partner.
Run: python generate_audit_pdf.py
Output: Carter-Law-Design-Audit.pdf in the same directory.
"""

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
    HRFlowable,
)

# Brand palette (from DESIGN.md)
NAVY = HexColor("#1E3A5F")
BRONZE = HexColor("#B8956A")
DARK_BRONZE = HexColor("#8A6D4B")
CHARCOAL = HexColor("#1A1A1A")
STEEL = HexColor("#4A5568")
LIGHT_STEEL = HexColor("#8B95A5")
LIGHT_GREY = HexColor("#F8F9FA")
FOG = HexColor("#F2F4F7")
DIVIDER = HexColor("#E2E5EA")

# Severity colors
P0_COLOR = HexColor("#8B1A1A")
P1_COLOR = HexColor("#A85D1C")
P2_COLOR = HexColor("#5C5C5C")
P3_COLOR = HexColor("#8B95A5")


def build_styles():
    base = getSampleStyleSheet()

    styles = {
        "cover_eyebrow": ParagraphStyle(
            "cover_eyebrow",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            textColor=BRONZE,
            leading=11,
            spaceAfter=18,
        ),
        "cover_title": ParagraphStyle(
            "cover_title",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=36,
            leading=42,
            textColor=NAVY,
            spaceAfter=14,
        ),
        "cover_subtitle": ParagraphStyle(
            "cover_subtitle",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=18,
            leading=24,
            textColor=STEEL,
            spaceAfter=36,
        ),
        "cover_meta_label": ParagraphStyle(
            "cover_meta_label",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8,
            textColor=BRONZE,
            leading=11,
        ),
        "cover_meta_value": ParagraphStyle(
            "cover_meta_value",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            textColor=CHARCOAL,
            leading=13,
            spaceAfter=14,
        ),
        "h1": ParagraphStyle(
            "h1",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=22,
            leading=28,
            textColor=NAVY,
            spaceBefore=18,
            spaceAfter=10,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=15,
            leading=20,
            textColor=NAVY,
            spaceBefore=14,
            spaceAfter=6,
        ),
        "h3": ParagraphStyle(
            "h3",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=15,
            textColor=CHARCOAL,
            spaceBefore=10,
            spaceAfter=4,
        ),
        "eyebrow": ParagraphStyle(
            "eyebrow",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8,
            textColor=BRONZE,
            leading=11,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=14.5,
            textColor=CHARCOAL,
            spaceAfter=8,
            alignment=TA_LEFT,
        ),
        "body_muted": ParagraphStyle(
            "body_muted",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13.5,
            textColor=STEEL,
            spaceAfter=6,
        ),
        "finding_title": ParagraphStyle(
            "finding_title",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=12,
            leading=16,
            textColor=NAVY,
            spaceBefore=10,
            spaceAfter=4,
        ),
        "finding_meta": ParagraphStyle(
            "finding_meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=13,
            textColor=STEEL,
            spaceAfter=2,
        ),
        "finding_body": ParagraphStyle(
            "finding_body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13.5,
            textColor=CHARCOAL,
            spaceAfter=4,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=14.5,
            textColor=CHARCOAL,
            leftIndent=14,
            bulletIndent=2,
            spaceAfter=4,
        ),
        "verdict_pill": ParagraphStyle(
            "verdict_pill",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            textColor=white,
            leading=12,
            alignment=TA_CENTER,
        ),
        "footer": ParagraphStyle(
            "footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            textColor=LIGHT_STEEL,
            leading=10,
            alignment=TA_CENTER,
        ),
    }
    return styles


def header_footer(canvas, doc):
    canvas.saveState()
    page_num = canvas.getPageNumber()
    width, _ = LETTER

    if page_num > 1:
        # Header rule
        canvas.setStrokeColor(DIVIDER)
        canvas.setLineWidth(0.5)
        canvas.line(0.75 * inch, 10.55 * inch, width - 0.75 * inch, 10.55 * inch)

        # Eyebrow header
        canvas.setFont("Helvetica-Bold", 7)
        canvas.setFillColor(BRONZE)
        canvas.drawString(0.75 * inch, 10.65 * inch, "DESIGN AUDIT  /  THE CARTER LAW FIRM, P.C.")
        canvas.setFillColor(STEEL)
        canvas.setFont("Helvetica", 7)
        canvas.drawRightString(width - 0.75 * inch, 10.65 * inch, f"PAGE {page_num}")

    # Footer rule and text
    canvas.setStrokeColor(DIVIDER)
    canvas.setLineWidth(0.5)
    canvas.line(0.75 * inch, 0.55 * inch, width - 0.75 * inch, 0.55 * inch)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(LIGHT_STEEL)
    canvas.drawString(
        0.75 * inch,
        0.38 * inch,
        "Prepared for the design and marketing team.  Confidential working document.",
    )
    canvas.drawRightString(width - 0.75 * inch, 0.38 * inch, "carterlawwins.com")
    canvas.restoreState()


def severity_pill(severity, styles):
    """Return a Table holding a colored severity pill."""
    color_map = {
        "P0": P0_COLOR,
        "P1": P1_COLOR,
        "P2": P2_COLOR,
        "P3": P3_COLOR,
    }
    label_map = {
        "P0": "P0  BLOCKING",
        "P1": "P1  MAJOR",
        "P2": "P2  MINOR",
        "P3": "P3  POLISH",
    }
    t = Table(
        [[Paragraph(label_map[severity], styles["verdict_pill"])]],
        colWidths=[1.05 * inch],
        rowHeights=[0.22 * inch],
    )
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), color_map[severity]),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return t


def finding_block(severity, title, location, category, impact, recommendation, wcag, styles):
    """Render one finding as a KeepTogether block."""
    parts = []
    # Severity pill + title row
    header_row = Table(
        [[severity_pill(severity, styles), Paragraph(title, styles["finding_title"])]],
        colWidths=[1.15 * inch, 5.85 * inch],
    )
    header_row.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (0, 0), 2),
                ("TOPPADDING", (1, 0), (1, 0), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    parts.append(header_row)

    if location:
        parts.append(Paragraph(f"<b>Where:</b> {location}", styles["finding_meta"]))
    if category:
        parts.append(Paragraph(f"<b>Category:</b> {category}", styles["finding_meta"]))
    if wcag:
        parts.append(Paragraph(f"<b>Standard:</b> {wcag}", styles["finding_meta"]))
    parts.append(Spacer(1, 4))
    parts.append(Paragraph(f"<b>Why it matters.</b> {impact}", styles["finding_body"]))
    parts.append(Paragraph(f"<b>Recommendation.</b> {recommendation}", styles["finding_body"]))
    parts.append(Spacer(1, 6))

    return KeepTogether(parts)


def score_table(styles):
    rows = [
        [
            Paragraph("<b>Dimension</b>", styles["body"]),
            Paragraph("<b>Score</b>", styles["body"]),
            Paragraph("<b>Key Finding</b>", styles["body"]),
        ],
        [
            Paragraph("Accessibility", styles["body"]),
            Paragraph("<b>2</b> / 4", styles["body"]),
            Paragraph(
                "No reduced-motion CSS, decorative <i>alt=\"\"</i> on key images, "
                "sr-only H1 paired with a visible H2.",
                styles["body"],
            ),
        ],
        [
            Paragraph("Performance", styles["body"]),
            Paragraph("<b>3</b> / 4", styles["body"]),
            Paragraph(
                "Strong base after prior optimization; remaining risk is the "
                "third-party iframe form and the infinite background-position animations.",
                styles["body"],
            ),
        ],
        [
            Paragraph("Theming", styles["body"]),
            Paragraph("<b>2</b> / 4", styles["body"]),
            Paragraph(
                "Tokens partially built; raw hex values bypass the system; "
                "shadow and radius vocabularies are inconsistent across sections.",
                styles["body"],
            ),
        ],
        [
            Paragraph("Responsive Design", styles["body"]),
            Paragraph("<b>3</b> / 4", styles["body"]),
            Paragraph(
                "Mobile menu and tap targets are strong; the Hero portrait "
                "collapses awkwardly on small viewports.",
                styles["body"],
            ),
        ],
        [
            Paragraph("Anti-Patterns", styles["body"]),
            Paragraph("<b>1</b> / 4", styles["body"]),
            Paragraph(
                "Gradient text in active use, gold-shimmer button, identical "
                "card grid, decorative ornament around the Hero portrait, "
                "italic-bronze emphasis as a five-time repeated mannerism.",
                styles["body"],
            ),
        ],
        [
            Paragraph("<b>Total</b>", styles["body"]),
            Paragraph("<b>11</b> / 20", styles["body"]),
            Paragraph(
                "<b>Acceptable.</b> Strong foundation, but four register slips "
                "pull it toward a templated feel rather than a serious-winner feel.",
                styles["body"],
            ),
        ],
    ]

    t = Table(rows, colWidths=[1.4 * inch, 0.8 * inch, 4.8 * inch])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NAVY),
                ("TEXTCOLOR", (0, 0), (-1, 0), white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("BACKGROUND", (0, -1), (-1, -1), FOG),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LINEBELOW", (0, 0), (-1, 0), 0.75, NAVY),
                ("LINEBELOW", (0, 1), (-1, -2), 0.25, DIVIDER),
            ]
        )
    )
    # White text inside header row paragraphs is handled by the BACKGROUND change;
    # the Paragraph color comes from the style we defined, so override via styles.
    return t


def counts_strip(styles):
    """Severity counts strip: P0 x3 / P1 x7 / P2 x8 / P3 x5."""
    cell_style = ParagraphStyle(
        "cell",
        parent=styles["body"],
        alignment=TA_CENTER,
        textColor=white,
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=14,
    )
    label_style = ParagraphStyle(
        "label",
        parent=styles["body"],
        alignment=TA_CENTER,
        textColor=white,
        fontName="Helvetica",
        fontSize=7.5,
        leading=10,
    )

    def cell(label, count, color):
        inner = Table(
            [
                [Paragraph(label, label_style)],
                [Paragraph(f"<b>{count}</b>", cell_style)],
            ],
            colWidths=[1.65 * inch],
            rowHeights=[0.22 * inch, 0.32 * inch],
        )
        inner.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), color),
                    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 2),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
                ]
            )
        )
        return inner

    row = Table(
        [
            [
                cell("BLOCKING", "3", P0_COLOR),
                cell("MAJOR", "7", P1_COLOR),
                cell("MINOR", "8", P2_COLOR),
                cell("POLISH", "5", P3_COLOR),
            ]
        ],
        colWidths=[1.7 * inch] * 4,
    )
    row.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return row


def build_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=LETTER,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        topMargin=0.95 * inch,
        bottomMargin=0.75 * inch,
        title="The Carter Law Firm — Design Audit",
        author="Design Audit",
        subject="Design and accessibility findings for carterlawwins.com",
    )

    styles = build_styles()
    story = []

    # ---------- COVER ----------
    story.append(Spacer(1, 1.0 * inch))
    story.append(Paragraph("DESIGN AUDIT  /  WORKING DOCUMENT", styles["cover_eyebrow"]))
    story.append(
        Paragraph(
            "The Carter Law Firm,<br/>P.C.",
            styles["cover_title"],
        )
    )
    story.append(
        Paragraph(
            "A design and accessibility review of carterlawwins.com",
            styles["cover_subtitle"],
        )
    )
    story.append(HRFlowable(width="100%", thickness=0.75, color=BRONZE, spaceAfter=20))

    # Meta table
    meta_rows = [
        [
            Paragraph("PREPARED FOR", styles["cover_meta_label"]),
            Paragraph("Marketing &amp; Design partner", styles["cover_meta_value"]),
        ],
        [
            Paragraph("SCOPE", styles["cover_meta_label"]),
            Paragraph(
                "Homepage, hero, practice areas, header, navigation, "
                "lead-capture form, Spanish landing page, and shared CSS / tokens.",
                styles["cover_meta_value"],
            ),
        ],
        [
            Paragraph("STACK", styles["cover_meta_label"]),
            Paragraph(
                "Next.js 16 (App Router) &middot; React 19 &middot; Tailwind v4 "
                "&middot; Framer Motion &middot; TypeScript",
                styles["cover_meta_value"],
            ),
        ],
        [
            Paragraph("AUDIENCE OF THE SITE", styles["cover_meta_label"]),
            Paragraph(
                "Recent truck-accident victims, in pain, on a phone, often bilingual. "
                "Primary action: book the free case evaluator. Secondary: Spanish-speaker capture.",
                styles["cover_meta_value"],
            ),
        ],
        [
            Paragraph("BRAND POSITION", styles["cover_meta_label"]),
            Paragraph(
                "Fierce. Boxer / warrior. Winner. Bilingual. "
                "Confidence expressed through restraint, not billboard volume.",
                styles["cover_meta_value"],
            ),
        ],
    ]
    meta = Table(meta_rows, colWidths=[1.6 * inch, 5.4 * inch])
    meta.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.append(meta)
    story.append(PageBreak())

    # ---------- HEADLINE VERDICT ----------
    story.append(Paragraph("Headline", styles["eyebrow"]))
    story.append(
        Paragraph(
            "The bones are strong. The decoration is templated.",
            styles["h1"],
        )
    )
    story.append(
        Paragraph(
            "The site has a serious type pairing, a real palette, and meaningful "
            "performance work already done. The strategic foundation is sound. But four "
            "recurring design decisions pull the site back toward the billboard-firm "
            "register the brand explicitly rejects: a metallic gold gradient on every "
            "primary button, an italic-bronze emphasis used on every section heading, "
            "two animated gradient-text classes in the global stylesheet, and a flat "
            "eight-tile grid that treats truck accidents as one of eight equal practices "
            "rather than the firm&rsquo;s positioning.",
            styles["body"],
        )
    )
    story.append(
        Paragraph(
            "Underneath those is one structural concern worth flagging early: the "
            "primary conversion target on the homepage is an unowned third-party iframe. "
            "That makes the most important element on the site the one we have least "
            "control over &mdash; for accessibility, for tracking, and for Spanish parity.",
            styles["body"],
        )
    )

    story.append(Spacer(1, 14))
    story.append(Paragraph("Issue counts", styles["eyebrow"]))
    story.append(counts_strip(styles))
    story.append(Spacer(1, 18))

    story.append(Paragraph("Audit health score", styles["eyebrow"]))
    story.append(Paragraph("<b>11</b> / 20  &middot;  Acceptable, significant work needed", styles["h2"]))
    story.append(Spacer(1, 8))
    story.append(score_table(styles))

    story.append(PageBreak())

    # ---------- ANTI-PATTERN VERDICT ----------
    story.append(Paragraph("Anti-pattern verdict", styles["eyebrow"]))
    story.append(
        Paragraph(
            "Four design tells make the site read as templated.",
            styles["h1"],
        )
    )
    story.append(
        Paragraph(
            "These are the moves that, if a visitor stops and asks &ldquo;why doesn&rsquo;t "
            "this feel like the firm that&rsquo;s going to win my case&rdquo;, are the "
            "answer. None are catastrophic in isolation. Together, they are the difference "
            "between a brand that feels intentional and one that feels assembled.",
            styles["body"],
        )
    )

    tells = [
        (
            "01.  Gradient text as decoration.",
            "Two classes in the global stylesheet (.shiny-text and .steel-text) animate "
            "a background gradient through the text itself, on infinite loop. Decorative "
            "gradient text is one of the most common templated-design tells. It also "
            "violates standard accessibility guidance, because animated background-position "
            "loops continue indefinitely and ignore the user&rsquo;s reduced-motion "
            "preference.",
        ),
        (
            "02.  The italic-bronze emphasis tic.",
            "Every section headline on the homepage uses the same emphasis device: "
            "italicized Cormorant Garamond, colored bronze. Hero: <i>&ldquo;We&rsquo;re Here "
            "to Help.&rdquo;</i> HeroCTA: <i>&ldquo;We&rsquo;re Here to Help.&rdquo;</i> "
            "PracticeAreas: <i>&ldquo;Expertise.&rdquo;</i> Once is brand. Five times is "
            "a mannerism. The italic should carry weight when it appears, which means it "
            "can&rsquo;t appear everywhere.",
        ),
        (
            "03.  Identical card grid.",
            "The Practice Areas section is eight equal-sized cards: circle icon, heading, "
            "paragraph, &ldquo;Learn More&rdquo; arrow. Truck Accidents, Car Accidents, "
            "Wrongful Death, Bicycle, Pedestrian, Dog Bites, Slip and Fall, Medical "
            "Malpractice &mdash; all treated as visually equivalent. The brand and the "
            "page title both position truck accidents as the firm&rsquo;s practice; the "
            "grid flattens that positioning. Also worth noting: the &ldquo;Slip n&rsquo; "
            "Fall&rsquo;s&rdquo; label is incorrectly punctuated (possessive on a plural).",
        ),
        (
            "04.  Gold metallic button shimmer.",
            "The .gold-button class applies an animated metallic gradient with a "
            "shimmer-on-hover effect to the primary call-to-action across the header, the "
            "hero, and the secondary hero band. This is the move the brand position "
            "explicitly rejects &mdash; the same family as the &ldquo;Texas Hammer&rdquo; "
            "gold-bar logos and the consumer-injury-billboard register the firm is "
            "differentiating against. A heavyweight champion at a press conference does "
            "not shimmer.",
        ),
    ]
    for heading, body in tells:
        story.append(Paragraph(heading, styles["finding_title"]))
        story.append(Paragraph(body, styles["body"]))
        story.append(Spacer(1, 4))

    story.append(PageBreak())

    # ---------- FINDINGS: P0 ----------
    story.append(Paragraph("Findings  /  Blocking", styles["eyebrow"]))
    story.append(Paragraph("Address these before any other change.", styles["h1"]))
    story.append(
        Paragraph(
            "These three are blocking because each one materially harms the experience for "
            "the specific user described in the brand: someone who was injured this week, "
            "is searching on a phone, and may have a head injury or be on pain medication. "
            "They are also the three findings with the clearest accessibility consequences.",
            styles["body"],
        )
    )

    story.append(
        finding_block(
            "P0",
            "No reduced-motion handling in CSS",
            "src/app/globals.css (the file has no prefers-reduced-motion media query at all)",
            "Accessibility  &middot;  Design anti-pattern",
            "Animated gradient backgrounds on .shiny-text, .steel-text, and the "
            ".gold-button shimmer run continuously, regardless of the visitor&rsquo;s "
            "reduced-motion preference. For the exact primary visitor described in the "
            "brand &mdash; concussions, migraines, vestibular disorders &mdash; this is the "
            "single most user-hostile thing on the site. A prefers-reduced-motion check "
            "already exists in JavaScript (src/utils/smoothScroll.ts) but is wired only "
            "to scroll behavior, not to these CSS animations.",
            "Add a single @media (prefers-reduced-motion: reduce) block to globals.css "
            "that disables animation on .shiny-text, .steel-text, and .gold-button::before, "
            "and reduces transition-duration to near zero. In Framer Motion components, "
            "gate whileHover, whileInView, and the entrance variants on the useReducedMotion "
            "hook that ships with the library.",
            "WCAG 2.2.2 Pause/Stop/Hide (Level A); 2.3.3 Animation from Interactions (Level AAA)",
            styles,
        )
    )

    story.append(
        finding_block(
            "P0",
            "Heading hierarchy compromise on the home hero",
            "src/components/sections/hero-section.tsx, lines 60 and 79",
            "Accessibility  &middot;  Information architecture",
            "The visible hero headline is an &lt;h2&gt; (&ldquo;Truck Accident? "
            "We&rsquo;re Here to Help.&rdquo;) and an invisible sr-only &lt;h1&gt; sits "
            "above it carrying the SEO phrase (&ldquo;El Paso Truck Accident Lawyer&rdquo;). "
            "A screen reader announces the SEO phrase first as Heading 1, then the user-facing "
            "message as Heading 2 &mdash; the primary message gets demoted, and the page "
            "reads as having two competing headlines.",
            "Promote the visible headline to &lt;h1&gt; and delete the sr-only one. "
            "Modern Google ranks visible H1s without trouble; the sr-only workaround is "
            "solving a problem that does not exist. If the SEO and brand phrases must "
            "differ, restructure the visible headline to include both.",
            "WCAG 1.3.1 Info and Relationships (Level A); 2.4.6 Headings and Labels (Level AA)",
            styles,
        )
    )

    story.append(
        finding_block(
            "P0",
            "Primary conversion form is an unowned third-party iframe",
            "src/components/ui/CRMForm.tsx (an iframe embed from api.leadconnectorhq.com)",
            "Accessibility  &middot;  Performance  &middot;  Business control",
            "The free case evaluator is the firm&rsquo;s primary lead-capture and the "
            "single most important element on the site. Currently it is an iframe pointing "
            "at a GoHighLevel hosted form. As an iframe, its accessibility cannot be "
            "audited or controlled from this codebase, its 546-pixel fixed height pushes "
            "meaningful content below the fold on most mobile devices and causes layout "
            "shift, its analytics flow to GoHighLevel rather than the firm&rsquo;s own "
            "systems, and there is no clear evidence that the Spanish landing page uses "
            "a Spanish-language form.",
            "Build a native React form that posts to the same GoHighLevel endpoint the "
            "hosted widget submits to. This is the largest item in the audit and worth "
            "scoping as its own engagement. At a minimum, before that lift: verify the "
            "iframe form&rsquo;s accessibility behavior with a screen reader, confirm a "
            "Spanish-language form is wired up at the /es landing page, and document the "
            "tracking gaps explicitly.",
            "WCAG: indeterminate until the iframe&rsquo;s internal markup is audited",
            styles,
        )
    )

    story.append(PageBreak())

    # ---------- FINDINGS: P1 ----------
    story.append(Paragraph("Findings  /  Major", styles["eyebrow"]))
    story.append(Paragraph("Fix in the first design and engineering pass.", styles["h1"]))

    p1_findings = [
        (
            "Reduced-motion preference is honored in JavaScript but not in CSS",
            "src/utils/smoothScroll.ts:96, plus the absence of a CSS counterpart in globals.css",
            "Accessibility  &middot;  Theming",
            "The matchMedia check that drives smooth-scroll behavior is correct, but the "
            "site&rsquo;s decorative CSS animations (gradient-text loops, gold-button "
            "shimmer) and most Framer Motion entrance animations ignore the preference "
            "entirely. The user&rsquo;s setting is half-respected, which is more "
            "confusing than not respecting it at all.",
            "Centralize the check. One JavaScript hook driving Framer Motion, one CSS "
            "media block driving the rest. Keep them in sync as you add new motion.",
            "WCAG 2.3.3 Animation from Interactions",
        ),
        (
            "Em-dashes pervasive in user-visible titles and copy",
            "Multiple page titles in src/app/practice-areas/*, src/app/locations/*, "
            "src/app/es/abogado-de-accidentes/page.tsx (line 57), "
            "src/components/sections/hero-section.tsx (line 93), "
            "src/app/about/page.tsx and src/app/contact/page.tsx metadata",
            "Copy  &middot;  Design anti-pattern",
            "Em-dashes are one of the most reliable AI-writing tells in 2025. They also "
            "break poorly on mobile, leaving an orphaned dash on its own line when titles "
            "wrap. Replacing them is a small change with an outsized effect on how "
            "&ldquo;considered&rdquo; the writing reads.",
            "Find-and-replace user-visible em-dashes with commas, colons, or periods. "
            "For SEO titles, the standard pipe character (|) is the right separator.",
            None,
        ),
        (
            "Italic-bronze emphasis used as a fixed mannerism",
            "Hero (line 81), HeroCTA (line 32), PracticeAreas (line 119), and additional "
            "section headings throughout",
            "Typography  &middot;  Design anti-pattern",
            "The italic-Cormorant-in-bronze move is genuinely strong the first time it "
            "appears. By the fifth, it is read as a template. Cormorant italic is already "
            "a high-expressivity choice; coloring it bronze and using it on every section "
            "divides its impact by however many times it appears.",
            "Keep the italic-bronze move once per page, on the strongest position (the "
            "hero is the right place). Replace others with weight contrast, a small bronze "
            "hairline accent under the heading, or no emphasis at all.",
            None,
        ),
        (
            "Practice Areas grid is the identical-card pattern",
            "src/components/sections/PracticeAreas.tsx, lines 130 through 172",
            "Design anti-pattern  &middot;  Strategy",
            "Eight equal-weight tiles. The firm&rsquo;s page title is &ldquo;El Paso Truck "
            "Accident Lawyer&rdquo;. The grid contradicts that positioning by giving truck "
            "accidents the same visual weight as dog bites. A user scanning the page has no "
            "way to read what the firm is actually known for.",
            "Restructure with hierarchy. Truck Accidents and Car Accidents as larger, "
            "image-led cards at the top; the other six as a compact secondary list or "
            "row of smaller tiles. While in there, fix the &ldquo;Slip n&rsquo; "
            "Fall&rsquo;s&rdquo; punctuation.",
            None,
        ),
        (
            "Gold-button shimmer is the billboard-register slip",
            "src/app/globals.css, lines 94 through 141; applied across header, hero, and HeroCTA",
            "Design anti-pattern  &middot;  Brand",
            "The metallic gold gradient with a shimmer-on-hover is the single most "
            "recognizably &ldquo;injury-firm billboard&rdquo; element on the site. The "
            "brand position explicitly rejects this register. There is also an accessibility "
            "concern: text contrast against the gradient varies as the gradient animates, "
            "so a measurement taken at one instant may not represent what users see in "
            "another.",
            "Two viable options. First: replace with a solid bronze fill at "
            "oklch(70% 0.075 75), sharp edges, no shimmer, with a single 1-pixel navy "
            "focus outline. Second: keep one signature gold treatment on the homepage "
            "hero CTA only, and remove it from the header and the HeroCTA band. Option "
            "one is the stronger move for the brand position.",
            None,
        ),
        (
            "Hero portrait is wrapped in two decorative rotated frames",
            "src/components/sections/hero-section.tsx, lines 137 and 138",
            "Design anti-pattern",
            "A light-grey card rotated minus-three degrees sits behind the attorney "
            "portrait, and a bronze-border ring rotated plus-three degrees sits over it. "
            "This is the &ldquo;scrapbook&rdquo; pattern and it pulls the register toward "
            "consumer-warm rather than fierce. With the dim overlay on the hero background, "
            "the rotated rectangles also clip the portrait&rsquo;s edges visually.",
            "Single backplate, no rotation, or no backplate at all. Let the portrait sit "
            "on the dim background unframed. The seriousness of the photograph carries "
            "the moment without help from decoration.",
            None,
        ),
        (
            "Decorative alt-empty on images that may carry information",
            "src/app/claim-review/page.tsx (line 27); src/components/sections/PracticeAreas.tsx (line 165)",
            "Accessibility",
            "The claim-review hero image is currently marked alt-empty, but a claim-review "
            "image is almost certainly conveying something the surrounding copy does not. "
            "The PracticeAreas hover-revealed background image is plausibly decorative, "
            "but worth a deliberate check.",
            "Run each alt-empty instance against the WAI Image Decision Tree. When in doubt, "
            "write the alt text; an inaccurate description is better than no description.",
            "WCAG 1.1.1 Non-text Content (Level A)",
        ),
    ]
    for title, location, category, impact, recommendation, wcag in p1_findings:
        story.append(
            finding_block("P1", title, location, category, impact, recommendation, wcag, styles)
        )

    story.append(PageBreak())

    # ---------- FINDINGS: P2 ----------
    story.append(Paragraph("Findings  /  Minor", styles["eyebrow"]))
    story.append(Paragraph("Fix in the second pass, alongside theming work.", styles["h1"]))

    p2_findings = [
        (
            "Raw hex color appears in JSX, bypassing the token system",
            "src/app/page.tsx (line 33): bg-[#F2F4F7]",
            "Theming",
            "The light grey used on the case-evaluator section is a one-off hex value "
            "that bypasses the existing color system. Either it should reuse the "
            "existing &lsquo;light-grey&rsquo; token, or it should be promoted to its "
            "own named token if the slightly cooler tint is intentional.",
            "Promote to a named token (suggest --color-fog) or collapse into --color-light-grey.",
            None,
        ),
        (
            "Card corner radius vocabulary is inconsistent",
            "PracticeAreas.tsx uses rounded-sm; HeroCTA.tsx uses rounded-2xl and rounded-xl; "
            "others mix rounded-md, rounded-lg, rounded-xl interchangeably",
            "Theming",
            "There is no single answer to &ldquo;what does a card look like on this site.&rdquo; "
            "Reading across sections, depth and shape vary section-to-section in ways that "
            "are not communicating anything.",
            "Pick one default (suggest rounded-xl) and use it everywhere a card appears. "
            "Document the exceptions explicitly.",
            None,
        ),
        (
            "Shadow vocabulary is not tokenized",
            "shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl all used interchangeably across components",
            "Theming",
            "Same problem as the radii: depth choices vary meaninglessly between "
            "sections. Without a named system (resting / elevated / overlay), each "
            "author guesses.",
            "Define two or three semantic shadow tokens (shadow-card, shadow-elevated, "
            "shadow-overlay) and replace ad-hoc shadow utility usage.",
            None,
        ),
        (
            "Button component has two near-duplicate primary variants",
            "src/components/ui/Button.tsx, line 18",
            "Theming  &middot;  Code quality",
            "The component exposes a &lsquo;primary&rsquo; variant that is solid bronze, "
            "but most call sites override it with className=&ldquo;gold-button&rdquo; to "
            "use the CSS gradient instead. The variant API is misleading because the "
            "variant name does not match the visual rendering anyone is actually using.",
            "Decide whether the gold-gradient button is canonical (in which case absorb it "
            "into the variant API) or whether the solid bronze is canonical (in which case "
            "remove the gold-button class usage).",
            None,
        ),
        (
            "Arbitrary max-width magic number in the header container",
            "src/components/layout/Header.tsx, lines 243 and 303 (2xl:max-w-[95vw])",
            "Theming  &middot;  Responsive",
            "Inline arbitrary value sits in two places. Either it should be a named "
            "container width or the standard Tailwind container behavior is sufficient.",
            "Use the Tailwind container or a named max-width utility.",
            None,
        ),
        (
            "Location dropdown labels &ldquo;El Paso&rdquo; as the root URL",
            "src/components/layout/Header.tsx, line 25",
            "Information architecture",
            "The locations dropdown lists El Paso, Dallas, and Phoenix. Dallas and Phoenix "
            "each have their own /locations/* page; El Paso links to /. The information "
            "architecture is inconsistent and may confuse users who expect parallel "
            "location pages.",
            "Either give El Paso its own /locations/el-paso page (with the homepage "
            "remaining the firm&rsquo;s root) or relabel the dropdown to be honest about "
            "the asymmetry.",
            None,
        ),
        (
            "useEffect dependency array missing the locations dropdown state",
            "src/components/layout/Header.tsx, line 128",
            "Correctness",
            "The click-outside effect lists [isServicesDropdownOpen] in its dependency "
            "array but not [isLocationsDropdownOpen]. Closure capture means the locations "
            "dropdown may not reliably close when the user clicks outside it.",
            "Add isLocationsDropdownOpen to the dependency array.",
            None,
        ),
        (
            "Eyebrow label classes repeated inline 15+ times",
            "Throughout Header.tsx and several section components",
            "Theming",
            "The cluster &lsquo;tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs "
            "font-bold text-bronze&rsquo; appears inline in many places. This is the "
            "site&rsquo;s eyebrow label style; it should be a single component or utility "
            "class.",
            "Extract to an Eyebrow component or a single .eyebrow utility class.",
            None,
        ),
    ]
    for title, location, category, impact, recommendation, wcag in p2_findings:
        story.append(
            finding_block("P2", title, location, category, impact, recommendation, wcag, styles)
        )

    story.append(PageBreak())

    # ---------- FINDINGS: P3 ----------
    story.append(Paragraph("Findings  /  Polish", styles["eyebrow"]))
    story.append(Paragraph("Address opportunistically.", styles["h1"]))

    p3_findings = [
        (
            "Inline logo uses native &lt;img&gt; rather than next/image",
            "src/components/sections/HeroCTA.tsx, line 60",
            "Performance",
            "Minor optimization opportunity: the logo image is hand-rendered with &lt;img&gt; "
            "and bypasses Next.js&rsquo;s image optimization pipeline.",
            "Switch to next/image.",
            None,
        ),
        (
            "Hero subline copy reads as templated",
            "src/components/sections/hero-section.tsx, line 93",
            "Copy  &middot;  Anti-pattern",
            "The line &lsquo;Millions Recovered for the Injured. We don&rsquo;t just take "
            "cases&mdash;we win them.&rsquo; is two AI tells in one sentence: an em-dash, "
            "and the &lsquo;not just X, we Y&rsquo; rhetorical move that LLMs reach for "
            "by default. It also breaks the &lsquo;show wins, don&rsquo;t claim them&rsquo; "
            "principle &mdash; &lsquo;Millions Recovered&rsquo; is a claim; the Results "
            "Gallery below it is the proof. The claim is doing the work the proof should "
            "do.",
            "Rewrite with a single concrete fact. For example: &lsquo;Sixteen years in "
            "El Paso courtrooms. We do not settle cheap.&rsquo; Or surface an actual case "
            "figure if one is permitted by the firm&rsquo;s advertising rules.",
            None,
        ),
        (
            "Header auto-hide-on-scroll-down hides the phone CTA",
            "src/components/layout/Header.tsx, lines 55 through 82",
            "User experience  &middot;  Conversion",
            "The header hides on scroll-down and reappears on scroll-up. On the homepage "
            "this feels twitchy because the page is short. More importantly, the phone "
            "number is hidden during the scroll-down window &mdash; the moment a user is "
            "reading on a mobile phone is exactly the moment the phone number should "
            "remain reachable.",
            "Disable auto-hide on the home page, or keep a slim sticky strip with the "
            "phone number visible even when the main header is hidden.",
            None,
        ),
        (
            "Decorative skewed background rectangle in HeroCTA",
            "src/components/sections/HeroCTA.tsx, line 20",
            "Anti-pattern (mild)",
            "A half-width white rectangle, skewed -12 degrees, sits behind the section. It "
            "does not say anything; it is a &lsquo;we should have a graphic here&rsquo; "
            "filler shape.",
            "Remove. Let the layout breathe.",
            None,
        ),
        (
            "Decorative blurred bronze glow behind the case-review form",
            "src/components/sections/HeroCTA.tsx, line 67",
            "Anti-pattern (glassmorphism-adjacent)",
            "bg-bronze/5 blur-3xl rounded-full behind the form. Low-purpose decoration "
            "that nudges toward the glassmorphism register the brand should not adopt as "
            "a default.",
            "Remove.",
            None,
        ),
        (
            "Spanish landing page still renders the English header",
            "src/app/es/abogado-de-accidentes/page.tsx, line 53",
            "Brand  &middot;  Accessibility",
            "The Spanish landing page imports the same Header component as the English "
            "site, so a /es visitor sees English navigation. The brand principle &lsquo;Spanish "
            "is a peer, not a translation&rsquo; is stated but not implemented.",
            "Either render a Spanish-locale Header (translated nav labels) or pass a "
            "locale prop through the Header. Larger structurally: route the entire /es "
            "tree through a locale-aware layout.",
            None,
        ),
    ]
    for title, location, category, impact, recommendation, wcag in p3_findings:
        story.append(
            finding_block("P3", title, location, category, impact, recommendation, wcag, styles)
        )

    story.append(PageBreak())

    # ---------- SYSTEMIC ----------
    story.append(Paragraph("Patterns  /  Systemic", styles["eyebrow"]))
    story.append(Paragraph("Why the individual findings show up together.", styles["h1"]))
    story.append(
        Paragraph(
            "Looking across the findings, five themes recur. Treat these as the "
            "underlying conditions; the individual findings are the symptoms.",
            styles["body"],
        )
    )

    systemic = [
        (
            "Decoration substituted for information.",
            "The gold-button shimmer, the double-rotated portrait frames, the blurred "
            "bronze glow behind the form, and the skewed half-white rectangle in HeroCTA "
            "all exist to look designed rather than to do work. The brand position &mdash; "
            "&lsquo;every element justifies the user&rsquo;s pain tax&rsquo; &mdash; "
            "directly targets this pattern.",
        ),
        (
            "Token system is half-built.",
            "Color and typography tokens exist and are reasonable. Shadows, corner radii, "
            "motion durations, and the eyebrow label style are not tokenized. The drift "
            "between sections is visible to a careful viewer as &ldquo;why does each card "
            "feel slightly different.&rdquo;",
        ),
        (
            "Italic-bronze is the only emphasis tool the site has.",
            "Because every section reaches for the same emphasis device, none of them get "
            "the lift the device should provide. The fix is not to remove it but to "
            "share the load with weight contrast, hairline accents, and color flips.",
        ),
        (
            "Spanish is currently a translation, not a peer.",
            "A single /es URL exists, with the same English Header, and the lead-capture "
            "form is the same English iframe. The brand principle is right; the "
            "implementation does not match it yet.",
        ),
        (
            "Em-dashes everywhere.",
            "Both a copy-style rule violation and a visible AI tell. They show up in page "
            "titles, meta descriptions, and visible body copy. Single sweep fixes it.",
        ),
    ]
    for heading, body in systemic:
        story.append(Paragraph(heading, styles["finding_title"]))
        story.append(Paragraph(body, styles["body"]))
        story.append(Spacer(1, 4))

    story.append(Spacer(1, 14))

    # ---------- POSITIVE ----------
    story.append(Paragraph("What is already working", styles["eyebrow"]))
    story.append(Paragraph("Preserve these. They are doing real work.", styles["h1"]))

    positives = [
        "The brand foundation is articulated and honest. PRODUCT.md and DESIGN.md capture "
        "a primary user (recent truck-accident victim, in pain, on a phone, often "
        "bilingual) that is specific enough to guide every later decision.",
        "The Cormorant Garamond and Inter pairing is a real type direction. It avoids the "
        "genre default (Trajan and Times) and pairs gravitas with clarity. This is the "
        "strongest single design choice on the site.",
        "Tinted neutrals avoid the dark-charcoal-on-true-white trap that most law-firm "
        "sites fall into. Steel and light-steel are restrained, considered choices.",
        "Schema.org markup is comprehensive. LocalBusiness, LegalService, Breadcrumb, and "
        "FAQPage schemas are present where they should be, which materially helps SEO and "
        "entity recognition.",
        "alternates.canonical is set on every page. This is correct and many sites miss it.",
        "The Jurisdiction Bar (TX / AZ / NM coverage) is the most efficient trust-signal "
        "element on the homepage. Concrete, scannable, and says something a competitor&rsquo;s "
        "tagline can&rsquo;t.",
        "The mobile menu is properly built: full-screen slide-in, explicit close button, "
        "scroll-locked body, accessible spring animation. It is genuinely good work.",
        "Significant performance optimization work has already been done (see "
        "PERFORMANCE_AUDIT_REPORT.md). will-change hints, GPU acceleration, scroll throttling, "
        "and IntersectionObserver consolidation are real and visible in the code.",
        "priority on the hero image and lite-youtube-embed for video are the right calls.",
    ]
    for p in positives:
        story.append(Paragraph(f"&bull;  {p}", styles["body"]))

    story.append(PageBreak())

    # ---------- NEXT STEPS ----------
    story.append(Paragraph("Recommended sequence", styles["eyebrow"]))
    story.append(Paragraph("Four passes, in this order.", styles["h1"]))
    story.append(
        Paragraph(
            "This is the sequence I would run if I were doing the work. It front-loads "
            "the changes that meaningfully harm users and saves the visual polish for "
            "after the structural work is in place.",
            styles["body"],
        )
    )

    sequence = [
        (
            "01.  Blocking pass",
            "Add reduced-motion handling in CSS and Framer Motion. Promote the visible "
            "hero headline to an H1 and remove the sr-only H1. Scope the lead-capture "
            "form replacement as a separate engagement (it is too large to handle inside "
            "this pass, but it is the most important item on the list).",
        ),
        (
            "02.  Typography and theming",
            "Reduce the italic-bronze emphasis to one instance per page. Extract the "
            "eyebrow label style. Define and apply shadow and radius vocabularies. "
            "Tokenize the raw hex value in the page background.",
        ),
        (
            "03.  First polish pass",
            "Replace the gold-button shimmer with a solid bronze fill across the whole "
            "site (or restrict to one signature CTA, but the cleaner move is to replace "
            "it everywhere). Restructure the Practice Areas grid to give Truck and Car "
            "Accidents hierarchy. Fix the Slip-and-Fall punctuation. Sweep em-dashes "
            "from page titles, metadata, and visible copy. Replace the double-rotated "
            "frames behind the hero portrait. Fix the case-sensitive Button import "
            "convention. Audit the alt-empty images.",
        ),
        (
            "04.  Second polish pass",
            "Address remaining minor items. Convert HeroCTA&rsquo;s img to next/image. "
            "Rewrite the hero subline. Reconsider the header auto-hide on the homepage. "
            "Remove the decorative skew and blur ornaments in HeroCTA. Build a Spanish "
            "Header, or accept the deferral with an explicit ticket.",
        ),
    ]
    for heading, body in sequence:
        story.append(Paragraph(heading, styles["finding_title"]))
        story.append(Paragraph(body, styles["body"]))
        story.append(Spacer(1, 4))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.75, color=BRONZE, spaceBefore=8, spaceAfter=14))
    story.append(
        Paragraph(
            "&mdash; End of audit. Questions or pushback on any specific finding are "
            "welcome; everything here is a recommendation, not a directive.",
            styles["body_muted"],
        )
    )

    # ---- Build ----
    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)


if __name__ == "__main__":
    import os
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Carter-Law-Design-Audit.pdf")
    build_pdf(out)
    print(f"Wrote: {out}")

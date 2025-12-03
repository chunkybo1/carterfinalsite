import { 
  Shield, 
  Activity, 
  Car, 
  Flame, 
  Briefcase, 
  AlertTriangle, 
  ShieldAlert, 
  Scale,
  LucideIcon,
} from "lucide-react";

export interface PracticeAreaData {
  id: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  href: string;
  overview: string;
  whoNeedsThis: string;
  complexityFactors: string[];
  caseTypes: string[];
  featuredResults: {
    amount: string;
    caseType: string;
    context: string;
    challenge: string;
  }[];
  processSteps: {
    step: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaMessage: string;
}

export const PRACTICE_AREAS_DATA: PracticeAreaData[] = [
  {
    id: "personal-injury",
    title: "Fighting for the Injured",
    shortDescription: "When negligence causes harm, we fight for the compensation you deserve.",
    icon: Shield,
    href: "/practice-areas/personal-injury",
    overview: "Personal injury law exists because accidents happen—but not all accidents are truly accidental. When someone else's negligence, recklessness, or intentional harm causes you injury, you have the right to seek compensation. At Carter Law, we've represented hundreds of injury victims across El Paso, Texas, and throughout the Southwest. We understand that behind every case file is a person whose life has been disrupted, whose family is worried, and whose future feels uncertain. Our job isn't just to file paperwork—it's to fight for the full measure of justice you deserve, whether that means negotiating a fair settlement or taking your case to trial.",
    whoNeedsThis: "If you've been injured due to someone else's negligence—whether in a car accident, slip and fall, workplace incident, or any other preventable situation—you may have a personal injury claim. We represent individuals and families who have suffered physical injuries, emotional trauma, and financial losses through no fault of their own.",
    complexityFactors: [
      "Determining liability when multiple parties are involved",
      "Calculating long-term damages for permanent injuries",
      "Dealing with insurance companies who delay or deny claims",
      "Proving negligence when evidence is limited",
      "Navigating comparative fault laws in Texas"
    ],
    caseTypes: [
      "Car accidents and motor vehicle collisions",
      "Truck and commercial vehicle accidents",
      "Motorcycle crashes",
      "Pedestrian and bicycle accidents",
      "Slip and fall incidents",
      "Premises liability cases",
      "Dog bites and animal attacks",
      "Assault and battery cases",
      "Wrongful injury claims",
      "Construction site accidents",
      "Recreational accidents",
      "Boating and watercraft accidents",
      "Railroad crossing accidents",
      "Public transportation incidents",
      "Accidents involving defective products"
    ],
    featuredResults: [
      {
        amount: "$2.3 Million",
        caseType: "Truck Accident",
        context: "Client suffered permanent spinal injuries after being rear-ended by a commercial truck on I-10",
        challenge: "Insurance company claimed client was partially at fault and offered $150,000 initial settlement"
      },
      {
        amount: "$850,000",
        caseType: "Slip and Fall",
        context: "Elderly client fractured hip in poorly maintained grocery store parking lot",
        challenge: "Property owner denied responsibility, claiming client should have seen the hazard"
      },
      {
        amount: "$1.1 Million",
        caseType: "Motorcycle Accident",
        context: "Motorcyclist hit by distracted driver, resulting in multiple surgeries and lost wages",
        challenge: "Driver's insurance attempted to minimize damages, claiming client was speeding"
      }
    ],
    processSteps: [
      {
        step: "Initial Consultation",
        description: "We listen to your story, review any documentation you have, and assess the viability of your case. This consultation is completely free and confidential."
      },
      {
        step: "Investigation & Evidence Gathering",
        description: "Our team immediately begins collecting evidence: police reports, medical records, witness statements, photographs, and expert analysis. We preserve everything that could support your claim."
      },
      {
        step: "Medical Treatment Coordination",
        description: "We work with your medical providers to ensure you receive proper treatment and that all medical expenses are properly documented for your claim."
      },
      {
        step: "Negotiation with Insurance",
        description: "We handle all communication with insurance companies, negotiating aggressively for a fair settlement. Most cases resolve at this stage, but we're always prepared to go to trial."
      },
      {
        step: "Trial Preparation (if needed)",
        description: "If insurance companies refuse to offer fair compensation, we prepare your case for trial. Our thorough preparation often leads to better settlement offers before trial."
      }
    ],
    faqs: [
      {
        question: "How long do I have to file a personal injury claim in Texas?",
        answer: "In Texas, you generally have two years from the date of injury to file a personal injury lawsuit. However, there are exceptions and complexities that could affect this deadline. It's crucial to consult with an attorney as soon as possible to protect your rights."
      },
      {
        question: "What if I was partially at fault for the accident?",
        answer: "Texas follows a modified comparative fault rule. If you're found to be 50% or less at fault, you can still recover damages, but your compensation will be reduced by your percentage of fault. If you're more than 50% at fault, you cannot recover damages. We fight to minimize any fault assigned to our clients."
      },
      {
        question: "How much is my case worth?",
        answer: "Case value depends on multiple factors: the severity of your injuries, medical expenses (past and future), lost wages, pain and suffering, and the strength of evidence. We conduct a thorough analysis of your specific case to determine a fair value range. No attorney can guarantee a specific outcome, but we fight for maximum compensation."
      },
      {
        question: "Do I have to pay upfront legal fees?",
        answer: "No. We work on a contingency fee basis, meaning we only get paid if we win your case. Our fee is a percentage of the settlement or verdict, and we cover all case expenses upfront. If we don't win, you don't pay attorney fees."
      },
      {
        question: "How long will my case take?",
        answer: "Simple cases can resolve in 3-6 months. More complex cases, especially those requiring litigation, may take 1-2 years or longer. We work as efficiently as possible while ensuring we don't settle for less than you deserve. We'll keep you informed throughout the process."
      }
    ],
    ctaMessage: "Injured due to someone else's negligence? Let's discuss your options and fight for the compensation you deserve."
  },
  {
    id: "medical-malpractice",
    title: "Holding Healthcare Accountable",
    shortDescription: "Doctors make mistakes. We make them answer for it.",
    icon: Activity,
    href: "/practice-areas/medical-malpractice",
    overview: "When you place your trust in a healthcare provider, you expect competent, careful treatment. Unfortunately, medical errors happen far more often than most people realize. Medical malpractice occurs when a healthcare provider deviates from the accepted standard of care, causing injury or death. These cases are among the most complex in personal injury law, requiring deep understanding of medical procedures, expert testimony, and meticulous case preparation. At Carter Law, we've successfully represented clients who have suffered from surgical errors, misdiagnoses, medication mistakes, and other forms of medical negligence. We work with leading medical experts to build cases that hold healthcare providers accountable.",
    whoNeedsThis: "If you or a loved one has been harmed by a medical error—whether during surgery, diagnosis, treatment, or medication management—you may have a medical malpractice claim. These cases require immediate action due to strict deadlines and the need to preserve evidence.",
    complexityFactors: [
      "Proving deviation from standard of care",
      "Establishing causation between error and injury",
      "Navigating medical review panels in Texas",
      "Working with medical experts across specialties",
      "Understanding complex medical terminology and procedures"
    ],
    caseTypes: [
      "Surgical errors and wrong-site surgery",
      "Misdiagnosis or delayed diagnosis",
      "Medication errors and prescription mistakes",
      "Birth injuries and obstetric malpractice",
      "Anesthesia errors",
      "Emergency room negligence",
      "Hospital-acquired infections",
      "Failure to obtain informed consent",
      "Radiology and imaging errors",
      "Nursing home abuse and neglect",
      "Dental malpractice",
      "Psychiatric malpractice",
      "Failure to monitor patients",
      "Discharge errors and premature release",
      "Laboratory and pathology errors"
    ],
    featuredResults: [
      {
        amount: "$3.2 Million",
        caseType: "Surgical Error",
        context: "Surgeon operated on wrong spinal level, causing permanent nerve damage",
        challenge: "Hospital and surgeon denied error, claimed patient's condition was pre-existing"
      },
      {
        amount: "$1.8 Million",
        caseType: "Misdiagnosis",
        context: "Doctor failed to diagnose cancer for 18 months, allowing disease to progress",
        challenge: "Medical review panel initially found no deviation from standard of care"
      },
      {
        amount: "$2.5 Million",
        caseType: "Birth Injury",
        context: "Obstetrician's negligence during delivery caused permanent brain injury to infant",
        challenge: "Complex medical causation required multiple expert witnesses"
      }
    ],
    processSteps: [
      {
        step: "Case Evaluation",
        description: "We review your medical records, consult with medical experts, and determine if malpractice occurred. Medical malpractice cases require proof that the provider deviated from accepted standards."
      },
      {
        step: "Medical Expert Review",
        description: "We engage board-certified medical experts in the relevant specialty to review your case and provide opinions on standard of care violations and causation."
      },
      {
        step: "Pre-Suit Requirements",
        description: "Texas requires notice to healthcare providers and often a medical review panel before filing suit. We handle all procedural requirements."
      },
      {
        step: "Litigation & Discovery",
        description: "We file suit and conduct thorough discovery, deposing medical providers and building a comprehensive case for trial."
      },
      {
        step: "Trial or Settlement",
        description: "Most medical malpractice cases require going to trial or negotiating from a position of trial readiness. We prepare every case as if it will go to a jury."
      }
    ],
    faqs: [
      {
        question: "What is the statute of limitations for medical malpractice in Texas?",
        answer: "Generally, you have two years from the date the malpractice occurred or was discovered (with a maximum of 10 years from the date of treatment). However, there are exceptions, and the discovery rule can be complex. It's critical to consult an attorney immediately."
      },
      {
        question: "Do I need to prove the doctor intended to harm me?",
        answer: "No. Medical malpractice is about negligence, not intent. You need to prove the healthcare provider failed to meet the standard of care that a reasonable provider would have provided under similar circumstances, and that this failure caused your injury."
      },
      {
        question: "Can I sue a hospital for a doctor's mistake?",
        answer: "It depends on the doctor's relationship with the hospital. If the doctor is a hospital employee, the hospital can be held liable. If the doctor is an independent contractor, liability is more complex. We investigate these relationships in every case."
      },
      {
        question: "How much does it cost to pursue a medical malpractice case?",
        answer: "We work on a contingency fee basis—no upfront costs. We cover all expenses (expert witnesses, medical records, court costs) and only get paid if we win. Medical malpractice cases are expensive to pursue, which is why many firms won't take them. We invest in strong cases."
      },
      {
        question: "What if the medical error happened years ago?",
        answer: "The statute of limitations may still allow your case, especially if you only recently discovered the error. However, time is critical. The sooner we can investigate and preserve evidence, the stronger your case will be."
      }
    ],
    ctaMessage: "Suffered harm from a medical error? We have the expertise to hold healthcare providers accountable and fight for your recovery."
  },
  {
    id: "car-accidents",
    title: "After the Wreck",
    shortDescription: "We handle the insurers so you can focus on healing.",
    icon: Car,
    href: "/practice-areas/car-accidents",
    overview: "Car accidents are among the most common causes of personal injury, and they can happen in an instant—changing lives forever. Whether you were hit by a distracted driver, rear-ended at a stoplight, or involved in a multi-vehicle pileup, the aftermath is overwhelming. Medical bills pile up, you can't work, and insurance companies start calling with lowball offers. At Carter Law, we've handled thousands of car accident cases across El Paso and throughout Texas. We know the tactics insurance companies use to minimize payouts, and we fight back. Our goal is simple: get you the maximum compensation so you can focus on recovery, not financial stress.",
    whoNeedsThis: "If you've been injured in a car accident—whether as a driver, passenger, pedestrian, or cyclist—you need experienced representation. Even seemingly minor accidents can result in serious injuries that develop over time. Don't accept the first settlement offer without legal counsel.",
    complexityFactors: [
      "Dealing with multiple insurance companies",
      "Proving fault in complex multi-vehicle accidents",
      "Calculating future medical expenses and lost earning capacity",
      "Handling uninsured or underinsured motorist claims",
      "Navigating Texas's modified comparative fault laws"
    ],
    caseTypes: [
      "Rear-end collisions",
      "T-bone and side-impact accidents",
      "Head-on collisions",
      "Multi-vehicle pileups",
      "Hit-and-run accidents",
      "Accidents involving commercial vehicles",
      "Rideshare accidents (Uber, Lyft)",
      "Parking lot accidents",
      "Intersection accidents",
      "Highway and freeway accidents",
      "Accidents caused by road defects",
      "Drunk driving accidents",
      "Distracted driving accidents",
      "Speeding and reckless driving accidents",
      "Accidents involving defective vehicle parts"
    ],
    featuredResults: [
      {
        amount: "$1.4 Million",
        caseType: "Multi-Vehicle Pileup",
        context: "Client injured in 5-car accident on I-10, requiring multiple surgeries",
        challenge: "Multiple insurance companies attempted to shift blame, delaying settlement"
      },
      {
        amount: "$675,000",
        caseType: "Rear-End Collision",
        context: "Client suffered whiplash and herniated discs after being rear-ended at high speed",
        challenge: "Insurance company claimed injuries were pre-existing and offered $25,000"
      },
      {
        amount: "$950,000",
        caseType: "T-Bone Accident",
        context: "Client hit by driver running red light, resulting in broken pelvis and long recovery",
        challenge: "Other driver's insurance disputed liability despite clear evidence"
      }
    ],
    processSteps: [
      {
        step: "Immediate Action",
        description: "We help you preserve evidence, get proper medical attention, and avoid mistakes that could hurt your case. Don't give statements to insurance companies without us."
      },
      {
        step: "Investigation",
        description: "We gather police reports, witness statements, traffic camera footage, vehicle data, and accident reconstruction analysis to build a strong case."
      },
      {
        step: "Medical Documentation",
        description: "We ensure all your injuries are properly documented and that you receive appropriate treatment. Medical records are crucial evidence in car accident cases."
      },
      {
        step: "Insurance Negotiation",
        description: "We handle all communication with insurance companies, negotiating aggressively. We know their tactics and won't let them take advantage of you."
      },
      {
        step: "Settlement or Trial",
        description: "Most cases settle, but we're always prepared to go to trial if insurance companies refuse to offer fair compensation. Our trial readiness often leads to better settlements."
      }
    ],
    faqs: [
      {
        question: "What should I do immediately after a car accident?",
        answer: "First, ensure everyone's safety and call 911. Get medical attention even if you feel fine—some injuries appear later. Document the scene with photos, get contact information from witnesses, and contact an attorney before speaking with insurance companies. Don't admit fault or give recorded statements without legal counsel."
      },
      {
        question: "How long do I have to file a car accident claim in Texas?",
        answer: "You generally have two years from the date of the accident to file a personal injury lawsuit. However, you should act much sooner to preserve evidence and begin the claims process. Insurance companies have their own deadlines for reporting accidents."
      },
      {
        question: "What if the other driver doesn't have insurance?",
        answer: "You can file a claim with your own uninsured/underinsured motorist coverage if you have it. We help you navigate these claims and fight for full compensation even when the at-fault driver lacks adequate insurance."
      },
      {
        question: "How much compensation can I receive?",
        answer: "Compensation depends on your injuries, medical expenses, lost wages, pain and suffering, and property damage. We fight for all recoverable damages, including future medical costs and lost earning capacity if your injuries are permanent."
      },
      {
        question: "Do I need a lawyer for a car accident claim?",
        answer: "While you can handle a claim yourself, insurance companies have teams of adjusters and lawyers working to minimize payouts. Studies show that accident victims with attorneys typically receive 3-4 times more compensation than those without. We level the playing field."
      }
    ],
    ctaMessage: "Injured in a car accident? Don't let insurance companies take advantage. We fight for maximum compensation so you can focus on recovery."
  },
  {
    id: "wrongful-death",
    title: "Justice for Families",
    shortDescription: "Compassionate advocacy for those left behind by tragedy.",
    icon: Flame,
    href: "/practice-areas/wrongful-death",
    overview: "Losing a loved one is devastating. When that loss is caused by someone else's negligence or wrongdoing, the grief is compounded by anger, confusion, and the overwhelming burden of financial responsibility. Wrongful death claims allow surviving family members to seek justice and compensation for their loss. These cases are among the most emotionally challenging we handle, and we approach them with the compassion, respect, and fierce advocacy that families deserve. We've helped families across El Paso and Texas hold negligent parties accountable while securing the financial resources needed to move forward.",
    whoNeedsThis: "If you've lost a family member due to someone else's negligence—whether in an accident, medical malpractice, workplace incident, or other preventable tragedy—you may have a wrongful death claim. Surviving spouses, children, and parents may be eligible to file claims.",
    complexityFactors: [
      "Calculating the full value of a lost life",
      "Proving causation when the victim cannot testify",
      "Navigating complex family relationships and beneficiaries",
      "Dealing with insurance companies during profound grief",
      "Understanding Texas wrongful death statutes and limitations"
    ],
    caseTypes: [
      "Fatal car and truck accidents",
      "Wrongful death from medical malpractice",
      "Workplace fatalities",
      "Premises liability deaths",
      "Product liability fatalities",
      "Construction site fatalities",
      "Pedestrian and bicycle fatalities",
      "Boating and watercraft fatalities",
      "Aviation accidents",
      "Nursing home neglect leading to death",
      "Criminal acts leading to death",
      "Fatal fires and explosions",
      "Toxic exposure fatalities",
      "Fatal workplace accidents",
      "Fatalities from defective products"
    ],
    featuredResults: [
      {
        amount: "$4.1 Million",
        caseType: "Truck Accident Fatality",
        context: "Family lost father and husband in collision with commercial truck",
        challenge: "Trucking company denied liability, claimed driver was independent contractor"
      },
      {
        amount: "$2.7 Million",
        caseType: "Medical Malpractice",
        context: "Wife lost husband due to surgical error during routine procedure",
        challenge: "Hospital and surgeon both denied responsibility, complex medical causation"
      },
      {
        amount: "$1.9 Million",
        caseType: "Workplace Fatality",
        context: "Family lost son in construction site accident due to safety violations",
        challenge: "Multiple defendants, workers' compensation complications"
      }
    ],
    processSteps: [
      {
        step: "Compassionate Consultation",
        description: "We meet with family members to understand their loss, explain the legal process, and assess the viability of a wrongful death claim. We handle these sensitive conversations with care and respect."
      },
      {
        step: "Investigation",
        description: "We conduct thorough investigation to determine liability, gathering evidence, witness statements, and expert analysis. We work to understand exactly what happened and who is responsible."
      },
      {
        step: "Damages Assessment",
        description: "We calculate all recoverable damages: lost income and benefits, medical expenses, funeral costs, loss of companionship, and pain and suffering. We work with economists and experts to establish full value."
      },
      {
        step: "Filing the Claim",
        description: "We file the wrongful death claim on behalf of eligible family members, ensuring all procedural requirements are met and all responsible parties are named."
      },
      {
        step: "Resolution",
        description: "We negotiate aggressively for fair compensation or take the case to trial if necessary. Our goal is to secure justice and financial security for the family."
      }
    ],
    faqs: [
      {
        question: "Who can file a wrongful death claim in Texas?",
        answer: "In Texas, the surviving spouse, children, and parents of the deceased may file wrongful death claims. If none of these exist, the estate may file a survival action. The specific rules depend on family relationships and circumstances."
      },
      {
        question: "What damages can be recovered in a wrongful death case?",
        answer: "Recoverable damages include: lost income and benefits the deceased would have earned, medical expenses, funeral and burial costs, loss of companionship and emotional support, and in some cases, the deceased's pain and suffering before death."
      },
      {
        question: "How long do I have to file a wrongful death claim?",
        answer: "Generally, you have two years from the date of death to file a wrongful death lawsuit in Texas. However, there are exceptions, and the deadline can be complex. It's critical to consult an attorney immediately."
      },
      {
        question: "Can I file a wrongful death claim if there's also a criminal case?",
        answer: "Yes. Wrongful death claims are civil cases, separate from any criminal proceedings. A criminal conviction can strengthen a wrongful death case, but you don't need to wait for criminal proceedings to file a civil claim."
      },
      {
        question: "What if multiple family members want to file?",
        answer: "All eligible family members typically file together in a single wrongful death claim. We help families navigate these situations, ensuring all eligible parties are included and that any settlement or verdict is distributed fairly according to Texas law."
      }
    ],
    ctaMessage: "Lost a loved one due to someone else's negligence? We provide compassionate, fierce advocacy to help your family seek justice and financial security."
  },
  {
    id: "workers-comp",
    title: "Protecting Workers' Rights",
    shortDescription: "Securing your livelihood when you're hurt on the job.",
    icon: Briefcase,
    href: "/practice-areas/workers-compensation",
    overview: "Workplace injuries can happen in any industry, from construction sites to offices, from factories to hospitals. When you're injured on the job, you need someone who understands both workers' compensation law and your right to pursue additional claims when third parties are involved. Texas is unique—it doesn't require most private employers to carry workers' compensation insurance, which means injured workers often face complex legal situations. At Carter Law, we help injured workers navigate workers' comp claims, pursue third-party liability claims, and fight for the full compensation they deserve. We've represented workers across industries, from oil fields to healthcare facilities.",
    whoNeedsThis: "If you've been injured on the job—whether through a specific accident or repetitive stress—you need experienced representation. Even if your employer has workers' comp, you may have additional claims against third parties like equipment manufacturers or contractors.",
    complexityFactors: [
      "Navigating Texas's optional workers' comp system",
      "Pursuing third-party claims when workers' comp is insufficient",
      "Proving work-relatedness for repetitive stress injuries",
      "Dealing with employer retaliation concerns",
      "Understanding the interplay between workers' comp and personal injury claims"
    ],
    caseTypes: [
      "Construction site injuries",
      "Falls from heights",
      "Equipment and machinery accidents",
      "Repetitive stress injuries",
      "Back and spinal injuries",
      "Amputations and crush injuries",
      "Burns and chemical exposure",
      "Trucking and transportation injuries",
      "Healthcare worker injuries",
      "Slip and fall at work",
      "Struck by object injuries",
      "Electrical accidents",
      "Explosions and fires",
      "Toxic exposure at work",
      "Workplace violence injuries"
    ],
    featuredResults: [
      {
        amount: "$1.2 Million",
        caseType: "Construction Fall",
        context: "Worker fell from scaffolding due to safety violations, suffering permanent disability",
        challenge: "Multiple defendants, workers' comp limitations, third-party claims"
      },
      {
        amount: "$650,000",
        caseType: "Machinery Accident",
        context: "Factory worker's hand crushed in defective equipment",
        challenge: "Workers' comp provided limited benefits, pursued product liability claim"
      },
      {
        amount: "$890,000",
        caseType: "Repetitive Stress",
        context: "Nurse developed permanent back injury from years of patient lifting",
        challenge: "Proving work-relatedness, employer denied claim"
      }
    ],
    processSteps: [
      {
        step: "Immediate Reporting",
        description: "We help you properly report your injury to your employer and ensure all deadlines are met. In Texas, reporting requirements vary depending on whether your employer has workers' comp."
      },
      {
        step: "Medical Treatment",
        description: "We ensure you receive proper medical care and that all work-related injuries are documented. Medical evidence is crucial in workers' comp and third-party claims."
      },
      {
        step: "Claim Evaluation",
        description: "We evaluate whether you have workers' comp benefits, third-party claims, or both. Many workplace injuries involve defective equipment or negligent contractors, creating additional claims."
      },
      {
        step: "Pursuing All Available Claims",
        description: "We pursue workers' comp benefits when available and file third-party claims when appropriate. We maximize your recovery from all available sources."
      },
      {
        step: "Resolution",
        description: "We negotiate settlements or litigate claims to secure maximum compensation for your injuries, lost wages, and future medical needs."
      }
    ],
    faqs: [
      {
        question: "Does my employer have to have workers' compensation insurance in Texas?",
        answer: "No. Texas is one of the few states where most private employers can opt out of workers' compensation. If your employer doesn't have workers' comp, you may be able to file a personal injury lawsuit directly against them, but you must prove negligence."
      },
      {
        question: "Can I sue my employer if I'm injured at work?",
        answer: "It depends. If your employer has workers' comp, you generally can't sue them directly—workers' comp is your exclusive remedy. However, you may be able to sue third parties (like equipment manufacturers or contractors) whose negligence contributed to your injury."
      },
      {
        question: "What if my employer fires me for filing a workers' comp claim?",
        answer: "Retaliation for filing a workers' comp claim is illegal in Texas. If you're fired, demoted, or otherwise retaliated against, you may have a separate claim for wrongful termination. We help protect your rights."
      },
      {
        question: "How long do I have to report a workplace injury?",
        answer: "If your employer has workers' comp, you generally have 30 days to report the injury. However, the deadline can be extended if you didn't immediately realize the injury was work-related. For third-party claims, you have two years from the date of injury."
      },
      {
        question: "What if my injury happened gradually over time?",
        answer: "Repetitive stress injuries and occupational diseases are still work-related injuries. Proving these claims can be complex and requires medical evidence linking your condition to your work. We work with medical experts to establish causation."
      }
    ],
    ctaMessage: "Injured on the job? We help you navigate workers' comp and pursue all available claims to secure the compensation you deserve."
  },
  {
    id: "product-liability",
    title: "When Products Fail",
    shortDescription: "Holding manufacturers responsible for dangerous defects.",
    icon: AlertTriangle,
    href: "/practice-areas/product-liability",
    overview: "When you buy a product, you have a right to expect it's safe when used as intended. Unfortunately, defective products cause thousands of injuries every year—from faulty vehicle parts that cause crashes to dangerous medications, from defective medical devices to unsafe children's products. Product liability law holds manufacturers, distributors, and retailers responsible when their products cause harm. These cases are complex, often involving large corporations with teams of defense lawyers, but we have the resources and expertise to take them on. We've successfully represented clients injured by defective products, securing compensation and holding companies accountable for putting dangerous products on the market.",
    whoNeedsThis: "If you've been injured by a defective product—whether a vehicle part, medical device, pharmaceutical, consumer product, or industrial equipment—you may have a product liability claim. These cases require immediate action to preserve evidence and meet strict deadlines.",
    complexityFactors: [
      "Proving product defect and causation",
      "Identifying all responsible parties in the supply chain",
      "Dealing with corporate defense teams and experts",
      "Understanding complex product liability theories",
      "Preserving and testing defective products as evidence"
    ],
    caseTypes: [
      "Defective vehicle parts and components",
      "Dangerous pharmaceuticals and medications",
      "Faulty medical devices and implants",
      "Defective children's products and toys",
      "Unsafe consumer electronics",
      "Faulty industrial machinery",
      "Defective household products",
      "Contaminated food products",
      "Dangerous chemicals and cleaning products",
      "Defective sporting equipment",
      "Faulty construction materials",
      "Unsafe personal care products",
      "Defective tools and equipment",
      "Faulty safety equipment",
      "Dangerous recreational products"
    ],
    featuredResults: [
      {
        amount: "$2.8 Million",
        caseType: "Defective Vehicle Part",
        context: "Client injured when vehicle's brake system failed, causing serious accident",
        challenge: "Manufacturer denied defect, claimed improper maintenance"
      },
      {
        amount: "$1.5 Million",
        caseType: "Medical Device Failure",
        context: "Patient injured by defective hip implant that failed prematurely",
        challenge: "Complex medical and engineering evidence, multiple defendants"
      },
      {
        amount: "$950,000",
        caseType: "Defective Children's Product",
        context: "Child injured by toy with design defect causing laceration",
        challenge: "Product had been recalled but remained in circulation"
      }
    ],
    processSteps: [
      {
        step: "Evidence Preservation",
        description: "We immediately work to preserve the defective product, packaging, instructions, and any related evidence. Product testing and expert analysis are crucial in these cases."
      },
      {
        step: "Product Investigation",
        description: "We investigate the product's design, manufacturing process, and any prior incidents or recalls. We work with engineers and product safety experts to identify defects."
      },
      {
        step: "Identifying Responsible Parties",
        description: "We identify all parties in the supply chain who may be liable: manufacturers, distributors, retailers, and component suppliers. Multiple parties may share responsibility."
      },
      {
        step: "Building the Case",
        description: "We build a comprehensive case proving the product was defective, the defect caused your injury, and the responsible parties knew or should have known about the danger."
      },
      {
        step: "Litigation",
        description: "Product liability cases typically require litigation against well-funded corporate defendants. We have the resources and experience to take on these complex cases."
      }
    ],
    faqs: [
      {
        question: "What makes a product defective?",
        answer: "A product can be defective in three ways: design defect (inherently dangerous design), manufacturing defect (error in production), or marketing defect (inadequate warnings or instructions). We investigate all three possibilities."
      },
      {
        question: "How long do I have to file a product liability claim?",
        answer: "In Texas, you generally have two years from the date of injury, but there are exceptions. Additionally, there's a 15-year statute of repose for some products. It's critical to act quickly to preserve evidence and meet deadlines."
      },
      {
        question: "What if the product was used incorrectly?",
        answer: "If you used the product in a reasonably foreseeable way (even if not exactly as intended), the manufacturer may still be liable. However, misuse that's not reasonably foreseeable can affect your case. We evaluate these factors carefully."
      },
      {
        question: "Can I still file a claim if the product was recalled?",
        answer: "Yes. Recalls actually strengthen product liability cases by demonstrating the manufacturer knew about the defect. However, you must prove the defect caused your specific injury and that you weren't aware of the recall when you were injured."
      },
      {
        question: "What if I don't have the product anymore?",
        answer: "Preserving the product is ideal, but we can still pursue claims using photographs, medical records, witness testimony, and expert analysis. However, having the actual product significantly strengthens the case."
      }
    ],
    ctaMessage: "Injured by a defective product? We hold manufacturers accountable and fight for compensation for your injuries and losses."
  },
  {
    id: "insurance-bad-faith",
    title: "Insurance Disputes",
    shortDescription: "Making sure your policy protects you when it counts.",
    icon: ShieldAlert,
    href: "/practice-areas/insurance-bad-faith",
    overview: "You pay insurance premiums with the expectation that your insurance company will be there when you need them. Unfortunately, some insurance companies prioritize profits over policyholders, delaying claims, denying valid coverage, or offering unreasonably low settlements. Insurance bad faith occurs when an insurer fails to fulfill its contractual obligations to policyholders. These cases are particularly important because insurance companies have a duty to act in good faith and deal fairly with their customers. At Carter Law, we've successfully represented policyholders in bad faith claims, securing not just the original claim amount but also additional damages for the insurer's misconduct. We fight to hold insurance companies accountable.",
    whoNeedsThis: "If your insurance company has unreasonably delayed, denied, or underpaid a valid claim—whether auto, health, homeowners, life, or disability insurance—you may have a bad faith claim. These cases help ensure you receive the coverage you paid for.",
    complexityFactors: [
      "Proving bad faith versus legitimate claim denial",
      "Understanding complex insurance policy language",
      "Dealing with insurance company legal teams",
      "Calculating additional damages for bad faith",
      "Navigating state insurance regulations"
    ],
    caseTypes: [
      "Auto insurance claim denials",
      "Homeowners insurance disputes",
      "Health insurance claim denials",
      "Life insurance beneficiary disputes",
      "Disability insurance denials",
      "Uninsured/underinsured motorist disputes",
      "Property damage claim delays",
      "Medical expense coverage denials",
      "Liability coverage disputes",
      "Business insurance claim denials",
      "Long-term care insurance disputes",
      "Accidental death benefit denials",
      "Insurance policy cancellation disputes",
      "Premium refund disputes",
      "Coverage interpretation disputes"
    ],
    featuredResults: [
      {
        amount: "$1.3 Million",
        caseType: "Auto Insurance Bad Faith",
        context: "Insurance company delayed claim for 18 months, then offered 20% of policy limits",
        challenge: "Proving bad faith required extensive documentation of insurer's misconduct"
      },
      {
        amount: "$850,000",
        caseType: "Disability Insurance",
        context: "Insurer wrongfully denied long-term disability benefits to client with permanent injury",
        challenge: "Complex policy interpretation, medical evidence disputes"
      },
      {
        amount: "$675,000",
        caseType: "Homeowners Insurance",
        context: "Homeowner's claim for fire damage denied based on false arson allegations",
        challenge: "Insurance company's investigation was flawed and biased"
      }
    ],
    processSteps: [
      {
        step: "Claim Review",
        description: "We review your insurance policy, the denied or delayed claim, and all communications with the insurance company to determine if bad faith occurred."
      },
      {
        step: "Demand Letter",
        description: "We send a formal demand letter outlining the bad faith conduct and demanding full payment of the claim plus additional damages. Many cases resolve at this stage."
      },
      {
        step: "Investigation",
        description: "We investigate the insurer's handling of your claim, looking for patterns of delay, improper investigation, or unreasonable denials that demonstrate bad faith."
      },
      {
        step: "Litigation",
        description: "If the insurer refuses to resolve the matter fairly, we file a bad faith lawsuit seeking the original claim amount plus additional damages for the insurer's misconduct."
      },
      {
        step: "Resolution",
        description: "We negotiate settlements or take cases to trial, securing not just what you're owed under the policy but also compensation for the insurer's bad faith conduct."
      }
    ],
    faqs: [
      {
        question: "What is insurance bad faith?",
        answer: "Insurance bad faith occurs when an insurer fails to fulfill its contractual obligations to policyholders. This includes unreasonably delaying claims, denying valid coverage without proper investigation, offering unreasonably low settlements, or failing to communicate about claims."
      },
      {
        question: "Can I sue my own insurance company?",
        answer: "Yes. If your insurance company acts in bad faith, you can file a lawsuit against them. In Texas, you may be able to recover the original claim amount plus additional damages, attorney fees, and in some cases, punitive damages."
      },
      {
        question: "What's the difference between a denied claim and bad faith?",
        answer: "Insurance companies can legitimately deny claims that aren't covered. Bad faith occurs when the denial is unreasonable, the investigation was inadequate, or the insurer failed to follow its own policy terms. We help determine if bad faith occurred."
      },
      {
        question: "How long do insurance companies have to process claims?",
        answer: "Texas law requires insurers to acknowledge claims within 15 days, begin investigation within 15 days, and accept or reject claims within a reasonable time (typically 30-45 days). Delays beyond these timeframes may constitute bad faith."
      },
      {
        question: "What damages can I recover in a bad faith case?",
        answer: "You can recover the original claim amount, additional damages for the insurer's bad faith conduct, attorney fees in some cases, and potentially punitive damages if the insurer's conduct was particularly egregious. We fight for all available damages."
      }
    ],
    ctaMessage: "Is your insurance company delaying or denying a valid claim? We fight to ensure you receive the coverage you paid for."
  },
  {
    id: "civil-rights",
    title: "Civil Rights",
    shortDescription: "Standing up against injustice and abuse of power.",
    icon: Scale,
    href: "/practice-areas/civil-rights",
    overview: "Civil rights violations strike at the heart of our democracy and individual dignity. When government entities, law enforcement, or other powerful institutions violate constitutional rights, those affected need advocates who aren't intimidated by the system. At Carter Law, we've represented individuals whose civil rights have been violated—from police misconduct to employment discrimination, from First Amendment violations to due process denials. These cases require courage, persistence, and deep understanding of constitutional law. We take on these fights because everyone deserves equal protection under the law, regardless of who they are or where they come from.",
    whoNeedsThis: "If your constitutional rights have been violated by government entities, law enforcement, employers, or other powerful institutions, you may have a civil rights claim. These cases help hold the powerful accountable and protect individual liberties.",
    complexityFactors: [
      "Proving constitutional violations",
      "Navigating qualified immunity defenses",
      "Dealing with government entities and their resources",
      "Understanding complex civil rights statutes",
      "Proving damages in civil rights cases"
    ],
    caseTypes: [
      "Police misconduct and excessive force",
      "False arrest and wrongful imprisonment",
      "Employment discrimination",
      "First Amendment violations",
      "Due process violations",
      "Equal protection violations",
      "Prison and jail abuse",
      "Racial profiling",
      "Sexual harassment by officials",
      "Voting rights violations",
      "Fair housing violations",
      "Disability rights violations",
      "Religious discrimination",
      "Retaliation for protected speech",
      "Wrongful termination based on protected characteristics"
    ],
    featuredResults: [
      {
        amount: "$1.8 Million",
        caseType: "Police Excessive Force",
        context: "Client injured during arrest when officers used excessive force",
        challenge: "Qualified immunity defense, proving constitutional violation"
      },
      {
        amount: "$650,000",
        caseType: "Employment Discrimination",
        context: "Client wrongfully terminated based on race and age",
        challenge: "Proving discriminatory intent, employer's defense of legitimate business reasons"
      },
      {
        amount: "$950,000",
        caseType: "False Arrest",
        context: "Client wrongfully arrested and detained for 48 hours without charges",
        challenge: "Proving lack of probable cause, government entity immunity issues"
      }
    ],
    processSteps: [
      {
        step: "Case Evaluation",
        description: "We evaluate whether your constitutional or statutory rights were violated. Civil rights cases require proving specific legal elements, and we assess the strength of your case."
      },
      {
        step: "Administrative Remedies",
        description: "Many civil rights claims require exhausting administrative remedies first (like filing complaints with government agencies). We handle all procedural requirements."
      },
      {
        step: "Investigation",
        description: "We conduct thorough investigation, gathering evidence, witness statements, and documentation. Civil rights cases often involve complex legal and factual issues."
      },
      {
        step: "Filing the Claim",
        description: "We file civil rights lawsuits in federal or state court, depending on the nature of the violation. These cases often involve multiple defendants and complex legal theories."
      },
      {
        step: "Litigation",
        description: "Civil rights cases typically require litigation against well-funded government or corporate defendants. We have the experience and resources to pursue these important cases."
      }
    ],
    faqs: [
      {
        question: "What are my civil rights?",
        answer: "Civil rights include constitutional protections (freedom of speech, due process, equal protection) and statutory rights (employment discrimination, fair housing, disability rights). These rights protect you from government overreach and discrimination by powerful institutions."
      },
      {
        question: "Can I sue the police or government?",
        answer: "Yes, but these cases are complex. Government entities and officials often claim immunity, and you must prove specific constitutional violations. However, when rights are violated, these cases are important for accountability and justice."
      },
      {
        question: "How long do I have to file a civil rights claim?",
        answer: "Deadlines vary. Federal civil rights claims generally have shorter deadlines (often 2 years), and some require exhausting administrative remedies first. State law claims may have different deadlines. It's critical to consult an attorney immediately."
      },
      {
        question: "What if I can't afford to take on the government?",
        answer: "We work on contingency fees for civil rights cases—you don't pay unless we win. Additionally, successful civil rights cases may allow recovery of attorney fees from defendants. We're committed to making justice accessible."
      },
      {
        question: "What damages can I recover in a civil rights case?",
        answer: "Damages can include compensation for injuries, lost wages, emotional distress, and in some cases, punitive damages. Civil rights violations can also result in injunctive relief (court orders requiring changes in policy or practice)."
      }
    ],
    ctaMessage: "Had your civil rights violated? We fight to hold the powerful accountable and secure justice for constitutional violations."
  }
];

// Methodology content for Carter Approach section
export const METHODOLOGY_PILLARS = [
  {
    number: "01",
    title: "Investigation Philosophy",
    description: "We don't just investigate—we over-investigate. Every case is built like we're going to trial, because that's how you win before you ever step into a courtroom. We've worked with accident reconstruction experts on 200+ cases. We know which questions to ask, which evidence to preserve, and which experts to engage. Our investigation begins the moment you call, and it doesn't stop until we have every piece of evidence that could strengthen your case.",
    examples: [
      "Accident reconstruction analysis for vehicle collisions",
      "Medical expert review for malpractice cases",
      "Product testing and engineering analysis for defective products",
      "Witness interviews and statement preservation",
      "Document review and discovery management"
    ]
  },
  {
    number: "02",
    title: "Trial Preparation Mindset",
    description: "Insurance adjusters know our name. They know we don't bluff. We prepare every case as if it's going to trial, which means insurance companies take our demands seriously. When they know we're ready and willing to take a case to a jury, settlement offers improve dramatically. This approach serves our clients whether the case settles or goes to trial—you get maximum value either way.",
    examples: [
      "Comprehensive case strategy development",
      "Expert witness preparation and coordination",
      "Mock trials and focus group testing",
      "Trial exhibit preparation and organization",
      "Jury selection strategy and voir dire preparation"
    ]
  },
  {
    number: "03",
    title: "Client Communication Standards",
    description: "One of the most common complaints about attorneys is lack of communication. We've built our practice on being different. You'll receive updates at least every 30 days, and we respond to calls and emails within 24 hours. You'll always know where your case stands, what's happening next, and what it means for you. No legal jargon, no guessing games—just clear, honest communication.",
    examples: [
      "Regular case status updates (minimum monthly)",
      "24-hour response time commitment",
      "Plain-language explanations of legal processes",
      "Accessible attorney-client communication",
      "Transparent fee structure and case timeline expectations"
    ]
  }
];

// Results and testimonials data
export const FEATURED_RESULTS = [
  {
    caseType: "Truck Accident",
    amount: "$2.3 Million",
    context: "Client suffered permanent spinal injuries after commercial truck collision on I-10",
    challenge: "Insurance company claimed comparative fault, offered $150,000 initial settlement",
    outcome: "Secured full policy limits plus additional compensation through aggressive negotiation"
  },
  {
    caseType: "Medical Malpractice",
    amount: "$3.2 Million",
    context: "Surgeon operated on wrong spinal level, causing permanent nerve damage",
    challenge: "Hospital and surgeon denied error, claimed patient's condition was pre-existing",
    outcome: "Won at trial after extensive medical expert testimony and evidence presentation"
  },
  {
    caseType: "Product Liability",
    amount: "$2.8 Million",
    context: "Client injured when vehicle's brake system failed, causing serious accident",
    challenge: "Manufacturer denied defect, claimed improper maintenance by client",
    outcome: "Proved design defect through engineering analysis and secured full compensation"
  },
  {
    caseType: "Wrongful Death",
    amount: "$4.1 Million",
    context: "Family lost father and husband in collision with commercial truck",
    challenge: "Trucking company denied liability, claimed driver was independent contractor",
    outcome: "Established employer-employee relationship and secured justice for grieving family"
  },
  {
    caseType: "Workers' Compensation",
    amount: "$1.2 Million",
    context: "Worker fell from scaffolding due to safety violations, suffering permanent disability",
    challenge: "Multiple defendants, workers' comp limitations, third-party claims",
    outcome: "Pursued all available claims and secured maximum recovery from multiple sources"
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    name: "Maria Rodriguez",
    location: "El Paso, TX",
    caseType: "Car Accident",
    quote: "After my accident, I was overwhelmed. The insurance company kept calling with low offers, and I didn't know what to do. Carter Law took over everything. They fought for me when I couldn't fight for myself, and they got me a settlement that changed my life. I can't recommend them enough.",
    rating: 5
  },
  {
    name: "James Thompson",
    location: "El Paso, TX",
    caseType: "Medical Malpractice",
    quote: "When the hospital made a mistake during my surgery, I thought I had no options. Carter Law proved otherwise. They were thorough, they communicated with me every step of the way, and they never backed down. The result exceeded my expectations.",
    rating: 5
  },
  {
    name: "Sarah Martinez",
    location: "El Paso, TX",
    caseType: "Wrongful Death",
    quote: "Losing my husband was devastating. Carter Law helped our family seek justice and secure our financial future. They treated us with compassion and respect while fighting fiercely for what we deserved. We're forever grateful.",
    rating: 5
  }
];

export const RECOGNITIONS = [
  "Super Lawyers - Personal Injury",
  "Martindale-Hubbell AV Preeminent Rating",
  "Best Lawyers in America",
  "Texas Bar Association Member",
  "El Paso Bar Association Member",
  "American Association for Justice Member"
];


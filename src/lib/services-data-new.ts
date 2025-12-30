import { 
  Activity, 
  Car, 
  Flame, 
  Truck,
  Bike,
  User,
  AlertTriangle,
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
      "Rideshare accidents (Uber, Lyft)",
      "Parking lot accidents",
      "Intersection accidents",
      "Highway and freeway accidents",
      "Accidents caused by road defects",
      "Drunk driving accidents",
      "Distracted driving accidents",
      "Speeding and reckless driving accidents",
      "Accidents involving defective vehicle parts",
      "Weather-related accidents"
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
    id: "trucking-accidents",
    title: "When Big Rigs Collide",
    shortDescription: "Commercial truck accidents demand specialized expertise and aggressive advocacy.",
    icon: Truck,
    href: "/practice-areas/trucking-accidents",
    overview: "Commercial truck accidents are among the most devastating collisions on our roads. When an 80,000-pound semi-truck collides with a passenger vehicle, the results are catastrophic. These cases are complex, involving federal regulations, multiple insurance policies, and often multiple defendants—the driver, the trucking company, the cargo owner, and maintenance providers. At Carter Law, we've successfully represented victims of commercial truck accidents across Texas. We understand the Federal Motor Carrier Safety Regulations, we know how to investigate driver fatigue and violations, and we fight to hold all responsible parties accountable.",
    whoNeedsThis: "If you or a loved one has been injured in an accident involving a commercial truck, semi-truck, 18-wheeler, or other large commercial vehicle, you need representation that understands the complexity of these cases. Don't let trucking companies and their insurers minimize your claim.",
    complexityFactors: [
      "Navigating federal trucking regulations and compliance",
      "Identifying all potentially liable parties in the supply chain",
      "Proving driver fatigue, hours-of-service violations, or negligence",
      "Dealing with multiple insurance policies and coverage limits",
      "Investigating maintenance records and equipment failures"
    ],
    caseTypes: [
      "Semi-truck and 18-wheeler collisions",
      "Commercial delivery truck accidents",
      "Tractor-trailer accidents",
      "Dump truck accidents",
      "Garbage truck collisions",
      "Box truck accidents",
      "Tanker truck accidents",
      "Accidents involving oversized loads",
      "Truck rollover accidents",
      "Jackknife accidents",
      "Underride accidents",
      "Truck brake failure accidents",
      "Tire blowout accidents",
      "Cargo spill accidents",
      "Multi-vehicle truck accidents"
    ],
    featuredResults: [
      {
        amount: "$2.3 Million",
        caseType: "Truck Accident",
        context: "Client suffered permanent spinal injuries after being rear-ended by a commercial truck on I-10",
        challenge: "Insurance company claimed client was partially at fault and offered $150,000 initial settlement"
      },
      {
        amount: "$1.8 Million",
        caseType: "Semi-Truck Collision",
        context: "Client injured when semi-truck driver fell asleep and crossed median, causing head-on collision",
        challenge: "Trucking company denied driver fatigue, claimed mechanical failure"
      },
      {
        amount: "$2.1 Million",
        caseType: "Underride Accident",
        context: "Client's vehicle went under truck trailer, resulting in catastrophic injuries",
        challenge: "Trucking company claimed inadequate underride guards were not required by law"
      }
    ],
    processSteps: [
      {
        step: "Immediate Investigation",
        description: "We immediately begin preserving evidence: electronic logging device (ELD) data, driver logs, maintenance records, and black box data. This evidence can disappear quickly, so time is critical."
      },
      {
        step: "Regulatory Compliance Review",
        description: "We investigate whether the trucking company and driver complied with federal hours-of-service regulations, maintenance requirements, and safety standards. Violations strengthen your case significantly."
      },
      {
        step: "Multi-Party Liability Analysis",
        description: "We identify all potentially liable parties: the driver, trucking company, cargo owner, maintenance provider, and others. Multiple parties often share responsibility in truck accidents."
      },
      {
        step: "Expert Analysis",
        description: "We engage accident reconstruction experts, trucking safety experts, and medical experts to build a comprehensive case demonstrating liability and damages."
      },
      {
        step: "Aggressive Litigation",
        description: "Trucking companies have deep pockets and aggressive defense teams. We prepare every case for trial and negotiate from a position of strength, securing maximum compensation for our clients."
      }
    ],
    faqs: [
      {
        question: "What makes truck accidents different from car accidents?",
        answer: "Truck accidents involve federal regulations, multiple insurance policies, complex liability issues, and often catastrophic injuries. Trucking companies have teams of lawyers and adjusters working to minimize claims. You need representation that understands these complexities."
      },
      {
        question: "Who can be held liable in a truck accident?",
        answer: "Multiple parties can be liable: the driver (for negligence), the trucking company (for hiring, training, and supervision), the cargo owner (if cargo was improperly loaded), maintenance providers (if equipment failure caused the accident), and manufacturers (if defective parts were involved)."
      },
      {
        question: "What are hours-of-service violations?",
        answer: "Federal regulations limit how long truck drivers can drive without rest. Violations of these rules indicate driver fatigue, which is a major cause of truck accidents. We investigate driver logs and electronic logging device data to identify violations."
      },
      {
        question: "How long do I have to file a truck accident claim?",
        answer: "You generally have two years from the date of the accident in Texas, but truck accident cases require immediate investigation to preserve evidence. Electronic logging device data, driver logs, and maintenance records can be lost or destroyed. Contact us immediately."
      },
      {
        question: "What if the truck driver was an independent contractor?",
        answer: "Even if the driver was an independent contractor, the trucking company can still be liable for negligent hiring, inadequate training, or failure to ensure compliance with safety regulations. We investigate these relationships thoroughly."
      }
    ],
    ctaMessage: "Injured in a truck accident? These complex cases require specialized expertise. We fight to hold all responsible parties accountable and secure maximum compensation."
  },
  {
    id: "bicycle-accidents",
    title: "When Cyclists Are Hit",
    shortDescription: "Bicycle accidents often result in severe injuries. We fight for cyclists' rights.",
    icon: Bike,
    href: "/practice-areas/bicycle-accidents",
    overview: "Bicycle accidents are among the most dangerous collisions on our roads. When a cyclist is hit by a vehicle, the results are often catastrophic—cyclists have no protection from the impact. These cases require understanding of traffic laws, bicycle safety regulations, and the unique challenges cyclists face. At Carter Law, we've represented cyclists injured by negligent drivers, poor road conditions, and defective equipment. We fight to ensure cyclists receive the same justice and compensation as other accident victims, and we hold negligent drivers and municipalities accountable.",
    whoNeedsThis: "If you've been injured while cycling—whether hit by a car, injured due to road defects, or harmed by defective bicycle equipment—you need representation that understands the unique challenges cyclists face. Don't let insurance companies blame you for simply riding a bicycle.",
    complexityFactors: [
      "Overcoming bias against cyclists in insurance negotiations",
      "Proving driver negligence when cyclists are often blamed",
      "Identifying road defects and municipal liability",
      "Dealing with insurance companies who minimize cyclist claims",
      "Calculating damages for cyclists who may have unique employment situations"
    ],
    caseTypes: [
      "Cyclist hit by motor vehicle",
      "Dooring accidents (car doors opening into bike lanes)",
      "Right-hook accidents (vehicles turning right into cyclists)",
      "Left-cross accidents (vehicles turning left into cyclists)",
      "Hit-and-run bicycle accidents",
      "Road defect bicycle accidents",
      "Bicycle lane violations",
      "Distracted driving bicycle accidents",
      "Drunk driving bicycle accidents",
      "Commercial vehicle bicycle accidents",
      "Parking lot bicycle accidents",
      "Intersection bicycle accidents",
      "Bicycle accidents involving defective equipment",
      "Multi-vehicle bicycle accidents",
      "Bicycle accidents on shared paths"
    ],
    featuredResults: [
      {
        amount: "$1.2 Million",
        caseType: "Bicycle Accident",
        context: "Cyclist hit by distracted driver, resulting in multiple fractures and permanent disability",
        challenge: "Insurance company claimed cyclist was at fault for not wearing reflective clothing"
      },
      {
        amount: "$850,000",
        caseType: "Dooring Accident",
        context: "Cyclist struck by car door opening into bike lane, causing severe spinal injuries",
        challenge: "Driver's insurance denied liability, claimed cyclist was riding too fast"
      },
      {
        amount: "$1.1 Million",
        caseType: "Right-Hook Accident",
        context: "Cyclist hit by truck making right turn, resulting in amputation",
        challenge: "Trucking company claimed cyclist was in blind spot and not visible"
      }
    ],
    processSteps: [
      {
        step: "Immediate Evidence Preservation",
        description: "We help preserve evidence: bicycle damage, helmet condition, road conditions, witness statements, and traffic camera footage. This evidence is crucial in bicycle accident cases."
      },
      {
        step: "Traffic Law Analysis",
        description: "We analyze applicable traffic laws, bicycle safety regulations, and determine whether the driver violated any laws. We also investigate whether road defects or municipal negligence contributed to the accident."
      },
      {
        step: "Expert Investigation",
        description: "We engage bicycle safety experts and accident reconstruction specialists to analyze the collision and demonstrate how the driver's negligence caused the accident."
      },
      {
        step: "Insurance Negotiation",
        description: "We fight against insurance companies who often try to blame cyclists. We demonstrate driver negligence and fight for full compensation for your injuries, lost wages, and pain and suffering."
      },
      {
        step: "Litigation When Necessary",
        description: "If insurance companies refuse to offer fair compensation, we're prepared to take your case to trial. Our trial readiness often leads to better settlement offers."
      }
    ],
    faqs: [
      {
        question: "Do cyclists have the same rights as drivers?",
        answer: "Yes. In Texas, cyclists have the same rights and responsibilities as drivers. Cyclists are entitled to use the road, and drivers must exercise reasonable care to avoid hitting cyclists. Insurance companies often try to blame cyclists, but we fight to protect your rights."
      },
      {
        question: "What if I wasn't wearing a helmet?",
        answer: "While wearing a helmet is recommended, not wearing one doesn't mean you're at fault for the accident. The driver's negligence in causing the collision is separate from whether you were wearing protective equipment. However, helmet use can affect damages calculations."
      },
      {
        question: "Can I sue the city for poor road conditions?",
        answer: "Possibly. If road defects (like potholes, inadequate bike lanes, or poor road maintenance) contributed to your accident, the municipality may be liable. These cases are complex and have strict notice requirements, so it's important to act quickly."
      },
      {
        question: "What if the driver says they didn't see me?",
        answer: "Not seeing a cyclist is not a defense—it's evidence of negligence. Drivers have a duty to look for and see cyclists. If a driver failed to see you, they failed to exercise reasonable care. We fight to hold them accountable."
      },
      {
        question: "How long do I have to file a bicycle accident claim?",
        answer: "You generally have two years from the date of the accident in Texas. However, if municipal liability is involved, there may be shorter notice requirements. It's critical to consult an attorney immediately to preserve all potential claims."
      }
    ],
    ctaMessage: "Injured while cycling? Don't let insurance companies blame you. We fight for cyclists' rights and secure maximum compensation for your injuries."
  },
  {
    id: "pedestrian-accidents",
    title: "When Walkers Are Struck",
    shortDescription: "Pedestrian accidents often result in life-altering injuries. We fight for justice.",
    icon: User,
    href: "/practice-areas/pedestrian-accidents",
    overview: "Pedestrian accidents are among the most devastating collisions. When a person on foot is hit by a vehicle, the results are catastrophic—pedestrians have no protection from the impact. These accidents often occur at crosswalks, intersections, and parking lots, and they frequently involve driver inattention, speeding, or failure to yield. At Carter Law, we've represented pedestrians injured by negligent drivers, and we fight to ensure they receive full compensation for their life-altering injuries. We understand the unique challenges pedestrians face and hold drivers accountable for failing to exercise reasonable care.",
    whoNeedsThis: "If you've been injured as a pedestrian—whether hit by a car, truck, or other vehicle—you need representation that understands the severity of these injuries and fights for maximum compensation. Don't let insurance companies minimize your claim.",
    complexityFactors: [
      "Proving driver negligence in pedestrian accidents",
      "Dealing with insurance companies who blame pedestrians",
      "Calculating damages for catastrophic pedestrian injuries",
      "Identifying all potentially liable parties (driver, municipality, property owners)",
      "Navigating complex liability issues at crosswalks and intersections"
    ],
    caseTypes: [
      "Pedestrian hit at crosswalk",
      "Pedestrian hit at intersection",
      "Pedestrian hit in parking lot",
      "Pedestrian hit while crossing street",
      "Hit-and-run pedestrian accidents",
      "Pedestrian accidents involving distracted drivers",
      "Pedestrian accidents involving drunk drivers",
      "Pedestrian accidents involving speeding drivers",
      "Pedestrian accidents at bus stops",
      "Pedestrian accidents in school zones",
      "Pedestrian accidents involving commercial vehicles",
      "Pedestrian accidents due to poor lighting",
      "Pedestrian accidents involving failure to yield",
      "Pedestrian accidents on sidewalks",
      "Multi-vehicle pedestrian accidents"
    ],
    featuredResults: [
      {
        amount: "$1.5 Million",
        caseType: "Pedestrian Accident",
        context: "Pedestrian hit in crosswalk by distracted driver, resulting in traumatic brain injury",
        challenge: "Insurance company claimed pedestrian was jaywalking despite crosswalk signal"
      },
      {
        amount: "$2.2 Million",
        caseType: "Parking Lot Pedestrian Accident",
        context: "Elderly pedestrian hit in parking lot, suffering multiple fractures and permanent disability",
        challenge: "Driver's insurance claimed pedestrian was partially at fault for not looking"
      },
      {
        amount: "$1.8 Million",
        caseType: "Hit-and-Run Pedestrian",
        context: "Pedestrian hit by driver who fled scene, requiring extensive investigation to identify driver",
        challenge: "Complex investigation required to locate driver and establish liability"
      }
    ],
    processSteps: [
      {
        step: "Immediate Investigation",
        description: "We immediately begin investigating: witness statements, traffic camera footage, surveillance video, and physical evidence. In hit-and-run cases, we work to identify the driver."
      },
      {
        step: "Traffic Law Analysis",
        description: "We analyze applicable traffic laws, crosswalk regulations, and determine whether the driver violated any laws. We also investigate whether road defects or municipal negligence contributed."
      },
      {
        step: "Expert Analysis",
        description: "We engage accident reconstruction experts and medical experts to analyze the collision and demonstrate the full extent of your injuries and the driver's negligence."
      },
      {
        step: "Insurance Negotiation",
        description: "We fight against insurance companies who often try to blame pedestrians. We demonstrate driver negligence and fight for full compensation for catastrophic injuries, lost wages, and pain and suffering."
      },
      {
        step: "Litigation When Necessary",
        description: "Pedestrian accidents often result in catastrophic injuries requiring maximum compensation. If insurance companies refuse to offer fair settlements, we're prepared to take your case to trial."
      }
    ],
    faqs: [
      {
        question: "Do pedestrians always have the right of way?",
        answer: "Pedestrians generally have the right of way at marked crosswalks and intersections, but the specific rules depend on traffic signals and circumstances. However, even if a pedestrian may have violated a traffic law, drivers still have a duty to exercise reasonable care to avoid hitting pedestrians."
      },
      {
        question: "What if I was jaywalking?",
        answer: "Even if you were jaywalking, the driver may still be liable if they failed to exercise reasonable care. Texas follows modified comparative fault, meaning your compensation may be reduced by your percentage of fault, but you can still recover if you're 50% or less at fault."
      },
      {
        question: "Can I sue the city for poor crosswalk design?",
        answer: "Possibly. If poor crosswalk design, inadequate lighting, or other road defects contributed to your accident, the municipality may be liable. These cases are complex and have strict notice requirements, so it's important to act quickly."
      },
      {
        question: "What if the driver fled the scene?",
        answer: "Hit-and-run pedestrian accidents require immediate investigation to identify the driver. We work with law enforcement and use all available resources to locate the driver. You may also have uninsured motorist coverage that can help."
      },
      {
        question: "How much compensation can I receive for a pedestrian accident?",
        answer: "Pedestrian accidents often result in catastrophic injuries, and compensation can be substantial. We fight for all recoverable damages: medical expenses (past and future), lost wages, pain and suffering, and loss of enjoyment of life. The amount depends on the severity of your injuries and the strength of your case."
      }
    ],
    ctaMessage: "Injured as a pedestrian? These accidents often cause life-altering injuries. We fight for maximum compensation and hold negligent drivers accountable."
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
    id: "slip-and-fall",
    title: "When Premises Fail",
    shortDescription: "Property owners have a duty to keep their premises safe. We hold them accountable.",
    icon: AlertTriangle,
    href: "/practice-areas/slip-and-fall",
    overview: "Slip and fall accidents happen when property owners fail to maintain safe premises. Whether it's a wet floor in a grocery store, a broken sidewalk, or inadequate lighting in a parking lot, property owners have a legal duty to keep their premises reasonably safe. These cases require proving that the property owner knew or should have known about the dangerous condition and failed to fix it or warn visitors. At Carter Law, we've successfully represented clients injured in slip and fall accidents, holding property owners, businesses, and municipalities accountable for unsafe conditions.",
    whoNeedsThis: "If you've been injured in a slip and fall accident—whether at a store, restaurant, parking lot, or public property—you may have a premises liability claim. Property owners have a duty to maintain safe conditions, and we fight to hold them accountable when they fail.",
    complexityFactors: [
      "Proving the property owner knew or should have known about the dangerous condition",
      "Establishing that the condition was unreasonably dangerous",
      "Dealing with property owners who deny responsibility",
      "Navigating notice requirements for municipal liability",
      "Overcoming insurance company defenses about \"open and obvious\" hazards"
    ],
    caseTypes: [
      "Wet or slippery floor accidents",
      "Uneven sidewalk accidents",
      "Parking lot slip and fall accidents",
      "Stairway accidents",
      "Inadequate lighting accidents",
      "Ice and snow slip and fall accidents",
      "Broken or missing handrail accidents",
      "Loose carpet or rug accidents",
      "Spill accidents in stores",
      "Elevator and escalator accidents",
      "Pothole accidents",
      "Inadequate security accidents",
      "Construction site slip and fall accidents",
      "Restaurant slip and fall accidents",
      "Grocery store slip and fall accidents"
    ],
    featuredResults: [
      {
        amount: "$850,000",
        caseType: "Slip and Fall",
        context: "Elderly client fractured hip in poorly maintained grocery store parking lot",
        challenge: "Property owner denied responsibility, claiming client should have seen the hazard"
      },
      {
        amount: "$650,000",
        caseType: "Wet Floor Accident",
        context: "Client slipped on unmarked wet floor in retail store, suffering back injuries",
        challenge: "Store claimed floor was recently mopped and warning signs were present"
      },
      {
        amount: "$1.1 Million",
        caseType: "Sidewalk Accident",
        context: "Client tripped on uneven sidewalk, resulting in multiple fractures",
        challenge: "Municipality claimed adequate notice was not provided, complex liability issues"
      }
    ],
    processSteps: [
      {
        step: "Immediate Evidence Preservation",
        description: "We help preserve evidence: photographs of the dangerous condition, witness statements, incident reports, and any surveillance footage. This evidence is crucial in slip and fall cases."
      },
      {
        step: "Investigation",
        description: "We investigate the property owner's maintenance practices, inspection records, and whether they knew or should have known about the dangerous condition. We also investigate similar incidents."
      },
      {
        step: "Liability Analysis",
        description: "We analyze whether the property owner breached their duty to maintain safe premises and whether that breach caused your injuries. We work with premises liability experts when necessary."
      },
      {
        step: "Insurance Negotiation",
        description: "We negotiate with property owners' insurance companies, fighting against common defenses like \"open and obvious\" hazards or claims that you were partially at fault."
      },
      {
        step: "Litigation When Necessary",
        description: "If insurance companies refuse to offer fair compensation, we're prepared to take your case to trial. Property owners often deny responsibility, but we fight to hold them accountable."
      }
    ],
    faqs: [
      {
        question: "What do I need to prove in a slip and fall case?",
        answer: "You need to prove: (1) the property owner had a duty to maintain safe premises, (2) they breached that duty by allowing a dangerous condition to exist, (3) you were injured as a result, and (4) the property owner knew or should have known about the dangerous condition."
      },
      {
        question: "What if the property owner says the hazard was \"open and obvious\"?",
        answer: "Even if a hazard is visible, property owners may still be liable if they failed to fix it or warn visitors, especially if the hazard is unavoidable or if the property owner created the condition. We fight against these common defenses."
      },
      {
        question: "Can I sue the city for a sidewalk accident?",
        answer: "Possibly, but municipal liability cases have strict notice requirements and shorter deadlines. If a city sidewalk or other public property defect caused your accident, you may have a claim, but you must act quickly to preserve your rights."
      },
      {
        question: "What if I was partially at fault?",
        answer: "Texas follows modified comparative fault. If you're 50% or less at fault, you can still recover damages, but your compensation will be reduced by your percentage of fault. We fight to minimize any fault assigned to you."
      },
      {
        question: "How long do I have to file a slip and fall claim?",
        answer: "You generally have two years from the date of the accident in Texas. However, if municipal liability is involved, there may be much shorter notice requirements (often 90 days or less). It's critical to consult an attorney immediately."
      }
    ],
    ctaMessage: "Injured in a slip and fall accident? Property owners have a duty to keep their premises safe. We hold them accountable and fight for maximum compensation."
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


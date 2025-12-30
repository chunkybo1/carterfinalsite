export function getIconForCaseType(type: string): string {
  const t = type.toLowerCase();
  
  // Car / Vehicle
  if (t.includes("rear-end")) return "ArrowDown";
  if (t.includes("head-on")) return "XCircle";
  if (t.includes("hit-and-run")) return "Footprints";
  if (t.includes("drunk") || t.includes("alcohol")) return "Wine";
  if (t.includes("distracted") || t.includes("phone")) return "Smartphone";
  if (t.includes("speeding")) return "Gauge";
  if (t.includes("weather") || t.includes("rain") || t.includes("ice")) return "CloudRain";
  if (t.includes("rideshare") || t.includes("uber") || t.includes("lyft")) return "Car";
  if (t.includes("intersection") || t.includes("light")) return "Split";
  if (t.includes("motorcycle")) return "Bike";
  if (t.includes("bicycle")) return "Bike";
  if (t.includes("pedestrian")) return "User";
  if (t.includes("truck") || t.includes("semi") || t.includes("18-wheeler")) return "Truck";
  
  // Medical
  if (t.includes("surgical") || t.includes("surgery")) return "Stethoscope";
  if (t.includes("diagnosis") || t.includes("misdiagnosis")) return "Search";
  if (t.includes("medication") || t.includes("prescription") || t.includes("drug")) return "Pill";
  if (t.includes("birth") || t.includes("obstetric")) return "Baby";
  if (t.includes("anesthesia")) return "Syringe";
  if (t.includes("hospital") || t.includes("emergency")) return "Building2";
  if (t.includes("nursing") || t.includes("elderly")) return "Heart";
  
  // Premises / Slip & Fall
  if (t.includes("wet") || t.includes("slippery") || t.includes("spill")) return "Droplets";
  if (t.includes("sidewalk") || t.includes("pavement")) return "Map";
  if (t.includes("stair") || t.includes("elevator") || t.includes("escalator")) return "ChevronsUp";
  if (t.includes("lighting")) return "Lightbulb";
  if (t.includes("security")) return "ShieldCheck";
  if (t.includes("construction")) return "HardHat";
  
  // Death / Severe
  if (t.includes("fatal") || t.includes("death")) return "Flame";
  if (t.includes("brain") || t.includes("tbi")) return "Brain";
  if (t.includes("spinal") || t.includes("paralysis")) return "Activity";
  
  return "AlertCircle";
}


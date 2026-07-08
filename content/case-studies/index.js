import { deluxpc } from "./deluxpc";
import { parvozonline } from "./parvozonline";
import { vkraudit } from "./vkraudit";

export const caseStudies = [deluxpc, parvozonline, vkraudit];

export function getCaseStudy(slug) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getCaseStudySlugs() {
  return caseStudies.map((item) => item.slug);
}

import { saas } from "./saas";
import { crm } from "./crm";
import { erp } from "./erp";
import { telegramBots } from "./telegram-bots";

export const services = [saas, crm, erp, telegramBots];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}

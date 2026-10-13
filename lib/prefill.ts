/**
 * Lets the hero phone field and the kit buttons hand values to the contact
 * form further down the page, then bring the visitor there.
 */
export const PREFILL_EVENT = "evolve:prefill";

export type Prefill = { phone?: string; supply?: string };

export function prefillContact(detail: Prefill) {
  window.dispatchEvent(new CustomEvent<Prefill>(PREFILL_EVENT, { detail }));
}

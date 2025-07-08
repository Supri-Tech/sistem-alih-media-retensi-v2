import { createAccordion } from "@melt-ui/svelte";

export function initAccordion() {
  const acc = createAccordion({
    multiple: true,
    defaultOpen: ["transaksi"],
  });

  return {
    elements: acc.elements,
    states: acc.states
  };
}

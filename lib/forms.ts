export const REASONS = [
  { value: "weight-loss", label: "Lose weight" },
  { value: "appetite", label: "Curb appetite & food noise" },
  { value: "glp1-plateau", label: "Push past a GLP-1 plateau" },
  { value: "metabolic-health", label: "Improve metabolic health" },
  { value: "recomposition", label: "Body recomposition" },
  { value: "other", label: "Other" },
] as const;

export type ReasonValue = (typeof REASONS)[number]["value"];

export function formDataToUrlEncoded(
  form: HTMLFormElement,
  extra?: Record<string, string>,
): string {
  const formData = new FormData(form);
  if (extra) {
    for (const [k, v] of Object.entries(extra)) {
      formData.set(k, v);
    }
  }
  const body = new URLSearchParams();
  formData.forEach((value, key) => {
    if (typeof value === "string") body.append(key, value);
  });
  return body.toString();
}

export async function submitNetlifyForm(
  form: HTMLFormElement,
  extra?: Record<string, string>,
): Promise<Response> {
  return fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formDataToUrlEncoded(form, extra),
  });
}

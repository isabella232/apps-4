export function isValidUrl(url) {
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}[\.,:][a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
  return regex.test(url);
}

export const callWebhook = (webhookUrl, authToken) =>
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-preview-update-source": "contentful-sidebar-extension",
      "x-preview-auth-token": authToken || "",
    },
    body: JSON.stringify({}),
  });

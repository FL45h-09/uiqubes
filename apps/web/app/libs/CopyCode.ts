export const copyCode = async (
  code: string,
  onSuccess?: () => void,
  onError?: (err: unknown) => void
) => {
  try {
    await navigator.clipboard.writeText(code);
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error("Failed to copy:", err);
    if (onError) onError(err);
  }
};

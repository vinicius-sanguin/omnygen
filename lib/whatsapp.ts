const PHONE = "5511976468487";

export function whatsappLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

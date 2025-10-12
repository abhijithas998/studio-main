
'use client';
import { Button } from '@/components/ui/button';

export function FloatingWhatsApp() {
  const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M16.003 4.413c-6.388 0-11.583 5.195-11.583 11.583c0 2.022.52 3.933 1.45 5.623L4 28l6.633-1.93c1.623.833 3.453 1.32 5.37 1.32c6.387 0 11.58-5.195 11.58-11.583c0-6.388-5.193-11.583-11.58-11.583zm0 21.083c-1.742 0-3.4-.44-4.888-1.253l-.35-.205l-3.63 1.06l1.08-3.54l-.23-.368c-.9-1.458-1.44-3.188-1.44-5.01c0-5.24 4.25-9.49 9.49-9.49c5.24 0 9.492 4.25 9.492 9.49c0 5.24-4.252 9.49-9.492 9.49zm5.29-6.86c-.282-.14-1.66-0.82-1.918-0.917c-.258-.098-.445-.14-.633.14c-.188.28-.724.916-.888 1.1c-.164.18-.33.197-.612.057c-1.428-.68-2.36-1.24-3.25-2.18c-1.12-1.17-1.8-2.4-2.1-3.2c-.18-.45.18-.7.4-.9c.15-.14.3-.25.4-.35c.13-.12.18-.2.25-.33c.09-.17.04-.31 0-.42c-.04-.1-.63-1.5-1-2c-.35-.5-.7-.4-1-.4h-.5c-.27 0-.7.1-1 .3c-.3.2-.8.8-1 1.7c-.2 1-.2 2.1.2 3.3c.4 1.2 1.3 2.5 2.8 4.1c2 2 3.8 3.3 5.8 4.2c2 1 3.2 1.1 4.3.8c1-.2 1.5-.7 1.8-1.2c.3-.5.3-1 .2-1.2c-.1-.2-.2-.3-.5-.4z"></path></svg>
  );

  return (
    <a
      href="https://wa.me/917902265603"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </Button>
    </a>
  );
}

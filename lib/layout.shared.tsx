import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Capture Logo"
            width={24}
            height={24}
          />
          <span>Capture</span>
        </div>
      ),
    },
    links: [
      { text: 'Docs', url: '/docs/get-started' },
      { text: 'API', url: '/docs/batch-image' },
      { text: 'Integrations', url: '/docs/slack-integration' },
    ],
  };
}

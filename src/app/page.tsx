"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2DReveal from '@/components/sections/layouts/howtobuy/2DRevealHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import ProcessRoadmap from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'brainRot', colorTemplate: 2, textAnimation: 'flip' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          buttonText="Buy BrainRot" 
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How To Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Roadmap', id: 'roadmap' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Footer', id: 'footer' }
          ]} 
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SimpleHero
          title="Welcome to BrainRot MemeCoin"
          description="Join the chaos and become a part of our meme-driven community."
          primaryButtonText="Buy Now"
          backgroundImage="/images/logo.svg"
          backgroundImageAlt="BrainRot MemeCoin Logo"
        />
      </div>

      <div id="about" data-section="about">
        <CtaAbout
          title="About BrainRot MemeCoin"
          descriptions={[
            "BrainRot MemeCoin is your key to a chaotic meme community.",
            "Join us as we disrupt traditional finance and create fun narratives around digital currency."
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2DReveal
          steps={[
            { title: 'Step 1', description: 'Get your crypto wallet ready' },
            { title: 'Step 2', description: 'Buy Ethereum from an exchange' },
            { title: 'Step 3', description: 'Swap Ethereum for BrainRot on DEX' }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Explore the details behind BrainRot MemeCoin's distribution and usage."
          tokenData={[
            { value: '100M', description: 'Total Supply' },
            { value: '70%', description: 'Community Distribution' },
            { value: '30%', description: 'Team & Advisors' }
          ]}
        />
      </div>

      <div id="roadmap" data-section="roadmap">
        <ProcessRoadmap
          items={[
            { id: '1', title: 'Phase 1', description: 'Launch the community and gather feedback', image: '/images/logo.svg', items: [], reverse: false },
            { id: '2', title: 'Phase 2', description: 'Implement community suggestions and improve the product', image: '/images/logo.svg', items: [], reverse: true }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <ImageFAQ
          title="Frequently Asked Questions"
          description="Find answers to common questions about BrainRot MemeCoin."
          image="/images/logo.svg"
          imageAlt="FAQ Visual"
          items={[
            { title: 'What is BrainRot MemeCoin?', content: 'It is a community-driven coin focused on fun and transparency.' },
            { title: 'How can I buy it?', content: 'You can buy it on decentralized exchanges using Ethereum.' }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <LogoFooter
          logoSrc="/images/logo.svg"
          logoAlt="BrainRot MemeCoin Logo"
          columns={[
            { title: 'Company', items: [{ label: 'About Us', onClick: () => {} }, { label: 'Privacy Policy', onClick: () => {} }] },
            { title: 'Support', items: [{ label: 'Help Center', onClick: () => {} }, { label: 'Contact Us', onClick: () => {} }] },
            { title: 'Social', items: [{ label: 'Twitter', onClick: () => {} }, { label: 'Discord', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 BrainRot MemeCoin. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
import { useParams, Navigate } from 'react-router-dom';
import { Download, ExternalLink, Lock, Unlock, Vault, ArrowRightLeft, Coins, Trophy, Users, Target, Shield, Zap, Shuffle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Access tokens for pitch deck (set via environment)
const VALID_TOKENS = (import.meta.env.VITE_PITCH_TOKENS || '').split(',').filter(Boolean);

// Hook for scroll-based animations
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const PitchDeck = () => {
  const { token } = useParams<{ token: string }>();

  if (!token || !VALID_TOKENS.includes(token)) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(63, 177, 242, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(63, 177, 242, 0.4);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.5s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }

        .pre-animate {
          opacity: 0;
        }
      `}</style>

      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 animate-glow">
              <Vault className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Arc Treasury</h1>
              <p className="text-sm text-muted-foreground">Investor Pitch Deck</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/docs/Arc-Treasury-Pitch-Deck.pdf"
              download="Arc-Treasury-Pitch-Deck.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href="https://arctreasury.biz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 border border-border/50 transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Visit Site</span>
            </a>
          </div>
        </div>
      </header>

      {/* Confidentiality Notice */}
      <div className="bg-yellow-500/10 border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm text-yellow-500">
          <Lock className="w-4 h-4 animate-pulse" />
          <span>Confidential - For Authorized Investors Only</span>
        </div>
      </div>

      {/* Slides */}
      <main className="container mx-auto px-4 py-12 space-y-16 max-w-5xl">

        {/* Personalized Hivemind Welcome */}
        {token === 'hivemind-dec2025' && (
          <section className="text-center py-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-medium">Prepared for Hivemind Capital Partners</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              We're excited to present Arc Treasury — a project that aligns with your thesis-driven approach to <strong className="text-foreground">Payment Rails</strong> and <strong className="text-foreground">Infrastructure</strong> investments. Built on Circle's institutional-grade L1, we're bridging TradFi yield to the protocol economy.
            </p>
          </section>
        )}

        {/* Personalized DCVC Welcome */}
        {token === 'dcvc-dec2025' && (
          <section className="text-center py-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-medium">Prepared for DCVC</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              We're building <strong className="text-foreground">core financial infrastructure</strong> for Circle's ecosystem — yield rails that connect $270B in idle stablecoins to US Treasury returns. A <strong className="text-foreground">deep tech approach</strong> to solving trillion-dollar capital inefficiency, aligned with your thesis on computational solutions for real-world problems.
            </p>
          </section>
        )}

        {/* Personalized 1kx Welcome */}
        {token === '1kx-dec2025' && (
          <section className="text-center py-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-medium">Prepared for 1kx</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Your <strong className="text-foreground">$100M Safe lead</strong> and <strong className="text-foreground">Superstate seed</strong> shaped our thesis: DAOs and protocols need <strong className="text-foreground">permissionless yield infrastructure</strong>. Arc Treasury is the missing piece — T-Bill yields accessible to any USDC holder, designed to integrate with Safe vaults and the DeFi stack you've already backed.
            </p>
          </section>
        )}

        {/* Slide 1: Title */}
        <section className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight animate-fade-in-up">
            Arc Treasury
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up stagger-1 pre-animate" style={{animationFillMode: 'forwards'}}>
            The first yield vault natively built on Circle's Arc L1
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in-up stagger-2 pre-animate" style={{animationFillMode: 'forwards'}}>
            USDC yield from T-Bills. Built on Circle's L1. Live on testnet.
          </p>
        </section>

        {/* Slide 2: Problem */}
        <AnimatedSlide>
          <SlideTitle>The Problem</SlideTitle>
          <SlideSubtitle>$270B in stablecoins earning 0% yield</SlideSubtitle>
          <p className="text-muted-foreground mb-6">
            Billions idle. Users want safety + returns — but have no bridge between DeFi & T-Bills.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <AnimatedCard delay={1}><ProblemCard icon="⚠️" title="DeFi risks" desc="Variable rates + high risks" /></AnimatedCard>
            <AnimatedCard delay={2}><ProblemCard icon="🐢" title="TradFi" desc="Slow, limited access, no crypto rails" /></AnimatedCard>
            <AnimatedCard delay={3}><ProblemCard icon="💤" title="USDC Hold" desc="Zero yield on idle capital" /></AnimatedCard>
          </div>
          <p className="text-primary font-semibold mt-6 text-center text-lg">
            Arc Treasury bridges this gap.
          </p>
        </AnimatedSlide>

        {/* Slide 3: Solution */}
        <AnimatedSlide>
          <SlideTitle>The Solution</SlideTitle>
          <SlideSubtitle>Arc Treasury: T-Bill yield in one click</SlideSubtitle>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <AnimatedCard delay={1}><FeatureBox icon={<Vault className="w-6 h-6" />} title="Treasury Vault" desc="Deposit USDC → earn ~4% APY from T-Bills via USYC" /></AnimatedCard>
            <AnimatedCard delay={2}><FeatureBox icon={<ArrowRightLeft className="w-6 h-6" />} title="Multi-chain Bridge" desc="Sepolia ↔ Arc ↔ Solana via Circle CCTP V2" /></AnimatedCard>
            <AnimatedCard delay={3}><FeatureBox icon={<Coins className="w-6 h-6" />} title="Stablecoin Swap" desc="USDC/EURC AMM pool with real EUR/USD rate" /></AnimatedCard>
            <AnimatedCard delay={4}><FeatureBox icon={<Trophy className="w-6 h-6" />} title="Points & Rewards" desc="Gamified incentives, NFT badges, multipliers" /></AnimatedCard>
          </div>
          {/* USYC Explainer - Full width block */}
          <AnimatedCard delay={5}>
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-lg">What is USYC?</h4>
                    <a href="https://www.circle.com/usyc" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Learn more →</a>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">USYC</strong> is Hashnote's tokenized US Treasury fund — backed by short-term T-Bills yielding ~4% APY with instant USDC redemption available 24/7.
                  </p>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50">
                    <Unlock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-medium text-primary">Democratizing Access:</span>
                      <span className="text-muted-foreground ml-2">Direct USYC requires institutional status, KYC, and $100K minimum. Arc Treasury removes all barriers — any USDC holder can access T-Bill yields.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
          <div className="mt-6 text-center">
            <a href="https://arctreasury.biz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium inline-flex items-center gap-1 group">
              Live on testnet: arctreasury.biz <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </AnimatedSlide>

        {/* Slide 4: Why Arc */}
        <AnimatedSlide>
          <SlideTitle>Why Arc?</SlideTitle>
          <SlideSubtitle>Circle's own Layer 1 blockchain</SlideSubtitle>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <AnimatedCard delay={1}><FeatureBox icon={<Shield className="w-6 h-6" />} title="Native USDC" desc="Not bridged tokens" /></AnimatedCard>
            <AnimatedCard delay={2}><FeatureBox icon={<Users className="w-6 h-6" />} title="Direct Relationship" desc="With $60B stablecoin issuer" /></AnimatedCard>
            <AnimatedCard delay={3}><FeatureBox icon={<Zap className="w-6 h-6" />} title="First Mover" desc="Low competition advantage" /></AnimatedCard>
            <AnimatedCard delay={4}><FeatureBox icon={<Target className="w-6 h-6" />} title="Institutional-grade" desc="Enterprise infrastructure" /></AnimatedCard>
          </div>
          <p className="text-muted-foreground mt-6 text-center italic">
            Building on Circle's strategic L1 = strong ecosystem backing
          </p>
        </AnimatedSlide>

        {/* Slide 5: Product Status */}
        <AnimatedSlide>
          <SlideTitle>Fully Functional Product</SlideTitle>
          <SlideSubtitle>Production-ready on testnet</SlideSubtitle>
          <p className="text-muted-foreground mb-4">
            Arc Treasury is not a concept — it's a fully operational DeFi yield vault with 5 production contracts.
          </p>

          {/* Built & Tested */}
          <div className="grid md:grid-cols-3 gap-2 mb-4">
            {[
              { emoji: "🏦", text: "Treasury Vault (upgradeable proxy)" },
              { emoji: "🔐", text: "Locked positions: 1, 3, 12-month terms" },
              { emoji: "🌉", text: "CCTP V2 Bridge: Sepolia ↔ Arc ↔ Solana" },
              { emoji: "💱", text: "AMM Swap: USDC/EURC with real EUR/USD rate" },
              { emoji: "🏅", text: "Points engine + NFT badges (1.2x-3x multipliers)" },
              { emoji: "🔗", text: "Referral system: 5 tiers (Bronze → Diamond)" }
            ].map((item, i) => (
              <AnimatedCard key={i} delay={i + 1}><StatusItem emoji={item.emoji} text={item.text} /></AnimatedCard>
            ))}
          </div>

          {/* Pre-Mainnet & Post-Mainnet */}
          <div className="grid md:grid-cols-2 gap-3">
            {/* Pre-Mainnet */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border border-yellow-500/20">
              <h4 className="text-xs font-semibold text-yellow-500 mb-2">Pre-Mainnet (funded by seed)</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">Security audit (Trail of Bits / OZ)</span></div>
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">USYC institutional onboarding (KYC, $100K+)</span></div>
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">Bridge: Base, Arbitrum, Polygon</span></div>
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">DEX aggregator & liquidity routing</span></div>
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">Portfolio dashboard & tx history</span></div>
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">Achievements & gamification</span></div>
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">Points optimization & anti-gaming</span></div>
                <div className="flex items-center gap-2"><span className="text-yellow-500">→</span><span className="text-muted-foreground">Admin dashboard & monitoring</span></div>
              </div>
            </div>

            {/* Post-Mainnet */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20">
              <h4 className="text-xs font-semibold text-green-500 mb-2">Post-Mainnet Roadmap</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2"><span className="text-green-500">→</span><span className="text-muted-foreground">Auto-compound vault</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">→</span><span className="text-muted-foreground">SDK/API for dApp integrations</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">→</span><span className="text-muted-foreground">Mobile app (PWA)</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">→</span><span className="text-muted-foreground">Fiat on-ramp (card → USDC)</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">→</span><span className="text-muted-foreground">Additional yield integrations</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">→</span><span className="text-muted-foreground">Governance (post-TGE)</span></div>
                <div className="flex items-center gap-2"><span className="text-green-500">→</span><span className="text-muted-foreground">Institutional solutions</span></div>
              </div>
            </div>
          </div>

          <p className="text-primary font-semibold mt-3 text-center text-sm">
            Core complete. 50+ testnet deployments. Development + Audit → Mainnet.
          </p>
        </AnimatedSlide>

        {/* Slide 6: Business Model */}
        <AnimatedSlide>
          <SlideTitle>Business Model</SlideTitle>
          <SlideSubtitle>Path to $2.6M ARR at $100M TVL</SlideSubtitle>
          <div className="overflow-x-auto mt-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-3 px-4 text-primary font-semibold">Revenue Stream</th>
                  <th className="text-left py-3 px-4 text-primary font-semibold">Fee</th>
                  <th className="text-right py-3 px-4 text-primary font-semibold">At $100M TVL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr className="hover:bg-muted/20 transition-colors"><td className="py-3 px-4">Vault yield fee</td><td className="py-3 px-4">5% of yield</td><td className="py-3 px-4 text-right">$200K/year</td></tr>
                <tr className="hover:bg-muted/20 transition-colors"><td className="py-3 px-4">Bridge fees</td><td className="py-3 px-4">0.06%</td><td className="py-3 px-4 text-right">$1.4M/year</td></tr>
                <tr className="hover:bg-muted/20 transition-colors"><td className="py-3 px-4">Swap fees</td><td className="py-3 px-4">0.2%</td><td className="py-3 px-4 text-right">$1M/year</td></tr>
                <tr className="font-bold text-primary"><td className="py-3 px-4">Total</td><td className="py-3 px-4"></td><td className="py-3 px-4 text-right text-xl">$2.6M/year</td></tr>
              </tbody>
            </table>
          </div>
          {/* Scale Economics */}
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
            <h4 className="font-semibold text-sm mb-3 text-primary">Scale Economics</h4>
            <div className="grid grid-cols-4 gap-3 text-center text-sm">
              <div className="p-2 rounded-lg bg-card/50">
                <div className="text-muted-foreground text-xs">$10M TVL</div>
                <div className="font-bold">$260K</div>
                <div className="text-xs text-muted-foreground">Break-even</div>
              </div>
              <div className="p-2 rounded-lg bg-card/50 border border-primary/30">
                <div className="text-muted-foreground text-xs">$100M TVL</div>
                <div className="font-bold text-primary">$2.6M</div>
                <div className="text-xs text-muted-foreground">Conservative</div>
              </div>
              <div className="p-2 rounded-lg bg-card/50">
                <div className="text-muted-foreground text-xs">$500M TVL</div>
                <div className="font-bold">$13M</div>
                <div className="text-xs text-muted-foreground">Growth</div>
              </div>
              <div className="p-2 rounded-lg bg-card/50">
                <div className="text-muted-foreground text-xs">$1B TVL</div>
                <div className="font-bold">$26M</div>
                <div className="text-xs text-muted-foreground">Ondo-scale</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Unit economics improve with scale — fixed infra costs, variable revenue. <span className="text-primary">80%+ margin at scale.</span>
            </p>
          </div>
        </AnimatedSlide>

        {/* Slide 7: Traction */}
        <AnimatedSlide className="bg-gradient-to-br from-primary/5 to-primary/10">
          <SlideTitle>Traction</SlideTitle>
          <SlideSubtitle>Real testnet metrics — First Month (organic)</SlideSubtitle>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <AnimatedMetric value="1,269" label="Transactions" delay={1} />
            <AnimatedMetric value="$31M+" label="Volume" delay={2} />
            <AnimatedMetric value="162" label="Active Wallets" delay={3} />
            <AnimatedMetric value="290K+" label="Points Earned" delay={4} />
            <AnimatedMetric value="24+" label="Referrals" delay={5} />
          </div>
          <p className="text-muted-foreground mt-6 text-center text-sm">
            All metrics achieved with $0 marketing spend — organic users from Arc ecosystem.
          </p>
          <div className="mt-4 p-4 rounded-lg bg-card/50 border border-border/30 text-center animate-glow">
            <p className="text-foreground/90 italic mb-2">
              "The project is too early for direct investment from our side but we'll keep a very close eye out as you continue to scale."
            </p>
            <p className="text-primary font-medium text-sm">
              — David Shamash, Circle Ventures (Dec 2025)
            </p>
          </div>

          {/* Community Feedback */}
          <div className="mt-4 grid md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-card/30 border border-border/20">
              <p className="text-foreground/80 italic text-sm mb-1">"The vault looks great!"</p>
              <p className="text-muted-foreground text-xs">— Elton Tay, Circle DevRel Lead (<a href="https://x.com/TxnSheng" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@TxnSheng</a>)</p>
            </div>
            <div className="p-3 rounded-lg bg-card/30 border border-border/20">
              <p className="text-foreground/80 italic text-sm mb-1">"This is dope man, kudos"</p>
              <p className="text-muted-foreground text-xs">— Techydom, Adom Labs CEO (<a href="https://x.com/TechyDom" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@TechyDom</a>)</p>
            </div>
          </div>
        </AnimatedSlide>

        {/* Slide 8: Team */}
        <AnimatedSlide>
          <SlideTitle>Team</SlideTitle>
          <SlideSubtitle>Lean & efficient execution</SlideSubtitle>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <AnimatedCard delay={1}>
              <TeamCard
                name="Anton"
                role="Founder & Lead Developer"
                twitter="claimpilot"
                points={[
                  "Full-stack blockchain dev (5+ years)",
                  "Built Arc Treasury solo: 5 smart contracts, full frontend",
                  "Base Batches 002, Zama FHE Builder Track",
                  "Built Stable2Pay — POS system for Stable Network"
                ]}
              />
            </AnimatedCard>
            <AnimatedCard delay={2}>
              <TeamCard
                name="Robert"
                role="Co-founder & Operations"
                twitter="Robsvr"
                points={[
                  "COO at BonusBlock",
                  "Worked with: Injective, Xion, Axelar, Theoriq",
                  "BD & partnerships across L1/L2 ecosystems"
                ]}
              />
            </AnimatedCard>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/30">
            <p className="text-muted-foreground text-sm text-center">
              <strong className="text-foreground">Ready to step in:</strong> SMM Manager, Market Researcher, Junior Developer
            </p>
          </div>
        </AnimatedSlide>

        {/* Slide 9: Investment Ask - Interactive */}
        <InvestmentAskSlide />

        {/* Slide 11: Roadmap */}
        <AnimatedSlide>
          <SlideTitle>Roadmap</SlideTitle>
          <SlideSubtitle>2026-2027</SlideSubtitle>
          <div className="space-y-4 mt-6">
            {[
              { date: "Q1 2026", text: "Seed close, Georgian LLC" },
              { date: "Q2 2026", text: "Security audit, USYC institutional" },
              { date: "Q3 2026", text: "Mainnet launch on Arc", highlight: true },
              { date: "Q4 2026", text: "$5-15M TVL, growth push" },
              { date: "2027", text: "Multi-chain expansion via CCTP" },
              { date: "2027+", text: "Token launch (TGE)", highlight: true }
            ].map((item, i) => (
              <AnimatedCard key={i} delay={i + 1} direction="left"><RoadmapItem {...item} /></AnimatedCard>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center italic">
            * Timeline dependent on Arc L1 mainnet launch by Circle. Dates may shift accordingly.
          </p>
        </AnimatedSlide>

        {/* Hivemind Portfolio Fit - only for hivemind token */}
        {token === 'hivemind-dec2025' && (
          <AnimatedSlide>
            <SlideTitle>Hivemind Portfolio Fit</SlideTitle>
            <SlideSubtitle>How Arc Treasury aligns with your thesis</SlideSubtitle>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <AnimatedCard delay={1}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Payment Rails</h4>
                  <p className="text-sm text-muted-foreground">Like your investment in RD Technologies — we're building critical USDC infrastructure via Circle's CCTP V2, enabling seamless cross-chain stablecoin settlement.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={2}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Real World Assets</h4>
                  <p className="text-sm text-muted-foreground">Aligned with your 2024 focus on RWA — Arc Treasury brings US T-Bill yields on-chain via USYC, the largest tokenized Treasury fund.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={3}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Crypto Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">Alongside GFO-X and Hiro in your portfolio — we're building foundational DeFi infrastructure on Circle's institutional-grade L1.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={4}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Institutional Grade</h4>
                  <p className="text-sm text-muted-foreground">Your thesis on "institutionalizing digital assets" matches our approach — Circle-backed yield, compliant structure, enterprise infrastructure.</p>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSlide>
        )}

        {/* DCVC Portfolio Fit - only for dcvc token */}
        {token === 'dcvc-dec2025' && (
          <AnimatedSlide>
            <SlideTitle>DCVC Portfolio Fit</SlideTitle>
            <SlideSubtitle>How Arc Treasury aligns with your thesis</SlideSubtitle>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <AnimatedCard delay={1}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Cross-Chain Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">Like your investment in Axelar — we're building cross-chain infrastructure via Circle's CCTP V2, enabling seamless stablecoin settlement across blockchains.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={2}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Trillion-Dollar Problem</h4>
                  <p className="text-sm text-muted-foreground">$270B in idle stablecoin capital earning 0% while T-Bills yield 4%+. We're the infrastructure layer solving this capital inefficiency at protocol level.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={3}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">DeFi Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">Alongside Chainlink and HiFi in your portfolio — we're building foundational yield infrastructure on Circle's institutional-grade L1.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={4}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Deep Tech Approach</h4>
                  <p className="text-sm text-muted-foreground">Smart contracts automating T-Bill yield distribution, on-chain oracles for real rates, transparent TVL tracking — computational solutions for real-world finance.</p>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSlide>
        )}

        {/* 1kx Portfolio Fit - only for 1kx token */}
        {token === '1kx-dec2025' && (
          <AnimatedSlide>
            <SlideTitle>1kx Portfolio Fit</SlideTitle>
            <SlideSubtitle>How Arc Treasury complements your portfolio</SlideSubtitle>

            {/* Lasse Quote */}
            <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-foreground/90 italic mb-2">
                "From DAOs to treasury management tools to institutional custody, Safe has achieved an incredible product market fit... developers and users are only beginning to understand the power of composable asset management."
              </p>
              <p className="text-primary font-medium text-sm">
                — Lasse Clausen, 1kx Founding Partner (on Safe investment)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <AnimatedCard delay={1}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-500 text-xs font-medium">PLANNED</span>
                    <h4 className="font-semibold text-primary">Transak On-Ramp</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Your Transak investment = fiat on-ramp for stablecoins. We're integrating Transak for <strong className="text-foreground">fiat → USDC → yield</strong> in one flow.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={2}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-500 text-xs font-medium">PLANNED</span>
                    <h4 className="font-semibold text-primary">Safe App</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">You led Safe's $100M round. We're building a <strong className="text-foreground">Safe App</strong> — DAOs access T-Bill yields directly from their multisig.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={3}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-500 text-xs font-medium">THESIS</span>
                    <h4 className="font-semibold text-primary">Superstate Complement</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Superstate = institutions + KYC. Arc Treasury = <strong className="text-foreground">permissionless</strong> for DeFi-native users. Same thesis, different segments.</p>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSlide>
        )}

        {/* Slide 12: Why Invest Now */}
        <AnimatedSlide className="bg-gradient-to-br from-primary/5 to-primary/10">
          <SlideTitle>Why Invest Now?</SlideTitle>
          <div className="space-y-4 mt-6">
            {[
              { num: 1, title: "Working product", desc: "Not a whitepaper" },
              { num: 2, title: "First mover on Arc", desc: "Circle's strategic L1" },
              { num: 3, title: "Real yield", desc: "US T-Bills, not ponzinomics" },
              { num: 4, title: "Conservative valuation", desc: "20-40x upside potential" },
              { num: 5, title: "Lean execution", desc: "Startup speed, institutional-grade architecture" }
            ].map((item, i) => (
              <AnimatedCard key={i} delay={i + 1}><WhyPoint {...item} /></AnimatedCard>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-primary">
              We're raising a lean seed to own the Arc-native DeFi layer before TGE.
            </p>
            <p className="text-muted-foreground mt-2 italic">
              Your entry point to a new L1 — with real USDC yield baked in.
            </p>
          </div>
        </AnimatedSlide>

        {/* CTA */}
        <AnimatedSlide noPadding>
          <div className="text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h2 className="text-3xl font-bold text-primary mb-2">Let's Talk</h2>
            <p className="text-muted-foreground mb-8">
              We're raising $1.2M to launch the Arc-native DeFi layer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:info@arctreasury.biz" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                Contact Us
              </a>
              <a href="https://x.com/arctreasury" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-card border border-border/50 font-semibold hover:bg-card/80 transition-all hover:scale-105">
                @arctreasury
              </a>
              <a href="/docs/Arc-Treasury-Pitch-Deck.pdf" download className="px-6 py-3 rounded-xl bg-card border border-border/50 font-semibold hover:bg-card/80 transition-all hover:scale-105 flex items-center gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              arctreasury.biz | info@arctreasury.biz | December 2025
            </p>
          </div>
        </AnimatedSlide>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Confidential Investor Materials | December 2025</p>
        </div>
      </footer>
    </div>
  );
};

// Animated Components
const AnimatedSlide = ({ children, className = '', noPadding = false }: { children: React.ReactNode; className?: string; noPadding?: boolean }) => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      ref={ref}
      className={`${noPadding ? '' : 'p-8 md:p-12 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50'} ${className}`}
      style={{
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </section>
  );
};

const AnimatedCard = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }) => {
  const { ref, isInView } = useInView(0.05);

  const getTransform = () => {
    if (!isInView) {
      switch (direction) {
        case 'left': return 'translateX(-20px)';
        case 'right': return 'translateX(20px)';
        default: return 'translateY(20px)';
      }
    }
    return 'translateY(0) translateX(0)';
  };

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.6s ease-out ${delay * 0.12}s, transform 0.6s ease-out ${delay * 0.12}s`,
        opacity: isInView ? 1 : 0,
        transform: getTransform(),
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

const AnimatedMetric = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const { ref, isInView } = useInView(0.05);

  return (
    <div
      ref={ref}
      className="text-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:scale-105"
      style={{
        transition: `opacity 0.6s ease-out ${delay * 0.12}s, transform 0.6s ease-out ${delay * 0.12}s`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        willChange: 'opacity, transform'
      }}
    >
      <div className="text-2xl md:text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const SlideTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl text-muted-foreground mb-4">{children}</h3>
);

const ProblemCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 hover:border-destructive/40 transition-all hover:scale-[1.02] h-full">
    <span className="text-2xl mb-2 block">{icon}</span>
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

const FeatureBox = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3 hover:border-primary/40 transition-all hover:scale-[1.02] group">
    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const StatusItem = ({ emoji, text }: { emoji: string; text: string }) => (
  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
    <span className="text-lg">{emoji}</span>
    <span className="text-sm">{text}</span>
  </div>
);

const TeamCard = ({ name, role, twitter, points }: { name: string; role: string; twitter?: string; points: string[] }) => (
  <div className="p-6 rounded-xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-all h-full">
    <div className="flex items-center justify-between mb-1">
      <h4 className="text-xl font-bold text-primary">{name}</h4>
      {twitter && (
        <a href={`https://x.com/${twitter}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
          @{twitter}
        </a>
      )}
    </div>
    <p className="text-muted-foreground mb-3">{role}</p>
    <ul className="space-y-1">
      {points.map((p, i) => <li key={i} className="text-sm text-foreground/80">• {p}</li>)}
    </ul>
  </div>
);

const InvestRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className={`flex justify-between items-center p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors ${highlight ? 'ring-1 ring-primary/30' : ''}`}>
    <span className="text-muted-foreground">{label}</span>
    <span className={highlight ? "font-bold text-primary text-lg" : "font-medium"}>{value}</span>
  </div>
);

const FundItem = ({ label, amount, percent }: { label: string; amount: string; percent: number }) => {
  const { ref, isInView } = useInView(0.1);

  return (
    <div ref={ref} className="p-4 rounded-xl bg-muted/20 border border-border/30 hover:border-primary/30 transition-all">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span className="text-primary font-semibold">{amount}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: isInView ? `${percent * 4}%` : '0%' }}
        />
      </div>
      <div className="text-right text-xs text-muted-foreground mt-1">{percent}%</div>
    </div>
  );
};

const RoadmapItem = ({ date, text, highlight }: { date: string; text: string; highlight?: boolean }) => (
  <div className={`flex items-center gap-4 p-4 rounded-xl ${highlight ? 'bg-primary/10 border-primary/30' : 'bg-muted/20 border-border/30'} border hover:scale-[1.01] transition-all`}>
    <div className={`px-3 py-1 rounded-lg text-sm font-medium ${highlight ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
      {date}
    </div>
    <span className={highlight ? 'font-semibold text-primary' : ''}>{text}</span>
  </div>
);

const WhyPoint = ({ num, title, desc }: { num: number; title: string; desc: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:scale-[1.01] group">
    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
      {num}
    </div>
    <div>
      <span className="font-semibold">{title}</span>
      <span className="text-muted-foreground"> — {desc}</span>
    </div>
  </div>
);

// Fund item descriptions for tooltips
const FUND_DESCRIPTIONS: Record<string, string> = {
  'Security Audit': 'Smart contract audit by security firms. Covers vulnerability testing, code review, and formal verification.',
  'USYC Integration': 'Hashnote/Circle institutional onboarding: KYC, legal docs, API integration, compliance setup.',
  'Founders (2)': '2 founders (net): Dev $5K + Ops $4K × 12mo. Gross $138K incl. payroll taxes.',
  'Team (4)': 'Founders $138K + Jr Dev/QA + SMM (net $4K each) × 12mo. Gross $260K incl. payroll taxes.',
  'Team (6)': 'Founders $138K + 4 hires (net $2-3K each) × 12mo. Gross $383K incl. payroll taxes.',
  'Legal & Entity (Basic)': 'Georgian LLC + virtual office + outsourced accountant + basic SAFT.',
  'Legal & Entity (Standard)': 'Georgian LLC + co-working space + accountant + SAFT + token legal review.',
  'Legal & Entity (Full)': 'Georgian LLC + dedicated office + full-time accountant + SAFT + token legal opinion.',
  'Marketing (DIY)': 'In-house: micro-KOLs, paid posts, Telegram ads, community campaigns.',
  'Marketing (Agency)': 'Mid-tier agency + KOL partnerships + CoinGecko/CMC listings.',
  'Marketing (Premium)': 'Top agency (Lunar/Serotonin) + tier-1 KOLs + full PR + conferences.',
  'Operations (Basic)': 'Infra (RPC, hosting) + 2 laptops.',
  'Operations (Standard)': 'Infra + equipment + 1 conf (Dubai: tickets + travel).',
  'Operations (Full)': 'Infra + equipment + 2 conf (Dubai & Singapore: booth + team + travel).',
  'Contingency': 'Buffer for unexpected costs, market changes, or extended runway.',
  'Initial Liquidity': 'Protocol-owned liquidity for USDC/EURC AMM pool. Enables swaps at launch.',
};

// Investment tiers configuration
const INVESTMENT_TIERS = {
  400: {
    amount: 400000,
    tokenAllocation: '6.7%',
    fdv: '$6M',
    funds: [
      { label: 'Security Audit', amount: 50, percent: 12.5 },
      { label: 'USYC Integration', amount: 100, percent: 25 },
      { label: 'Founders (2)', amount: 138, percent: 34.5 },
      { label: 'Legal & Entity (Basic)', amount: 42, percent: 10.5 },
      { label: 'Marketing (DIY)', amount: 50, percent: 12.5 },
      { label: 'Operations (Basic)', amount: 20, percent: 5 },
    ],
    highlights: ['Mainnet launch', 'Core product live', '12-month runway'],
    limitations: ['No AMM liquidity', 'Vault + Bridge only'],
    auditInfo: {
      tier: 'Basic',
      firms: ['Independent auditors', 'Softstack', 'Zelynx'],
      scope: 'Core contracts review, common vulnerabilities',
    },
  },
  800: {
    amount: 800000,
    tokenAllocation: '13.3%',
    fdv: '$6M',
    funds: [
      { label: 'Security Audit', amount: 100, percent: 12.5 },
      { label: 'USYC Integration', amount: 100, percent: 12.5 },
      { label: 'Team (4)', amount: 260, percent: 32.5 },
      { label: 'Legal & Entity (Standard)', amount: 50, percent: 6.25 },
      { label: 'Marketing (Agency)', amount: 120, percent: 15 },
      { label: 'Initial Liquidity', amount: 50, percent: 6.25 },
      { label: 'Operations (Standard)', amount: 60, percent: 7.5 },
      { label: 'Contingency', amount: 60, percent: 7.5 },
    ],
    highlights: ['Marketing agency', 'AMM pool live', '15-month runway'],
    limitations: ['Limited liquidity depth'],
    auditInfo: {
      tier: 'Standard',
      firms: ['Hacken', 'Certik', 'Quantstamp'],
      scope: 'Full codebase audit, formal verification',
    },
  },
  1200: {
    amount: 1200000,
    tokenAllocation: '20%',
    fdv: '$6M',
    funds: [
      { label: 'Security Audit', amount: 150, percent: 12.5 },
      { label: 'USYC Integration', amount: 100, percent: 8.3 },
      { label: 'Team (6)', amount: 383, percent: 31.9 },
      { label: 'Legal & Entity (Full)', amount: 80, percent: 6.7 },
      { label: 'Marketing (Premium)', amount: 167, percent: 13.9 },
      { label: 'Initial Liquidity', amount: 120, percent: 10 },
      { label: 'Operations (Full)', amount: 100, percent: 8.3 },
      { label: 'Contingency', amount: 100, percent: 8.3 },
    ],
    highlights: ['Full product suite', 'Deep liquidity', '18-month runway', 'Conference presence'],
    limitations: [],
    auditInfo: {
      tier: 'Premium',
      firms: ['Trail of Bits', 'OpenZeppelin', 'Consensys Diligence'],
      scope: 'Multi-round audit, economic review, ongoing support',
    },
  },
};

const InvestmentAskSlide = () => {
  const [selectedTier, setSelectedTier] = useState<400 | 800 | 1200>(1200);
  const tier = INVESTMENT_TIERS[selectedTier];
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      ref={ref}
      className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm border border-border/50"
      style={{
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Investment Ask</h2>
      <h3 className="text-lg md:text-xl text-muted-foreground mb-6">Seed Round — Flexible Tiers</h3>

      {/* Tier Selector */}
      <div className="flex justify-center gap-2 mb-8">
        {([400, 800, 1200] as const).map((amount) => (
          <button
            key={amount}
            onClick={() => setSelectedTier(amount)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedTier === amount
                ? 'bg-primary text-primary-foreground scale-105 shadow-lg shadow-primary/20'
                : 'bg-card border border-border/50 hover:border-primary/30 hover:scale-102'
            }`}
          >
            ${amount >= 1000 ? `${amount / 1000}M` : `${amount}K`}
          </button>
        ))}
      </div>

      {/* Selected Amount Display */}
      <div className="text-center mb-8">
        <div className="text-5xl font-bold text-primary mb-2 transition-all duration-300">
          ${tier.amount.toLocaleString()}
        </div>
        <p className="text-muted-foreground">
          {selectedTier === 400 && 'Minimum viable raise — lean execution'}
          {selectedTier === 800 && 'Comfortable raise — balanced growth'}
          {selectedTier === 1200 && 'Target raise — full expansion'}
        </p>
      </div>

      {/* Terms Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20 ring-1 ring-primary/30">
            <span className="text-muted-foreground">Token allocation</span>
            <span className="font-bold text-primary text-lg">{tier.tokenAllocation}</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
            <span className="text-muted-foreground">FDV</span>
            <span className="font-medium">{tier.fdv}</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
            <span className="text-muted-foreground">Instrument</span>
            <span className="font-medium">SAFT</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className={`flex justify-between items-center p-3 rounded-lg ${selectedTier === 1200 ? 'bg-green-500/10 ring-1 ring-green-500/30' : 'bg-muted/20'}`}>
            <span className="text-muted-foreground">Vesting</span>
            <span className={`font-medium ${selectedTier === 1200 ? 'text-green-500' : ''}`}>
              {selectedTier === 1200 ? '3mo cliff' : '6mo cliff'}, 18mo linear
            </span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
            <span className="text-muted-foreground">Previous capital</span>
            <span className="font-medium">$0 (bootstrapped)</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
            <span className="text-muted-foreground">Seed cap</span>
            <span className="font-medium">$1.2M (20%)</span>
          </div>
        </div>
      </div>

      {/* Lead Investor Bonus - Only for 1.2M */}
      {selectedTier === 1200 && (
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/20">
              <Zap className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-semibold text-green-500">Lead Investor Bonus</h4>
              <p className="text-sm text-muted-foreground">
                Full round commitment ($1.2M) unlocks <span className="text-green-500 font-medium">3-month cliff</span> instead of standard 6-month — earlier liquidity for strategic partners.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Use of Funds - Dynamic */}
      <div className="mb-6">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          Use of Funds — ${tier.amount >= 1000000 ? `${(tier.amount / 1000000).toFixed(1)}M` : `${tier.amount / 1000}K`} allocation
        </h4>
        <div className="grid md:grid-cols-2 gap-3">
          {tier.funds.map((item, i) => (
            <div key={i} className={`p-3 rounded-xl bg-muted/20 border transition-all hover:border-primary/30 group ${item.label === 'Security Audit' ? 'border-primary/30' : 'border-border/30'}`}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-sm">{item.label}</span>
                <span className="text-primary font-semibold text-sm">${item.amount}K</span>
              </div>
              {item.label === 'Security Audit' ? (
                <>
                  <p className="text-xs text-muted-foreground mb-1">
                    {tier.auditInfo.tier} tier: {tier.auditInfo.scope}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {tier.auditInfo.firms.map((firm, j) => (
                      <span key={j} className="px-1.5 py-0.5 rounded bg-primary/10 text-xs text-primary">
                        {firm}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {FUND_DESCRIPTIONS[item.label] || ''}
                </p>
              )}
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                  style={{ width: isInView ? `${item.percent * 3}%` : '0%' }}
                />
              </div>
              <div className="text-right text-xs text-muted-foreground mt-1">{item.percent.toFixed(1)}%</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center italic">
          * Allocations are indicative estimates. Final breakdown negotiable with lead investor.
        </p>
      </div>

      {/* What This Unlocks */}
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 className="font-semibold text-sm mb-2 text-primary">What ${selectedTier >= 1000 ? `${selectedTier / 1000}M` : `${selectedTier}K`} unlocks:</h4>
        <div className="flex flex-wrap gap-2">
          {tier.highlights.map((h, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary">
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Limitations - only show for smaller tiers */}
      {tier.limitations.length > 0 && (
        <div className="mt-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
          <h4 className="font-semibold text-sm mb-2 text-yellow-500">Limitations at this tier:</h4>
          <div className="flex flex-wrap gap-2">
            {tier.limitations.map((l, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-yellow-500/10 text-sm text-yellow-600">
                {l}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Future Rounds - Show for all tiers */}
      <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 className="font-semibold text-sm mb-3 text-primary">Future Funding Rounds</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 rounded-lg bg-card/50 border border-primary/30 ring-1 ring-primary/20">
            <div className="text-xs text-muted-foreground mb-1">Seed (Current)</div>
            <div className="font-bold text-primary">${tier.amount >= 1000000 ? `${(tier.amount / 1000000).toFixed(1)}M` : `${tier.amount / 1000}K`} @ $6M FDV</div>
            <div className="text-xs text-muted-foreground mt-1">{tier.tokenAllocation} tokens</div>
          </div>
          <div className="p-3 rounded-lg bg-card/50 border border-border/30">
            <div className="text-xs text-muted-foreground mb-1">Strategic (Post-Mainnet)</div>
            <div className="font-bold text-foreground/80">$2-3M @ $15-25M FDV</div>
            <div className="text-xs text-muted-foreground mt-1">Ecosystem partners</div>
          </div>
          <div className="p-3 rounded-lg bg-card/50 border border-border/30">
            <div className="text-xs text-muted-foreground mb-1">Public / TGE</div>
            <div className="font-bold text-foreground/80">$40-60M FDV</div>
            <div className="text-xs text-muted-foreground mt-1">Post-mainnet</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Seed investors: <span className="text-primary font-medium">3-10x upside</span> to Strategic, <span className="text-primary font-medium">7-10x</span> to TGE.
        </p>
      </div>

      {/* Georgia Info - Only for 1.2M */}
      {selectedTier === 1200 && (
        <div className="mt-4 p-4 rounded-xl bg-muted/30 border border-border/30">
          <h4 className="font-semibold text-sm mb-2 text-primary">Why Georgia (Country)?</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">0%</div>
              <div className="text-muted-foreground text-xs">Corporate tax (retained)</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">1-2 days</div>
              <div className="text-muted-foreground text-xs">Company registration</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">VZP</div>
              <div className="text-muted-foreground text-xs">Crypto-friendly status</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Web3 Hub</div>
              <div className="text-muted-foreground text-xs">Growing ecosystem</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PitchDeck;

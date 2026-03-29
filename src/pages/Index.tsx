import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Tv, Play, Globe, Zap, Film, Radio, ChevronRight, ShieldCheck, Star } from 'lucide-react';

const features = [
  { icon: Tv, title: 'Live TV', desc: 'Watch thousands of live TV channels from around the world in real-time.' },
  { icon: Film, title: 'Movies', desc: 'Stream movies from a curated collection of international films.' },
  { icon: Globe, title: 'Worldwide', desc: 'Channels from Bangladesh, India, Pakistan, USA, and more.' },
  { icon: Zap, title: 'Instant Play', desc: 'No signup, no downloads. Just click and watch instantly.' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Live Streaming Now
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground leading-[1.1] mb-8 animate-slide-up">
              The Next Gen <br />
              <span className="text-gradient">Entertainment</span> Hub
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up [animation-delay:200ms]">
              Experience seamless live TV and cinema-quality movies. High-speed streaming with zero buffering, right in your browser.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:400ms]">
              <Link
                to="/live"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-hero-gradient text-white font-bold text-lg hover:shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="w-5 h-5 fill-current" />
                Start Watching
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/movies"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-secondary/80 backdrop-blur-md text-secondary-foreground font-bold text-lg border border-border hover:bg-secondary transition-all"
              >
                <Film className="w-5 h-5" />
                Browse Movies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
              Premium Features
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div 
                key={f.title} 
                className="group card-elevated rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  <f.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="text-primary"/> SECURE</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Star className="text-primary"/> TOP RATED</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Zap className="text-primary"/> ULTRA FAST</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="relative overflow-hidden bg-hero-gradient rounded-[3rem] p-12 md:p-20 text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
              Don't Miss the Action!
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of users enjoying high-definition live streams every day. Zero cost, infinite fun.
            </p>
            <Link
              to="/live"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-primary font-black text-xl hover:scale-105 transition-transform shadow-xl"
            >
              <Tv className="w-6 h-6" />
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

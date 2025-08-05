"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Download, 
  Github, 
  Mic, 
  Eye, 
  Brain, 
  Shield, 
  Zap, 
  ChevronRight,
  Chrome,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <motion.div 
            className="text-center space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Computer Accessibility
              </Badge>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Accessly</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Next-gen accessibility tools for effortless, private computer control and memory—powered by AI, designed for everyone.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="group" asChild>
                <a href="https://github.com/youneslaaroussi/accessly/releases/download/v1.0.0/echovault-1.0.0-setup.exe" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download Accessly
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="https://github.com/youneslaaroussi/accessly?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Repository
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Vimeo Video Demo */}
        <motion.div 
          className="container mx-auto px-4 mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-xl border bg-card p-4 shadow-2xl">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/76979871?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Demo: AI voice commands controlling desktop applications with natural language"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Demo: AI voice commands controlling desktop applications with natural language
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Accessibility Redefined
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Break down barriers with AI-powered voice control, visual memory, and natural language automation.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Voice-First Control</CardTitle>
                  <CardDescription>
                    Natural conversation with "Hey Gemma" wake word detection. No complex commands to memorize.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Screen Memory Vault</CardTitle>
                  <CardDescription>
                    AI automatically captures and understands everything you've seen. Find any document or website instantly.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Intelligent Automation</CardTitle>
                  <CardDescription>
                    Multi-step workflows executed through natural language. Compose emails, fill forms, research topics.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Complete Privacy</CardTitle>
                  <CardDescription>
                    Everything runs locally. No data ever leaves your computer. Powered by offline Gemma 3n model.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Chrome className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Browser Integration</CardTitle>
                  <CardDescription>
                    Optional Chrome extension for advanced web automation. Control websites with natural language.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Instant Response</CardTitle>
                  <CardDescription>
                    Optimized for consumer hardware. Works on standard laptops with minimal resource usage.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center space-y-4 mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                Get Started
              </h2>
              <p className="text-xl text-muted-foreground">
                Two powerful tools to transform your accessibility experience
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Desktop App */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Accessly Desktop</CardTitle>
                    <CardDescription>
                      Core accessibility automation for Windows
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Quick Setup:</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">1</div>
                          <span>
                            <a href="https://ollama.com/download/windows" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Download Ollama for Windows</a> and pull Gemma 3n model
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">2</div>
                          <span>Download and install Python 3.8+</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">3</div>
                          <span>Clone repository and run setup</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button className="w-full group" asChild>
                        <a href="https://github.com/youneslaaroussi/accessly/releases/download/v1.0.0/echovault-1.0.0-setup.exe" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Download Accessly
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full group" asChild>
                        <a href="https://github.com/youneslaaroussi/accessly?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          GitHub Repository
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Browser Plugin */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Chrome className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Accessly Plugin</CardTitle>
                    <CardDescription>
                      Enhanced browser automation for Chrome
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Quick Setup:</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">1</div>
                          <span>Install Accessly Desktop first</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">2</div>
                          <span>Enable Developer mode in Chrome</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">3</div>
                          <span>Load unpacked extension from repository</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button className="w-full group" asChild>
                        <a href="https://github.com/youneslaaroussi/accessly/releases/download/v1.0.0/chrome-mv3-dev.zip" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Download Plugin
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full group" asChild>
                        <a href="https://github.com/youneslaaroussi/accessly-plugin" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Plugin Repository
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of AI-driven accessibility automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/accessly-screenshot.png"
                    alt="Accessly main interface showing voice control and AI processing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Main Interface</h3>
                  <p className="text-sm text-muted-foreground">
                    Voice interface with real-time waveform visualization and "Hey Gemma" wake word detection
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/accessly-processing.png"
                    alt="AI processing and memory vault interface"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">AI Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Screen Memory Vault showing temporal search results with visual thumbnails and OCR analysis
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/accessly-tool-call.png"
                    alt="Function calling and automation workflow"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Tool Calling</h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-step email automation workflow with DOM element highlighting and natural language processing
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/accessly-overview-min.png"
                    alt="Accessly overview and system architecture"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">System Overview</h3>
                  <p className="text-sm text-muted-foreground">
                    Browser plugin interface showing tab management, form automation, and real-time DOM interaction
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ready to Transform Your Computer Experience?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join the accessibility revolution with AI-powered voice control, visual memory, and complete privacy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group" asChild>
                <a href="https://github.com/youneslaaroussi/accessly/releases/download/v1.0.0/echovault-1.0.0-setup.exe" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download Accessly
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="https://github.com/youneslaaroussi/accessly?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Star on GitHub
                </a>
              </Button>
            </div>

            <div className="border-t pt-8 mt-8">
              <p className="text-sm text-muted-foreground">
                Built with ❤️ for the accessibility community. Open source and privacy-first.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, TrendingUp, Users, FileText, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Adaptive Learning Platform" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/90" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Adaptive Learning
              <span className="block bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
                Management System
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Intelligent study companion that personalizes your learning experience with AI-powered assessments, 
              progress tracking, and adaptive recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Learning
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Intelligent Learning Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered tools designed to enhance your educational experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Document Processing</CardTitle>
                <CardDescription>
                  Upload and process educational content from PDFs and text files with intelligent parsing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <Brain className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>AI Assessment Generation</CardTitle>
                <CardDescription>
                  Automatically generate diverse question formats and assessments tailored to your content
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <BarChart3 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Track progress with detailed analytics and insights into your learning patterns
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Adaptive Recommendations</CardTitle>
                <CardDescription>
                  Receive personalized study recommendations based on your learning behavior
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>
                  Engage with interactive content and assessments designed for optimal retention
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Collaborative Learning</CardTitle>
                <CardDescription>
                  Connect with peers and instructors for enhanced collaborative learning experiences
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already using our adaptive learning platform to achieve their educational goals.
          </p>
          <Button variant="success" size="lg" className="text-lg px-8 py-4">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
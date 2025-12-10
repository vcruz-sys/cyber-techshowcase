import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart3, Database, PieChart, TrendingUp, Table, Filter, ArrowRight, Linkedin, CheckCircle, Layers } from "lucide-react";
import { Link } from "react-router-dom";
const PowerBIShowcase = () => {
  const features = [{
    icon: Database,
    title: "Data Connection & Import",
    description: "Connected directly to data sources, imported tables, and established relationships between datasets for comprehensive analysis."
  }, {
    icon: Table,
    title: "Data Transformation",
    description: "Used Power Query to clean, reshape, and prepare raw data for visualization—handling nulls, formatting columns, and creating calculated fields."
  }, {
    icon: Filter,
    title: "Interactive Filtering",
    description: "Implemented slicers and filters that allow users to drill down into specific time periods, categories, or metrics dynamically."
  }, {
    icon: BarChart3,
    title: "Visual Storytelling",
    description: "Designed clear, impactful visualizations that communicate insights at a glance—bar charts, line graphs, KPI cards, and more."
  }, {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Identified patterns and trends within the data to support data-driven decision making and forecasting."
  }, {
    icon: Layers,
    title: "Dashboard Design",
    description: "Created cohesive, user-friendly dashboards that present complex data in an accessible and actionable format."
  }];
  const processSteps = [{
    step: 1,
    title: "Connect to Data Sources",
    description: "Import data from Excel, CSV, databases, or APIs into Power BI. Establish connections and preview the data structure."
  }, {
    step: 2,
    title: "Transform & Clean Data",
    description: "Use Power Query Editor to remove duplicates, handle missing values, change data types, and create calculated columns."
  }, {
    step: 3,
    title: "Build Relationships",
    description: "Define relationships between tables using primary and foreign keys to enable cross-table analysis and filtering."
  }, {
    step: 4,
    title: "Create Visualizations",
    description: "Design charts, tables, and KPI cards that effectively communicate the story within your data."
  }, {
    step: 5,
    title: "Add Interactivity",
    description: "Implement slicers, drill-through pages, and bookmarks to let users explore the data dynamically."
  }, {
    step: 6,
    title: "Share & Collaborate",
    description: "Publish reports to Power BI Service for sharing with stakeholders and enabling real-time collaboration."
  }];
  const insights = ["Transformed raw datasets into actionable business intelligence", "Reduced report generation time through automated data refresh", "Enabled stakeholders to self-serve insights through interactive dashboards", "Identified key trends that informed strategic decisions", "Demonstrated proficiency in DAX formulas and measures"];
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <PieChart className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-display">Data Analytics</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Power BI <span className="text-gradient">Showcase</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              Demonstrating my ability to transform raw data into meaningful, interactive visualizations using Microsoft Power BI. This project showcases data connection, transformation, and visual storytelling skills.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <Button variant="hero" size="lg" asChild>
                <a href="https://www.linkedin.com/in/victorcruzalvarez" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Project <span className="text-gradient">Overview</span>
            </h2>

            <div className="bg-gradient-card rounded-2xl border border-border p-8 md:p-12 shadow-elevated animate-fade-in">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">This Power BI project demonstrates my capability to work with data end to and from connecting to data sources and transforming raw information, to building interactive dashboards that tell a clear story.</p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  By pulling data from structured tables, I was able to clean and organize the information using Power Query, then create relationships between datasets to enable comprehensive cross-table analysis.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The result is an interactive dashboard that allows users to explore the data through filters and slicers, uncovering insights that support data-driven decision making. This project reflects my commitment to making complex data accessible and actionable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">
            Key <span className="text-gradient">Capabilities</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => <div key={feature.title} className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">
              The <span className="text-gradient">Process</span>
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => <div key={step.step} className="flex gap-6 items-start bg-gradient-card rounded-xl border border-border p-6 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-primary">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">
              Project <span className="text-gradient">Outcomes</span>
            </h2>

            <div className="bg-gradient-card rounded-2xl border border-border p-8 md:p-10 shadow-elevated">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center glow-primary">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl">Key Achievements</h3>
              </div>

              <ul className="space-y-4">
                {insights.map((insight, index) => <li key={index} className="flex items-start gap-3 animate-fade-in" style={{
                animationDelay: `${index * 0.05}s`
              }}>
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{insight}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Interested in <span className="text-gradient">Data Analytics?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's connect and discuss how data visualization can drive insights for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.linkedin.com/in/victorcruzalvarez" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default PowerBIShowcase;
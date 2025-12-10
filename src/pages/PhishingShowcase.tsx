import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AlertTriangle,
  Mail,
  Shield,
  CheckCircle,
  XCircle,
  ExternalLink,
  ArrowRight,
  Eye,
  Lock,
  AlertCircle,
  Github,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";
import phishingFlowchart from "@/assets/phishing-flowchart.png";

const PhishingShowcase = () => {
  const redFlags = [
    {
      icon: Mail,
      title: "Suspicious Sender Address",
      description: "The email appears to come from a trusted source but uses a slightly misspelled domain or unusual email format.",
      example: "support@amaz0n-secure.com instead of amazon.com",
    },
    {
      icon: AlertTriangle,
      title: "Urgency & Fear Tactics",
      description: "Creates panic by threatening account suspension, security breaches, or missed opportunities to pressure quick action.",
      example: "Your account will be suspended in 24 hours!",
    },
    {
      icon: ExternalLink,
      title: "Suspicious Links",
      description: "Links that don't match the displayed text or redirect to unfamiliar domains designed to steal credentials.",
      example: "Hover shows: http://fake-bank-login.xyz",
    },
    {
      icon: AlertCircle,
      title: "Generic Greetings",
      description: "Legitimate companies typically address you by name. Phishing emails often use generic salutations.",
      example: "Dear Valued Customer, Dear User",
    },
    {
      icon: Lock,
      title: "Requests for Sensitive Info",
      description: "Asks for passwords, SSN, credit card numbers, or other sensitive data that legitimate companies never request via email.",
      example: "Please verify your password by clicking here",
    },
    {
      icon: Eye,
      title: "Poor Grammar & Spelling",
      description: "Professional organizations have quality control. Multiple errors often indicate a scam attempt.",
      example: "Youre acount has been comprimised",
    },
  ];

  const protectionTips = [
    "Always verify the sender's email address carefully",
    "Hover over links before clicking to see the actual URL",
    "Never provide sensitive information via email",
    "When in doubt, contact the company directly using official channels",
    "Enable multi-factor authentication on all accounts",
    "Keep your software and security tools updated",
    "Report suspicious emails to your IT department",
    "Trust your instincts—if something feels off, investigate",
  ];

  const pythonCode = `import re

# Basic lists of suspicious indicators
RISKY_KEYWORDS = ["urgent", "verify", "password", "account", "login", "reset", "suspend", "gift card", "payment", "invoice"]
URGENCY_PHRASES = ["act now", "immediately", "within 24 hours", "final notice", "last warning", "respond immediately"]
URL_SHORTENERS = ["bit.ly", "tinyurl.com", "t.co", "goo.gl"]
EXECUTABLE_EXTS = [".exe", ".bat", ".cmd", ".scr", ".js"]

def extract_urls(text):
    return re.findall(r'https?://\\S+', text)

def find_attachments(text):
    return re.findall(r'attachment:\\s*([^\\s]+)', text.lower())

def risk_label(score):
    if score >= 50:
        return "HIGH"
    elif score >= 20:
        return "MEDIUM"
    return "LOW"

def color(text, level):
    colors = {"HIGH": "\\033[91m", "MEDIUM": "\\033[93m", "LOW": "\\033[92m", "RESET": "\\033[0m"}
    return f"{colors[level]}{text}{colors['RESET']}"

def score_email(subject, body):
    text = (subject + " " + body).lower()
    score = 0
    reasons = []

    # Check keywords
    for word in RISKY_KEYWORDS:
        if word in text:
            score += 8
            reasons.append(f"Keyword: {word}")

    # Check urgency
    for phrase in URGENCY_PHRASES:
        if phrase in text:
            score += 12
            reasons.append(f"Urgency: {phrase}")

    # Check URLs
    urls = extract_urls(text)
    if urls:
        reasons.append(f"Found {len(urls)} link(s)")
        for url in urls:
            if any(s in url for s in URL_SHORTENERS):
                score += 18
                reasons.append(f"Shortened URL: {url}")

    # Check attachments
    attachments = find_attachments(text)
    if attachments:
        reasons.append(f"Attachment(s): {', '.join(attachments)}")
        for att in attachments:
            if any(att.endswith(ext) for ext in EXECUTABLE_EXTS):
                score += 20
                reasons.append(f"Executable attachment: {att}")

    score = min(score, 100)
    return score, risk_label(score), reasons, urls, attachments

def main():
    print("=== Phishing Email Detector ===")
    subject = input("Subject: ").strip()
    body = input("Body: ").strip()

    score, label, reasons, urls, attachments = score_email(subject, body)
    print("\\n--- Analysis ---")
    print(f"Risk Score: {score} ({color(label, label)})")

    print("Reasons:")
    if reasons:
        for r in reasons:
            print(f"- {r}")
    else:
        print("- No obvious phishing signals found.")

    if urls:
        print("Links:")
        for u in urls:
            print(f"- {u}")

    if attachments:
        print("Attachments:")
        for a in attachments:
            print(f"- {a}")

if __name__ == "__main__":
    main()`;

  const sampleOutputs = [
    {
      level: "HIGH",
      input: "Act now to avoid suspension! Verify your account at http://bit.ly/verify-acc Attachment: update.exe",
      output: `Risk Score: 78 (HIGH)
Reasons:
- Keyword: verify
- Keyword: account
- Urgency: act now
- Found 1 link(s)
- Shortened URL: http://bit.ly/verify-acc
- Attachment(s): update.exe
- Executable attachment: update.exe
Links:
- http://bit.ly/verify-acc
Attachments:
- update.exe`,
    },
    {
      level: "HIGH",
      input: "Respond immediately. Reset your password here: https://tinyurl.com/reset-2025 Attachment: security_patch.cmd",
      output: `Risk Score: 86 (HIGH)
Reasons:
- Keyword: password
- Keyword: reset
- Urgency: respond immediately
- Found 1 link(s)
- Shortened URL: https://tinyurl.com/reset-2025
- Attachment(s): security_patch.cmd
- Executable attachment: security_patch.cmd
Links:
- https://tinyurl.com/reset-2025
Attachments:
- security_patch.cmd`,
    },
    {
      level: "MEDIUM",
      input: "Please update your invoice immediately. View details: https://tinyurl.com/invoice-123",
      output: `Risk Score: 38 (MEDIUM)
Reasons:
- Keyword: invoice
- Urgency: immediately
- Found 1 link(s)
- Shortened URL: https://tinyurl.com/invoice-123
Links:
- https://tinyurl.com/invoice-123`,
    },
    {
      level: "MEDIUM",
      input: "We noticed unusual activity. Act now to secure your account: https://t.co/secure-check",
      output: `Risk Score: 46 (MEDIUM)
Reasons:
- Keyword: account
- Urgency: act now
- Found 1 link(s)
- Shortened URL: https://t.co/secure-check
Links:
- https://t.co/secure-check`,
    },
    {
      level: "LOW",
      input: "Here are this month's product improvements and tutorials. Read our blog: https://example.com/blog",
      output: `Risk Score: 0 (LOW)
Reasons:
- No obvious phishing signals found.
Links:
- https://example.com/blog`,
    },
    {
      level: "LOW",
      input: "Thanks for attending. Notes are in our SharePoint. No attachments.",
      output: `Risk Score: 0 (LOW)
Reasons:
- No obvious phishing signals found.`,
    },
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "HIGH":
        return "text-risk-high bg-risk-high";
      case "MEDIUM":
        return "text-risk-medium bg-risk-medium";
      case "LOW":
        return "text-risk-low bg-risk-low";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-destructive/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-8 animate-fade-in">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm text-destructive font-display">Security Awareness</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Phishing Email <span className="text-gradient">Detector</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A Python-based tool that analyzes email content for phishing indicators using rules-based scoring. Learn to identify and protect yourself from phishing attacks.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://github.com/victorcruzalvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#code-section">
                  <Code className="w-4 h-4" />
                  View Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              How It <span className="text-gradient">Works</span>
            </h2>
            <div className="bg-gradient-card rounded-2xl border border-border p-6 md:p-8 shadow-elevated animate-fade-in">
              <img
                src={phishingFlowchart}
                alt="Phishing Email Detector Flowchart - Shows the rules-based scoring process from input to risk label output"
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section id="code-section" className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Source <span className="text-gradient">Code</span>
            </h2>

            <div className="bg-gradient-card rounded-2xl border border-border overflow-hidden shadow-elevated animate-fade-in">
              <div className="flex items-center justify-between bg-secondary/50 px-4 py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="font-display text-sm">phishing_detector.py</span>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/victorcruzalvarez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
              <pre className="code-block max-h-96 overflow-y-auto m-0 rounded-none border-0">
                <code className="text-muted-foreground">{pythonCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Outputs Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-center">
              Sample <span className="text-gradient">Outputs</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              See how the detector analyzes different email samples and assigns risk scores based on detected indicators.
            </p>

            <div className="grid gap-6">
              {sampleOutputs.map((sample, index) => (
                <div
                  key={index}
                  className="bg-gradient-card rounded-xl border border-border overflow-hidden shadow-elevated animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between bg-secondary/50 px-4 py-3 border-b border-border">
                    <span className="font-display text-sm text-muted-foreground">Sample Input</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-display font-semibold ${getRiskColor(sample.level)}`}>
                      {sample.level} RISK
                    </span>
                  </div>
                  <div className="p-4 border-b border-border">
                    <p className="text-sm text-muted-foreground font-mono">{sample.input}</p>
                  </div>
                  <div className="bg-background/50 p-4">
                    <p className="text-xs text-muted-foreground mb-2 font-display">Output:</p>
                    <pre className="text-xs text-foreground font-mono whitespace-pre-wrap">{sample.output}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Example */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Anatomy of a <span className="text-destructive">Phishing Email</span>
            </h2>

            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-elevated animate-fade-in">
              {/* Email Header */}
              <div className="bg-secondary/50 p-4 border-b border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="font-display font-semibold">Suspicious Email Example</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-muted-foreground w-16">From:</span>
                    <span className="text-destructive font-mono">security@amaz0n-verify.com</span>
                    <XCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <div className="flex gap-2">
                    <span className="text-muted-foreground w-16">Subject:</span>
                    <span className="text-foreground">⚠️ URGENT: Your account has been compromised!</span>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="p-6 md:p-8 space-y-4">
                <p className="text-muted-foreground italic">Dear Valued Customer,</p>

                <p className="text-muted-foreground">
                  We have detected <span className="text-destructive font-semibold">unusual activity</span> on your account. 
                  Your account will be <span className="text-destructive font-semibold">permanently suspended</span> within 
                  24 hours unless you verify your identity immediately.
                </p>

                <div className="py-4">
                  <Button variant="destructive" className="pointer-events-none">
                    Click Here to Verify Your Account
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">
                    [Actual link: http://malicious-site.xyz/steal-credentials]
                  </p>
                </div>

                <p className="text-muted-foreground">
                  Please act now to avoid loosing access to your account and all associated benifits.
                </p>

                <p className="text-muted-foreground">
                  Best regards,<br />
                  The Security Team
                </p>
              </div>

              {/* Analysis Footer */}
              <div className="bg-destructive/5 border-t border-destructive/20 p-4">
                <div className="flex items-center gap-2 text-destructive font-display font-semibold">
                  <AlertTriangle className="w-5 h-5" />
                  Multiple Red Flags Detected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">
            Common <span className="text-destructive">Red Flags</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {redFlags.map((flag, index) => (
              <div
                key={flag.title}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-destructive/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <flag.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{flag.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{flag.description}</p>
                <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-xs font-mono text-muted-foreground">{flag.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Tips */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">
              How to <span className="text-gradient">Stay Protected</span>
            </h2>

            <div className="bg-gradient-card rounded-2xl border border-border p-8 md:p-10 shadow-elevated">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center glow-primary">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl">Protection Checklist</h3>
              </div>

              <ul className="space-y-4">
                {protectionTips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Want to Learn <span className="text-gradient">More?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Security awareness is the first line of defense. Connect with me to discuss cybersecurity best practices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/victorcruzalvarez"
                target="_blank"
                rel="noopener noreferrer"
              >
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
    </div>
  );
};

export default PhishingShowcase;
const Policy = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy & Terms</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy and trust are important to us. Here's how we protect your data.
          </p>
        </div>

        <div className="space-y-8">
          {/* Privacy Policy */}
          <div className="glass-card p-8 slide-up">
            <h2 className="text-2xl font-semibold mb-6 ocean-gradient bg-clip-text text-transparent">
              Privacy Policy
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Data Collection</h3>
                <p>
                  We collect only the necessary information to provide our meeting analysis service. 
                  This includes audio/video files you upload, meeting metadata, and basic account information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Data Processing</h3>
                <p>
                  Your meeting recordings are processed using advanced AI technology to generate summaries, 
                  action items, and key dates. All processing is done securely on our encrypted servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Data Storage</h3>
                <p>
                  Your data is encrypted at rest and in transit. We retain your meetings and generated 
                  reports for as long as your account is active, or until you request deletion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Data Sharing</h3>
                <p>
                  We do not sell, trade, or share your personal data or meeting content with third parties. 
                  Your meetings remain confidential and are only accessible to you.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="glass-card p-8 slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-semibold mb-6 ocean-gradient bg-clip-text text-transparent">
              Terms of Service
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Acceptable Use</h3>
                <p>
                  MeetWise is designed for legitimate business and personal meeting analysis. 
                  You agree not to upload content that is illegal, harmful, or violates others' rights.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Content Ownership</h3>
                <p>
                  You retain full ownership of your meeting recordings and generated content. 
                  We claim no ownership rights to your data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Service Availability</h3>
                <p>
                  We strive to maintain 99.9% uptime, but cannot guarantee uninterrupted service. 
                  We reserve the right to perform maintenance and updates as needed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Account Termination</h3>
                <p>
                  You may delete your account at any time. Upon termination, your data will be 
                  securely deleted within 30 days unless legally required to retain it longer.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="glass-card p-8 slide-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Questions?</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about our privacy policy or terms of service, 
              please don't hesitate to contact us.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Email: legal@meetwise.com</p>
              <p>Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
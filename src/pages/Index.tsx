import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import MeetingCard from "../components/MeetingCard";
import { dummyMeetings } from "../data/dummyData";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center fade-in">
          <h1 className="text-6xl font-bold mb-6 ocean-gradient bg-clip-text text-transparent">
            MeetWise
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Transform your meeting recordings into actionable insights. 
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload audio or video files from Google Meet, Zoom, Teams and get AI-powered summaries, 
            tasks, and key dates extracted automatically.
          </p>
          <Link to="/upload" className="btn-ocean inline-flex items-center space-x-2">
            <Plus size={20} />
            <span>Upload New Meeting</span>
          </Link>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Your Dashboard</h2>
            <Link to="/upload" className="btn-glass inline-flex items-center space-x-2">
              <Plus size={18} />
              <span>New Upload</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 slide-up">
            {dummyMeetings.map((meeting, index) => (
              <div key={meeting.id} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <MeetingCard {...meeting} />
              </div>
            ))}
          </div>

          {dummyMeetings.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-card max-w-md mx-auto p-8">
                <h3 className="text-xl font-semibold mb-4">No meetings yet</h3>
                <p className="text-muted-foreground mb-6">
                  Upload your first meeting recording to get started with AI-powered insights.
                </p>
                <Link to="/upload" className="btn-ocean inline-flex items-center space-x-2">
                  <Plus size={18} />
                  <span>Upload Meeting</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
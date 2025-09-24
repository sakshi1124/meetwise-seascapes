import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users, Download, CheckCircle2, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDummyMeeting } from "../data/dummyData";
import { toast } from "@/hooks/use-toast";

const MeetingDetails = () => {
  const { id } = useParams<{ id: string }>();
  const meeting = getDummyMeeting(id || "");

  if (!meeting) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Meeting Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const downloadReport = () => {
    toast({
      title: "Download started",
      description: "Your meeting report is being downloaded as PDF.",
    });
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8 fade-in">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-hover mr-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">{meeting.title}</h1>
          </div>
        </div>

        {/* Meeting Info */}
        <div className="glass-card p-6 mb-8 slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 ocean-gradient rounded-lg">
                <Calendar size={20} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Date</div>
                <div className="font-medium">{meeting.date}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 ocean-gradient rounded-lg">
                <Clock size={20} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Time & Duration</div>
                <div className="font-medium">{meeting.time} ({meeting.duration})</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 ocean-gradient rounded-lg">
                <Users size={20} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Participants</div>
                <div className="font-medium">{meeting.participants} people</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Summary */}
          <div className="space-y-8">
            <div className="glass-card p-8 slide-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-semibold mb-6 ocean-gradient bg-clip-text text-transparent">
                Meeting Summary
              </h2>
              <p className="text-foreground text-lg leading-relaxed font-medium">
                {meeting.summary}
              </p>
            </div>

            <div className="glass-card p-8 slide-up" style={{ animationDelay: "400ms" }}>
              <h2 className="text-2xl font-semibold mb-6 ocean-gradient bg-clip-text text-transparent">
                Important Dates
              </h2>
              <div className="space-y-4">
                {meeting.dates.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 teal-light bg-teal/10 rounded-lg mt-1">
                      <CalendarDays size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.event}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                  </div>
                ))}
                {meeting.dates.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    No important dates mentioned in this meeting.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="space-y-8">
            <div className="glass-card p-8 slide-up" style={{ animationDelay: "300ms" }}>
              <h2 className="text-2xl font-semibold mb-6 ocean-gradient bg-clip-text text-transparent">
                Action Items
              </h2>
              <div className="space-y-4">
                {meeting.tasks.map((task, index) => (
                  <div key={index} className="border border-border/30 rounded-lg p-4 smooth-hover hover:bg-muted/20">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-accent mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-medium text-foreground mb-1">{task.task}</div>
                        <div className="text-sm text-muted-foreground">
                          Assigned to: <span className="font-medium">{task.assignee}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Due: <span className="font-medium">{task.deadline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {meeting.tasks.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    No action items identified in this meeting.
                  </p>
                )}
              </div>
            </div>

            {/* Download Section */}
            <div className="glass-card p-8 slide-up" style={{ animationDelay: "500ms" }}>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Download Report</h2>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive PDF report with all meeting insights, action items, and important dates.
              </p>
              <Button onClick={downloadReport} className="w-full btn-ocean">
                <Download size={18} className="mr-2" />
                Download PDF Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
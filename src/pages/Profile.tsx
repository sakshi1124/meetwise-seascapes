import { useState } from "react";
import { User, Mail, Calendar, Settings, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dummyMeetings } from "../data/dummyData";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    username: "priya_s",
    joinDate: "January 2024"
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Profile</h1>
          <p className="text-xl text-muted-foreground">
            Manage your account settings and view your meeting history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 slide-up">
              <div className="text-center mb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-xl ocean-gradient text-white">
                    {profileData.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold text-foreground">{profileData.name}</h2>
                <p className="text-muted-foreground">{profileData.email}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      name="username"
                      value={profileData.username}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Member Since
                  </label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      value={profileData.joinDate}
                      disabled
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {isEditing ? (
                  <div className="flex space-x-3">
                    <Button onClick={handleSave} className="flex-1 btn-ocean">
                      Save Changes
                    </Button>
                    <Button 
                      onClick={() => setIsEditing(false)} 
                      variant="outline" 
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={() => setIsEditing(true)} 
                    className="w-full btn-glass"
                  >
                    <Settings size={18} className="mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Meeting History */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 slide-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">Meeting History</h2>
                <div className="text-sm text-muted-foreground">
                  {dummyMeetings.length} total meetings
                </div>
              </div>

              <div className="space-y-4">
                {dummyMeetings.map((meeting, index) => (
                  <div 
                    key={meeting.id} 
                    className="border border-border/30 rounded-lg p-4 smooth-hover hover:bg-muted/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{meeting.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{meeting.date}</span>
                          <span>{meeting.time}</span>
                          <span>{meeting.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          <FileText size={14} className="mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Download size={14} className="mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {dummyMeetings.length === 0 && (
                <div className="text-center py-12">
                  <FileText size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No meetings yet</h3>
                  <p className="text-muted-foreground">
                    Upload your first meeting to see it here.
                  </p>
                </div>
              )}
            </div>

            {/* Account Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="glass-card p-6 text-center slide-up" style={{ animationDelay: "300ms" }}>
                <div className="text-2xl font-bold text-primary mb-1">{dummyMeetings.length}</div>
                <div className="text-sm text-muted-foreground">Total Meetings</div>
              </div>
              <div className="glass-card p-6 text-center slide-up" style={{ animationDelay: "400ms" }}>
                <div className="text-2xl font-bold text-primary mb-1">
                  {dummyMeetings.reduce((acc, m) => acc + m.tasks.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Action Items</div>
              </div>
              <div className="glass-card p-6 text-center slide-up" style={{ animationDelay: "500ms" }}>
                <div className="text-2xl font-bold text-primary mb-1">
                  {dummyMeetings.reduce((acc, m) => acc + m.participants, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Participants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
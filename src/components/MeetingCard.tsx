import { Calendar, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface MeetingCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  participants: number;
}

const MeetingCard = ({ id, title, date, time, duration, participants }: MeetingCardProps) => {
  return (
    <Link to={`/meeting/${id}`} className="block">
      <div className="meeting-card group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary smooth-hover">
              {title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{time}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground mb-1">Duration</div>
            <div className="text-sm font-medium">{duration}</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="text-sm text-muted-foreground">
            {participants} participant{participants !== 1 ? "s" : ""}
          </div>
          <div className="flex items-center space-x-1 text-sm text-primary">
            <FileText size={14} />
            <span>View Report</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MeetingCard;
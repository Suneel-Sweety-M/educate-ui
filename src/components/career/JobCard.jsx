import { MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link to={`/career/${job.id}`} className="job-card">
      <div className="job-image-wrapper">
        <img src={job.image} alt="job" className="job-image" />
        <div className="job-image-overlay"></div>

        <div className="job-content-overlay">
          <h2 className="job-title-overlay">{job.title}</h2>
          <div className="job-meta-overlay">
            <span className="badge">
              <MapPin size={16} />
              {job.location}
            </span>
            <span className="badge">
              <Briefcase size={16} />
              {job.type.replace("-", " ")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;

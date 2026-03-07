import { Project } from "../../constants/projects";
import {
  colors,
  spacing,
  typography,
  shadows,
  borderRadius,
} from "../../constants/colors";

interface GalleryCardProps {
  project: Project;
  onView?: (project: Project) => void;
}

const GalleryCard = ({ project, onView }: GalleryCardProps) => {
  return (
    <div
      style={{
        borderRadius: borderRadius.lg,
        overflow: "hidden",
        boxShadow: shadows.md,
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = shadows.lg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = shadows.md;
      }}
      onClick={() => onView && onView(project)}
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          backgroundColor: colors.gray.light,
          paddingBottom: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={project.image}
          alt={project.name}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.transform = "scale(1)";
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(30, 58, 138, 0.7)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: spacing[2],
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              color: colors.text.light,
            }}
          >
            👁️
          </div>
          <p
            style={{
              color: colors.text.light,
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
            }}
          >
            View Project
          </p>
        </div>

        {/* Category Badge */}
        <div
          style={{
            position: "absolute",
            top: spacing[3],
            left: spacing[3],
            backgroundColor: colors.accent.orange,
            color: colors.text.light,
            padding: `${spacing[1]} ${spacing[2]}`,
            borderRadius: borderRadius.md,
            fontSize: typography.fontSize.xs,
            fontWeight: typography.fontWeight.semibold,
          }}
        >
          {project.type.toUpperCase()}
        </div>
      </div>

      {/* Info Section */}
      <div
        style={{
          padding: spacing[4],
          backgroundColor: colors.background.primary,
        }}
      >
        <h3
          style={{
            fontSize: typography.fontSize.lg,
            fontFamily: typography.fontFamily.heading,
            fontWeight: typography.fontWeight.bold,
            color: colors.text.primary,
            margin: 0,
            marginBottom: spacing[1],
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: typography.fontSize.sm,
            color: colors.text.secondary,
            margin: 0,
            marginBottom: spacing[2],
          }}
        >
          📍 {project.location}
        </p>
        {project.completionDate && (
          <div
            style={{
              fontSize: typography.fontSize.xs,
              color: colors.text.secondary,
            }}
          >
            📅 {project.completionDate}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;



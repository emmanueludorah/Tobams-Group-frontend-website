interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <div className={`section ${className}`}>
      {children}
    </div>
  );
}

export default function SectionHeader({ title, subtitle }) {
    return (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary-lightest mb-2">{title}</h2>
        <p className="text-lg text-text-secondary">{subtitle}</p>
      </div>
    )
  }
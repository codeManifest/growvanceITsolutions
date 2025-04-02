import SectionHeader from '../components/SectionHeader'
import TeamCard from '../components/TeamCard'

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of industry experience.',
    img: '/src/assets/team-members/alex.jpg'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'CTO',
    bio: 'Tech innovator specializing in scalable solutions.',
    img: '/src/assets/team-members/sarah.jpg'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Lead Designer',
    bio: 'Creativity meets functionality in every design.',
    img: '/src/assets/team-members/michael.jpg'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    bio: 'Strategist with a passion for brand storytelling.',
    img: '/src/assets/team-members/emily.jpg'
  }
]

export default function Our_Teams_Page() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Team" 
          subtitle="Meet the talented people behind our success" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </main>
  )
}
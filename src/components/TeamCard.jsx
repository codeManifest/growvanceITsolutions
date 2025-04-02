export default function TeamCard({ member }) {
    return (
      <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={member.img} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-darkest to-transparent opacity-70"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary-lightest mb-1">{member.name}</h3>
          <span className="block text-primary-light font-medium text-sm mb-3">{member.role}</span>
          <p className="text-text-secondary text-sm mb-4">{member.bio}</p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-text-primary transition-all hover:bg-primary-lightest hover:text-primary-darkest hover:-translate-y-1">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-text-primary transition-all hover:bg-primary-lightest hover:text-primary-darkest hover:-translate-y-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-text-primary transition-all hover:bg-primary-lightest hover:text-primary-darkest hover:-translate-y-1">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
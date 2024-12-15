interface SupportCardProps {
    title: string;
    description: string;
    icon: string;
    link: string;
    linkText: string;
    external?: boolean;
}

export function SupportCard({ 
    title, 
    description, 
    icon, 
    link, 
    linkText, 
    external 
}: SupportCardProps) {
    return (
        <a 
            href={link} 
            className="group relative"
            {...(external && {
                target: "_blank",
                rel: "noopener noreferrer"
            })}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/60 to-primary-600/60 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-300" />
            <div className="relative p-8 bg-white dark:bg-gray-800/90 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/10 dark:border-gray-700/50 h-full">
                <div className="mb-4 text-primary-500 group-hover:scale-110 transition-transform duration-300 w-fit">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={icon}
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {description}
                </p>
                <div className="text-primary-500 group-hover:translate-x-2 transition-transform duration-300 flex items-center mt-auto">
                    <span className="text-sm font-semibold">{linkText}</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
} 
"use client"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from './ThemeProvider'

// Add these custom solid icon components
function TwitterSolid(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

function GithubSolid(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    )
}

function YoutubeSolid(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    )
}

const SOCIAL_LINKS = [
    { icon: TwitterSolid, href: "https://twitter.com/notnicto", label: "Twitter" },
    { icon: GithubSolid, href: "https://github.com/notnicto", label: "GitHub" },
    { icon: DiscordIcon, href: "https://discord.gg/mYxjckhRNH", label: "Discord" },
    { icon: CurseForgeIcon, href: "https://www.curseforge.com/members/notnicto", label: "CurseForge" },
    { icon: YoutubeSolid, href: "https://www.youtube.com/@notnicto", label: "YouTube" },
]

// Custom Discord Icon as it's not available in lucide-react
function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    )
}

// Custom CurseForge Icon
function CurseForgeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 100 53.5" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M0 6.9082l27.9532.0756L26.269 0h73.7449l-.0164 8.1433C87.5 10.6348 78.6726 16.775 74.825 36.34H72.046l-1.5815 4.359h2.3079l3.9906 12.8087H37.961l3.9184-12.8086h2.325l-1.6467-4.359h-2.7642l-5.1516-13.7535C13.5203 21.3437 2.6748 16.9042 0 6.9082zM58.6772 39.062c-3.082-5.6216-5.1058-1.197-11.4454-6.9496-2.4727-2.2436-3.4588-8.8199 2.097-10.8301-2.5255 5.5749 4.0297 7.8558 5.5898 4.6685.709-1.4486 1.6039-4.1204-.9798-5.9518-1.392-.9867-1.9281-3.9125-.7364-5.5388.3837 1.2093 1.5938 2.5013 3.916 1.5411-4.9192-8.1404 2.934-10.9457 6.7104-10.5817-3.9686.441-6.025 3.977-4.2196 7.8269 1.15 2.452 2.9006 3.6589 3.4097 5.6657-1.6952.1263-2.1852.9065-2.1495 2.362.0268 1.0895 2.5496 2.6646 2.9494-.4456 1.175 2.4245-.2407 3.8496-1.0129 4.9984-1.7824 2.6515-.1036 5.4107 2.1097 3.3067.9547-.9074 1.6155-2.5812.4048-5.318 2.229 1.776 4.5057 6.5447.9079 10.677-1.756 2.017-6.9514 1.391-7.551 4.5693z"
            />
        </svg>
    )
}

export default function Footer() {
    const { theme } = useTheme()

    return (
        <footer className="bg-background border-t">
            {/* Social Links - Keep as <a> tags since they're external */}
            <div className="container mx-auto py-8 flex justify-center space-x-6">
                {SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <social.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border">
                <div className="container mx-auto py-4 px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        {/* Left - Copyright */}
                        <div className="flex items-center gap-2">
                            <div className="relative w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]">
                                <Image
                                    src="/logo.png"
                                    alt="nicverse Logo"
                                    fill
                                    sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, 32px"
                                    className="object-contain"
                                />
                            </div>
                            <span>© {new Date().getFullYear()} Darkverse LLC </span>
                        </div>

                        {/* Center - Links - Use Next.js Link for internal navigation */}
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <Link
                                href="/terms"
                                className="hover:text-foreground transition-colors"
                            >
                                Terms
                            </Link>
                            <Link
                                href="/privacy"
                                className="hover:text-foreground transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            {/* <Link 
                                href="/impressum" 
                                className="hover:text-foreground transition-colors"
                            >
                                Impressum
                            </Link> */}
                            <Link
                                href="/support"
                                className="hover:text-foreground transition-colors"
                            >
                                Support
                            </Link>
                        </div>

                        {/* Right - Disclaimer */}
                        <div className="text-center md:text-right text-muted-foreground text-xs">
                            Not affiliated with Mojang or Microsoft
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


import { ExternalLink } from "lucide-react"

const universeSites = [
  { label: "AURALIS", href: "https://auralis-eternal-light.lovable.app/" },
  { label: "EDU", href: "https://edu-eternal-dominion-universe.vercel.app" },
  { label: "E16 Portal", href: "https://e16super.netlify.app/" },
  { label: "Eureka Space", href: "https://eurekaspace.netlify.app/" },
  { label: "Layla Land", href: "https://laylaland.netlify.app/" },
  { label: "Game of Mina", href: "https://game-of-mina.netlify.app/" },
  { label: "Orbital Eternity", href: "https://orbital-eternity.netlify.app/" },
  { label: "Genesis Vault", href: "https://note.com/gensnotes" },
]

const auralisMembers = [
  { label: "Kate Patton", href: "https://katepatton.lovable.app" },
  { label: "Lillie Ardent", href: "https://lillieardentsuper.lovable.app" },
  { label: "Ninny Offenbach", href: "https://ninnyoffenbach.lovable.app" },
  { label: "Kate Claudia", href: "https://kate1st.netlify.app/" },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-edu-border bg-edu-bg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-edu-text">Iris Worlds</p>
            <p className="text-xs leading-relaxed text-edu-muted">
              E16連星系の人類史と世界観を辿る百科プロジェクト
            </p>
          </div>

          {/* Universe Sites */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a855f7]">
              Universe Sites
            </p>
            <ul className="space-y-1.5">
              {universeSites.map((site) => (
                <li key={site.href}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs text-edu-muted transition-colors hover:text-[#a855f7]"
                  >
                    {site.label}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AURALIS Members */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a855f7]">
              AURALIS Members
            </p>
            <ul className="space-y-1.5">
              {auralisMembers.map((member) => (
                <li key={member.href}>
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs text-edu-muted transition-colors hover:text-[#a855f7]"
                  >
                    {member.label}
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-edu-border pt-6">
          <p className="text-center text-xs text-edu-muted">
            &copy; {new Date().getFullYear()} Iris Worlds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

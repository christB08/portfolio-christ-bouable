import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 font-bold">Mon Portfolio</div>
          <nav className="flex items-center gap-6 text-sm ml-auto">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              À propos
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projets
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Bienvenue sur mon Portfolio</h1>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Spécialiste en infrastructure réseau et développement web
            </p>
            <div className="mt-6 flex gap-4">
              <Button asChild>
                <Link href="#projects">Voir mes projets</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos</h2>
              <p className="mt-4 text-muted-foreground">
                Je suis un professionnel spécialisé dans les infrastructures réseau et le développement web. Avec une
                solide expérience dans la conception et la maintenance de réseaux, je combine ces compétences avec ma
                passion pour le développement web.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Mes liens</h3>
              <div className="grid gap-3">
                <Link
                  href="https://github.com/christb08"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/christ-bouable"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
                <Link
                  href="https://email-finder-web.netlify.app"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Mon site web</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-10">
              Mes Projets
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Infrastructure réseau"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Infrastructure Réseau</h3>
                    <p className="text-muted-foreground mb-4">
                      Conception et mise en place d'une infrastructure réseau sécurisée pour une entreprise de taille
                      moyenne.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">Voir les détails</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Application Web"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Application Web</h3>
                    <p className="text-muted-foreground mb-4">
                      Développement d'une application web responsive avec React et Next.js pour la gestion de projets.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">Voir les détails</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Sécurité Réseau"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sécurité Réseau</h3>
                    <p className="text-muted-foreground mb-4">
                      Mise en place d'une solution de sécurité réseau complète incluant pare-feu, VPN et surveillance.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">Voir les détails</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Me Contacter</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Vous avez un projet ou une question ? N'hésitez pas à me contacter.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5" />
                <Link href="mailto:cbouable05@gmail.com" className="hover:underline">
                  cbouable05@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <Link href="tel:+33623491255" className="hover:underline">
                  +33 6 23 49 12 55
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

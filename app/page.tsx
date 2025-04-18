import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Mail, Linkedin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 font-bold">Christ Bouablé</div>
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
                  href="https://email-finder-web.netlify.app/"
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
              <Card className="flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image src="/infrastructure-reseau.png" alt="Infrastructure réseau" fill className="object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Infrastructure Réseau</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      Concevoir et déployer une infrastructure réseau sécurisée et hautement disponible reliant les
                      différents sites d'EcoDeli, incluant la segmentation en VLAN, la mise en place de VPN, de
                      pare-feux OPNSense, d'outils de supervision et d'un cœur de réseau interconnecté par RIP v2 avec
                      redondance.
                    </p>
                    <Button variant="outline" size="sm" asChild className="mt-auto self-start">
                      <Link href="#">Voir les détails</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Application Web"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Application Web</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      Développement d'une application web responsive avec React et Next.js pour la gestion de projets.
                    </p>
                    <Button variant="outline" size="sm" asChild className="mt-auto self-start">
                      <Link href="#">Voir les détails</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image src="/securite-reseau.png" alt="Sécurité Réseau" fill className="object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Sécurité Réseau</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      Créer et configurer deux sites interconnectés par un tunnel VPN IPsec site-à-site via des
                      firewalls Pfsense, avec segmentation en LAN et DMZ, application stricte de règles de filtrage
                      (deny all), et mise en place de la communication inter-sites selon des règles précises de
                      connectivité entre les segments.
                    </p>
                    <Button variant="outline" size="sm" asChild className="mt-auto self-start">
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
                <Link href="mailto:votre-email@example.com" className="hover:underline">
                  votre-email@example.com
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="h-5 w-5" />
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
            © {new Date().getFullYear()} Christ Bouablé. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">+33 6 23 49 12 55</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

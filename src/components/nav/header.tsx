import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  {
    label: "Sobre",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Histórico",
        description: "Conheça a história do Bento+20.",
      },
      {
        href: "#",
        label: "Diretoria",
        description: "Veja quem faz parte da diretoria.",
      },
      {
        href: "#",
        label: "Conselheiros",
        description: "Conheça os conselheiros.",
      },
      {
        href: "#",
        label: "Tribuna do B+20",
        description: "Leia a Tribuna do B+20.",
      },
      {
        href: "#",
        label: "Documentos",
        description: "Acesse documentos importantes.",
      },
    ],
  },
  {
    label: "Câmaras Técnicas",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Cidadania",
        description: "Informações sobre a câmara de Cidadania.",
      },
      {
        href: "#",
        label: "Educação",
        description: "Informações sobre a câmara de Educação.",
      },
      {
        href: "#",
        label: "Comércio",
        description: "Informações sobre a câmara de Comércio.",
      },
      {
        href: "#",
        label: "Desenvolvimento Rural",
        description: "Informações sobre a câmara de Desenvolvimento Rural.",
      },
      {
        href: "#",
        label: "Indústria",
        description: "Informações sobre a câmara de Indústria.",
      },
      {
        href: "#",
        label: "Inovação",
        description: "Informações sobre a câmara de Inovação.",
      },
      {
        href: "#",
        label: "Meio Ambiente",
        description: "Informações sobre a câmara de Meio Ambiente.",
      },
      {
        href: "#",
        label: "Saúde",
        description: "Informações sobre a câmara de Saúde.",
      },
      {
        href: "#",
        label: "Serviços",
        description: "Informações sobre a câmara de Serviços.",
      },
      {
        href: "#",
        label: "Segurança",
        description: "Informações sobre a câmara de Segurança.",
      },
      {
        href: "#",
        label: "Turismo e Cultura",
        description: "Informações sobre a câmara de Turismo e Cultura.",
      },
      {
        href: "#",
        label: "Urbanismo",
        description: "Informações sobre a câmara de Urbanismo.",
      },
    ],
  },
  { href: "#", label: "Masterplan" },
  { href: "#", label: "Notícias" },
];

export function Header() {
  return (
    <header className="border-b px-4 md:px-6 bg-gradient-to-r from-emerald-500 via-emerald-400 to-sky-500">
      <div className="flex h-16 items-center">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                            {link.label}
                          </div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={link.href} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
                      )}
                      {/* Add separator between different types of items */}
                      {index < navigationLinks.length - 1 &&
                        // Show separator if:
                        // 1. One is submenu and one is simple link OR
                        // 2. Both are submenus but with different types
                        ((!link.submenu &&
                          navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu &&
                            link.type !== navigationLinks[index + 1].type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="bg-border -mx-1 my-1 h-px w-full"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="#">
              <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
            </a>
            {/* Navigation menu */}
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-white bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                          <ul
                            className={cn(
                              link.type === "description"
                                ? "min-w-64"
                                : "min-w-48"
                            )}
                          >
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {/* Display icon if present */}
                                  {link.type === "icon" && "icon" in item && (
                                    <div className="flex items-center gap-2">
                                      {item.icon === "BookOpenIcon" && (
                                        <BookOpenIcon
                                          size={16}
                                          className="text-foreground opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "LifeBuoyIcon" && (
                                        <LifeBuoyIcon
                                          size={16}
                                          className="text-foreground opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "InfoIcon" && (
                                        <InfoIcon
                                          size={16}
                                          className="text-foreground opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      <span>{item.label}</span>
                                    </div>
                                  )}

                                  {/* Display label with description if present */}
                                  {link.type === "description" &&
                                  "description" in item ? (
                                    <div className="space-y-1">
                                      <div className="font-medium">
                                        {item.label}
                                      </div>
                                      <p className="text-muted-foreground line-clamp-2 text-xs">
                                        {item.description}
                                      </p>
                                    </div>
                                  ) : (
                                    // Display simple label if not icon or description type
                                    !link.type ||
                                    (link.type !== "icon" &&
                                      link.type !== "description" && (
                                        <span>{item.label}</span>
                                      ))
                                  )}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className="text-white hover:text-primary py-1.5 font-medium"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
